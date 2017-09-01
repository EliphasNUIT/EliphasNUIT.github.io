// 
var Fire = {
    name: "Fire",
    id: "31",
    traits: {
        // adept
        "Burning Precision": "296",
        "Conjurer": "328",
        "Burning Fire": "335",
        // master
        "Pyromancer's Training": "325",
        "One with Fire": "340",
        "Power Overwhelming": "334",
        // grand master
        "Persisting Flames": "1510",
        "Pyromancer's Puissance": "294",
        "Blinding Ashes": "1675"
    }
};
// 
var Air = {
    name: "Air",
    id: "41",
    traits: {
        // adept
        "Zephyr's Boon": "227",
        "One with Air": "224",
        "Ferocious Winds": "232",
        // master
        "Inscription": "229",
        "Aeromancer's Training": "214",
        "Tempest Defense": "1502",
        // grand master
        "Bolt to the Heart": "226",
        "Fresh Air": "1053",
        "Lightning Rod": "1672"
    }
};
// 
var Earth = {
    name: "Earth",
    id: "26",
    traits: {
        // adept
        "Earth's Embrace": "282",
        "Serrated Stones": "1507",
        "Elemental Shielding": "289",
        // master
        "Strength of Stone": "275",
        "Rock Solid": "281",
        "Geomancer's Training": "277",
        // grand master
        "Diamond Skin": "1508",
        "Written in Stone": "287",
        "Stone Heart": "1674"
    }
};
// 
var Water = {
    name: "Water",
    id: "17",
    traits: {
        // adept
        "Soothing Ice": "348",
        "Piercing Shards": "363",
        "Stop, Drop, and Roll": "360",
        // master
        "Cleansing Wave": "358",
        "Soothing Disruption": "364",
        "Aquamancer's Training": "349",
        // grand master
        "Cleansing Water": "362",
        "Powerful Aura": "361",
        "Soothing Power": "2028"
    }
};
// 
var Arcane = {
    name: "Arcane",
    id: "37",
    traits: {
        // adept
        "Arcane Precision": "253",
        "Renewing Stamina": "266",
        "Arcane Abatement": "1487",
        // master
        "Arcane Resurrection": "265",
        "Elemental Contingency": "1673",
        "Final Shielding": "257",
        // grand master
        "Evasive Arcana": "238",
        "Elemental Surge": "263",
        "Bountiful Power": "1511"
    }
};
//
var Tempest = {
    name: "Tempest",
    id: "48",
    traits: {
        // adept
        "Gale Song": "1952",
        "Latent Stamina": "1962",
        "Unstable Conduit": "1886",
        // master
        "Tempestuous Aria": "1891",
        "Invigorating Torrents": "1902",
        "Harmonious Conduit": "2015",
        // grand master
        "Imbued Melodies": "1839",
        "Lucid Singularity": "2033",
        "Elemental Bastion": "1986"
    }
};
//
var Weaver = {
    name: "Weaver",
    id: "56",
    traits: {
        // adept
        "Superior Elements": "2177",
        "Elemental Pursuit": "2165",
        "Master's Fortitude": "2115",
        // master
        "Weaver's Prowess": "2180",
        "Swift Revenge": "2061",
        "Bolstered Elements": "2170",
        // grand master
        "Elements of Rage": "2131",
        "Unravel Hexes": "2090",
        "Invigorating Strikes": "2138"
    }
};
//
var elemSkills = {

};
//


var Elementalist = new Class([Fire, Air, Earth, Water, Arcane, Tempest, Weaver], elemSkills);

builds["#tempPS"] = {
    class: Elementalist,
    specializations: [
        { name: "Fire", traits: ["Burning Precision", "Pyromancer's Training", "Persisting Flames"] },
        { name: "Arcane", traits: ["Arcane Precision", "Final Shielding", "Elemental Surge"] },
        { name: "Tempest", traits: ["Unstable Conduit", "Harmonious Conduit", "Imbued Melodies"] }
    ],
    skils: ["Arcane Brilliance", "Signet of Fire", "Arcane Power", "Glyph of Elemental Power", "Glyph of Elementals"],
    pets: null,
    armor: {
        type: "light",
        helm: { stat: "Sinister", rune: "Superior Rune of Balthazar" },
        shoulders: { stat: "Sinister", rune: "Superior Rune of Balthazar" },
        coat: { stat: "Viper", rune: "Superior Rune of Balthazar" },
        gloves: { stat: "Sinister", rune: "Superior Rune of Balthazar" },
        leggings: { stat: "Sinister", rune: "Superior Rune of Balthazar" },
        boots: { stat: "Sinister", rune: "Superior Rune of Balthazar" }
    },
    trinket: {
        amulet: "Sinister",
        ring1: "Sinister",
        ring2: "Sinister",
        earring1: "Sinister",
        earring2: "Sinister",
        back: "Sinister"
    },
    weapons: {
        mainHand1: { type: "Scepter", stat: "Sinister", sigils: ["Superior Sigil of Bursting"] },
        mainHand2: null,
        offHand1: { type: "Warhorn", stat: "Viper", sigils: ["Superior Sigil of Smoldering"] },
        offHand2: null
    },
    food: ["Rare Veggie Pizza", "Toxic Focusing Crystal"]
};