var tempCondiArmor = [
    { slot: "helm", stat: "Sinister", rune: "Superior Rune of Balthazar" },
    { slot: "shoulders", stat: "Sinister", rune: "Superior Rune of Balthazar" },
    { slot: "coat", stat: "Viper's", rune: "Superior Rune of Balthazar" },
    { slot: "gloves", stat: "Sinister", rune: "Superior Rune of Balthazar" },
    { slot: "leggings", stat: "Sinister", rune: "Superior Rune of Balthazar" },
    { slot: "boots", stat: "Sinister", rune: "Superior Rune of Balthazar" }
];

var tempCondiTrait = [
    {
        name: "Fire",
        traits: ["Burning Precision", "Pyromancer's Training", "Persisting Flames"]
    },
    {
        name: "Arcane",
        traits: ["Arcane Precision", "Final Shielding", "Elemental Surge"]
    },
    {
        name: "Tempest",
        traits: ["Unstable Conduit", "Harmonious Conduit", "Imbued Melodies"]
    }
];

var tempCondiTrinket = [
    { slot: "amulet", stat: "Sinister" },
    { slot: "ring1", stat: "Sinister" },
    { slot: "ring2", stat: "Sinister" },
    { slot: "back", stat: "Sinister" },
    { slot: "earring1", stat: "Sinister" },
    { slot: "earring2", stat: "Sinister" }
];

var tempCondiFood = ["Rare Veggie Pizza", "Toxic Focusing Crystal"];

builds["#tempPS"] = {
    class: Elementalist,
    specializations: tempCondiTrait,
    skills: ["Arcane Brilliance", "Signet of Fire", "Arcane Power", "Glyph of Elemental Power", "Glyph of Elementals"],
    pets: null,
    armor: tempCondiArmor,
    trinket: tempCondiTrinket,
    weapons: [
        {
            slot: "mh1",
            type: "Scepter",
            stat: "Sinister",
            sigils: ["Superior Sigil of Bursting"]
        },
        {
            slot: "oh1",
            type: "Warhorn",
            stat: "Viper's",
            sigils: ["Superior Sigil of Smoldering"]
        },
        {
            slot: "mh2",
            type: "",
            stat: "",
            sigils: [""]
        },
        {
            slot: "oh2",
            type: "",
            stat: "",
            sigils: [""]
        }
    ],
    food: tempCondiFood
};


builds["#tempPSSab"] = {
    class: Elementalist,
    specializations: tempCondiTrait,
    skills: ["Arcane Brilliance", "Signet of Fire", "Arcane Power", "Lightning Flash", "Glyph of Elementals"],
    pets: null,
    armor: tempCondiArmor,
    trinket: tempCondiTrinket,
    weapons: [
        {
            slot: "mh1",
            type: "Scepter",
            stat: "Sinister",
            sigils: ["Superior Sigil of Bursting"]
        },
        {
            slot: "oh1",
            type: "Warhorn",
            stat: "Viper's",
            sigils: ["Superior Sigil of Smoldering"]
        },
        {
            slot: "mh2",
            type: "",
            stat: "",
            sigils: [""]
        },
        {
            slot: "oh2",
            type: "",
            stat: "",
            sigils: [""]
        }
    ],
    food: tempCondiFood
};

builds["#tempCondi"] = {
    class: Elementalist,
    specializations: tempCondiTrait,
    skills: [
        "Arcane Brilliance",
        "Signet of Fire",
        "Arcane Power",
        "Glyph of Elemental Power",
        "Conjure Fiery Greatsword"
    ],
    pets: null,
    armor: tempCondiArmor,
    trinket: tempCondiTrinket,
    weapons: [
        {
            slot: "mh1",
            type: "Dagger",
            stat: "Sinister",
            sigils: ["Superior Sigil of Bursting"]
        },
        {
            slot: "oh1",
            type: "Focus",
            stat: "Viper's",
            sigils: ["Superior Sigil of Smoldering"]
        },
        {
            slot: "mh2",
            type: "",
            stat: "",
            sigils: [""]
        },
        {
            slot: "oh2",
            type: "",
            stat: "",
            sigils: [""]
        }
    ],
    food: tempCondiFood
};

builds["#tempCondiSab"] = {
    class: Elementalist,
    specializations: tempCondiTrait,
    skills: ["Arcane Brilliance", "Signet of Fire", "Arcane Power", "Lightning Flash", "Conjure Fiery Greatsword"],
    pets: null,
    armor: tempCondiArmor,
    trinket: tempCondiTrinket,
    weapons: [
        {
            slot: "mh1",
            type: "Dagger",
            stat: "Sinister",
            sigils: ["Superior Sigil of Bursting"]
        },
        {
            slot: "oh1",
            type: "Focus",
            stat: "Viper's",
            sigils: ["Superior Sigil of Smoldering"]
        },
        {
            slot: "mh2",
            type: "",
            stat: "",
            sigils: [""]
        },
        {
            slot: "oh2",
            type: "",
            stat: "",
            sigils: [""]
        }
    ],
    food: tempCondiFood
};

var weavCondiArmor = [
    { slot: "helm", stat: "Sinister", rune: "Superior Rune of Balthazar" },
    { slot: "shoulders", stat: "Sinister", rune: "Superior Rune of Balthazar" },
    { slot: "coat", stat: "Viper's", rune: "Superior Rune of Balthazar" },
    { slot: "gloves", stat: "Sinister", rune: "Superior Rune of Balthazar" },
    { slot: "leggings", stat: "Sinister", rune: "Superior Rune of Balthazar" },
    { slot: "boots", stat: "Sinister", rune: "Superior Rune of Balthazar" }
];

var weavCondiTrait = [
    {
        name: "Fire",
        traits: ["Burning Precision", "Pyromancer's Training", "Persisting Flames"]
    },
    {
        name: "Arcane",
        traits: ["Arcane Precision", "Final Shielding", "Elemental Surge"]
    },
    {
        name: "Weaver",
        traits: ["Superior Elements", "Weaver's Prowess", "Elements of Rage"]
    }
];

var weavCondiTrinket = [
    { slot: "amulet", stat: "Sinister" },
    { slot: "ring1", stat: "Sinister" },
    { slot: "ring2", stat: "Sinister" },
    { slot: "back", stat: "Sinister" },
    { slot: "earring1", stat: "Sinister" },
    { slot: "earring2", stat: "Sinister" }
];

var weavCondiWeapons = [
    {
        slot: "mh1",
        type: "Dagger",
        stat: "Sinister",
        sigils: ["Superior Sigil of Bursting"]
    },
    {
        slot: "oh1",
        type: "Focus",
        stat: "Viper's",
        sigils: ["Major Sigil of Bursting"]
    },
    {
        slot: "mh2",
        type: "",
        stat: "",
        sigils: [""]
    },
    {
        slot: "oh2",
        type: "",
        stat: "",
        sigils: [""]
    }
];

var weavCondiFood = ["Rare Veggie Pizza", "Toxic Focusing Crystal"];

builds["#weavCondi"] = {
    class: Elementalist,
    specializations: weavCondiTrait,
    skills: [
        "Arcane Brilliance",
        "Signet of Fire",
        "Arcane Power",
        "Primordial Stance",
        "Conjure Fiery Greatsword"
    ],
    pets: null,
    armor: weavCondiArmor,
    trinket: weavCondiTrinket,
    weapons: weavCondiWeapons,
    food: weavCondiFood
};

builds["#weavCondiSab"] = {
    class: Elementalist,
    specializations: weavCondiTrait,
    skills: ["Arcane Brilliance", "Signet of Fire", "Arcane Power", "Lightning Flash", "Conjure Fiery Greatsword"],
    pets: null,
    armor: weavCondiArmor,
    trinket: weavCondiTrinket,
    weapons: weavCondiWeapons,
    food: weavCondiFood
};

////// POWER

builds["#weavPower"] = {
    class: Elementalist,
    specializations: [
        {
            name: "Fire",
            traits: ["Burning Precision", "Pyromancer's Training", "Persisting Flames"]
        },
        {
            name: "Arcane",
            traits: ["Renewing Stamina", "Elemental Contingency", "Bountiful Power"]
        },
        {
            name: "Weaver",
            traits: ["Superior Elements", "Swift Revenge", "Elements of Rage"]
        }
    ],
    skills: [
        "Glyph of Elemental Harmony",
        "Conjure Frost Bow",
        "Glyph of Storms",
        "Signet of Fire",
        "Conjure Fiery Greatsword"
    ],
    pets: null,
    armor: [
        { slot: "helm", stat: "Berserker's", rune: "Superior Rune of the Scholar" },
        {
            slot: "shoulders",
            stat: "Berserker's",
            rune: "Superior Rune of the Scholar"
        },
        { slot: "coat", stat: "Berserker's", rune: "Superior Rune of the Scholar" },
        {
            slot: "gloves",
            stat: "Berserker's",
            rune: "Superior Rune of the Scholar"
        },
        {
            slot: "leggings",
            stat: "Berserker's",
            rune: "Superior Rune of the Scholar"
        },
        { slot: "boots", stat: "Berserker's", rune: "Superior Rune of the Scholar" }
    ],
    trinket: [
        { slot: "amulet", stat: "Berserker's" },
        { slot: "ring1", stat: "Berserker's" },
        { slot: "ring2", stat: "Berserker's" },
        { slot: "back", stat: "Berserker's" },
        { slot: "earring1", stat: "Berserker's" },
        { slot: "earring2", stat: "Berserker's" }
    ],
    weapons: [
        {
            slot: "mh1",
            type: "Staff",
            stat: "Berserker's",
            sigils: ["Superior Sigil of Force", "Superior Sigil of Accuracy"]
        },
        {
            slot: "oh1",
            type: "",
            stat: "",
            sigils: [""]
        },
        {
            slot: "mh2",
            type: "",
            stat: "",
            sigils: [""]
        },
        {
            slot: "oh2",
            type: "",
            stat: "",
            sigils: [""]
        }
    ],
    food: ["Bowl of Sweet and Spicy Butternut Squash Soup", "Superior Sharpening Stone"]
};

builds["#weavPower2"] = builds["#weavPower"];

builds["#weavPower3"] = builds["#weavPower"];

builds["#weavPower4"] = builds["#weavPower"];

builds["#tempPowerFA"] = {
    class: Elementalist,
    specializations: [
        {
            name: "Fire",
            traits: ["Burning Precision", "Pyromancer's Training", "Persisting Flames"]
        },
        {
            name: "Air",
            traits: ["Ferocious Winds", "Aeromancer's Training", "Fresh Air"]
        },
        {
            name: "Tempest",
            traits: ["Unstable Conduit", "Harmonious Conduit", "Imbued Melodies"]
        }
    ],
    skills: [
        "Glyph of Elemental Harmony",
        "Conjure Lightning Hammer",
        "Glyph of Storms",
        "Signet of Fire",
        "Conjure Fiery Greatsword"
    ],
    pets: null,
    armor: [
        { slot: "helm", stat: "Berserker's", rune: "Superior Rune of the Scholar" },
        {
            slot: "shoulders",
            stat: "Berserker's",
            rune: "Superior Rune of the Scholar"
        },
        { slot: "coat", stat: "Berserker's", rune: "Superior Rune of the Scholar" },
        {
            slot: "gloves",
            stat: "Berserker's",
            rune: "Superior Rune of the Scholar"
        },
        {
            slot: "leggings",
            stat: "Berserker's",
            rune: "Superior Rune of the Scholar"
        },
        { slot: "boots", stat: "Berserker's", rune: "Superior Rune of the Scholar" }
    ],
    trinket: [
        { slot: "amulet", stat: "Berserker's" },
        { slot: "ring1", stat: "Berserker's" },
        { slot: "ring2", stat: "Berserker's" },
        { slot: "back", stat: "Berserker's" },
        { slot: "earring1", stat: "Berserker's" },
        { slot: "earring2", stat: "Berserker's" }
    ],
    weapons: [
        {
            slot: "mh1",
            type: "Staff",
            stat: "Berserker's",
            sigils: ["Superior Sigil of Force", "Superior Sigil of Accuracy"]
        },
        {
            slot: "oh1",
            type: "",
            stat: "",
            sigils: [""]
        },
        {
            slot: "mh2",
            type: "",
            stat: "",
            sigils: [""]
        },
        {
            slot: "oh2",
            type: "",
            stat: "",
            sigils: [""]
        }
    ],
    food: ["Bowl of Sweet and Spicy Butternut Squash Soup", "Superior Sharpening Stone"]
};

builds["#tempPowerFA2"] = builds["#tempPowerFA"];

builds["#tempPowerFA3"] = builds["#tempPowerFA"];

builds["#tempPowerFA4"] = builds["#tempPowerFA"];

builds["#weavPowerKC"] = {
    class: Elementalist,
    specializations: [
        {
            name: "Fire",
            traits: ["Burning Precision", "Pyromancer's Training", "Persisting Flames"]
        },
        {
            name: "Air",
            traits: ["Ferocious Winds", "Tempest Defense", "Bolt to the Heart"]
        },
        {
            name: "Weaver",
            traits: ["Superior Elements", "Swift Revenge", "Elements of Rage"]
        }
    ],
    skills: [
        "Glyph of Elemental Harmony",
        "Conjure Frost Bow",
        "Glyph of Storms",
        "Signet of Fire",
        "Conjure Fiery Greatsword"
    ],
    pets: null,
    armor: [
        { slot: "helm", stat: "Berserker's", rune: "Superior Rune of the Scholar" },
        {
            slot: "shoulders",
            stat: "Berserker's",
            rune: "Superior Rune of the Scholar"
        },
        { slot: "coat", stat: "Berserker's", rune: "Superior Rune of the Scholar" },
        {
            slot: "gloves",
            stat: "Berserker's",
            rune: "Superior Rune of the Scholar"
        },
        {
            slot: "leggings",
            stat: "Berserker's",
            rune: "Superior Rune of the Scholar"
        },
        { slot: "boots", stat: "Berserker's", rune: "Superior Rune of the Scholar" }
    ],
    trinket: [
        { slot: "amulet", stat: "Berserker's" },
        { slot: "ring1", stat: "Berserker's" },
        { slot: "ring2", stat: "Berserker's" },
        { slot: "back", stat: "Assassin's" },
        { slot: "earring1", stat: "Berserker's" },
        { slot: "earring2", stat: "Berserker's" }
    ],
    weapons: [
        {
            slot: "mh1",
            type: "Staff",
            stat: "Assassin's",
            sigils: ["Superior Sigil of Force", "Superior Sigil of Impact"]
        },
        {
            slot: "oh1",
            type: "",
            stat: "",
            sigils: [""]
        },
        {
            slot: "mh2",
            type: "",
            stat: "",
            sigils: [""]
        },
        {
            slot: "oh2",
            type: "",
            stat: "",
            sigils: [""]
        }
    ],
    food: ["Bowl of Sweet and Spicy Butternut Squash Soup", "Superior Sharpening Stone"]
};

builds["#weavPowerKC2"] = builds["#weavPowerKC"];

builds["#weavPowerKC3"] = builds["#weavPowerKC"];

builds["#weavPowerKC4"] = builds["#weavPowerKC"];

builds["#tempAura"] = {
    class: Elementalist,
    specializations: [
        {
            name: "Water",
            traits: ["Soothing Ice", "Aquamancer's Training", "Soothing Power"]
        },
        {
            name: "Arcane",
            traits: ["Renewing Stamina", "Arcane Resurrection", "Evasive Arcana"]
        },
        {
            name: "Tempest",
            traits: ["Latent Stamina", "Invigorating Torrents", "Elemental Bastion"]
        }
    ],
    skills: ['"Wash the Pain Away!"', '"Feel the Burn!"', '"Flash-Freeze!"', "Lightning Flash", '"Rebound!"'],
    pets: null,
    armor: [
        { slot: "helm", stat: "Magi's", rune: "Superior Rune of the Monk" },
        {
            slot: "shoulders",
            stat: "Magi's",
            rune: "Superior Rune of the Monk"
        },
        { slot: "coat", stat: "Magi's", rune: "Superior Rune of the Monk" },
        {
            slot: "gloves",
            stat: "Magi's",
            rune: "Superior Rune of the Monk"
        },
        {
            slot: "leggings",
            stat: "Magi's",
            rune: "Superior Rune of the Monk"
        },
        { slot: "boots", stat: "Magi's", rune: "Superior Rune of the Monk" }
    ],
    trinket: [
        { slot: "amulet", stat: "Magi's" },
        { slot: "ring1", stat: "Magi's" },
        { slot: "ring2", stat: "Magi's" },
        { slot: "back", stat: "Magi's" },
        { slot: "earring1", stat: "Magi's" },
        { slot: "earring2", stat: "Magi's" }
    ],
    weapons: [
        {
            slot: "mh1",
            type: "Staff",
            stat: "Magi's",
            sigils: ["Superior Sigil of Transference", "Superior Sigil of Water"]
        },
        {
            slot: "oh1",
            type: "",
            stat: "",
            sigils: [""]
        },
        {
            slot: "mh2",
            type: "",
            stat: "",
            sigils: [""]
        },
        {
            slot: "oh2",
            type: "",
            stat: "",
            sigils: [""]
        }
    ],
    food: ["Delicious Rice Ball", "Bountiful Maintenance Oil"]
};
