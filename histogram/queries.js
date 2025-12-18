var TESTER = document.getElementById('tester');
var x1 = [];

for (let i = 0; i < responses.length; i++) {
  	x1[i] = responses[i].score;
  	if(x1[i] == 1.0){
		x1[i] = 0.999999;
	}	
}

var trace1 = {
  x: x1, 
  xbins: {
    end: 1.000, 
    size: 0.02000, 
    start: 0.0
  },
  type: "histogram",
};

var data = [trace1];
Plotly.newPlot(TESTER, data);

document.getElementById("query_button").addEventListener("click", myFunction);
document.getElementById("recolor_button").addEventListener("click", recolor);
let input_box = document.getElementById("parameter");
let num_start_box = document.getElementById("num-min");
let num_step_box = document.getElementById("num-step");
let num_end_box = document.getElementById("num-max");

function evaluate_response(query, entry) {
	let cleaned_entry = entry.replaceAll("\\", "\\\\").replaceAll("\"", "\\\"");
    let script = "let entry = \""+ cleaned_entry + "\"; " + query ;
	let to_eval = `"use strict"; ${script};`;
	let result = eval?.(to_eval);
	return result;
}

function query_on_seq(query, seq) {
  let entry = responses[seq].entry;
  return evaluate_response(query, entry)
}

function to_percentage(num){
	basis = Math.round(num * 10000);
	integer_part = Math.floor(basis / 100).toString();
	decimal_part = (basis - 100 * integer_part).toString().padStart(2, '0');
	return integer_part + "." + decimal_part + "%";
}

function get_words(entry){
	return entry.replace(/[^0-9a-z ]/gi, '').toUpperCase().trim().replace(/\s{2,}/g, ' ').split(" ");
}

function get_acronym(entry){
	words = get_words(entry)
	result = ""
	for (i = 0; i < words.length; i++){
		result += words[i].at(0)
	}
	return result
}

function get_words_count(entry){
	return get_words(entry).length;
}

function get_group_name(name, num_start, num_step, num_end){
	if(name == "bool_true"){
		return "True";
	}else if(name == "bool_false"){
		return "False";
	}else if(name.includes("number_")){
		let num = Number(name.replace("number_", ""));
		num_start = Number(num_start);
		num_step = Number(num_step);
		num_end = Number(num_end);
		if(num < 0){
			return "result < " + num_start;
		}else if(num > Math.floor((num_end - num_start) / num_step)){
			return "result >= " + num_end;
		}else{
			return String(num_start + num_step * num) + " <= result < " + (num_start + num_step * (num+1));
		}
	}else{
		return name;
	}
}

let uppercase = "QAZWSXEDCRFVTGBYHNUJMIKLOP"; // certainly
let lowercase = "qazwsxedcrfvtgbyhnujmikolp";
let digits = "1234567890";
let letters = uppercase + lowercase;
let alnum = letters + digits;

// These variables are needed when recolor() is called.
// Their value will be set by myFunction() below.
let num_start = 0;
let num_step = 0;
let num_end = 0;
let idx_list = [];

function recolor() {
    let data = [];
    for(i = 0; i < idx_list.length; i++){
  		let idx = idx_list[i];
		let my_trace = traces[idx];
		let group_name = get_group_name(idx, num_start, num_step, num_end);
  		let group_color = document.getElementById("group_" + idx).value;
		let new_trace = {
  			x: my_trace, 
			name: group_name,
  			xbins: {
  			  end: 1.000, 
  			  size: 0.02000, 
  			  start: 0.0
  			},
  			type: "histogram",
			marker: {
				color: group_color,
			},
  		};
  		data.push(new_trace);
	}
    let layout = {barmode: "stack"};
    Plotly.newPlot(TESTER, data, layout);
}

let traces = {};
let death_count = {};
let safe_count = {};
let prize_count = {};

function myFunction() {
  let query = input_box.value;
  traces = {};
  death_count = {};
  safe_count = {};
  prize_count = {};
  idx_list = [];
  num_start = num_start_box.value;
  num_step = num_step_box.value;
  num_end = num_end_box.value;
  for (var i = 0; i < responses.length; i++){
	category = query_on_seq(query, i);
	responses[i].category = category;
	group_key = "";
	if (typeof category == "number") {
		let group_index = 0;
		if(category < num_start){
			group_index = -1;
		} else if (category >= num_end){
			group_index = Math.floor((num_end - num_start) / num_step) + 1;
		} else {
			group_index = Math.floor((category - num_start) / num_step);
		}
		group_key = "number_" + group_index;
	} else if (typeof category == "boolean") {
		group_key = "bool_" + category;
	} else {
		group_key = category;
	}
	if( ! Object.keys(traces).includes(group_key)){
		traces[group_key] = [];
		death_count[group_key] = 0;
		safe_count[group_key] = 0;
		prize_count[group_key] = 0;
	}
	traces[group_key].push(responses[i].score);
	if(responses[i].rank <= prize_rank){
		prize_count[group_key] += 1;
	}else if(responses[i].rank <= safe_rank){
		safe_count[group_key] += 1;
	}else{
		death_count[group_key] += 1;
	}
  }
  let data = [];
  let table_body = document.getElementById("categories");
  table_body.textContent = "";
  let candidates = ["bool_true", "bool_false"];
  let number_end_group = Math.floor((num_end - num_start) / num_step) + 1;
  for(i = -1; i <= number_end_group; i++){
	candidates.push("number_" + i);
  }
  let key_sorted = Object.keys(traces).toSorted((a, b) => traces[b].length - traces[a].length);
  for(i = 0; i < key_sorted.length; i++){
  	if(! candidates.includes(key_sorted[i])){
		candidates.push(key_sorted[i]);
	}
  }
  let bar_r = 69;
  let bar_g = 78;
  let bar_b = 239;
  for(i = 0; i < candidates.length; i++){
  	idx = candidates[i];
  	if(Object.keys(traces).includes(idx)){
		idx_list.push(idx);
		let bar_color = "#" + (bar_r * 65536 + bar_g * 256 + bar_b).toString(16).padStart(6, '0');
		let my_trace = traces[idx];
		let group_name = get_group_name(idx, num_start, num_step, num_end);
  		let new_trace = {
  			x: my_trace, 
			name: group_name,
  			xbins: {
  			  end: 1.000, 
  			  size: 0.02000, 
  			  start: 0.0
  			},
  			type: "histogram",
			marker: {
				color: bar_color,
			},
  		};
  		data.push(new_trace);
		// Add a row to the table
		let total_count = prize_count[idx] + safe_count[idx] + death_count[idx];
		let total_score = traces[idx].reduce((a,b)=>a+b);
		let table_row = document.createElement("tr");
		table_body.append(table_row);
		let name_element = document.createElement("th");
		name_element.appendChild(document.createTextNode(group_name));
		let count_element = document.createElement("td");
		count_element.appendChild(document.createTextNode(total_count));
		count_element.setAttribute("class", "gen-info");
		let score_element = document.createElement("td");
		score_element.appendChild(document.createTextNode(to_percentage(total_score / total_count)));
		score_element.setAttribute("class", "gen-info");
		let die_ratio_element = document.createElement("td");
		die_ratio_element.appendChild(document.createTextNode(to_percentage(death_count[idx] / total_count)));
		die_ratio_element.setAttribute("class", "death");
		let safe_ratio_element = document.createElement("td");
		safe_ratio_element.appendChild(document.createTextNode(to_percentage(safe_count[idx] / total_count)));
		safe_ratio_element.setAttribute("class", "safe");
		let prize_ratio_element = document.createElement("td");
		prize_ratio_element.appendChild(document.createTextNode(to_percentage(prize_count[idx] / total_count)));
		prize_ratio_element.setAttribute("class", "prize");
		let die_count_element = document.createElement("td");
		die_count_element.appendChild(document.createTextNode(death_count[idx]));
		die_count_element.setAttribute("class", "death");
		let safe_count_element = document.createElement("td");
		safe_count_element.appendChild(document.createTextNode(safe_count[idx]));
		safe_count_element.setAttribute("class", "safe");
		let prize_count_element = document.createElement("td");
		prize_count_element.appendChild(document.createTextNode(prize_count[idx]));
		prize_count_element.setAttribute("class", "prize");
		let color_element = document.createElement("td");
		let color_input_element = document.createElement("input");
		color_input_element.setAttribute("id", "group_" + idx);
		color_input_element.setAttribute("type", "color");
		color_input_element.value = bar_color;
		color_element.appendChild(color_input_element);
		table_row.append(name_element, count_element, score_element,
						 die_count_element, safe_count_element, prize_count_element,
		                 die_ratio_element, safe_ratio_element, prize_ratio_element,
						 color_element);
		// Round robin to next colot
		bar_r = (bar_r + 195) % 256;
		bar_g = (bar_g + 157) % 256;
		bar_b = (bar_b + 113) % 256;
    }
  }
  let layout = {barmode: "stack"};
  Plotly.newPlot(TESTER, data, layout);
}

