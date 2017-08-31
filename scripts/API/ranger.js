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

builds["#VGdruidCondi"] = {
    class: Ranger,
    specializations: [
        { name: "Skirmishing", traits: ["Sharpened Edges", "Spotter", "Quick Draw"] },
        { name: "Wilderness Survival", traits: ["Taste for Danger", "Ambidexterity", "Poison Master"] },
        { name: "Druid", traits: ["Cultivated Synergy", "Verdant Etching", "Grace of the Land"] }
    ],
    skils: ["Glyph of Rejunevation", "Glyph of the Tides", "Sun Spirit", "Frost Spirit", "Glyph of Unity"],
    pets: ["Lynx", "Electric Wyvern"],
    armor: {
        type: "Medium",
        helm: { stat: "Viper", rune: "Superior Rune of the Nightmare" },
        shoulders: { stat: "Viper", rune: "Superior Rune of the Nightmare" },
        coat: { stat: "Viper", rune: "Superior Rune of the Nightmare" },
        gloves: { stat: "Viper", rune: "Superior Rune of the Nightmare" },
        leggings: { stat: "Viper", rune: "Superior Rune of the Trapper" },
        boots: { stat: "Viper", rune: "Superior Rune of the Trapper" }
    },
    trinket: {
        amulet: "Viper",
        ring1: "Viper",
        ring2: "Viper",
        earring1: "Viper",
        earring2: "Viper",
        back: "Viper"
    },
    weapons: {
        mainHand1: { type: "Shortbow", stat: "Viper", sigils: ["Superior Sigil of Malice", "Superior Sigil of Geomancy"] },
        mainHand2: { type: "Axe", stat: "Viper", sigils: ["Superior Sigil of Malice"] },
        offHand1: null,
        offHand2: { type: "Torch", stat: "Viper", sigils: ["Superior Sigil of Geomancy"] }
    },
    food: ["Rare Veggie Pizza", "Toxic Focusing Crystal"]
};

builds["#VGdruidHeal"] = {
    class: Ranger,
    specializations: [
        { name: "Skirmishing", traits: ["Sharpened Edges", "Spotter", "Quick Draw"] },
        { name: "Nature Magic", traits: ["Allies' Aid", "Windborne Notes", "Nature's Vengeance"] },
        { name: "Druid", traits: ["Primal Echoes", "Verdant Etching", "Grace of the Land"] }
    ],
    skils: ["Glyph of Rejunevation", "Glyph of the Tides", "Sun Spirit", "Frost Spirit", "Glyph of Unity"],
    pets: ["Tiger", "Electric Wyvern"],
    armor: {
        type: "Medium",
        helm: { stat: "Magi", rune: "Superior Rune of the Monk" },
        shoulders: { stat: "Magi", rune: "Superior Rune of the Monk" },
        coat: { stat: "Magi", rune: "Superior Rune of the Monk" },
        gloves: { stat: "Minstrel", rune: "Superior Rune of the Monk" },
        leggings: { stat: "Magi", rune: "Superior Rune of the Monk" },
        boots: { stat: "Magi", rune: "Superior Rune of the Monk" }
    },
    trinket: {
        amulet: "Minstrel",
        ring1: "Minstrel",
        ring2: "Magi",
        earring1: "Magi",
        earring2: "Minstrel",
        back: "Minstrel"
    },
    weapons: {
        mainHand1: { type: "Staff", stat: "Magi", sigils: ["Superior Sigil of Transference", "Superior Sigil of Water"] },
        mainHand2: { type: "Axe", stat: "Magi", sigils: ["Superior Sigil of Transference"] },
        offHand1: null,
        offHand2: { type: "Warhorn", stat: "Magi", sigils: ["Superior Sigil of Water"] }
    },
    food: ["Delicious Rice Ball", "Bountiful Maintenance Oil"]
};