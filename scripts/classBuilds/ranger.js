//// CONDI

var condiDruidTrait = [
    {
        name: "Skirmishing",
        traits: ["Sharpened Edges", "Spotter", "Quick Draw"]
    },
    {
        name: "Wilderness Survival",
        traits: ["Taste for Danger", "Ambidexterity", "Poison Master"]
    },
    {
        name: "Druid",
        traits: ["Cultivated Synergy", "Verdant Etching", "Grace of the Land"]
    }
];

var condiDruidTrinket = [
    { slot: "amulet", stat: "Viper's" },
    { slot: "ring1", stat: "Viper's" },
    { slot: "ring2", stat: "Viper's" },
    { slot: "back", stat: "Viper's" },
    { slot: "earring1", stat: "Viper's" },
    { slot: "earring2", stat: "Viper's" }
];

var condiDruidArmor = [
    { slot: "helm", stat: "Viper's", rune: "Superior Rune of the Nightmare" },
    {
        slot: "shoulders",
        stat: "Viper's",
        rune: "Superior Rune of the Nightmare"
    },
    { slot: "coat", stat: "Viper's", rune: "Superior Rune of the Nightmare" },
    { slot: "gloves", stat: "Viper's", rune: "Superior Rune of the Nightmare" },
    { slot: "leggings", stat: "Viper's", rune: "Superior Rune of the Trapper" },
    { slot: "boots", stat: "Viper's", rune: "Superior Rune of the Trapper" }
];

var condiDruidWeapons = [
    {
        slot: "mh1",
        type: "Longbow",
        stat: "Viper's",
        sigils: ["Superior Sigil of Malice", "Superior Sigil of Geomancy"]
    },
    {
        slot: "oh1",
        type: "",
        stat: "",
        sigils: [""]
    },
    {
        slot: "mh2",
        type: "Axe",
        stat: "Viper's",
        sigils: ["Superior Sigil of Malice"]
    },
    {
        slot: "oh2",
        type: "Torch",
        stat: "Viper's",
        sigils: ["Superior Sigil of Geomancy"]
    }
];

var condiDruidFood = ["Prickly Pear Pie", "Toxic Focusing Crystal"];

builds["druidCondiVg"] = {
    class: Ranger,
    specializations: condiDruidTrait,
    skills: ["Glyph of Rejuvenation", "Glyph of the Tides", "Sun Spirit", "Frost Spirit", "Glyph of Unity"],
    pets: ["Juvenile Lynx", "Juvenile Electric Wyvern"],
    armor: condiDruidArmor,
    trinket: condiDruidTrinket,
    weapons: condiDruidWeapons,
    food: condiDruidFood
};

builds["druidCondi"] = {
    class: Ranger,
    specializations: condiDruidTrait,
    skills: ["Glyph of Rejuvenation", "Glyph of Empowerment", "Sun Spirit", "Frost Spirit", "Glyph of Unity"],
    pets: ["Juvenile Lynx", "Juvenile Electric Wyvern"],
    armor: condiDruidArmor,
    trinket: condiDruidTrinket,
    weapons: condiDruidWeapons,
    food: condiDruidFood
};

builds["soulbeastCondi"] = {
    class: Ranger,
    specializations: [
        {
            name: "Skirmishing",
            traits: ["Sharpened Edges", "Hidden Barbs", "Quick Draw"]
        },
        {
            name: "Wilderness Survival",
            traits: ["Taste for Danger", "Ambidexterity", "Poison Master"]
        },
        {
            name: "Soulbeast",
            traits: ["Live Fast", "Predator's Cunning", "Oppressive Superiority"]
        }
    ],
    skills: ['"We Heal As One!"', "Viper's Nest", "Flame Trap", "Sharpening Stone", "One Wolf Pack"],
    pets: ["Juvenile Lynx", "Juvenile Warthog", "Juvenile Fanged Iboga"],
    armor: condiDruidArmor,
    trinket: condiDruidTrinket,
    weapons: [
        {
            slot: "mh1",
            type: "Longbow",
            stat: "Viper's",
            sigils: ["Superior Sigil of Malice", "Superior Sigil of Geomancy"]
        },
        {
            slot: "oh1",
            type: "",
            stat: "",
            sigils: [""]
        },
        {
            slot: "mh2",
            type: "Dagger",
            stat: "Viper's",
            sigils: ["Superior Sigil of Malice"]
        },
        {
            slot: "oh2",
            type: "Torch",
            stat: "Viper's",
            sigils: ["Superior Sigil of Geomancy"]
        }
    ],
    food: ["Rare Veggie Pizza", "Toxic Focusing Crystal"]
};

////// HEAL

var healDruidArmor = [
    { slot: "helm", stat: "Harrier's", rune: "Superior Rune of the Monk" },
    { slot: "shoulders", stat: "Harrier's", rune: "Superior Rune of the Monk" },
    { slot: "coat", stat: "Harrier's", rune: "Superior Rune of the Monk" },
    { slot: "gloves", stat: "Harrier's", rune: "Superior Rune of the Monk" },
    { slot: "leggings", stat: "Harrier's", rune: "Superior Rune of the Monk" },
    { slot: "boots", stat: "Harrier's", rune: "Superior Rune of the Monk" }
];

var healDruidWeapons = [
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
        type: "Axe",
        stat: "Magi's",
        sigils: ["Superior Sigil of Transference"]
    },
    {
        slot: "oh2",
        type: "Warhorn",
        stat: "Magi's",
        sigils: ["Superior Sigil of Water"]
    }
];

var healDruidFood = ["Delicious Rice Ball", "Bountiful Maintenance Oil"];

var healDruidTrinket = [
    { slot: "amulet", stat: "Minstrel's" },
    { slot: "ring1", stat: "Minstrel's" },
    { slot: "ring2", stat: "Minstrel's" },
    { slot: "back", stat: "Magi's" },
    { slot: "earring1", stat: "Minstrel's" },
    { slot: "earring2", stat: "Magi's" }
];

builds["druidVg"] = {
    class: Ranger,
    specializations: [
        {
            name: "Skirmishing",
            traits: ["Sharpened Edges", "Spotter", "Quick Draw"]
        },
        {
            name: "Nature Magic",
            traits: ["Allies' Aid", "Windborne Notes", "Nature's Vengeance"]
        },
        {
            name: "Druid",
            traits: ["Primal Echoes", "Verdant Etching", "Grace of the Land"]
        }
    ],
    skills: ["Glyph of Rejuvenation", "Glyph of the Tides", "Sun Spirit", "Frost Spirit", "Entangle"],
    pets: ["Juvenile Rock Gazelle", "Juvenile Electric Wyvern"],
    armor: healDruidArmor,
    trinket: healDruidTrinket,
    weapons: healDruidWeapons,
    food: healDruidFood
};

builds["druidSab"] = {
    class: Ranger,
    specializations: [
        {
            name: "Skirmishing",
            traits: ["Sharpened Edges", "Spotter", "Quick Draw"]
        },
        {
            name: "Nature Magic",
            traits: ["Allies' Aid", "Windborne Notes", "Nature's Vengeance"]
        },
        {
            name: "Druid",
            traits: ["Primal Echoes", "Verdant Etching", "Grace of the Land"]
        }
    ],
    skills: ["Glyph of Rejuvenation", "Glyph of Empowerment", "Sun Spirit", "Frost Spirit", "Glyph of Unity"],
    pets: ["Juvenile Rock Gazelle", "Juvenile Electric Wyvern"],
    armor: healDruidArmor,
    trinket: healDruidTrinket,
    weapons: healDruidWeapons,
    food: healDruidFood
};

builds["druidSloth"] = {
    class: Ranger,
    specializations: [
        {
            name: "Skirmishing",
            traits: ["Sharpened Edges", "Spotter", "Quick Draw"]
        },
        {
            name: "Nature Magic",
            traits: ["Allies' Aid", "Windborne Notes", "Nature's Vengeance"]
        },
        {
            name: "Druid",
            traits: ["Primal Echoes", "Verdant Etching", "Grace of the Land"]
        }
    ],
    skills: ["Glyph of Rejuvenation", '"Protect Me!"', "Sun Spirit", "Frost Spirit", "Glyph of Unity"],
    pets: ["Juvenile Rock Gazelle", "Juvenile Electric Wyvern"],
    armor: healDruidArmor,
    trinket: healDruidTrinket,
    weapons: healDruidWeapons,
    food: healDruidFood
};

builds["druidMatt"] = {
    class: Ranger,
    specializations: [
        {
            name: "Skirmishing",
            traits: ["Trapper's Expertise", "Spotter", "Quick Draw"]
        },
        {
            name: "Nature Magic",
            traits: ["Allies' Aid", "Windborne Notes", "Nature's Vengeance"]
        },
        {
            name: "Druid",
            traits: ["Primal Echoes", "Verdant Etching", "Grace of the Land"]
        }
    ],
    skills: ["Healing Spring", "Glyph of the Tides", "Sun Spirit", "Stone Spirit", "Spirit of Nature"],
    pets: ["Juvenile Rock Gazelle", "Juvenile Electric Wyvern"],
    armor: healDruidArmor,
    trinket: healDruidTrinket,
    weapons: healDruidWeapons,
    food: healDruidFood
};

builds["druidXera"] = {
    class: Ranger,
    specializations: [
        {
            name: "Skirmishing",
            traits: ["Trapper's Expertise", "Spotter", "Quick Draw"]
        },
        {
            name: "Nature Magic",
            traits: ["Allies' Aid", "Windborne Notes", "Nature's Vengeance"]
        },
        {
            name: "Druid",
            traits: ["Primal Echoes", "Verdant Etching", "Grace of the Land"]
        }
    ],
    skills: ["Healing Spring", "Glyph of Empowerment", "Frost Spirit", "Stone Spirit", "Glyph of Unity"],
    pets: ["Juvenile Rock Gazelle", "Juvenile Electric Wyvern"],
    armor: healDruidArmor,
    trinket: healDruidTrinket,
    weapons: healDruidWeapons,
    food: healDruidFood
};

builds["druidSpirit"] = {
    class: Ranger,
    specializations: [
        {
            name: "Skirmishing",
            traits: ["Sharpened Edges", "Spotter", "Quick Draw"]
        },
        {
            name: "Nature Magic",
            traits: ["Instinctive Reaction", "Windborne Notes", "Nature's Vengeance"]
        },
        {
            name: "Druid",
            traits: ["Primal Echoes", "Celestial Shadow", "Grace of the Land"]
        }
    ],
    skills: ["Water Spirit", "Stone Spirit", "Frost Spirit", "Sun Spirit", "Spirit of Nature"],
    pets: ["Juvenile Fern Hound", "Juvenile Electric Wyvern"],
    armor: healDruidArmor,
    trinket: healDruidTrinket,
    weapons: healDruidWeapons,
    food: healDruidFood
};

builds["druidKite"] = {
    class: Ranger,
    specializations: [
        {
            name: "Skirmishing",
            traits: ["Sharpened Edges", "Spotter", "Quick Draw"]
        },
        {
            name: "Nature Magic",
            traits: ["Instinctive Reaction", "Windborne Notes", "Nature's Vengeance"]
        },
        {
            name: "Druid",
            traits: ["Primal Echoes", "Celestial Shadow", "Grace of the Land"]
        }
    ],
    skills: ["Water Spirit", "Stone Spirit", "Frost Spirit", "Sun Spirit", "Spirit of Nature"],
    pets: ["Juvenile Fern Hound", "Juvenile Electric Wyvern"],
    armor: healDruidArmor,
    trinket: healDruidTrinket,
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
            type: "Greatsword",
            stat: "Magi's",
            sigils: ["Superior Sigil of Transference", "Superior Sigil of Agility"]
        },
        {
            slot: "oh2",
            type: "",
            stat: "",
            sigils: [""]
        }
    ],
    food: healDruidFood
};

builds["druidSam"] = {
    class: Ranger,
    specializations: [
        {
            name: "Skirmishing",
            traits: ["Sharpened Edges", "Spotter", "Quick Draw"]
        },
        {
            name: "Nature Magic",
            traits: ["Instinctive Reaction", "Windborne Notes", "Nature's Vengeance"]
        },
        {
            name: "Druid",
            traits: ["Primal Echoes", "Verdant Etching", "Grace of the Land"]
        }
    ],
    skills: ["Glyph of Rejuvenation", "Glyph of the Tides", "Frost Spirit", "Stone Spirit", "Glyph of Unity"],
    pets: ["Juvenile Jacaranda", "Juvenile Electric Wyvern"],
    armor: healDruidArmor,
    trinket: healDruidTrinket,
    weapons: healDruidWeapons,
    food: healDruidFood
};
