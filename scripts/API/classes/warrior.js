// 
var Strength = {
    name: "Strength",
    id: "4",
    traits: {
        // adept
        "Brave Stride": "1447",
        "Restorative Strength": "1451",
        "Peak Performance": "1444",
        // master
        "Body Blow": "2000",
        "Forceful Greatsword": "1338",
        "Great Fortitude": "1449",
        // grand master
        "Berserker's Power": "1437",
        "Might Makes Right": "1454",
        "Merciless Hammer": "1440"
    }
};
// 
var Arms = {
    name: "Arms",
    id: "36",
    traits: {
        // adept
        "Wounding Precision": "1455",
        "Signet Mastery": "1344",
        "Opportunist": "1334",
        // master
        "Unsuspecting Foe": "1315",
        "Rending Strikes": "1316",
        "Blademaster": "1333",
        // grand master
        "Burst Precision": "1336",
        "Furious": "1346",
        "Dual Wielding": "1707"
    }
};
// 
var Defense = {
    name: "Defense",
    id: "22",
    traits: {
        // adept
        "Shield Master": "1376",
        "Dogged March": "1488",
        "Cull the Weak": "1372",
        // master
        "Defy Pain": "1368",
        "Armored Attack": "1379",
        "Sundering Mace": "1367",
        // grand master
        "Last Stand": "1375",
        "Cleansing Ire": "1649",
        "Rousing Resilience": "1708"
    }
};
// 
var Tactics = {
    name: "Tactics",
    id: "11",
    traits: {
        // adept
        "Leg Specialist": "1469",
        "Quick Breathing": "1474",
        "Empowered": "1471",
        // master
        "Shrug It Off": "1486",
        "Burning Arrows": "1479",
        "Empower Allies": "1482",
        // grand master
        "Powerful Synergy": "1667",
        "Vigorous Shouts": "1470",
        "Phalanx Strength": "1711"
    }
};
// 
var Discipline = {
    name: "Discipline",
    id: "51",
    traits: {
        // adept
        "Crack Shot": "1329",
        "Warrior's Sprint": "1413",
        "Vengeful Return": "1381",
        // master
        "Inspiring Battle Standard": "1484",
        "Destruction of the Empowered": "1489",
        "Brawler's Recovery": "1709",
        // grand master
        "Axe Mastery": "1369",
        "Heightened Focus": "1371",
        "Burst Mastery": "1657"
    }
};
//
var Berserker = {
    name: "Berserker",
    id: "18",
    traits: {
        // adept
        "Smash Brawler": "2049",
        "Last Blaze": "2039",
        "Savage Instinct": "1977",
        // master
        "Blood Reaction": "2011",
        "Heat the Soul": "2042",
        "Dead or Alive": "2002",
        // grand master
        "Bloody Roar": "1928",
        "King of Fires": "2038",
        "Eternal Champion": "2043"
    }
};
//
var Spellbreaker = {
    name: "Spellbreaker",
    id: "61",
    traits: {
        // adept
        "Pure Strike": "1838",
        "Guard Counter": "1995",
        "No Escape": "1987",
        // master
        "Loss Aversion": "2009",
        "Slow Counter": "1913",
        "Sun and Moon Style": "1978",
        // grand master
        "Enchantment Collapse": "1942",
        "Revenge Counter": "2022",
        "Magebane Tether": "1890"
    }
};
//
var warriorSkills = {

};
//


var Warrior = new Class([Strength, Arms, Defense, Tactics, Discipline, Berserker, Spellbreaker], warriorSkills);

