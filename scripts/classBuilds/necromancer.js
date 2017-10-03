var condiReaperTraits = [
    {
        name: "Curses",
        traits: ["Chilling Darkness", "Master of Corruption", "Lingering Curse"]
    },
    {
        name: "Soul Reaping",
        traits: ["Unyielding Blast", "Vital Persistence", "Dhuumfire"]
    },
    {
        name: "Reaper",
        traits: ["Chilling Nova", "Decimate Defenses", "Deathly Chill"]
    }
];

var condiReaperArmor = [
    { slot: "helm", stat: "Viper's", rune: "Superior Rune of the Krait" },
    {
        slot: "shoulders",
        stat: "Viper's",
        rune: "Superior Rune of the Krait"
    },
    { slot: "coat", stat: "Viper's", rune: "Superior Rune of the Krait" },
    {
        slot: "gloves",
        stat: "Viper's",
        rune: "Superior Rune of the Krait"
    },
    {
        slot: "leggings",
        stat: "Viper's",
        rune: "Superior Rune of the Krait"
    },
    { slot: "boots", stat: "Viper's", rune: "Superior Rune of the Krait" }
];
var condiReaperTrinket = [
    { slot: "amulet", stat: "Viper's" },
    { slot: "ring1", stat: "Sinister" },
    { slot: "ring2", stat: "Viper's" },
    { slot: "back", stat: "Sinister" },
    { slot: "earring1", stat: "Sinister" },
    { slot: "earring2", stat: "Sinister" }
];
var condiReaperWeapons = [
    {
        slot: "mh1",
        type: "Scepter",
        stat: "Viper's",
        sigils: ["Superior Sigil of Geomancy"]
    },
    {
        slot: "oh1",
        type: "Dagger",
        stat: "Viper's",
        sigils: ["Superior Sigil of Earth"]
    },
    {
        slot: "mh2",
        type: "Greatsword",
        stat: "Viper's",
        sigils: ["Superior Sigil of Geomancy", "Superior Sigil of Earth"]
    },
    {
        slot: "oh2",
        type: "",
        stat: "",
        sigils: [""]
    }
];

var condiNecroFood = ["Rare Veggie Pizza", "Toxic Focusing Crystal"];

builds["reaperCondi"] = {
    class: Necromancer,
    specializations: condiReaperTraits,
    skills: ["Signet of Vampirism", "Summon Bone Fiend", "Blood Is Power", "Epidemic", "Plaguelands"],
    pets: null,
    armor: condiReaperArmor,
    trinket: condiReaperTrinket,
    weapons: condiReaperWeapons,
    food: condiNecroFood
};

builds["reaperCondiDeimos"] = {
    class: Necromancer,
    specializations: condiReaperTraits,
    skills: ["Signet of Vampirism", "Summon Bone Fiend", "Blood Is Power", "Epidemic", "Summon Flesh Golem"],
    pets: null,
    armor: condiReaperArmor,
    trinket: condiReaperTrinket,
    weapons: condiReaperWeapons,
    food: condiNecroFood
};

var condiScourgeArmor = [
    { slot: "helm", stat: "Viper's", rune: "Superior Rune of the Nightmare" },
    {
        slot: "shoulders",
        stat: "Viper's",
        rune: "Superior Rune of the Nightmare"
    },
    { slot: "coat", stat: "Viper's", rune: "Superior Rune of the Nightmare" },
    {
        slot: "gloves",
        stat: "Viper's",
        rune: "Superior Rune of the Nightmare"
    },
    {
        slot: "leggings",
        stat: "Viper's",
        rune: "Superior Rune of the Trapper"
    },
    { slot: "boots", stat: "Viper's", rune: "Superior Rune of the Trapper" }
];

var condiScourgeTrinket = [
    { slot: "amulet", stat: "Viper's" },
    { slot: "ring1", stat: "Viper's" },
    { slot: "ring2", stat: "Viper's" },
    { slot: "back", stat: "Sinister" },
    { slot: "earring1", stat: "Viper's" },
    { slot: "earring2", stat: "Viper's" }
];

var condiScourgeWeapons = [
    {
        slot: "mh1",
        type: "Scepter",
        stat: "Viper's",
        sigils: ["Superior Sigil of Malice"]
    },
    {
        slot: "oh1",
        type: "Dagger",
        stat: "Viper's",
        sigils: ["Superior Sigil of Geomancy"]
    },
    {
        slot: "mh2",
        type: "",
        stat: "",
        sigils: [""]
    },
    {
        slot: "oh2",
        type: "Torch",
        stat: "Viper's",
        sigils: ["Superior Sigil of Geomancy"]
    }
];

builds["scourgeCondi"] = {
    class: Necromancer,
    specializations: [
        {
            name: "Curses",
            traits: ["Terrifying Descent", "Master of Corruption", "Lingering Curse"]
        },
        {
            name: "Soul Reaping",
            traits: ["Unyielding Blast", "Vital Persistence", "Dhuumfire"]
        },
        {
            name: "Scourge",
            traits: ["Fell Beacon", "Sadistic Searing", "Demonic Lore"]
        }
    ],
    skills: ["Signet of Vampirism", "Summon Shadow Fiend", "Trail of Anguish", "Epidemic", "Plaguelands"],
    pets: null,
    armor: condiScourgeArmor,
    trinket: condiScourgeTrinket,
    weapons: condiScourgeWeapons,
    food: condiNecroFood
};

builds["scourgeCondiDei"] = {
    class: Necromancer,
    specializations: [
        {
            name: "Curses",
            traits: ["Terrifying Descent", "Master of Corruption", "Lingering Curse"]
        },
        {
            name: "Soul Reaping",
            traits: ["Unyielding Blast", "Vital Persistence", "Dhuumfire"]
        },
        {
            name: "Scourge",
            traits: ["Fell Beacon", "Desert Empowerment", "Demonic Lore"]
        }
    ],
    skills: ["Summon Blood Fiend", "Summon Shadow Fiend", "Blood Is Power", "Epidemic", "Summon Flesh Golem"],
    pets: null,
    armor: condiScourgeArmor,
    trinket: condiScourgeTrinket,
    weapons: condiScourgeWeapons,
    food: condiNecroFood
};
