// 
var Fire = {
    name: "Fire",
    id: "10",
    traits: {
        // adept
        "Burning Precision": "686",
        "Conjurer": "682",
        "Burning Fire": "687",
        // master
        "Pyromancer's Training": "693",
        "One with Fire": "713",
        "Power Overwhelming": "712",
        // grand master
        "Persisting Flames": "681",
        "Pyromancer's Puissance": "680",
        "Blinding Ashes": "1688"
    }
};
// 
var Air = {
    name: "Air",
    id: "1",
    traits: {
        // adept
        "Zephyr's Boon": "701",
        "One with Air": "705",
        "Ferocious Winds": "700",
        // master
        "Inscription": "1889",
        "Aeromancer's Training": "1960",
        "Tempest Defense": "708",
        // grand master
        "Bolt to the Heart": "692",
        "Fresh Air": "1950",
        "Lightning Rod": "704"
    }
};
// 
var Earth = {
    name: "Earth",
    id: "45",
    traits: {
        // adept
        "Earth's Embrace": "670",
        "Serrated Stones": "675",
        "Elemental Shielding": "677",
        // master
        "Strength of Stone": "673",
        "Rock Solid": "668",
        "Geomancer's Training": "669",
        // grand master
        "Diamond Skin": "671",
        "Written in Stone": "674",
        "Stone Heart": "1687"
    }
};
// 
var Water = {
    name: "Water",
    id: "23",
    traits: {
        // adept
        "Soothing Ice": "756",
        "Piercing Shards": "738",
        "Stop, Drop, and Roll": "744",
        // master
        "Cleansing Wave": "751",
        "Soothing Disruption": "740",
        "Aquamancer's Training": "1980",
        // grand master
        "Cleansing Water": "2005",
        "Powerful Aura": "1866",
        "Soothing Power": "752"
    }
};
// 
var Arcane = {
    name: "Arcane",
    id: "24",
    traits: {
        // adept
        "Arcane Precision": "721",
        "Renewing Stamina": "1869",
        "Arcane Abatement": "691",
        // master
        "Arcane Resurrection": "722",
        "Elemental Contingency": "729",
        "Final Shielding": "1690",
        // grand master
        "Evasive Arcana": "733",
        "Elemental Surge": "2035",
        "Bountiful Power": "753"
    }
};
//
var Tempest = {
    name: "Tempest",
    id: "40",
    traits: {
        // adept
        "Gale Song": "1838",
        "Latent Stamina": "1995",
        "Unstable Conduit": "1987",
        // master
        "Tempestuous Aria": "2009",
        "Invigorating Torrents": "1913",
        "Harmonious Conduit": "1978",
        // grand master
        "Imbued Melodies": "1942",
        "Lucid Singularity": "2022",
        "Elemental Bastion": "1890"
    }
};
//
var Weaver = {
    name: "Weaver",
    id: "40",
    traits: {
        // adept
        "Superior Elements": "1838",
        "Elemental Pursuit": "1995",
        "Master's Fortitude": "1987",
        // master
        "Weaver's Prowess": "2009",
        "Swift Revenge": "1913",
        "Bolstered Elements": "1978",
        // grand master
        "Elements of Rage": "1942",
        "Unravel Hexes": "2022",
        "Invigorating Strikes": "1890"
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
        { name: "Fire", traits: ["Duelist's Discipline", "Blinding Dissipation", "Superiority Complex"] },
        { name: "Arcane", traits: ["Descent into Madness", "Chaotic Transference", "Bountiful Disillusionment"] },
        { name: "Tempest", traits: ["Compounding Power", "Phantasmal Haste", "Malicious Sorcery"] }
    ],
    skils: ["Signet of the Ether", "Mantra of Distraction", "Signet of Domination", "Signet of Midnight", "Signet of Humility"],
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
        offHand1: { type: "Warhorn", stat: "Viper", sigils: ["Superior Sigil of Geomancy"] },
        offHand2: null
    },
    food: ["Rare Veggie Pizza", "Toxic Focusing Crystal"]
};