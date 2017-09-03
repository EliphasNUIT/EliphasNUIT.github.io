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
    type: "Shortbow",
    stat: "Viper's",
    sigils: ["Superior Sigil of Malice", "Superior Sigil of Geomancy"]
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

builds["#VGdruidCondi"] = {
  class: Ranger,
  specializations: condiDruidTrait,
  skills: [
    "Glyph of Rejuvenation",
    "Glyph of the Tides",
    "Sun Spirit",
    "Frost Spirit",
    "Glyph of Unity"
  ],
  pets: ["Lynx", "Electric Wyvern"],
  armor: condiDruidArmor,
  trinket: condiDruidTrinket,
  weapons: condiDruidWeapons,
  food: condiDruidFood
};

var healDruidArmor = [
  { slot: "helm",stat: "Magi's", rune: "Superior Rune of the Monk" },
  { slot: "shoulders",stat: "Magi's", rune: "Superior Rune of the Monk" },
  { slot: "coat",stat: "Magi's", rune: "Superior Rune of the Monk" },
  { slot: "gloves",stat: "Minstrel's", rune: "Superior Rune of the Monk" },
  { slot: "leggings",stat: "Magi's", rune: "Superior Rune of the Monk" },
  { slot: "boots",stat: "Magi's", rune: "Superior Rune of the Monk" }
];

var healDruidWeapons = [
  {
    slot: "mh1",
    type: "Staff",
    stat: "Magi's",
    sigils: ["Superior Sigil of Transference", "Superior Sigil of Water"]
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
  { slot: "back", stat: "Magi's" },
  { slot: "earring1", stat: "Minstrel's" },
  { slot: "earring2", stat: "Minstrel's" }
];

builds["#VGdruidHeal"] = {
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
  skills: [
    "Glyph of Rejuvenation",
    "Glyph of the Tides",
    "Sun Spirit",
    "Frost Spirit",
    "Glyph of Unity"
  ],
  pets: ["Tiger", "Electric Wyvern"],
  armor: healDruidArmor,
  trinket: healDruidTrinket,
  weapons: healDruidWeapons,
  food: healDruidFood
};
