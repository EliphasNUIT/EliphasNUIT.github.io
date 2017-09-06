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

builds["#chrTank"] = {
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
  weapons: [
    {
      slot: "mh1",
      type: "Sword",
      stat: "Berserker's",
      sigils: ["Superior Sigil of Concentration"]
    },
    {
      slot: "mh2",
      type: "",
      stat: "",
      sigils: [""]
    },
    {
      slot: "oh1",
      type: "Focus",
      stat: "Commander's",
      sigils: ["Superior Sigil of Force"]
    },
    {
      slot: "oh2",
      type: "Shield",
      stat: "Commander's",
      sigils: ["Superior Sigil of Force"]
    }
  ],
  food: boonShareFood
};

builds["#chrTankDeimos"] = {
  class: Mesmer,
  specializations: [
    {
      name: "Illusions",
      traits: ["Compounding Power", "Phantasmal Haste", "Phantasmal Force"]
    },
    {
      name: "Chaos",
      traits: [
        "Illusionary Defense",
        "Chaotic Dampening",
        "Bountiful Disillusionment"
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
    "Well of Precognition",
    "Well of Recall",
    "Time Warp"
  ],
  pets: null,
  armor: [
    { slot: "helm", stat: "Minstrel's", rune: "Superior Rune of Water" },
    {
      slot: "shoulders",
      stat: "Minstrel's",
      rune: "Superior Rune of Water"
    },
    { slot: "coat", stat: "Minstrel's", rune: "Superior Rune of Water" },
    {
      slot: "gloves",
      stat: "Minstrel's",
      rune: "Superior Rune of Water"
    },
    {
      slot: "leggings",
      stat: "Minstrel's",
      rune: "Superior Rune of Water"
    },
    { slot: "boots", stat: "Minstrel's", rune: "Superior Rune of Water" }
  ],
  trinket: [
    { slot: "amulet", stat: "Minstrel's" },
    { slot: "ring1", stat: "Minstrel's" },
    { slot: "ring2", stat: "Minstrel's" },
    { slot: "back", stat: "Minstrel's" },
    { slot: "earring1", stat: "Minstrel's" },
    { slot: "earring2", stat: "Minstrel's" }
  ],
  weapons: [
    {
      slot: "mh1",
      type: "Sword",
      stat: "Berserker's",
      sigils: ["Superior Sigil of Concentration"]
    },
    {
      slot: "mh2",
      type: "Staff",
      stat: "Berserker's",
      sigils: ["Superior Sigil of Force" , "Superior Sigil of Accuracy"]
    },
    {
      slot: "oh1",
      type: "Shield",
      stat: "Commander's",
      sigils: ["Superior Sigil of Force"]
    },
    {
      slot: "oh2",
      type: "",
      stat: "",
      sigils: [""]
    }
  ],
  food: boonShareFood
};

builds["#chrDPS"] = {
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
  weapons: [
    {
      slot: "mh1",
      type: "Sword",
      stat: "Berserker's",
      sigils: ["Superior Sigil of Concentration"]
    },
    {
      slot: "mh2",
      type: "",
      stat: "",
      sigils: [""]
    },
    {
      slot: "oh1",
      type: "Focus",
      stat: "Berserker's",
      sigils: ["Superior Sigil of Force"]
    },
    {
      slot: "oh2",
      type: "Shield",
      stat: "Berserker's",
      sigils: ["Superior Sigil of Force"]
    }
  ],
  food: boonShareFood
};

builds["#chrDPSDeimos"] = {
  class: Mesmer,
  specializations: [
    {
      name: "Illusions",
      traits: ["Compounding Power", "Phantasmal Haste", "Phantasmal Force"]
    },
    {
      name: "Domination",
      traits: ["Empowered Illusions", "Blurred Inscriptions", "Mental Anguish"]
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
    "Well of Precognition",
    "Signet of Inspiration",
    "Time Warp"
  ],
  pets: null,
  armor: boonShareArmor,
  trinket: boonShareTrinket,
  weapons: [
    {
      slot: "mh1",
      type: "Sword",
      stat: "Berserker's",
      sigils: ["Superior Sigil of Concentration"]
    },
    {
      slot: "mh2",
      type: "Scepter",
      stat: "Berserker's",
      sigils: ["Superior Sigil of Accuracy"]
    },
    {
      slot: "oh2",
      type: "Sword",
      stat: "Berserker's",
      sigils: ["Superior Sigil of Force"]
    },
    {
      slot: "oh1",
      type: "Shield",
      stat: "Berserker's",
      sigils: ["Superior Sigil of Force"]
    }
  ],
  food: boonShareFood
};

builds["#chrDPS2"] = builds["#chrDPS"];

builds["#chrDPSMatt"] = {
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
    "Feedback",
    "Signet of Inspiration",
    "Signet of Humility"
  ],
  pets: null,
  armor: boonShareArmor,
  trinket: boonShareTrinket,
  weapons: [
    {
      slot: "mh1",
      type: "Sword",
      stat: "Berserker's",
      sigils: ["Superior Sigil of Concentration"]
    },
    {
      slot: "mh2",
      type: "",
      stat: "",
      sigils: [""]
    },
    {
      slot: "oh1",
      type: "Focus",
      stat: "Berserker's",
      sigils: ["Superior Sigil of Force"]
    },
    {
      slot: "oh2",
      type: "Shield",
      stat: "Berserker's",
      sigils: ["Superior Sigil of Force"]
    }
  ],
  food: boonShareFood
};

builds["#chrDPSMatt2"] = builds["#chrDPSMatt"];

builds["#chrDPSCairn"] = {
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
        "Restorative Illusions",
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
  weapons: [
    {
      slot: "mh1",
      type: "Sword",
      stat: "Berserker's",
      sigils: ["Superior Sigil of Concentration"]
    },
    {
      slot: "mh2",
      type: "",
      stat: "",
      sigils: [""]
    },
    {
      slot: "oh1",
      type: "Focus",
      stat: "Berserker's",
      sigils: ["Superior Sigil of Force"]
    },
    {
      slot: "oh2",
      type: "Shield",
      stat: "Berserker's",
      sigils: ["Superior Sigil of Force"]
    }
  ],
  food: boonShareFood
};

builds["#chrDPSCairn2"] = builds["#chrDPSCairn"];

////// CONDI


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
    slot: "mh2",
    type: "",
    stat: "",
    sigils: [""]
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

var condiMesTrait = [
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
];

builds["#mesCondiCC"] = {
  class: Mesmer,
  specializations: condiMesTrait,
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
builds["#mesCondiCC2"] = builds["#mesCondiCC"];

builds["#mesCondiMatt"] = {
  class: Mesmer,
  specializations: condiMesTrait,
  skills: [
    "Signet of the Ether",
    "Feedback",
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
builds["#mesCondiMatt2"] = builds["#mesCondiMatt"];

builds["#mesCondiCairn"] = {
  class: Mesmer,
  specializations: condiMesTrait,
  skills: [
    "Signet of the Ether",
    "Signet of Inspiration",
    "Signet of Domination",
    "Signet of Midnight",
    "Time Warp"
  ],
  pets: null,
  armor: condiMesArmor,
  trinket: condiMesTrinket,
  weapons: condiMesWeapons,
  food: condiMesFood
};
builds["#mesCondiCairn2"] = builds["#mesCondiCairn"];
