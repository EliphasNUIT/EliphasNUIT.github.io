// 
var Deadly_Arts = {
    name: "Deadly Arts",
    id: "10",
    traits: {
        // adept
        "Dagger Training": "686",
        "Mug": "682",
        "Trappers Respite": "687",
        // master
        "Deadly Trapper": "693",
        "Panic Strike": "713",
        "Revealed Training": "712",
        // grand master
        "Potent Poison": "681",
        "Improvisation": "680",
        "Executioner": "1688"
    }
};
// 
var Critical_Strikes = {
    name: "Critical Strikes",
    id: "1",
    traits: {
        // adept
        "Assassin's Fury": "701",
        "Signets of Power": "705",
        "Twin Fangs": "700",
        // master
        "Sundering Strikes": "1889",
        "Practiced Tolerance": "1960",
        "Ankle Shots": "708",
        // grand master
        "No Quarter": "692",
        "Hidden Killer": "1950",
        "Invigorating Precision": "704"
    }
};
// 
var Shadow_Arts = {
    name: "Shadow Arts",
    id: "45",
    traits: {
        // adept
        "Last Refuge": "670",
        "Concealed Defeat": "675",
        "Shadow's Embrace": "677",
        // master
        "Shadow Protector": "673",
        "Hidden Thief": "668",
        "Leeching Venoms": "669",
        // grand master
        "Cloaked in Shadow": "671",
        "Shadow's Rejuvenation": "674",
        "Rending Shade": "1687"
    }
};
// 
var Acrobatics = {
    name: "Acrobatics",
    id: "23",
    traits: {
        // adept
        "Instant Reflexes": "756",
        "Vigorous Recovery": "738",
        "Pain Response": "744",
        // master
        "Guarded Initiation": "751",
        "Swindler's Equilibrium": "740",
        "Hard to Catch": "1980",
        // grand master
        "Assassin's Reward": "2005",
        "Upper Hand": "1866",
        "Don't Stop": "752"
    }
};
// 
var Trickery = {
    name: "Trickery",
    id: "24",
    traits: {
        // adept
        "Uncatchable": "721",
        "Burst of Agility": "1869",
        "Thrill of the Crime": "691",
        // master
        "Bountiful Theft": "722",
        "Trickster": "729",
        "Pressure Striking": "1690",
        // grand master
        "Quick Pockets": "733",
        "Sleight of Hand": "2035",
        "Bewildering Ambush": "753"
    }
};
//
var Daredevil = {
    name: "Daredevil",
    id: "40",
    traits: {
        // adept
        "Havoc Mastery": "1838",
        "Weakening Strikes": "1995",
        "Brawler's Tenacity": "1987",
        // master
        "Staff Master": "2009",
        "Escapist's Absolution": "1913",
        "Impacting Disruption": "1978",
        // grand master
        "Lotus Training": "1942",
        "Unhindered Combatant": "2022",
        "Bounding Dodger": "1890"
    }
};
//
var Deadeye = {
    name: "Deadeye",
    id: "40",
    traits: {
        // adept
        "Revealed Malice": "1838",
        "Iron Sight": "1995",
        "One in the Chamber": "1987",
        // master
        "Silent Scope": "2009",
        "Unforgiving": "1913",
        "Peripheral Vision": "1978",
        // grand master
        "Maleficent Seven": "1942",
        "Be Quick or Be Killed": "2022",
        "Fire for Effect": "1890"
    }
};
//
var tfSkills = {

};
//


var Thief = new Class([Deadly_Arts, Critical_Strikes, Shadow_Arts, Acrobatics, Trickery, Daredevil, Deadeye], tfSkills);