var boonShareTrinket = [
  { slot: "amulet", stat: "Commander's" },
  { slot: "ring1", stat: "Commander's" },
  { slot: "ring2", stat: "Commander's" },
  { slot: "back", stat: "Commander's" },
  { slot: "earring1", stat: "Commander's" },
  { slot: "earring2", stat: "Commander's" }
];

var boonShareFood = ["Bowl of Nopalitos Sauté", "Magnanimous Maintenance Oil"];

var boonShareArmor = [
  { slot: "helm", stat: "Berserker's", rune: "Superior Rune of Leadership" },
  {
    slot: "shoulders",
    stat: "Berserker's",
    rune: "Superior Rune of Leadership"
  },
  { slot: "coat", stat: "Berserker's", rune: "Superior Rune of Leadership" },
  {
    slot: "gloves",
    stat: "Commander's",
    rune: "Superior Rune of Leadership"
  },
  {
    slot: "leggings",
    stat: "Berserker's",
    rune: "Superior Rune of Leadership"
  },
  { slot: "boots", stat: "Berserker's", rune: "Superior Rune of Leadership" }
];

builds["#VGchrTank"] = {
  class: Mesmer,
  specializations: [
    {
      name: "Domination",
      traits: ["Empowered Illusions", "Blurred Inscriptions", "Mental Anguish"]
    },
    {
      name: "Inspiration",
      traits: [
        "Persisting Images",
        "Warden's Feedback",
        "Illusionary Inspiration"
      ]
    },
    {
      name: "Chronomancer",
      traits: [
        "All's Well That Ends Well",
        "Improved Alacrity",
        "Chronophantasma"
      ]
    }
  ],
  skills: [
    "Well of Eternity",
    "Well of Action",
    "Well of Recall",
    "Signet of Inspiration",
    "Gravity Well"
  ],
  pets: null,
  armor: boonShareArmor,
  trinket: boonShareTrinket,
  weapons: {
    mainHand1: {
      type: "Sword",
      stat: "Berserker's",
      sigils: ["Superior Sigil of Concentration"]
    },
    mainHand2: null,
    offHand1: {
      type: "Focus",
      stat: "Commander's",
      sigils: ["Superior Sigil of Force"]
    },
    offHand2: {
      type: "Shield",
      stat: "Commander's",
      sigils: ["Superior Sigil of Force"]
    }
  },
  food: boonShareFood
};

builds["#VGchrDPS"] = {
  class: Mesmer,
  specializations: [
    {
      name: "Domination",
      traits: ["Empowered Illusions", "Blurred Inscriptions", "Mental Anguish"]
    },
    {
      name: "Inspiration",
      traits: [
        "Persisting Images",
        "Warden's Feedback",
        "Illusionary Inspiration"
      ]
    },
    {
      name: "Chronomancer",
      traits: [
        "All's Well That Ends Well",
        "Improved Alacrity",
        "Chronophantasma"
      ]
    }
  ],
  skills: [
    "Well of Eternity",
    "Well of Action",
    "Well of Recall",
    "Signet of Inspiration",
    "Gravity Well"
  ],
  pets: null,
  armor: boonShareArmor,
  trinket: boonShareTrinket,
  weapons: {
    mainHand1: {
      type: "Sword",
      stat: "Berserker's",
      sigils: ["Superior Sigil of Concentration"]
    },
    mainHand2: null,
    offHand1: {
      type: "Focus",
      stat: "Berserker's",
      sigils: ["Superior Sigil of Force"]
    },
    offHand2: {
      type: "Shield",
      stat: "Berserker's",
      sigils: ["Superior Sigil of Force"]
    }
  },
  food: boonShareFood
};

var condiMesArmor = [
  { slot: "helm", stat: "Viper's", rune: "Superior Rune of the Berserker" },
  {
    slot: "shoulders",
    stat: "Viper's",
    rune: "Superior Rune of the Berserker"
  },
  { slot: "coat", stat: "Viper's", rune: "Superior Rune of the Berserker" },
  {
    slot: "gloves",
    stat: "Viper's",
    rune: "Superior Rune of the Berserker"
  },
  {
    slot: "leggings",
    stat: "Viper's",
    rune: "Superior Rune of the Berserker"
  },
  { slot: "boots", stat: "Viper's", rune: "Superior Rune of the Berserker" }
];

var condiMesFood = ["Rare Veggie Pizza", "Toxic Focusing Crystal"];

var condiMesTrinket = [
  { slot: "amulet", stat: "Viper's" },
  { slot: "ring1", stat: "Viper's" },
  { slot: "ring2", stat: "Viper's" },
  { slot: "back", stat: "Viper's" },
  { slot: "earring1", stat: "Viper's" },
  { slot: "earring2", stat: "Viper's" }
];

var condiMesWeapons = [
  {
    slot: "mh1",
    type: "Scepter",
    stat: "Viper's",
    sigils: ["Superior Sigil of Malice"]
  },
  {
    slot: "oh1",
    type: "Pistol",
    stat: "Viper's",
    sigils: ["Superior Sigil of Geomancy"]
  },
  {
    slot: "oh2",
    type: "Torch",
    stat: "Viper's",
    sigils: ["Superior Sigil of Geomancy"]
  }
];

builds["#VGmesCondi"] = {
  class: Mesmer,
  specializations: [
    {
      name: "Dueling",
      traits: [
        "Duelist's Discipline",
        "Blinding Dissipation",
        "Superiority Complex"
      ]
    },
    {
      name: "Chaos",
      traits: [
        "Descent into Madness",
        "Chaotic Transference",
        "Bountiful Disillusionment"
      ]
    },
    {
      name: "Illusions",
      traits: ["Compounding Power", "Phantasmal Haste", "Malicious Sorcery"]
    }
  ],
  skills: [
    "Signet of the Ether",
    "Mantra of Distraction",
    "Signet of Domination",
    "Signet of Midnight",
    "Signet of Humility"
  ],
  pets: null,
  armor: condiMesArmor,
  trinket: condiMesTrinket,
  weapons: condiMesWeapons,
  food: condiMesFood
};

builds["#VGmesCondi2"] = builds["#VGmesCondi"];
