alert(`Hello! This is a tool that helps you make EWOWlumni predictions \
that is based purely on response quality.
 
How to use: 
It's simple: You'll be presented with a contestant's EWOW responses \
and their current amount of lives. Judge how likely the contestant \
will make it into alumni, and answer by clicking the button \
labeled 0-10 below. Then you'll be presented with another contestant's \
data. Repeat until you think you've seen all possible EWOWlumni. \
Then, click "I think I've seen everyone that can alumni", then \
your prediction table wil be generated automatically! 

You can choose the number of EWOWlumnis you think there will be. \
The default is 100, but you can choose any number between 70 and 125.

The order of the contestants presented is by their performances so far, \
from best to worst (with some randomization). You'll see some 1 or 2- \
livers sprinkled here and there. I put them to prevent fatigue from \
seeing only good responses.

Your prediction is the contestants you gave the highest number \
(rating) to. Ties are broken by the amount of lives first, then \
by sum of relative rank. You can't see those in the prediction \
table though; they are sorted by amount of lives first, then alphabetically, just like in losered's prediction table.

If you wish to do it in multiple sessions, you can click "Save my \
progress to clipboard" to save your progress, and when you go to \
this page again, click "Load my saved progress", paste the text \
you recieved when saving, and you can start from where you've stopped. \
The number of EWOWlumni isn't saved though, you will have to save \
it by yourself. It's just a number, right?

Happy predicting! 
`);

let contestants = contestants_master.filter((c) => (c.get_current_lives() > 0));
let max_lives = 10;

let response_cell = [];

for (let i = 1; i <= total_eps; i++){
	response_cell[i] = document.getElementById("response" + i);
}

let lives_cell = document.getElementById("lives");
let counter = document.getElementById("counter");

let given_counters = [];
let counter_cell = [];
for (let i = 0; i <= 10; i++){
	document.getElementById(i + "_button").addEventListener("click", function () {place_bet(i)});
	counter_cell[i] = document.getElementById(i + "_given");
	given_counters[i] = 0;
}

let lives_counters = [];
let lives_total = [];
let lives_counters_cell = [];
let lives_total_cell = [];
for (let i = 1; i <= max_lives; i++){
	lives_counters_cell[i] = document.getElementById(i + "_assessed");
	lives_total_cell[i] = document.getElementById(i + "_total");
	lives_counters[i] = 0;
	lives_total[i] = 0;
}

function update_tables(){
	for (let i = 1; i <= max_lives; i++){
		lives_counters_cell[i].innerText = lives_counters[i];
		lives_total_cell[i].innerText = lives_total[i];
	}
	for (let i = 0; i <= 10; i++){
		counter_cell[i].innerText = given_counters[i];
	}
}

document.getElementById("end_button").addEventListener("click", get_result);
document.getElementById("save_button").addEventListener("click", save_to_clipboard);
document.getElementById("load_button").addEventListener("click", load_from_clipboard);

let candidates = [];

/*
seed determination (the larger the seed, the more it will get put in front):
	(5, 6, 7)-lifers > (most 4, some 3, a little 2)-lifers
*/
for(let i = 0; i < contestants.length; i++){
	if(contestants[i] != undefined){
		let c = contestants[i];
		relative_ranks = [];
		rr_contestants = [0, 16607, 8623, 8062, 5626, 4016, 2767, 2152, 1479, 1095, 830, 600];
		rr_sum = 0
		for (let ep = 1; ep <= total_eps; ep++){
			relative_ranks[ep - 1] = 1 - (c["rank" + ep] - 1) / (rr_contestants[ep] - 1);
			rr_sum += relative_ranks[ep - 1]
		}
		relative_ranks.sort((a, b) => b - a); // sort in descending order
		if (c.get_current_lives() >= 4){
			c.seedbase = 4300 + Math.max(0, (rr_sum - total_eps + 2) * 250 * 5 / total_eps);
		}else{
			seed_1 = c.get_current_lives() * 1000 // by lifes
			seed_2 = 4300 + Math.min(relative_ranks[0] * 100 + relative_ranks[1] * 100 + relative_ranks[2] * 100 - 290, 0) * 50;
			/*
			if(relative_ranks.at(-2) < 0){ // don't consider it if the contestant dnp'd at least twice
				seed_2 = 0
			}
			*/
			seed_3 = 0
			if (c.get_current_lives() >= 3){
				seed_3 = 4000 + (rr_sum - total_eps + 3) * 1200 / total_eps;
			}
			seed_4 = 0 // added to avoid fatigue when assessing high-placement players
			if(Math.random() < 0.02){
				seed_4 = 4000 + Math.random() * 700
			}
			c.seedbase = Math.max(seed_1, seed_2, seed_3, seed_4);
		}
		c.seed = c.seedbase + 150 * Math.random();
		candidates.push(i);
		lives_total[c.get_current_lives()]++;
	}
}

candidates.sort((a, b) => contestants[b].seed - contestants[a].seed);

let current_idx = 0;

function get_candidate(){
	let new_candidate = contestants[candidates[current_idx]];
	if(new_candidate == undefined){
		get_result();
	}else{
		for(let i = 1; i <= total_eps; i++){
			response_cell[i].innerText = new_candidate["response" + i];
		}
		lives_cell.innerText = "This contestant have " + new_candidate.get_current_lives() + " live(s) currently.";
	}
	counter.innerText = current_idx + " contestants assessed";
}

function place_bet(bet){
	let c = contestants[candidates[current_idx]];
	c.chance = bet + 0.1 * c.get_current_lives() + 0.001 * c.rr_sum;
	given_counters[bet]++;
	lives_counters[c.get_current_lives()]++;
	update_tables();
	current_idx++;
	get_candidate();
}

function result_sort_key(a, b){
	let result = contestants[b].chance - contestants[a].chance;
	if(result == 0){
		result = contestants[b].get_current_lives() - contestants[a].get_current_lives();
		if(result == 0){
			result = contestants[b].rr_sum - contestants[a].rr_sum;
		}
	}
	return result;
}

function alumni_sort_key(a, b){
	let result = contestants[b].get_current_lives() - contestants[a].get_current_lives();
	if(result == 0){
		result = contestants[a].name.localeCompare(contestants[b].name, 'en', { sensitivity: 'base' });
	}
	return result;
}

function show_alumni_data(contestant_id){
	let cc = contestants[contestant_id];
	let text = "";
	text += "Contestant Name: " + cc.name + "\n";
	text += "Your Assessment: " + Math.floor(cc.chance) + "\n";
	text += "Current Lives: " + cc.get_current_lives() + "\n";
	text += "Sum of Relative Ranks: " + cc.rr_sum * 100.0 + "%\n";
	for(let i = 1; i <= total_eps; i++){
		text += "EWOW " + i + " Response: " + cc["response" + i] + "\n";
	}
	alert(text);
}

function get_result(){
	candidates.sort(result_sort_key);
	let alumni_count = document.getElementById("alumni_count").value;
	alumni = []
	for(let i = 0; i < alumni_count; i++){
		alumni.push(candidates[i]);
	}
	alumni.sort(alumni_sort_key)
	let result_table = document.getElementById("result");
	result_table.innerHTML = '';
	for(let r = 0; r < 16; r ++){
		let new_row = result_table.insertRow(-1);
		for(let c = 0; c < 8; c ++){
			let new_cell = new_row.insertCell(-1);
			if (r + c * 16 < alumni_count){
				let new_text = document.createTextNode(contestants[alumni[r + c * 16]].name);
				new_cell.appendChild(new_text);
				new_cell.style.backgroundColor = `var(--lives-${contestants[alumni[r + c * 16]].get_current_lives()})`
				new_cell.addEventListener("click", function () {show_alumni_data(alumni[r + c * 16])});
			} else {
				new_cell.style.backgroundColor = "#CCCCCC";
			}
		}
	}
	document.getElementById("result_text").innerText = "Here's your EWOWlumni prediction! Click on a contestant to see their performances and responses.";
}

function reset_all(){
	for (let i = 0; i <= 10; i++){
		given_counters[i] = 0;
	}
	for (let i = 1; i <= max_lives; i++){
		lives_counters[i] = 0;
		lives_total[i] = 0;
	}
	for(let i = 0; i < contestants.length; i++){
		if(contestants[i] != undefined){
			let c = contestants[i];
			c.chance = 0;
			lives_total[c.get_current_lives()]++;
		}
	}
	current_idx = 0;
	update_tables();
}

function save_to_clipboard(){
	let text = "";
	for(let i = 0; i < candidates.length; i++){
		if(i != 0){
			text += ";";
		}
		let c = contestants[candidates[i]];
		text += candidates[i] + "," + c.chance;
	}
	navigator.clipboard.writeText(text);
	alert("Text copied to clipboard! You might want to paste it to some text editor and save it.");
}

function load_from_string(my_str){
	// parse the string
	parts = my_str.split(";")
	if(parts.length != candidates.length){
		alert("Failed to parse the text; Nothing changed, you can safely continue.");
	}else{
		reset_all();
		candidates = [];
		let chances = [];
		let bets = [];
		for(let i = 0; i < parts.length; i++){
			let chunks = parts[i].split(",");
			let idx = Number(chunks[0]);
			let chance = Number(chunks[1]);
			let bet = Math.floor(chance);
			candidates.push(idx);
			chances.push(chance);
			bets.push(bet);
		}
		while(chances[current_idx] > 0){
			place_bet(bets[current_idx]);
		}
	}
}

function load_from_clipboard(){
	let my_str = window.prompt("Paste the text you get from 'Save Progress to Clipboard' here:");
	load_from_string(my_str);
}


update_tables();
get_candidate();


