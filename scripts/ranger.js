// 
var Marksmanship = {
    name: "Marksmanship",
    id: "10",
    traits: {
        // adept
        "Stoneform": "686",
        "Hunter's Gaze": "682",
        "Clarion Bond": "687",
        // master
        "Brutish Seals": "693",
        "Steady Focus": "713",
        "Moment of Clarity": "712",
        // grand master
        "Predator's Onslaught": "681",
        "Remorseless": "680",
        "Lead the Wind": "1688"
    }
};
// 
var Skirmishing = {
    name: "Skirmishing",
    id: "1",
    traits: {
        // adept
        "Sharpened Edges": "701",
        "Primal Reflexes": "705",
        "Trapper's Expertise": "700",
        // master
        "Spotter": "1889",
        "Strider's Defense": "1960",
        "Hidden Barbs": "708",
        // grand master
        "Quick Draw": "692",
        "Light on your Feet": "1950",
        "Vicious Quarry": "704"
    }
};
// 
var Wilderness_Survival = {
    name: "Wilderness Survival",
    id: "45",
    traits: {
        // adept
        "Soften the Fall": "670",
        "Oakheart Salve": "675",
        "Taste for Danger": "677",
        // master
        "Ambidexterity": "673",
        "Refined Toxins": "668",
        "Shared Anguish": "669",
        // grand master
        "Empathic Bond": "671",
        "Wilderness Knowledge": "674",
        "Poison Master": "1687"
    }
};
// 
var Nature_Magic = {
    name: "Nature Magic",
    id: "23",
    traits: {
        // adept
        "Bountiful Hunter": "756",
        "Instinctive Reaction": "738",
        "Allies' Aid": "744",
        // master
        "Evasive Purity": "751",
        "Spirited Arrival": "740",
        "Windborne Notes": "1980",
        // grand master
        "Nature's Vengeance": "2005",
        "Protective Ward": "1866",
        "Invigorating Bond": "752"
    }
};
// 
var Beastmastery = {
    name: "Beastmastery",
    id: "24",
    traits: {
        // adept
        "Go for the Eyes": "721",
        "Potent Ally": "1869",
        "Resounding Timbre": "691",
        // master
        "Wilting Strike": "722",
        "Two-Handed Training": "729",
        "Natural Healing": "1690",
        // grand master
        "Beastly Warden": "733",
        "Zephyr's Speed": "2035",
        "Honed Axes": "753"
    }
};
//
var Druid = {
    name: "Druid",
    id: "40",
    traits: {
        // adept
        "Druidic Clarity": "1838",
        "Cultivated Synergy": "1995",
        "Primal Echoes": "1987",
        // master
        "Celestial Shadow": "2009",
        "Verdant Etching": "1913",
        "Natural Stride": "1978",
        // grand master
        "Grace of the Land": "1942",
        "Lingering Light": "2022",
        "Ancient Seeds": "1890"
    }
};
//
var Soulbeast = {
    name: "Soulbeast",
    id: "40",
    traits: {
        // adept
        "Fresh Reinforcement": "1838",
        "Live Fast": "1995",
        "Unstoppable Union": "1987",
        // master
        "Second Skin": "2009",
        "Essence of Speed": "1913",
        "Predator's Cunning": "1978",
        // grand master
        "Eternal Bond": "1942",
        "Leader of the Pack": "2022",
        "Oppressive Superiority": "1890"
    }
};
//
var rangerSkills = {

};
//


var Ranger = new Class([Marksmanship, Skirmishing, Wilderness_Survival, Nature_Magic, Beastmastery, Druid, Soulbeast], rangerSkills);