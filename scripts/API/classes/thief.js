// 
var Deadly_Arts = {
    name: "Deadly Arts",
    id: "28",
    traits: {
        // adept
        "Dagger Training": "1245",
        "Mug": "1276",
        "Trappers Respite": "1164",
        // master
        "Deadly Trapper": "1169",
        "Panic Strike": "1292",
        "Revealed Training": "1704",
        // grand master
        "Potent Poison": "1291",
        "Improvisation": "1167",
        "Executioner": "1269"
    }
};
// 
var Critical_Strikes = {
    name: "Critical Strikes",
    id: "35",
    traits: {
        // adept
        "Assassin's Fury": "1209",
        "Signets of Power": "1267",
        "Twin Fangs": "1268",
        // master
        "Sundering Strikes": "1170",
        "Practiced Tolerance": "1272",
        "Ankle Shots": "1299",
        // grand master
        "No Quarter": "1904",
        "Hidden Killer": "1215",
        "Invigorating Precision": "1702"
    }
};
// 
var Shadow_Arts = {
    name: "Shadow Arts",
    id: "20",
    traits: {
        // adept
        "Last Refuge": "1160",
        "Concealed Defeat": "1293",
        "Shadow's Embrace": "1284",
        // master
        "Shadow Protector": "1297",
        "Hidden Thief": "1130",
        "Leeching Venoms": "1300",
        // grand master
        "Cloaked in Shadow": "1134",
        "Shadow's Rejuvenation": "1135",
        "Rending Shade": "1162"
    }
};
// 
var Acrobatics = {
    name: "Acrobatics",
    id: "54",
    traits: {
        // adept
        "Instant Reflexes": "1112",
        "Vigorous Recovery": "1289",
        "Pain Response": "1237",
        // master
        "Guarded Initiation": "1241",
        "Swindler's Equilibrium": "1192",
        "Hard to Catch": "1290",
        // grand master
        "Assassin's Reward": "1238",
        "Upper Hand": "1295",
        "Don't Stop": "1703"
    }
};
// 
var Trickery = {
    name: "Trickery",
    id: "44",
    traits: {
        // adept
        "Uncatchable": "1159",
        "Burst of Agility": "1252",
        "Thrill of the Crime": "1163",
        // master
        "Bountiful Theft": "1277",
        "Trickster": "1286",
        "Pressure Striking": "1190",
        // grand master
        "Quick Pockets": "1187",
        "Sleight of Hand": "1158",
        "Bewildering Ambush": "1706"
    }
};
//
var Daredevil = {
    name: "Daredevil",
    id: "7",
    traits: {
        // adept
        "Havoc Mastery": "1933",
        "Weakening Strikes": "2023",
        "Brawler's Tenacity": "1949",
        // master
        "Staff Master": "1884",
        "Escapist's Absolution": "1893",
        "Impacting Disruption": "1975",
        // grand master
        "Lotus Training": "1833",
        "Unhindered Combatant": "1964",
        "Bounding Dodger": "2047"
    }
};
//
var Deadeye = {
    name: "Deadeye",
    id: "58",
    traits: {
        // adept
        "Revealed Malice": "2145",
        "Iron Sight": "2173",
        "One in the Chamber": "2136",
        // master
        "Silent Scope": "2118",
        "Unforgiving": "2078",
        "Peripheral Vision": "2160",
        // grand master
        "Maleficent Seven": "2111",
        "Be Quick or Be Killed": "2093",
        "Fire for Effect": "2146"
    }
};
//
var tfSkills = {

};
//


var Thief = new Class([Deadly_Arts, Critical_Strikes, Shadow_Arts, Acrobatics, Trickery, Daredevil, Deadeye], tfSkills);

