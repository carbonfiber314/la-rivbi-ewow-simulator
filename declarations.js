
function get_part(parts, idx, is_number = false){
	if (parts[idx] == "###BLANK###" || parts[idx] == undefined){
		if (is_number){
			return 0;
		} else {
			return "";
		}
	} else {
		if (is_number){
			return Number(parts[idx]);
		} else {
			return parts[idx];
		}
	} 
}

let rr_contestants = [0, 16607, 8623, 8062, 5626, 4016, 2767, 2152, 1479, 1095, 830, 600, 452, 358, 278, 213];
let prize_ranks = [0, 830, 431, 403, 281, 201, 138, 108, 74, 55, 42, 30, 22, 18, 14, 11];
let safe_ranks = [0, 8470, 4397, 4111, 2869, 2048, 1411, 1098, 754, 558, 423, 306, 231, 183, 142, 109];
let total_eps = rr_contestants.length - 1;
let fields = [
	"uuid", "name", "subtitle", 
	"response1", "confessional1", "average1", "std_dev1", "vote_count1", "rank1", "lives1", 
	"response2", "confessional2", "average2", "std_dev2", "vote_count2", "rank2", "lives2", 
	"response3", "confessional3", "average3", "std_dev3", "vote_count3", "rank3", "lives3", 
	"response4", "confessional4", "average4", "std_dev4", "vote_count4", "rank4", "lives4", 
	"response5", "confessional5", "average5", "std_dev5", "vote_count5", "rank5", "lives5", 
	"response6", "confessional6", "average6", "std_dev6", "vote_count6", "rank6", "lives6", 
	"response7", "confessional7", "average7", "std_dev7", "vote_count7", "rank7", "lives7", 
	"response8", "confessional8", "average8", "std_dev8", "vote_count8", "rank8", "lives8", 
	"response9", "confessional9", "average9", "std_dev9", "vote_count9", "rank9", "lives9", 
	"response10", "confessional10", "average10", "std_dev10", "vote_count10", "rank10", "lives10", "entries10",
	"response11", "confessional11", "average11", "std_dev11", "vote_count11", "response_drp11", "average_drp11", "std_dev_drp11", "vote_count_drp11", "response_trp11", "average_trp11", "std_dev_trp11", "vote_count_trp11", "rank11", "lives11", "entries11",
	"response12", "confessional12", "average12", "std_dev12", "vote_count12", "response_drp12", "average_drp12", "std_dev_drp12", "vote_count_drp12", "response_trp12", "average_trp12", "std_dev_trp12", "vote_count_trp12", "rank12", "lives12", "entries12",
	"response13", "confessional13", "average13", "std_dev13", "vote_count13", "response_drp13", "average_drp13", "std_dev_drp13", "vote_count_drp13", "response_trp13", "average_trp13", "std_dev_trp13", "vote_count_trp13", "rank13", "lives13", "entries13",
	"response14", "confessional14", "average14", "std_dev14", "vote_count14", "response_drp14", "average_drp14", "std_dev_drp14", "vote_count_drp14", "response_trp14", "average_trp14", "std_dev_trp14", "vote_count_trp14", "rank14", "lives14", "entries14",
	"response15", "confessional15", "average15", "std_dev15", "vote_count15", "response_drp15", "average_drp15", "std_dev_drp15", "vote_count_drp15", "response_trp15", "average_trp15", "std_dev_trp15", "vote_count_trp15", "rank15", "lives15", "entries15",
];


class Contestant {
	constructor(str) {
		let parts = str.split('\t');
		for (let i = 0; i < fields.length; i++){
			if(fields[i].includes("v") || fields[i].includes("rank")){
				this[fields[i]] = get_part(parts, i, true);
			}else{
				this[fields[i]] = get_part(parts, i);
			}
		}
		this.chance = 0.0;
		this.seed = undefined;
		this.seedbase = undefined;
		let rr_sum = 0;
		let relative_ranks = [];
		for (let ep = 1; ep <= total_eps; ep++){
			this["rr" + ep] = 1 - (this["rank" + ep] - 1) / (rr_contestants[ep] - 1);
			if(this["rank" + ep] < rr_contestants[ep] + 1){ // the contestant dind't DNP this round
				relative_ranks[ep - 1] = 1 - (this["rank" + ep] - 1) / (rr_contestants[ep] - 1);
				rr_sum += relative_ranks[ep - 1]
			}
		}
		this.rr_sum = rr_sum;
	}

	get_current_lives(){
		return this["lives" + total_eps];
	}
}

let contestants_master = [];

