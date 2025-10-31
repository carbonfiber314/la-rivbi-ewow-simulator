

let contestants = contestants_master.filter(a => a);

let predictions = [];

function add_prediction(author, as_of, prediction){
	result = [];
	for (let i = 0; i < prediction.length; i++){
		let target = prediction[i];
		let candidates = contestants.filter((a) => a.name.startsWith(target));
		if (candidates.length == 0) {
			let candidates = contestants.filter((a) => a.uuid.startsWith(target));
			if (candidates.length == 0) {
				console.log("There aren't any contestant with name starting with " + target + "!");
			} else {
				result.push(candidates[0]);
			}
		} else if (candidates.length > 1) {
			console.log("There are " + candidates.length + " contestants with name starting with " + target + "!");
			for (let j = 0; j < candidates.length; j++){
				console.log(candidates[j]);
			}
		} else {
			result.push(candidates[0]);
		}
	}
	predictions.push([author, as_of, result]);
}


add_prediction("losered", "5B", ["4DJ","Purplegaze","scorb","sicto","Srim","Xylob","Yua","#1 s","Alternav","BubbleTii","Catw","Charito","Heronix","Ironn","italic","iTeo","Izzeee","J_d","956761d0-e8d6-4f5b-b0d3-72fb222c05bb","John D","JujuM","losered","milst","Onch","Owner of","PizzaS","RAMT","Raptarr","Ryan ST","ShadowF","Sparrowcat","StealthyS","tekh","whitecy","xXB","YoshiAw","~~~good","$Eev","ALITL","Amelia, A","ArnoobE","Azurite","cerese","cloverp","Cohaki","CringeCat","570f2536-86e6-4453-8280-c7d8e5f956e5","Daylune","Flare Dare","garf","Gman","goobrey","IMC","Juhm","leftl","MetaC","MineF","MoltenA","Moralit","namd","Nick Wh","notexi","oxii","PengiQ","PG2K","Rora_B","s83757","reremiau","Snoozingn","Tak A","taopy","tauttie","twpaz.","The Ilu","TieTie","TTGuy","X_Ry","<Px>","2 Laws","Adamanti","Alley%","chichi","Cosmeti","CrowB#","DogeB","363f7b55-13a6-4aa6-93fe-fb187ea835ff","Gizmote","Hazel C","Ixc","Julians","kitkaty","Koopa472","la r","LemonV","Maples","Meowi","Meptune","5696ca02-91dd-42ff-a8c2-bb5380e2b224","mrjellyf","Nerdy G","NorthEastB","Paintsp","Phant0","recc","Skippery45","Snowbled","Swims","Syro33","Thane","ThePinkB","Valeburge","Yonel","yoshik","aaronvx","avocadoe","cat cop","Darrest","Davoid","figgyc","LegendF","ShadowK","spooky.","thenamesh","Zettex","FishOnT","iRDM","Leopards","PlasmicT"]);

add_prediction("LemonVenom", "5B", ["4DJ","Purplegaze","scorb","sicto","Srim","Xylob","Yua","#1 s","Alternav","Catw","Ironn","italic","iTeo","J_d","John D","JujuM","losered","milster","Naslem","Onch","Owner of","RAMT","Stealthy","Twigg","whitec","xXB","Arnoob","Azurite","cerese","cloverp","Cohaki","CringeC","570f2536-86e6-4453-8280-c7d8e5f956e5","Deckardv","Gman","Juhm","Moralit","PaniniP","PengiQ","puzzlypug","Sanjay2","Snoozingn","Tak A","taopy","twpaz.","The Il","TieTie","Water Ch","Adamanti","Alley%","cashedc","Cosmeti","DatFatC","Jaki","Juliansl","Koopa4","KWX","LemonV","7149d1d9-d34e-4af9-aed5-992f90c4bbd6","Meowi","Mept","5696ca02-91dd-42ff-a8c2-bb5380e2b224","MrDell47","Nerdy G","noef","Paintspot","recc","Skippery45","sodiumhy","Syro33","Thane","tr_","Valeburger","Verigo","Yonel","eyB","figgyc","fryu","Graysand","GreenT","hydrogenc","Lolwut","Magnetty","Marisa L","MeLikeP","normalb","RyM","Sausiiie","spooky.","terminateds","thenamesh","Zettex","FishOnT","InteleonsI","iRDM","Jac4","Leopards","Nonexistential","PlasmicT","Wenyu"]);

add_prediction("aaronvx", "5B", ["4DJ","Purplegaze","scorb","sicto","Srim","Xylob","Yua","#1 s","#zac","Alternav","Blue Gelatin","Catw","Charito","Dawncy","Heronix","IceK","Ironn","italic","iTeo","J_d","956761d0-e8d6-4f5b-b0d3-72fb222c05bb","JujuM","losered","milster","Naslemi","Onch","Owner of","RAMT","Shardr","Sparrowc","StealthyS","Twiggy","whitec","xXB","Yume F","Algo.00","Arnoob","Azurite","cerese","cloverp","CringeC","570f2536-86e6-4453-8280-c7d8e5f956e5","Deckardv","Funo'","garf","Gman","gmo","IMC","Juhm","mazuat","MetaC","MoltenA","Moralit","notexi","PG2K","PsychoticS","Sanjay2","Snoozingn","Tak A","taopy","twpaz.","TieTie","TTGuy","X_Ry","<Px>","2 L","60mo","ACN","Adamanti","alexa.f","Algotis","Alley%","AnEp","chichi","ConvexP","CosmetiC","DatF","363f7b55-13a6-4aa6-93fe-fb187ea835ff","Gizmote","hyfin","Ixc","JayTee","Juliansl","kaisle","kitkatyj","Koopa4","Maplesk","Meowi","Mept","5696ca02-91dd-42ff-a8c2-bb5380e2b224","MrDell4","MysteriousGrimR","nlcd","noef","Paintsp","Phant0","recc","SinisterS","Swimsw","Thane","TheMightyMidge","tr_","Valeburger","Xes","Zaff","aaronvx","avocadoe","awepi","bfboh","Darrest","Davoid","elevatorz","figgyc","fryuaj","GreenTree","MedioL","spooky.","thenamesh","Truttle1","Zettex","96 L","BestKP","FishOnT","iRDM","Leopardsun","Nonexistential","PlasmicT","Trenerd"]);


add_prediction("Pink man", "6B",
[
"4DJ", "Purplegaze", "scorb", "Yuak", "#za", "Charito", "iTeo", "956761d0-e8d6-4f5b-b0d3-72fb222c05bb", "John D", "sicto", "Srim", "Twigg", "whitecyc", "Xylob", "#1 s", /*"#zac", */"$Ee", "BubbleTii", "Catw", "Cohaki",
"Cpink", "570f2536-86e6-4453-8280-c7d8e5f956e5", "Donut C", "GrayThe", "IceKeyH", "indoorf", "italic1", "J_d", "JujuM", "losered", "milster08", "namdoy", "Owner o", "PaniniP", "pfysche", "Pink m", "Sparrowcat", "MayUnderFlowers", "Water C", "X_R",
"xXB", "YoshiA", "cloverp", "Deckardv", "Juhm", "Juliansl", "Lyrical T", "5696ca02-91dd-42ff-a8c2-bb5380e2b224", "MineF", "Naslemi", "nlcd", "One N", "oxii", "Paints", "PengiQ", "PG2K", "recc", "Snoozingn", "stone b", "Talinlol",
"taopy", "ThatPerson", "TieTie", "TrainGo", "TTGu", "2 L", "aaronvx","Alley%", "Brandy?", "chichi", "DerM", "363f7b55-13a6-4aa6-93fe-fb187ea835ff", "GreenieG", "GreenT", "Kaestra", "Koopa4", "7149d1d9-d34e-4af9-aed5-992f90c4bbd6", "NorthEastB", "RiccoB", "spooky.",
"Thane", "tr_", "Wilm", "Xes", "\"Dan.", "ACN", "cheezdoo", "Deficie", "FishO", "ilo ", "Meln", "MysteriousG", "ramen powder", "Strawburr", "terminateds", "Wildz", "96 L", "figgyc", "PlasmicT", "alexlion"
]);

add_prediction("hydrogencitrus", "7B",
[
"4DJ", "Purplegaze", "Xyloba", "956761d0-e8d6-4f5b-b0d3-72fb222c05bb", "Yuak", "scorb", "whitecy", "losered", "570f2536-86e6-4453-8280-c7d8e5f956e5", "namdoy",
"Twigg", "#za", "Srim", /*"Srim",*/ "ShadowF", "sicto", "John D", "X_R", "Snoozingn", "CringeC",
"ThatPerson", "#1 s", "Sparrowc", "italic177", "Arnoob", "Moralitea", "Yume F", "twpaz.", "milster08", "Catw",
"$Eev", "RAMT", "iTe", "Cohaki", "Heronix", "xXB", "Cube4", "Gman", "YoshiAw", "TieTie",
"ecf2bba0-4cc1-4efd-9403-a1152050c32f", "aaronv", "5696ca02-91dd-42ff-a8c2-bb5380e2b224", "Juhm", "Juliansl", "Nerdy G", "Gizmote", "PengiQ", "cloverp", "TTGu",
"puzzlypugzl", "363f7b55-13a6-4aa6-93fe-fb187ea835ff", "Tak A", "Naslemi J", "cerese",  "smoov22", "9facbd1b-7f26-4f96-8076-2a48819627a1", "GreenT", "StealthyS", "IntersectingP", 
"hyfin", "MrDe", "ThePinkB", "EeveeL", "Verigo", "Hunter J", "LemonV", "Skippery", "stone bone", "normalb",
"Mept", "The Ilu", "taopy", "hamburgerhelp", "AnEpik", "FishO", "terminateds", "Zett", "BFBFan5", "spooky.",
"Niho", "Magnetty", "Alley%", "noef", "BOWLE", "7149d1d9-d34e-4af9-aed5-992f90c4bbd6", "7993b578-5696-44ad-a28a-dbc84aac5bef", "PriceTagF", "Leopards", "Zixi",
"girlbossed.", "Alternav", "SaddleB", "PlasmicT", "figgyc", "Wenyu", "hydrogenc", "minordill", "qoo", "96 L"
]);

add_prediction("iRDM", "7B",
[
"Xylob", "Snoozingn", "Purplegaze", "twpaz.", "TieT", "terminateds", "iRDM", "Owner o", "whitecyc", "losered",
"CringeC", "RAMT", "PlasmicT", "iTeo", "scorb", "John D", "Cohak", "Cpi", "Niho", "Koopa4",
"MrShr", "ThePinkB", "Unofficial S", "cerese", "sicto", "Catw", "Onch", "570f2536-86e6-4453-8280-c7d8e5f956e5", "#1 s", "Srim",
"Alley%", "xtr", "Zett", "Fred S", "thenamesh", "4DJ", "AnArt", "Jakiller", "Lyrical T", "PaniniP",
"normalb", "Reed", "WeirdK", "MeLikeP", "Ballam", "Graysan", "cashedcr", "Poop b", "SinisterS", "Meowi",
"Yuak", "JujuM", "Mept", "Twiggy", "RyM", "Norse C", "taopy", "Flasan", "Moralit", "Blue Gel",
"Ironnin", "Zixi", "96 L", "FishO", "figgyc", "StealthyS", "6d7b566c-ba48-4446-b5a3-d2a8552b8a69", "GreenT", "MetaCy", "Exasp",
"abug", "mrje", "namdoy", "DatF", "MrDell4", "X_R", "Lord of the", "Dawncy", "aaronv", "Hazel C",
"8feea67b-67f3-4a8a-8c07-e0001507665e", "xparty", "ArnoobE", "ultimate chiller", "cloverp", "Leopards", "#za", "nlcd", "DiamondSh", "RainbowK",
"GreenieG", "Orange Cary S", "eyB", "Paintsp", "qoo", "5696ca02-91dd-42ff-a8c2-bb5380e2b224", "oxii", "Juliansl", "\"Ky", "Weny"
]);

add_prediction("mazuat", "7B",
[
"#1 s", "4DJ", "96 L", "aaronv", "abugi", "AHumanI", "ALITL", "An Epic P", "AnEpik", "ArnoobE", "Azurite", "Blue Gela", "Brandy", "Catw", "cerese", "CloudySky",
"cloverp", "Cohaki", "ConvexP", "CringeC", "CrowB#", "Cube4", "Cygnus", "570f2536-86e6-4453-8280-c7d8e5f956e5", "DatFatC", "Deckardv", "363f7b55-13a6-4aa6-93fe-fb187ea835ff", "Evolt", "eyBH", "FishO", "fonda1515", "FROGL",
"Funo", "galactika", "geob", "Gizmote", "Gman", "gmo", "goobr", "GrayThe", "GreenieG", "GreenT", "HazelK", "HeartO", "Heronix", "HexaF", "horizontally spin", "IceK",
"iRDM", "italic177", "iTeo", "Ixc", "J_d", "956761d0-e8d6-4f5b-b0d3-72fb222c05bb", "John D", "Juhm", "JujuM", "Juliansl", "Kapco", "Koopa4", "la r", "lane", "LemonV", "Leopards",
"losered", "Lyrical T", "Maildr", "MarbleM", "mazuat", "Meowi", "Mercuri", "MetaC", "5696ca02-91dd-42ff-a8c2-bb5380e2b224", "MineFlex_B", "Moralitea", "MrDe", "Nerdy G", "Nihon", "Nindr", "nlcd",
"noef", "notex", "Onch", "One Ni", "OveCZ", "Paints", "PaniniP", "PengiQ", "PlasmicT", "PriceT", "Purplegaze", "Radio_", "RainbowK", "RAMT", "RetroCr", "Ryan ST",
"s.eptem", "scorb", "sicto", "SinisterS", "Slimb", "smoov2", "Snoozingn", "SooperH", "Sparrowc", "Srim", "StealthyS", "Suit Q", "taopy", "Tardist", "terminateds", "Tetrian22",
"twpaz.", "ThatSh", "The Ilu", "MayUnderFlowers", "thenamesh", "ThePinkB", "TieTie", "tr_", "Twiggy", "whitecyc", "X_Ry", "xXB", "Xylob", "YellowE", "YoshiA", "Yuakim"
]);

add_prediction("Catworld", "7B",
[
"#1 s", "#z", "$Ee", "4DJ", "aaronv", "ALITL", "Alternav", "ArnoobE", "Blue Gelatin", "Catw",
"cerese", "Charito", "CloudySkyes", "cloverp", "Cohaki", "CringeC", "Cygnus", "570f2536-86e6-4453-8280-c7d8e5f956e5", "Deckardv", "Dumb S",
"ElevenWordsOfWow", "Exhalexa", "FishOnT", "FROGL", "Funo'", "galactika", "garf", "GreenieG", "ecf2bba0-4cc1-4efd-9403-a1152050c32f", "hyfin",
"IceKeyH", "IntersectingP", "iRDM", "italic1", "iTeo", "J_d", "956761d0-e8d6-4f5b-b0d3-72fb222c05bb", "Jakiller", "John D", "Jooj",
"Juhm", "JujuM", "Kiwiyum", "Koopa4", "la r", "losered", "Lyrical T", "9facbd1b-7f26-4f96-8076-2a48819627a1", "mazuat", "Meowi",
"Mept", "5696ca02-91dd-42ff-a8c2-bb5380e2b224", "Mikl P", "milster08", "MineFlex_B", "MoonMa", "Moralitea", "namdoy", "Nerdy G", "nlcd",
"Onch", "Owner of the P", "oxii", "PaniniP", "Parallel Paper", "PengiQ", "pfysche", "Purplegaze", "RainbowK", "RAMT",
"Ryan ST", "s.ep", "scorb", "ShadowF", "reremiau", "sicto", "SinisterS", "smoov22", "Snoozingn", "Sparrowc",
"spooky.p", "Srim", "St4rr", "StealthyS", "Tak A", "twpaz.", "ThatPerson", "MayUnderFlowers", "ThePinkB", "TieTie", "TrainGoB", "Twiggy", "Twisted T", "Water Ch", "whitecyc", "Wilma", "X_Ry", "xXB", "Xyloba", "Yuakim"
]);

add_prediction("misch13vous", "8B",
[
"); D", "#1 s", "#za", "4DJ", "60mo", "aaronv", "ACN", "alexlion0", "Americatre", "amey", "Andym", "AnE", "Arnoo", "avocadoe", "Azurite",
"BananaF", "Bazinga_", "bladn", "Catw", "cerese", "chichi", "cloverp", "Cohaki", "Crafty7", "Crystal C",
"570f2536-86e6-4453-8280-c7d8e5f956e5", "DatF", "Deckardv", "363f7b55-13a6-4aa6-93fe-fb187ea835ff", "841f4227-afd8-4321-9404-f8a8d82e9e65", "figgyc", "FishOnT",
"fonda1", "Fred S", "fryu", "garf", "geob", "Gman", "goobr", "GreenTree",
"Hazel C", "HeartO", "iRDM", "italic1", "iTe", "Ixc", "956761d0-e8d6-4f5b-b0d3-72fb222c05bb", "Jakill",
"JCL K", "John D", "Josh /", "Juhm", "JujuM", "Julians", "JustAT",
"Koopa4", "kyushi", "la r", "LegendF", "Leopards", "losered", "Lpc", "Marisa L", "mazuat",
"MeLikeP", "Meowi", "5696ca02-91dd-42ff-a8c2-bb5380e2b224", "mikey sw", "MoltenA", "Moralitea", "multi", "MysteriousG",
"MythicalM", "Nerdy G", "Niho", "noef", "Nonexistential", "normalb", "nuthat", "Onch", "Owner of the P",
"Parallel Paper", "PCM", "Phant0", "PlasmicT", "pokeys", "Purplegaze", "RAMT", "random.", "recc", "Reselect",
"SaddleB", "scorb", "Shardren", "sicto", "SinisterSh",
"Snoozingn", "somsU", "Sparrowc", "Spicym", "spooky.", "Srim", "Swimswum", "Tak A", "Tantu",
"tautt", "terminateds", "Thane", "twpaz.", "The Great And Mi", "MayUnderFlowers", "TheMightyMidge", "TieTie",
"Timvideo3", "tr_", "Truttle1", "TTGuy", "Twiggy", "Verigold", "Whiffl", "whitecyc",
"X_Ry", "xXB", "Xyloba", "Yuakim", "Zaffr", "Zettex", "Zixi"
]);

add_prediction("Pink man", "8B",
[
"4DJ", "scorb", "956761d0-e8d6-4f5b-b0d3-72fb222c05bb", "losered",
"Purplegaze", "sicto", "Srim", "Twiggy", "whitecyc", "Xylob",
"Yuak", "#1 s", "#za", "570f2536-86e6-4453-8280-c7d8e5f956e5",
"J_d", "John D", "Owner of the P", "xXB", "X_R", 
"Catw", "Charito", "CookieCrisp", "Deckardv", "363f7b55-13a6-4aa6-93fe-fb187ea835ff", "Evolt", "Gman", "IceKeyH", "JujuM", "Lyrical Ty",
"5696ca02-91dd-42ff-a8c2-bb5380e2b224", "milster", "MineF", 
"Nerdy G", "PaniniP", "PoliteCh", "reremiau", "ThatPerson",
"TieTie", "$Ee", "aaronv", "AnEp", "cashedcred", "cloverpep",
"Cpink", "DatH", "Donut Cor", "Fred Som", "garf", "Gizmote", 
"Gordisch", "ecf2bba0-4cc1-4efd-9403-a1152050c32f", "Juhm", "Julians", "Koopa4", "LemonV",
"9facbd1b-7f26-4f96-8076-2a48819627a1", "pokeysoda", "puzzlypug", "Tak A", "ThePinkB", "TTGu",
"avocadoe", "Bo T", "DarcyD", "Eric from r", "FROGLOCK",
"Graysa", "GrayTheS", "GreenT", "Nick Whi", "nlcd", "NorthEastB",
"s837", "stone bone", "taopy", "terminatedsl", "tr_", "2 L",
"Alias.E", "Alley%", "Brandy?", "Defic", "dustox", "exxpir",
"funnydoggg", "7149d1d9-d34e-4af9-aed5-992f90c4bbd6", "noef", "PlasmicT", "RiccoB",
"Sbarb", "Zettex", "figgyc", "OL T", "Strawburr", "alexlion0",
"Snoozingn", "iTeo", "YellowE", "FishOnT", "spooky."
]);

/*
add_prediction("Trojan", "8B",
[
"‘Crafty :3’",
"\"Dan.",
"1Gary",
"8th",
"A Random EWOW Contestant",
"Account_Alt",
"Adamanti",
"Allymote",
"Among Us Enjoyer",
"Avanfan",
"axn",
"Azim9999",
"Azuran",
"BeanutPutter",
"bladny",
"Bridgette TDI",
"d177ad18-680d-410b-b4c8-a5caa84c2ab9",
"06cf515c-6eb8-43a0-9105-534febedc0db",
"cat copnt",
"Cerisewyyy?",
"COCOATWIX",
"Cpt. Mono",
"CreepingCretinousCreature",
"DaveLikesGames",
"DesertYou",
"Detective Chiyo",
"Devils Planner",
"dominoexists",
"Dork Matter",
"Dulcyd",
"Eagle Master",
"Em648",
"845f3879-3567-4316-826c-48d3f2ebf29e",
"eviled",
"fidget boii",
"f4f4a25c-9cc9-4977-8167-6fa984c9f72e",
"Flower Radio",
"FordF150",
"GameonHead",
"Gaming YT",
"Ghostie Q",
"gibby flibby",
"Golf Ball",
"7c6ced9f-c239-4404-968d-abe00547b83d",
"googifloop",
"GordonBrown2318",
"Gravel",
"Gummy Pikmin Productions",
"hamburgerlord",
"High Concept",
"horizontally spinning rat",
"HyundaiElantra",
"ideot",
"Jaden73147",
"Josh / NOT a gaming channel",
"Juliansl",
"Kanye West",
"lane",
"Larry The Lobster",
"MargaretThatcher11208",
"e633b8b3-2f2b-4217-90f1-5c322e00ce82",
"7149d1d9-d34e-4af9-aed5-992f90c4bbd6",
"minekylemania",
"Mini Gumballed Ice Cube",
"minordill",
"Nailed It!",
"Nebbulz",
"NostalgicFeels",
"Nurse Cheese",
"Patrick Star",
"a5561308-53d3-4ed4-bf9a-947b732462e4",
"Phantastrophy",
"Pink man",
"Purps Got A Ways To Go",
"qooyuni",
"Quagsire King",
"Ratatouille from Ratatouille",
"Riley",
"d925ff6b-60e1-47d5-963b-7e98fda95b1f",
"rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
"Sausiiie",
"907b8cf4-e6b4-4864-9941-0187d4a61d7a",
"SeahawkzSK",
"Some Guy",
"spinifex",
"a5954364-d58e-4c04-9ae1-213be6f7918a",
"Stickly Stories",
"Supermersion",
"superminerJG",
"Swimswum",
"Tantusar",
"1de8de11-5234-48f6-a392-3d70618845bd",
"Teenage Wasteland",
"The Exact Amount",
"857c9932-a579-4efc-ade3-a01f7cfc9ff0",
"The Supervillain",
"Tomgazery",
"Violence",
"widetide",
"Yooper Mapping"
]);
*/

add_prediction("MoltenAshes", "9B",[
"#1 sigma Rizz lord",
"#zackd",
"4DJumpman256",
"aaronvx",
"ALITL",
"ArnoobExtra",
"avocadoexists",
"Azurite",
"cashedcredits",
"Catworld",
"Charito",
"CloudySkyes",
"cloverpepsi",
"Cohaki",
"CookieCrisp",
"CringeCat",
"Cube492",
"570f2536-86e6-4453-8280-c7d8e5f956e5",
"DatHam",
"Deckardv",
"363f7b55-13a6-4aa6-93fe-fb187ea835ff",
"Evolt",
"Exhalexa",
"galactika!",
"geobica",
"Gizmote",
"Gman",
"goobrey",
"Grammar Lee",
"Graysandwich",
"GreenieGuest",
"Heronix",
"ecf2bba0-4cc1-4efd-9403-a1152050c32f",
"IceKeyHammer",
"931b7d8d-ef74-4da6-8e90-800e6ef1559c",
"IntersectingPlanes",
"iRDM",
"italic177",
"iTeoti",
"J_duude",
"956761d0-e8d6-4f5b-b0d3-72fb222c05bb",
"John Dubuc",
"Juhmatok",
"JujuMas",
"Juliansl",
"knuxchux",
"Koopa472",
"la rivbi",
"Laurceny",
"LemonVenom",
"losered",
"Lyrical TyrAnt",
"9facbd1b-7f26-4f96-8076-2a48819627a1",
"mazuat",
"Meowicat",
"5696ca02-91dd-42ff-a8c2-bb5380e2b224",
"milster08",
"MineFlex_B",
"MoltenAshes",
"namdoy",
"Nerdy Gal",
"nlcd",
"Owner of the Phattest Dumptruck Imaginable (674kg)",
"PaniniPancake",
"pfysche",
"Pink man",
"PlasmicTrojan",
"pokeysoda",
"PoliteCheese1414",
"Purplegaze",
"puzzlypugzly",
"RainbowKnight",
"RAMTurtle",
"recc",
"scorb",
"reremiau",
"sictoabu",
"SinisterShovel",
"Snoozingnewt",
"Sparrowcat",
"Srimochi",
"terminatedslime",
"twpaz.",
"The Ilucuthen Empire",
"MayUnderFlowers",
"ThePinkBunnyEmpire",
"TieTiePerson",
"tr_",
"TrainGoBoom",
"Twiggy",
"Twisted Taft",
"whitecyclosa",
"Wilma",
"X_Ry",
"xXBombs_AwayXx",
"Xyloba",
"YellowElectric",
"Yuakim",
"Yume Flamigiri",
"Zettex"
]);

add_prediction("RAMTurtle", "9B", [
"#1 s", "#za", "4DJ", "aaronv", "ALITL", "Alley%", "Alternavation",
"AnEpik", "Arnoob", "Azurite",
"cashedcre", "Catw", "Charito", "chichi", "CloudySky", "cloverp",
"Cohak", "CringeC", 
"570f2536-86e6-4453-8280-c7d8e5f956e5",
"DatF", "Deckar", "DerM", "DogeB", 
"363f7b55-13a6-4aa6-93fe-fb187ea835ff",
"Evolt",
"Exhalexa",
"FishO", "Funo'", "galactika!", "Gman", "GreenieGuest",
"Heronix", 
"ecf2bba0-4cc1-4efd-9403-a1152050c32f",
"hydrogencit",
"IceKeyH",
"931b7d8d-ef74-4da6-8e90-800e6ef1559c",
"iRDM", "italic177", "iTeo", "Ixc", "J_d",
"956761d0-e8d6-4f5b-b0d3-72fb222c05bb",
"Jakiller", "John D", "JujuMas", "Julians", "Kaestra",
"Koopa4", "KrystalB", "la r", "LemonV", "Leopardsun",
"Lord of the S", "losered", "Lyrical TyrA", "Meowicat",
"5696ca02-91dd-42ff-a8c2-bb5380e2b224",
"Mikl ", "MineF", "MoltenAs", "Moralitea", "MrDell47",
"Niho", "Onch", "Owner of the", "Paintsp", "PengiQ",
"pfysche", "Pink man", "PlasmicT", "PoliteCheese1",
"Purplegaze", "RainbowK", "RAMTu", "recc", "scorb",
"reremiau", "sicto", "simp4", "Snoozing", "Sparrowc",
"spooky.p", "Srim", "Talinl", "terminateds", "twpaz.",
"The Ilucu", "MayUnderFlowers", "ThePinkB", "TieTieP", "tr_",
"Twiggy", "Verig", "whitecyc", "X_Ry", "xXB", "Xyloba",
"Yuak", "Yume F", "Zettex"
]);

add_prediction("aaronvx", "9B", [
"aaronvx",
"#1 sigma Rizz lord",
"570f2536-86e6-4453-8280-c7d8e5f956e5",
"TieTiePerson",
"956761d0-e8d6-4f5b-b0d3-72fb222c05bb",
"JujuMas",
"Owner of the Phattest Dumptruck Imaginable (674kg)",
"scorb",
"Zettex",
"Twiggy",
"avocadoexists",
"losered",
"J_duude",
"4DJumpman256",
"Cohaki",
"iRDM",
"PlasmicTrojan",
"CringeCat",
"whitecyclosa",
"mazuat",
"ArnoobExtra",
"Xyloba",
"xXBombs_AwayXx",
"italic177",
"Funo'",
"Deckardv",
"iTeoti",
"cloverpepsi",
"Gman",
"MineFlex_B",
"Charito",
"sictoabu",
"pfysche",
"Leopardsun",
"CookieCrisp",
"ALITL",
"ThePinkBunnyEmpire",
"Graysandwich",
"Sparrowcat",
"Azurite",
"terminatedslime",
"MeLikePie50",
"Catworld",
"Laurceny",
"Evolt",
"Lyrical TyrAnt",
"Cube492",
"IceKeyHammer",
"60mo",
"John Dubuc",
"5696ca02-91dd-42ff-a8c2-bb5380e2b224",
"363f7b55-13a6-4aa6-93fe-fb187ea835ff",
"MoltenAshes",
"Koopa472",
"tr_",
"CloudySkyes",
"geobica",
"Purplegaze",
"Meptune",
"Yume Flamigiri",
"TrainGoBoom",
"kuminda.water.supply",
"la rivbi",
"Mercuri",
"Meowicat",
"AnEpik",
"ShadowFlames",
"namdoy",
"WholeNote1",
"twpaz.",
"reremiau",
"9facbd1b-7f26-4f96-8076-2a48819627a1",
"Ixcors",
"GreenTree",
"YoshiAwesum",
"Juhmatok",
"noef",
"garf",
"X_Ry",
"Desh Jakobsson",
"The Ilucuthen Empire",
"LemonVenom",
"931b7d8d-ef74-4da6-8e90-800e6ef1559c",
"Srimochi",
"Yuakim",
"Zixi",
"goobrey",
"xtrimi",
"DogeBone3",
"Kaestra",
"ecf2bba0-4cc1-4efd-9403-a1152050c32f",
"MysteriousGrimReaper",
"fryuaj",
"Moralitea",
"Snoozingnewt",
"IntersectingPlanes",
"FishOnTheInternet",
"SuomiNamco",
"MayUnderFlowers",
"Poop book",
]);

add_prediction("LemonVenom", "10B", [
"scorb", "losered", "4DJump", "#1 s", "Xylob", "J_d", "Purplegaz",
"whitecyc", "Srim", "TieTie",
"570f2536-86e6-4453-8280-c7d8e5f956e5",
"X_Ry", "JujuM", "MineFlex_B", "xXB", "Twiggy",
"Yuak",
"956761d0-e8d6-4f5b-b0d3-72fb222c05bb",
"sicto", "iTeo", 
"5696ca02-91dd-42ff-a8c2-bb5380e2b224",
"Deckardv", "Nerdy G", "cloverpep", "ArnoobE", "Snooz",
"italic177", "PaniniP", "Owner of", "Koopa4", "CloudySkyes",
"pfysche", "ThePinkB", "Catw", "MoltenA", "Cohak", "twpaz.",
"LemonVen", "goobr", "Pink man", "RAMT", "The Ilu", "Heronix",
"YoshiAwe", "Azurite", "ConvexP", "Juhm", "la r", "aaronv",
"Grammar ", "terminatedsl", "mazuat", "PengiQ", "Juliansl",
"garf", "Water C", "Onch", "Meowic", "IntersectingP",
"cashedc", "CringeC", "milster0", "Graysand", "Moralitea", "Gman",
"Ixc", "MeLikeP", "iRDM", "recc", "Thane", "tr_", "GreenTree",
"spooky.", "hydrogenc", "PlasmicT", "BFBFa", "Nonexistential",
"Verigold", "Magnetty", "Alley%", "Nihon", "Lpc", "WholeN",
"Leopards", "TheMightyM", "Syro33", 
"5696ca02-91dd-42ff-a8c2-bb5380e2b224",
"avocadoexists",
"Blue Gela", "cerese", "Alternav", "Zettex", "FishO", "2 L",
"figgyc", "thenamesh", "lipu K", "Jac4", "Kinderda", "MrDell47"
]);

add_prediction("ThatShowGuy", "10B", [
"scorb",
"4DJ", "losered",
"#1 s", "J_d", "Purplegaze", "Srim", "whitecyc", "Xylob",
"570f2536-86e6-4453-8280-c7d8e5f956e5",
"iTeo", "sicto", "TieTie", "RainbowK", "xXB", "X_R", "Yuak",
"956761d0-e8d6-4f5b-b0d3-72fb222c05bb",
"Twiggy", "#za", "MayUnderFlowers",
"Catw", "cloverp", "Cohaki", "ConvexP", 
"363f7b55-13a6-4aa6-93fe-fb187ea835ff",
"GreenieG",
"5696ca02-91dd-42ff-a8c2-bb5380e2b224",
"Owner of", "PaniniP", "Pink man", "reremiau", "twpaz.", "Laurc",
"aaronv", "CringeCat", "Grammar L", "Ixc",  "John Du", "Juhm",
"la ", "mazuat", "Meowi", "Moralitea", 
"e5e585d0-b084-4826-88c9-1c7392e0a337",
"terminatedsl", "ThatPerson", "CookieCri",
"Algotistic", "Alley%", "Anko6", "Blue Gela", "Brandy?",
"cerese", "Chad", "Eric f", "Hazel Cr", "indoorfish", "iRDM", "Jemuon",
"Kaestr", "Lpc", "Magnetty", "Mept", "Nihoni", "Orange Cary S",
"PizzaEn", "PlasmicTr", "SinisterS", "Spicyman33",
"StealthyS", "supernova16", "Syro33", "Tak ",
"taopy", "Thane", "That Nerd A", "ThatShowG", "TheMightyM",
"WholeN", "TTGu", "Villagers", "Yoneliu",
"eyB", "fryuaj", "GalacticGroo", "Lord Far", "MetaCyde", "Neonth",
"starsword g", "ToffeeL", "Zixi", "Zettex",
"alexlion0",
"ce28466a-f508-4d12-b224-4e7ce3ac0e57",
"7149d1d9-d34e-4af9-aed5-992f90c4bbd6",
"PingThaj", "pjg", "sodiumhy", "Weny"
]);

add_prediction("MoltenAshes", "10B", [
"#1 sigma Rizz lord",
"#zackd",
"4DJumpman256",
"aaronvx",
"ALITL",
"ArnoobExtra",
"Azurite",
"Brandy?",
"BrokenSink",
"cashedcredits",
"Catworld",
"Charito",
"CloudySkyes",
"cloverpepsi",
"Cohaki",
"ConvexProjects",
"CringeCat",
"Cube492",
"570f2536-86e6-4453-8280-c7d8e5f956e5",
"Deckardv",
"Deficiency",
"DogeBone3",
"363f7b55-13a6-4aa6-93fe-fb187ea835ff",
"Evolt",
"Exhalexa",
"Flambeetle",
"garf",
"galactika!",
"geobica",
"Gizmote",
"goobrey",
"Grammar Lee",
"Graysandwich",
"GreenieGuest",
"GreenTree",
"Heronix",
"ecf2bba0-4cc1-4efd-9403-a1152050c32f",
"IceKeyHammer",
"931b7d8d-ef74-4da6-8e90-800e6ef1559c",
"IntersectingPlanes",
"iRDM",
"italic177",
"iTeoti",
"J_duude",
"956761d0-e8d6-4f5b-b0d3-72fb222c05bb",
"Juhmatok",
"JujuMas",
"Juliansl",
"Koopa472",
"la rivbi",
"Laurceny",
"LemonVenom",
"losered",
"mazuat",
"Meowicat",
"5696ca02-91dd-42ff-a8c2-bb5380e2b224",
"MineFlex_B",
"MoltenAshes",
"namdoy",
"Nerdy Gal",
"nlcd",
"Owner of the Phattest Dumptruck Imaginable (674kg)",
"PaniniPancake",
"pfysche",
"Pink man",
"PlasmicTrojan",
"pokeysoda",
"PoliteCheese1414",
"Purplegaze",
"RainbowKnight",
"RAMTurtle",
"recc",
"scorb",
"reremiau",
"sictoabu",
"SinisterShovel",
"Snoozingnewt",
"Sparrowcat",
"spooky.phd",
"Srimochi",
"terminatedslime",
"Thane",
"twpaz.",
"The Ilucuthen Empire",
"MayUnderFlowers",
"ThePinkBunnyEmpire",
"TieTiePerson",
"tr_",
"TrainGoBoom",
"Twiggy",
"Twisted Taft",
"Water Chestnut",
"whitecyclosa",
"X_Ry",
"xXBombs_AwayXx",
"Xyloba",
"YellowElectric",
"YoshiAwesum",
"Yuakim",
"Yume Flamigiri",
]);

add_prediction("Pink man", "11B", [
"scorb", "4DJ", "losered", "#1 s", "J_d", "Purplegaze", "Srim",
"whitecyc", "Xyloba", "#za", "ALITL", 
"570f2536-86e6-4453-8280-c7d8e5f956e5",
"iTeo",
"JujuM", "MineFlex_B", "RainbowKni", "sictoa", "Sparrowc",
"MayUnderFlowers", "TieTie", "Twiggy", "X_R", "xXB",
"ArnoobE", "Azurite", "Catw", "Charito", "CloudyS",
"cloverp", "Cohaki", "ConvexP", "Deckardv", "Funo'",
"goobrey", "GreenieG", "Heronix", "IceKeyH",
"931b7d8d-ef74-4da6-8e90-800e6ef1559c",
"italic177", "Koopa4", "LemonV",
"5696ca02-91dd-42ff-a8c2-bb5380e2b224",
"PaniniP", "pfysc", "Pink man", "Snoozingn", "twpaz.", "ThePinkB",
"YellowEle", "YoshiAwes", "Yuak",
"8b15177a-dad3-45b4-85ae-7826b5985ad9",
"$Ee", "aaronvx", "Algotis", "AnEp", "avocadoe", "Brandy?",
"BrokenS", "cashedcre", "cereser", "Chad",
"bab372ed-5272-4f6f-a1eb-b79fd6da456a", "Daquan",
"FROGL", "iRDM", "John D", "Juhm", "la ", "Magnetty G",
"mazuat", "Orange Cary S", "Owner of", "Parallel Paper",
"PizzaE", "PlasmicTro", "recc", "Swift S", "terminatedsli",
"tr_", "2 L", "Alley%", "Cpi", "eyBH", "FishO",
"fryuaj", "GreenTree", "lipu Kij", "Nateo", "NorthEastB",
"Real presi", "Spicyman3", "Strawbur", "Tak Aj", "taopy",
"Zettex", "bromii", "figgyc", "Nosl", "ribos"
]);

add_prediction("Snoozingnewt", "11B", [
"#1 sigma Rizz lord",
"#zackd",
"$EeveeLikesBREAD$",
"08_BTR",
"4DJumpman256",
"ALITL",
"Amelia, Ameliorator of the Eighty-Three Skies",
"AnEpik",
"ArnoobExtra",
"ashaisasmasha",
"avocadoexists",
"989e7378-3575-4eb8-8ff7-14aab5ccffba",
"BrokenSink",
"Catworld",
"cereseries",
"Chad",
"Charito",
"CloudySkyes",
"cloverpepsi",
"Cohaki",
"CringeCat",
"570f2536-86e6-4453-8280-c7d8e5f956e5",
"Deckardv",
"DogeBone3",
"exxpired dye",
"Filipino Mathematician 23",
"FishOnTheInternet",
"fonda1515",
"Foxrish",
"Funo'",
"garf",
"Gizmote",
"Gman",
"goobrey",
"Graysandwich",
"GreenieGuest",
"Heronix",
"hydrogencitrus",
"IceKeyHammer",
"931b7d8d-ef74-4da6-8e90-800e6ef1559c",
"indoorfish",
"iRDM",
"italic177",
"iTeoti",
"itsmearni",
"J_duude",
"JujuMas",
"Juliansl",
"Koopa472",
"kuminda.water.supply",
"LemonVenom",
"Leopardsun",
"losered",
"319bc730-db00-44b8-8606-c5e361c2b979", 
"mazuat",
"Meowicat",
"Meptune",
"5696ca02-91dd-42ff-a8c2-bb5380e2b224", 
"MineFlex_B",
"Mitochondrial Bob",
"MoltenAshes",
"Moralitea",
"Nerdy Gal",
"nlcd",
"notexi",
"Onchú",
"PaniniPancake",
"Pink man",
"PlasmicTrojan",
"PoliteCheese1414",
"Purplegaze",
"recc",
"scorb",
"reremiau",
"SinisterShovel",
"smoov22",
"Snoozingnewt",
"Sparrowcat",
"spooky.phd",
"stephan12387",
"Swift Smartypants",
"terminatedslime",
"twpaz.",
"The Ilucuthen Empire",
"MayUnderFlowers",
"thenamesh",
"ThePinkBunnyEmpire",
"TieTiePerson",
"tr_",
"Twiggy",
"Water Chestnut",
"whitecyclosa",
"WholeNote1",
"Wilma",
"X_Ry",
"xXBombs_AwayXx",
"Xyloba",
"YoshiAwesum",
"Zaffricious",
"Zettex",
]);

add_prediction("MoltenAshes", "11B", [
"#1 sigma Rizz lord",
"#zackd",
"4DJumpman256",
"Algotistic",
"ALITL",
"ArnoobExtra",
"Azurite",
"Brandy?",
"BrokenSink",
"cashedcredits",
"Catworld",
"Charito",
"CloudySkyes",
"cloverpepsi",
"Cohaki",
"ConvexProjects",
"CringeCat",
"Cube492",
"570f2536-86e6-4453-8280-c7d8e5f956e5",
"Deckardv",
"Deficiency",
"DogeBone3",
"exxpired dye",
"fonda1515",
"Funo'",
"garf",
"geobica",
"Gizmote",
"Gman",
"goobrey",
"Grammar Lee",
"GreenieGuest",
"Heronix",
"ecf2bba0-4cc1-4efd-9403-a1152050c32f", 
"hydrogencitrus",
"IceKeyHammer",
"931b7d8d-ef74-4da6-8e90-800e6ef1559c", 
"IntersectingPlanes",
"iRDM",
"italic177",
"iTeoti",
"J_duude",
"JujuMas",
"Juliansl",
"Koopa472",
"kuminda.water.supply",
"Laurceny",
"LemonVenom",
"losered",
"mazuat",
"Meowicat",
"5696ca02-91dd-42ff-a8c2-bb5380e2b224",
"Mikl Pickle",
"MineFlex_B",
"MoltenAshes",
"Moralitea",
"MysteriousGrimReaper",
"Nerdy Gal",
"nlcd",
"Nonexistential",
"notexi",
"Paintspot Infez",
"PaniniPancake",
"pfysche",
"Pink man",
"PlasmicTrojan",
"PoliteCheese1414",
"Purplegaze",
"RainbowKnight",
"recc",
"scorb",
"reremiau",
"sictoabu",
"SinisterShovel",
"Snoozingnewt",
"SooperHighper",
"Sparrowcat",
"Srimochi",
"stephan12387",
"Swift Smartypants",
"terminatedslime",
"Thane",
"twpaz.",
"The Ilucuthen Empire",
"MayUnderFlowers",
"ThePinkBunnyEmpire",
"TieTiePerson",
"tr_",
"TrainGoBoom",
"Twiggy",
"Twisted Taft",
"Water Chestnut",
"whitecyclosa",
"Wilma",
"X_Ry",
"xXBombs_AwayXx",
"Xyloba",
"YellowElectric",
"YoshiAwesum",
"Yume Flamigiri",
]);

add_prediction("Catworld","12B",["8b15177a-dad3-45b4-85ae-7826b5985ad9","#1 sigma Rizz lord","$EeveeLikesBREAD$","08_BTR","4DJumpman256","ALITL","AnEpik","ArnoobExtra","ashaisasmasha","avocadoexists","Azurite","Brandy?","Catworld","cereseries","Charito","CloudySkyes","cloverpepsi","bab372ed-5272-4f6f-a1eb-b79fd6da456a","Cohaki","ConvexProjects","CringeCat","Cube492","570f2536-86e6-4453-8280-c7d8e5f956e5","Deckardv","DogeBone3","ElevenWordsOfWower","fonda1515","garf","Gizmote","gmo","goobrey","Grammar Lee","Graysandwich","GreenieGuest","Heronix","IceKeyHammer","931b7d8d-ef74-4da6-8e90-800e6ef1559c","IntersectingPlanes","iRDM","iTeoti","itsmearni","Ixcors","J_duude","956761d0-e8d6-4f5b-b0d3-72fb222c05bb","Juhmatok","JujuMas","Juliansl","Kinderdacat","Koopa472","kuminda.water.supply","LemonVenom","losered","mazuat","5696ca02-91dd-42ff-a8c2-bb5380e2b224","MineFlex_B","Moralitea","MysteriousGrimReaper","Nonexistential","normalben","Onchú","Paintspot Infez","Parallel Paperbacks","PengiQuin","pfysche","Pink man","PlasmicTrojan","PoliteCheese1414","Purplegaze","RainbowKnight","RAMTurtle","random.123","recc","scorb","reremiau","sictoabu","SinisterShovel","Snoozingnewt","SooperHighper","Sparrowcat","Srimochi","stephan12387","Swift Smartypants","terminatedslime","twpaz.","The Ilucuthen Empire","MayUnderFlowers","ThePinkBunnyEmpire","TieTiePerson","tr_","Twiggy","Water Chestnut","whitecyclosa","WholeNote1","X_Ry","xXBombs_AwayXx","Xyloba","YellowElectric","Yuakim","Yume Flamigiri","Zettex"])

for (let i = 0; i < contestants.length; i++){
	let c = contestants[i];
	let favor = 0;
	for (let j = 0; j < predictions.length; j++){
		if (predictions[j][2].includes(c)){
			favor += 1;
		}
	}
	c.favor = favor;
}

color_list = [
"#D7C6C6",
"#F2D4D4",
"#F4EBCA",
"#D4F2D7",
"#D2F3FB",
"#D1E9FF",
"#D3DFFF",
"#D6D3FF",
"#DFCAFF",
"#EFCAFF",
"#FFFFFF"
];

let table_head = document.getElementById("predictions");
let table_body = document.getElementById("contestants");
let table_toprow = document.createElement("tr");
let table_secondrow = document.createElement("tr");
table_head.append(table_toprow);
table_head.append(table_secondrow);
let top_element = document.createElement("th");
top_element.appendChild(document.createTextNode("Contestant"));
top_element.setAttribute("rowspan", 2);
top_element.addEventListener("click", function () {draw_table((a, b) => (a.name.toUpperCase() > b.name.toUpperCase() ? 1 : (a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 0)));});
table_toprow.append(top_element)
let status_element = document.createElement("th");
status_element.setAttribute("rowspan", 2);
status_element.appendChild(document.createTextNode("❤"));
status_element.addEventListener("click", function () {draw_table((a, b) => (b.get_current_lives() - a.get_current_lives()));});
status_element.setAttribute("title","Lives");
table_toprow.append(status_element)
let favor_element = document.createElement("th");
favor_element.setAttribute("rowspan", 2);
favor_element.appendChild(document.createTextNode("#"));
favor_element.addEventListener("click", function () {contestants.sort((a, b) => (b.favor - a.favor)); draw();});
table_toprow.append(favor_element)
/*
let blank_element1 = document.createElement("th");
let blank_element2 = document.createElement("th");
let blank_element3 = document.createElement("th");
table_secondrow.append(blank_element1)
table_secondrow.append(blank_element2)
table_secondrow.append(blank_element3)
*/

for (let i = 0; i < predictions.length; i++){
	let p = predictions[i];
	let name_element = document.createElement("th");
	name_element.appendChild(document.createTextNode(p[0] + " (" + p[1] + ")"));
	name_element.addEventListener("click", function () {draw_table((a, b) => ((p[2].includes(a) ? p[2].indexOf(a) : 16608) - (p[2].includes(b) ? p[2].indexOf(b) : 16608)));});
	table_toprow.append(name_element)
	let count_element = document.createElement("th");
	count_element.appendChild(document.createTextNode(p[2].length));
	count_element.addEventListener("click", function () {draw_table((a, b) => ((p[2].includes(a) ? p[2].indexOf(a) : 16608) - (p[2].includes(b) ? p[2].indexOf(b) : 16608)));});
	table_secondrow.append(count_element)
}

function draw(){
	table_body.innerHTML = "";
	for (let i = 0; i < contestants.length; i++){
		let c = contestants[i];
		if(c.favor <= 0){
			continue;
		}
		let contestant_row = document.createElement("tr");
		contestant_row.style.backgroundColor = color_list[c.get_current_lives()];
		let name_element = document.createElement("td");
		name_element.appendChild(document.createTextNode(c.name));
		contestant_row.append(name_element)
		let lives_element = document.createElement("td");
		lives_element.appendChild(document.createTextNode(c.get_current_lives()));
		contestant_row.append(lives_element)
		let favor_element = document.createElement("td");
		contestant_row.append(favor_element)
		for (let j = 0; j < predictions.length; j++){
			let prediction_element = document.createElement("td");
			prediction_element.style.backgroundColor = color_list[c["lives" + predictions[j][1].slice(0, -1)]];
			if (predictions[j][2].includes(c)){
				prediction_element.appendChild(document.createTextNode("✓"));
			}
			contestant_row.append(prediction_element);
		}
		if (c.favor > 0){
			favor_element.appendChild(document.createTextNode(c.favor));
			table_body.append(contestant_row);
		}
	}
}

function draw_table(cmp_func){
	contestants.sort(cmp_func);
	draw();
}

draw_table((a) => 0);

document.getElementById("load").remove();