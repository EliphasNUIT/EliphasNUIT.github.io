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

var condiDruidFood = ["Rare Veggie Pizza", "Toxic Focusing Crystal"];

builds["#druidCondiVg"] = {
    class: Ranger,
    specializations: condiDruidTrait,
    skills: ["Glyph of Rejuvenation", "Glyph of the Tides", "Sun Spirit", "Frost Spirit", "Glyph of Unity"],
    pets: ["Juvenile Lynx", "Juvenile Electric Wyvern"],
    armor: condiDruidArmor,
    trinket: condiDruidTrinket,
    weapons: condiDruidWeapons,
    food: condiDruidFood
};

builds["#druidCondi"] = {
    class: Ranger,
    specializations: condiDruidTrait,
    skills: ["Glyph of Rejuvenation", "Glyph of Empowerment", "Sun Spirit", "Frost Spirit", "Glyph of Unity"],
    pets: ["Juvenile Lynx", "Juvenile Electric Wyvern"],
    armor: condiDruidArmor,
    trinket: condiDruidTrinket,
    weapons: condiDruidWeapons,
    food: condiDruidFood
};
builds["#druidCondi2"] = builds["#druidCondi"];

builds["#soulbeastCondi"] = {
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
    skills: ['"We Heal As One!"', "Viper's Nest", "Flame Trap", "Sharpening Stone", "Entangle"],
    pets: ["Juvenile Lynx", "Juvenile Electric Wyvern"],
    armor: [
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
    ],
    trinket: [
        { slot: "amulet", stat: "Viper's" },
        { slot: "ring1", stat: "Viper's" },
        { slot: "ring2", stat: "Viper's" },
        { slot: "back", stat: "Viper's" },
        { slot: "earring1", stat: "Viper's" },
        { slot: "earring2", stat: "Viper's" }
    ],
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
    { slot: "helm", stat: "Magi's", rune: "Superior Rune of the Monk" },
    { slot: "shoulders", stat: "Magi's", rune: "Superior Rune of the Monk" },
    { slot: "coat", stat: "Magi's", rune: "Superior Rune of the Monk" },
    { slot: "gloves", stat: "Minstrel's", rune: "Superior Rune of the Monk" },
    { slot: "leggings", stat: "Magi's", rune: "Superior Rune of the Monk" },
    { slot: "boots", stat: "Magi's", rune: "Superior Rune of the Monk" }
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
    { slot: "ring2", stat: "Magi's" },
    { slot: "back", stat: "Minstrel's" },
    { slot: "earring1", stat: "Magi's" },
    { slot: "earring2", stat: "Minstrel's" }
];

builds["#druidVg"] = {
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
    skills: ["Glyph of Rejuvenation", "Glyph of the Tides", "Sun Spirit", "Frost Spirit", "Glyph of Unity"],
    pets: ["Juvenile Tiger", "Juvenile Electric Wyvern"],
    armor: healDruidArmor,
    trinket: healDruidTrinket,
    weapons: healDruidWeapons,
    food: healDruidFood
};

builds["#druidVg2"] = builds["#druidVg"];

builds["#druidSab"] = {
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
    pets: ["Juvenile Fern Hound", "Juvenile Electric Wyvern"],
    armor: healDruidArmor,
    trinket: healDruidTrinket,
    weapons: healDruidWeapons,
    food: healDruidFood
};
builds["#druidSab2"] = builds["#druidSab"];

builds["#druidSloth"] = {
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
            type: "Axe",
            stat: "Magi's",
            sigils: ["Superior Sigil of Transference"]
        },
        {
            slot: "oh2",
            type: "Axe",
            stat: "Magi's",
            sigils: ["Superior Sigil of Water"]
        }
    ],
    food: healDruidFood
};
builds["#druidSloth2"] = builds["#druidSloth"];

builds["#druidMatt"] = {
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
    pets: ["Juvenile Fern Hound", "Juvenile Electric Wyvern"],
    armor: healDruidArmor,
    trinket: healDruidTrinket,
    weapons: healDruidWeapons,
    food: healDruidFood
};
builds["#druidMatt2"] = builds["#druidMatt"];

builds["#druidXera"] = {
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
    pets: ["Juvenile Fern Hound", "Juvenile Electric Wyvern"],
    armor: healDruidArmor,
    trinket: healDruidTrinket,
    weapons: healDruidWeapons,
    food: healDruidFood
};
builds["#druidXera2"] = builds["#druidXera"];

builds["#druidSpirit"] = {
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
    skills: ["Water Spirit", "Stone Spirit", "Frost Spirit", "Sun Spirit", "Spirit of Nature"],
    pets: ["Juvenile Fern Hound", "Juvenile Electric Wyvern"],
    armor: healDruidArmor,
    trinket: healDruidTrinket,
    weapons: healDruidWeapons,
    food: healDruidFood
};
builds["#druidSpirit2"] = builds["#druidSpirit"];

builds["#druidKite"] = {
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

builds["#druidSam"] = {
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
    skills: ["Glyph of Rejuvenation", "Glyph of the Tides", "Frost Spirit", "Stone Spirit", "Glyph of Unity"],
    pets: ["Juvenile Fern Hound", "Juvenile Electric Wyvern"],
    armor: healDruidArmor,
    trinket: healDruidTrinket,
    weapons: healDruidWeapons,
    food: healDruidFood
};
builds["#druidSam2"] = builds["#druidSam"];
