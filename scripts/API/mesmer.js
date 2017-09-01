// done
var Domination = {
    name: "Domination",
    id: "10",
    traits: {
        // adept
        "Confounding Suggestions": "686",
        "Empowered Illusions": "682",
        "Rending Shatter": "687",
        // master
        "Shattered Concentration": "693",
        "Blurred Inscriptions": "713",
        "Furious Interruption": "712",
        // grand master
        "Imagined Burden": "681",
        "Mental Anguish": "680",
        "Power Block": "1688"
    }
};
// done
var Dueling = {
    name: "Dueling",
    id: "1",
    traits: {
        // adept
        "Phantasmal Fury": "701",
        "Desperate Decoy": "705",
        "Duelist's Discipline": "700",
        // master
        "Blinding Dissipation": "1889",
        "Evasive Mirror": "1960",
        "Fencer's Finesse": "708",
        // grand master
        "Superiority Complex": "692",
        "Ineptitude": "1950",
        "Deceptive Evasion": "704"
    }
};
// done
var Chaos = {
    name: "Chaos",
    id: "45",
    traits: {
        // adept
        "Descent into Madness": "670",
        "Illusionary Defense": "675",
        "Master of Manipulation": "677",
        // master
        "Mirror of Anguish": "673",
        "Chaotic Transference": "668",
        "Chaotic Dampening": "669",
        // grand master
        "Chaotic Interruption": "671",
        "Prismatic Understanding": "674",
        "Bountiful Disillusionment": "1687"
    }
};
// done
var Inspiration = {
    name: "Inspiration",
    id: "23",
    traits: {
        // adept
        "Medic's Feedback": "756",
        "Restorative Mantras": "738",
        "Persisting Images": "744",
        // master
        "Warden's Feedback": "751",
        "Restorative Illusions": "740",
        "Protected Phantasms": "1980",
        // grand master
        "Mental Defense": "2005",
        "Illusionary Inspiration": "1866",
        "Temporal Enchanter": "752"
    }
};
// done
var Illusions = {
    name: "Illusions",
    id: "24",
    traits: {
        // adept
        "Compounding Power": "721",
        "Persistence of Memory": "1869",
        "The Pledge": "691",
        // master
        "Shattered Strength": "722",
        "Phantasmal Haste": "729",
        "Maim the Disillusioned": "1690",
        // grand master
        "Phantasmal Force": "733",
        "Master of Fragmentation": "2035",
        "Malicious Sorcery": "753"
    }
};
//
var Chronomancer = {
    name: "Chronomancer",
    id: "40",
    traits: {
        // adept
        "Delayed Reactions": "1838",
        "Time Catches Up": "1995",
        "All's Well That Ends Well": "1987",
        // master
        "Danger Time": "2009",
        "Illusionary Reversion": "1913",
        "Improved Alacrity": "1978",
        // grand master
        "Lost Time": "1942",
        "Seize the Moment": "2022",
        "Chronophantasma": "1890"
    }
};
//
var Mirage = {
    name: "Mirage",
    id: "59",
    traits: {
        // adept
        "Self-Deception": "2141",
        "Renewing Oasis": "2082",
        "Riddle of Sand": "2110",
        // master
        "Shards of Glass": "2178",
        "Mirage Mantle": "2174",
        "Mirrored Axes": "2098",
        // grand master
        "Infinite Horizon": "2070",
        "Elusive Mind": "2113",
        "Dune Cloak": "2169"
    }
};
//
var mesmerSkills = {

};
//

var Mesmer = new Class([Domination, Dueling, Chaos, Inspiration, Illusions, Chronomancer, Mirage], mesmerSkills);

builds["#VGchrTank"] = {
    class: Mesmer,
    specializations: [
        { name: "Domination", traits: ["Empowered Illusions", "Blurred Inscriptions", "Mental Anguish"] },
        { name: "Inspiration", traits: ["Persisting Images", "Warden's Feedback", "Illusionary Inspiration"] },
        { name: "Chronomancer", traits: ["All's Well That Ends Well", "Improved Alacrity", "Chronophantasma"] }
    ],
    skils: ["Well of Eternity", "Well of Action", "Well of Recall", "Signet of Inspiration", "Gravity Well"],
    pets: null,
    armor: {
        type: "light",
        helm: { stat: "Berserker", rune: "Superior Rune of Leadership" },
        shoulders: { stat: "Berserker", rune: "Superior Rune of Leadership" },
        coat: { stat: "Berserker", rune: "Superior Rune of Leadership" },
        gloves: { stat: "Berserker", rune: "Superior Rune of Leadership" },
        leggings: { stat: "Commander", rune: "Superior Rune of Leadership" },
        boots: { stat: "Berserker", rune: "Superior Rune of Leadership" }
    },
    trinket: {
        amulet: "Commander",
        ring1: "Commander",
        ring2: "Commander",
        earring1: "Commander",
        earring2: "Commander",
        back: "Commander"
    },
    weapons: {
        mainHand1: { type: "Sword", stat: "Berserker", sigils: ["Superior Sigil of Concentration"] },
        mainHand2: null,
        offHand1: { type: "Focus", stat: "Commander", sigils: ["Superior Sigil of Force"] },
        offHand2: { type: "Shield", stat: "Commander", sigils: ["Superior Sigil of Force"] }
    },
    food: ["Bowl of Nopalitos Sauté", "Magnanimous Maintenance Oil"]
};

builds["#VGchrDPS"] = {
    class: Mesmer,
    specializations: [
        { name: "Domination", traits: ["Empowered Illusions", "Blurred Inscriptions", "Mental Anguish"] },
        { name: "Inspiration", traits: ["Persisting Images", "Warden's Feedback", "Illusionary Inspiration"] },
        { name: "Chronomancer", traits: ["All's Well That Ends Well", "Improved Alacrity", "Chronophantasma"] }
    ],
    skils: ["Well of Eternity", "Well of Action", "Well of Recall", "Signet of Inspiration", "Gravity Well"],
    pets: null,
    armor: {
        type: "light",
        helm: { stat: "Berserker", rune: "Superior Rune of Leadership" },
        shoulders: { stat: "Berserker", rune: "Superior Rune of Leadership" },
        coat: { stat: "Berserker", rune: "Superior Rune of Leadership" },
        gloves: { stat: "Berserker", rune: "Superior Rune of Leadership" },
        leggings: { stat: "Commander", rune: "Superior Rune of Leadership" },
        boots: { stat: "Berserker", rune: "Superior Rune of Leadership" }
    },
    trinket: {
        amulet: "Commander",
        ring1: "Commander",
        ring2: "Commander",
        earring1: "Commander",
        earring2: "Commander",
        back: "Commander"
    },
    weapons: {
        mainHand1: { type: "Sword", stat: "Berserker", sigils: ["Superior Sigil of Concentration"] },
        mainHand2: null,
        offHand1: { type: "Focus", stat: "Berserker", sigils: ["Superior Sigil of Force"] },
        offHand2: { type: "Shield", stat: "Berserker", sigils: ["Superior Sigil of Force"] }
    },
    food: ["Bowl of Nopalitos Sauté", "Magnanimous Maintenance Oil"]
};

builds["#VGmesCondi"] = {
    class: Mesmer,
    specializations: [
        { name: "Dueling", traits: ["Duelist's Discipline", "Blinding Dissipation", "Superiority Complex"] },
        { name: "Chaos", traits: ["Descent into Madness", "Chaotic Transference", "Bountiful Disillusionment"] },
        { name: "Illusions", traits: ["Compounding Power", "Phantasmal Haste", "Malicious Sorcery"] }
    ],
    skils: ["Signet of the Ether", "Mantra of Distraction", "Signet of Domination", "Signet of Midnight", "Signet of Humility"],
    pets: null,
    armor: {
        type: "light",
        helm: { stat: "Viper", rune: "Superior Rune of the Berserker" },
        shoulders: { stat: "Viper", rune: "Superior Rune of the Berserker" },
        coat: { stat: "Viper", rune: "Superior Rune of the Berserker" },
        gloves: { stat: "Viper", rune: "Superior Rune of the Berserker" },
        leggings: { stat: "Viper", rune: "Superior Rune of the Berserker" },
        boots: { stat: "Viper", rune: "Superior Rune of the Berserker" }
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
        mainHand1: { type: "Scepter", stat: "Viper", sigils: ["Superior Sigil of Malice"] },
        mainHand2: null,
        offHand1: { type: "Pistol", stat: "Viper", sigils: ["Superior Sigil of Geomancy"] },
        offHand2: { type: "Torch", stat: "Viper", sigils: ["Superior Sigil of Geomancy"] }
    },
    food: ["Rare Veggie Pizza", "Toxic Focusing Crystal"]
};

builds["#VGmesCondi2"] = builds["#VGmesCondi"];