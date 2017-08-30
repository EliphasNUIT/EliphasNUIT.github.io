// 
var Strength = {
    name: "Strength",
    id: "10",
    traits: {
        // adept
        "Brave Stride": "686",
        "Restorative Strength": "682",
        "Peak Performance": "687",
        // master
        "Body Blow": "693",
        "Forceful Greatsword": "713",
        "Great Fortitude": "712",
        // grand master
        "Berserker's Power": "681",
        "Might Makes Right": "680",
        "Merciless Hammer": "1688"
    }
};
// 
var Arms = {
    name: "Arms",
    id: "1",
    traits: {
        // adept
        "Wounding Precision": "701",
        "Signet Mastery": "705",
        "Opportunist": "700",
        // master
        "Unsuspecting Foe": "1889",
        "Rending Strikes": "1960",
        "Blademaster": "708",
        // grand master
        "Burst Precision": "692",
        "Furious": "1950",
        "Dual Wielding": "704"
    }
};
// 
var Defense = {
    name: "Defense",
    id: "45",
    traits: {
        // adept
        "Shield Master": "670",
        "Dogged March": "675",
        "Cull the Weak": "677",
        // master
        "Defy Pain": "673",
        "Armored Attack": "668",
        "Sundering Mace": "669",
        // grand master
        "Last Stand": "671",
        "Cleansing Ire": "674",
        "Rousing Resilience": "1687"
    }
};
// 
var Tactics = {
    name: "Tactics",
    id: "23",
    traits: {
        // adept
        "Leg Specialist": "756",
        "Quick Breathing": "738",
        "Empowered": "744",
        // master
        "Shrug It Off": "751",
        "Burning Arrows": "740",
        "Empower Allies": "1980",
        // grand master
        "Powerful Synergy": "2005",
        "Vigorous Shouts": "1866",
        "Phalanx Strength": "752"
    }
};
// 
var Discipline = {
    name: "Discipline",
    id: "24",
    traits: {
        // adept
        "Crack Shot": "721",
        "Warrior's Sprint": "1869",
        "Vengeful Return": "691",
        // master
        "Inspiring Battle Standard": "722",
        "Destruction of the Empowered": "729",
        "Brawler's Recovery": "1690",
        // grand master
        "Axe Mastery": "733",
        "Heightened Focus": "2035",
        "Burst Mastery": "753"
    }
};
//
var Berserker = {
    name: "Berserker",
    id: "40",
    traits: {
        // adept
        "Smash Brawler": "1838",
        "Last Blaze": "1995",
        "Savage Instinct": "1987",
        // master
        "Blood Reaction": "2009",
        "Heat the Soul": "1913",
        "Dead or Alive": "1978",
        // grand master
        "Bloody Roar": "1942",
        "King of Fires": "2022",
        "Eternal Champion": "1890"
    }
};
//
var Spellbreaker = {
    name: "Spellbreaker",
    id: "40",
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