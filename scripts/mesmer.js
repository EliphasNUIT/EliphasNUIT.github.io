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
    id: "40",
    traits: {
        // adept
        "Self-Deception": "1838",
        "Renewing Oasis": "1995",
        "Riddle of Sand": "1987",
        // master
        "Shards of Glass": "2009",
        "Mirage Mantle": "1913",
        "Mirrored Axes": "1978",
        // grand master
        "Infinite Horizon": "1942",
        "Elusive Mind": "2022",
        "Dune Cloak": "1890"
    }
};
//
var mesmerSkills = {

};
//


var Mesmer = new Class([Domination, Dueling, Chaos, Inspiration, Illusions, Chronomancer, Mirage], mesmerSkills);