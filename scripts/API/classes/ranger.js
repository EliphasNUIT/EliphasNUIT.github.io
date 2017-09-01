// 
var Marksmanship = {
    name: "Marksmanship",
    id: "8",
    traits: {
        // adept
        "Stoneform": "1021",
        "Hunter's Gaze": "1014",
        "Clarion Bond": "986",
        // master
        "Brutish Seals": "1001",
        "Steady Focus": "1000",
        "Moment of Clarity": "1070",
        // grand master
        "Predator's Onslaught": "996",
        "Remorseless": "1015",
        "Lead the Wind": "1698"
    }
};
// 
var Skirmishing = {
    name: "Skirmishing",
    id: "30",
    traits: {
        // adept
        "Sharpened Edges": "1069",
        "Primal Reflexes": "1067",
        "Trapper's Expertise": "1075",
        // master
        "Spotter": "1016",
        "Strider's Defense": "1700",
        "Hidden Barbs": "1846",
        // grand master
        "Quick Draw": "1064",
        "Light on your Feet": "1912",
        "Vicious Quarry": "1888"
    }
};
// 
var Wilderness_Survival = {
    name: "Wilderness Survival",
    id: "33",
    traits: {
        // adept
        "Soften the Fall": "1098",
        "Oakheart Salve": "1086",
        "Taste for Danger": "1099",
        // master
        "Ambidexterity": "1101",
        "Refined Toxins": "2032",
        "Shared Anguish": "1100",
        // grand master
        "Empathic Bond": "1094",
        "Wilderness Knowledge": "1699",
        "Poison Master": "1701"
    }
};
// 
var Nature_Magic = {
    name: "Nature Magic",
    id: "25",
    traits: {
        // adept
        "Bountiful Hunter": "1062",
        "Instinctive Reaction": "978",
        "Allies' Aid": "1060",
        // master
        "Evasive Purity": "1054",
        "Spirited Arrival": "965",
        "Windborne Notes": "964",
        // grand master
        "Nature's Vengeance": "1038",
        "Protective Ward": "1988",
        "Invigorating Bond": "1697"
    }
};
// 
var Beastmastery = {
    name: "Beastmastery",
    id: "32",
    traits: {
        // adept
        "Go for the Eyes": "1861",
        "Potent Ally": "1072",
        "Resounding Timbre": "1606",
        // master
        "Wilting Strike": "975",
        "Two-Handed Training": "1047",
        "Natural Healing": "970",
        // grand master
        "Beastly Warden": "1945",
        "Zephyr's Speed": "968",
        "Honed Axes": "1066"
    }
};
//
var Druid = {
    name: "Druid",
    id: "5",
    traits: {
        // adept
        "Druidic Clarity": "1868",
        "Cultivated Synergy": "2016",
        "Primal Echoes": "1935",
        // master
        "Celestial Shadow": "2053",
        "Verdant Etching": "2001",
        "Natural Stride": "2056",
        // grand master
        "Grace of the Land": "2057",
        "Lingering Light": "2058",
        "Ancient Seeds": "2055"
    }
};
//
var Soulbeast = {
    name: "Soulbeast",
    id: "55",
    traits: {
        // adept
        "Fresh Reinforcement": "2134",
        "Live Fast": "2071",
        "Unstoppable Union": "2072",
        // master
        "Second Skin": "2119",
        "Essence of Speed": "2085",
        "Predator's Cunning": "2161",
        // grand master
        "Eternal Bond": "2155",
        "Leader of the Pack": "2128",
        "Oppressive Superiority": "2143"
    }
};
//
var rangerSkills = {

};
//


var Ranger = new Class([Marksmanship, Skirmishing, Wilderness_Survival, Nature_Magic, Beastmastery, Druid, Soulbeast], rangerSkills);
