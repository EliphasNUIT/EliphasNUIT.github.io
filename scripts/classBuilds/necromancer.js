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

var condiReaperFood = ["Rare Veggie Pizza", "Toxic Focusing Crystal"];

builds["#reaperCondi"] = {
    class: Necromancer,
    specializations: condiReaperTraits,
    skills: ["Signet of Vampirism", "Summon Bone Fiend", "Blood Is Power", "Epidemic", "Plaguelands"],
    pets: null,
    armor: condiReaperArmor,
    trinket: condiReaperTrinket,
    weapons: condiReaperWeapons,
    food: condiReaperFood
};

builds["#reaperCondiDeimos"] = {
    class: Necromancer,
    specializations: condiReaperTraits,
    skills: ["Signet of Vampirism", "Summon Bone Fiend", "Blood Is Power", "Epidemic", "Summon Flesh Golem"],
    pets: null,
    armor: condiReaperArmor,
    trinket: condiReaperTrinket,
    weapons: condiReaperWeapons,
    food: condiReaperFood
};
