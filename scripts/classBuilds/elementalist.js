var tempPSArmor = [
  { slot: "helm", stat: "Sinister", rune: "Superior Rune of Balthazar" },
  { slot: "shoulders", stat: "Sinister", rune: "Superior Rune of Balthazar" },
  { slot: "coat", stat: "Viper's", rune: "Superior Rune of Balthazar" },
  { slot: "gloves", stat: "Sinister", rune: "Superior Rune of Balthazar" },
  { slot: "leggings", stat: "Sinister", rune: "Superior Rune of Balthazar" },
  { slot: "boots", stat: "Sinister", rune: "Superior Rune of Balthazar" }
];

var tempPSTrait = [
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

var tempPSTrinket = [
  { slot: "amulet", stat: "Sinister" },
  { slot: "ring1", stat: "Sinister" },
  { slot: "ring2", stat: "Sinister" },
  { slot: "back", stat: "Sinister" },
  { slot: "earring1", stat: "Sinister" },
  { slot: "earring2", stat: "Sinister" }
];

var tempPSWeapons = [
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
  }
];

var tempPSFood = ["Rare Veggie Pizza", "Toxic Focusing Crystal"];

builds["#tempPS"] = {
  class: Elementalist,
  specializations: tempPSTrait,
  skills: [
    "Arcane Brilliance",
    "Signet of Fire",
    "Arcane Power",
    "Glyph of Elemental Power",
    "Glyph of Elementals"
  ],
  pets: null,
  armor: tempPSArmor,
  trinket: tempPSTrinket,
  weapons: tempPSWeapons,
  food: tempPSFood
};
