var cpsArmor = [
  { slot: "helm", stat: "Viper's", rune: "Superior Rune of the Aristocracy" },
  {
    slot: "shoulders",
    stat: "Viper's",
    rune: "Superior Rune of the Aristocracy"
  },
  { slot: "coat", stat: "Viper's", rune: "Superior Rune of the Aristocracy" },
  {
    slot: "gloves",
    stat: "Viper's",
    rune: "Superior Rune of the Aristocracy"
  },
  {
    slot: "leggings",
    stat: "Viper's",
    rune: "Superior Rune of the Aristocracy"
  },
  { slot: "boots", stat: "Viper's", rune: "Superior Rune of the Aristocracy" }
];

var cpsTrinket = [
  { slot: "amulet", stat: "Viper's" },
  { slot: "ring1", stat: "Viper's" },
  { slot: "ring2", stat: "Viper's" },
  { slot: "back", stat: "Viper's" },
  { slot: "earring1", stat: "Viper's" },
  { slot: "earring2", stat: "Viper's" }
];

var cpsFood = ["Fried Golden Dumpling", "Toxic Focusing Crystal"];

var cpsWeapons = [
  {
    slot: "mh1",
    type: "Longbow",
    stat: "Viper's",
    sigils: ["Superior Sigil of Geomancy", "Superior Sigil of Malice"]
  },{
    slot: "oh1",
    type: "",
    stat: "",
    sigils: [""]
  },{
    slot: "mh2",
    type: "Sword",
    stat: "Viper's",
    sigils: ["Superior Sigil of Geomancy"]
  },{
    slot: 'oh2',
    type: "Torch",
    stat: "Viper's",
    sigils: ["Superior Sigil of Malice"]
  }
]

builds["#bersCPS2Banners"] = {
  class: Warrior,
  specializations: [
    { name: "Arms", traits: ["Wounding Precision", "Blademaster", "Furious"] },
    {
      name: "Tactics",
      traits: ["Empowered", "Burning Arrows", "Phalanx Strength"]
    },
    {
      name: "Berserker",
      traits: ["Last Blaze", "Heat the Soul", "King of Fires"]
    }
  ],
  skills: [
    "Blood Reckoning",
    '"For Great Justice!"',
    "Banner of Discipline",
    "Banner of Strength",
    "Head Butt"
  ],
  pets: null,
  armor: cpsArmor,
  trinket: cpsTrinket,
  weapons: cpsWeapons,
  food: cpsFood
};

builds["#bersCPS"] = {
  class: Warrior,
  specializations: [
    { name: "Arms", traits: ["Wounding Precision", "Blademaster", "Furious"] },
    {
      name: "Tactics",
      traits: ["Empowered", "Burning Arrows", "Phalanx Strength"]
    },
    {
      name: "Berserker",
      traits: ["Last Blaze", "Heat the Soul", "King of Fires"]
    }
  ],
  skills: [
    "Blood Reckoning",
    '"For Great Justice!"',
    "Shattering Blow",
    "",
    "Head Butt"
  ],
  pets: null,
  armor: cpsArmor,
  trinket: cpsTrinket,
  weapons: cpsWeapons,
  food: cpsFood
};

builds["#bersCPS2"] = builds["#bersCPS"];

builds["#bersCPSKC"] = {
  class: Warrior,
  specializations: [
    { name: "Arms", traits: ["Wounding Precision", "Blademaster", "Furious"] },
    {
      name: "Tactics",
      traits: ["Empowered", "Empower Allies", "Phalanx Strength"]
    },
    {
      name: "Berserker",
      traits: ["Last Blaze", "Heat the Soul", "King of Fires"]
    }
  ],
  skills: [
    "Blood Reckoning",
    '"For Great Justice!"',
    "Shattering Blow",
    "",
    "Head Butt"
  ],
  pets: null,
  armor: cpsArmor,
  trinket: cpsTrinket,
  weapons: cpsWeapons,
  food: cpsFood
};

builds["#bersCPSKC2"] = builds["#bersCPSKC"];

builds["#bersCPSCC"] = {
  class: Warrior,
  specializations: [
    { name: "Arms", traits: ["Wounding Precision", "Blademaster", "Furious"] },
    {
      name: "Tactics",
      traits: ["Empowered", "Burning Arrows", "Phalanx Strength"]
    },
    {
      name: "Berserker",
      traits: ["Last Blaze", "Heat the Soul", "King of Fires"]
    }
  ],
  skills: [
    "Blood Reckoning",
    '"For Great Justice!"',
    "Wild Blow",
    "",
    "Head Butt"
  ],
  pets: null,
  armor: cpsArmor,
  trinket: cpsTrinket,
  weapons: cpsWeapons,
  food: cpsFood
};

builds["#bersCPSCC2"] = builds["#bersCPSCC"];
