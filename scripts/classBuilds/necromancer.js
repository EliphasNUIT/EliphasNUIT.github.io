var condiScourgeFood = ["Rare Veggie Pizza", "Master Tuning Crystal"];

var condiScourgeArmor = [
    { slot: "helm", stat: "Viper's", rune: "Superior Rune of the Renegade" },
    {
        slot: "shoulders",
        stat: "Viper's",
        rune: "Superior Rune of the Renegade"
    },
    { slot: "coat", stat: "Viper's", rune: "Superior Rune of the Renegade" },
    {
        slot: "gloves",
        stat: "Viper's",
        rune: "Superior Rune of the Renegade"
    },
    {
        slot: "leggings",
        stat: "Viper's",
        rune: "Superior Rune of the Renegade"
    },
    { slot: "boots", stat: "Viper's", rune: "Superior Rune of the Renegade" }
];

var condiScourgeTrinket = [
    { slot: "amulet", stat: "Viper's" },
    { slot: "ring1", stat: "Viper's" },
    { slot: "ring2", stat: "Viper's" },
    { slot: "back", stat: "Viper's" },
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

var condiScourgeTraits = [
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
];

builds["scourgeCondiMO"] = {
    class: Necromancer,
    specializations: condiScourgeTraits,
    skills: ["Sand Flare", "Summon Shadow Fiend", "Trail of Anguish", "Epidemic", "Plaguelands"],
    pets: null,
    armor: condiScourgeArmor,
    trinket: condiScourgeTrinket,
    weapons: condiScourgeWeapons,
    food: condiScourgeFood
};

builds["scourgeCondiGorse"] = {
    class: Necromancer,
    specializations: condiScourgeTraits,
    skills: ["Sand Flare", "Summon Shadow Fiend", "Trail of Anguish", "Blood Is Power", "Summon Flesh Golem"],
    pets: null,
    armor: condiScourgeArmor,
    trinket: condiScourgeTrinket,
    weapons: condiScourgeWeapons,
    food: condiScourgeFood
};

builds["scourgeCondiSab"] = {
    class: Necromancer,
    specializations: condiScourgeTraits,
    skills: ["Sand Flare", "Blood Is Power", "Trail of Anguish", "Epidemic", "Plaguelands"],
    pets: null,
    armor: condiScourgeArmor,
    trinket: condiScourgeTrinket,
    weapons: condiScourgeWeapons,
    food: condiScourgeFood
};

