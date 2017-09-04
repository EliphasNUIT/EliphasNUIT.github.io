var builds = {};


var Guardian = {
  name: "Guardian",
  armor: "Heavy",
  specializations: {
    Zeal: 42,
    Radiance: 16,
    Valor: 13,
    Honor: 49,
    Virtues: 46,
    Dragonhunter: 27,
    Firebrand: 62
  },
  traits: {
    "Wrathful Spirit": 563,
    "Fiery Wrath": 634,
    "Zealous Scepter": 1925,
    "Binding Jeopardy": 628,
    "Zealous Blade": 653,
    "Eternal Armory": 635,
    "Shattered Aegis": 637,
    "Inner Fire": 577,
    "Right-Hand Strength": 566,
    "Wrath of Justice": 578,
    "Symbolic Avenger": 2017,
    "Radiant Fire": 567,
    Retribution: 565,
    "Amplified Wrath": 1686,
    "Perfect Inscriptions": 579,
    "Righteous Instincts": 1683,
    "Strength of the Fallen": 588,
    "Smiter's Boon": 581,
    "Focus Mastery": 633,
    "Stalwart Defender": 580,
    "Communal Defenses": 1684,
    "Strength in Numbers": 584,
    "Altruistic Healing": 585,
    "Monk's Focus": 586,
    "Retributive Armor": 589,
    "Invigorated Bulwark": 1899,
    "Protective Reviver": 559,
    "Pure of Heart": 549,
    "Honorable Staff": 557,
    "Kindled Zeal": 1556,
    "Empowering Might": 562,
    "Protector's Impact": 654,
    "Pure of Voice": 553,
    "Writ of Persistence": 558,
    "Force of Will": 1682,
    "Healer's Retribution": 574,
    "Unscathed Contender": 624,
    "Retaliatory Subconscious": 625,
    "Master of Consecrations": 617,
    "Virtuous Solace": 603,
    "Absolute Resolution": 610,
    "Permeating Wrath": 622,
    "Glacial Heart": 587,
    "Battle Presence": 554,
    "Indomitable Courage": 612,
    "Piercing Light": 1898,
    "Hunter's Determination": 2037,
    "Dulled Senses": 1983,
    "Soaring Devastation": 1911,
    "Zealot's Aggression": 1835,
    Bulwark: 1943,
    "Hunter's Fortification": 1908,
    "Heavy Light": 1963,
    "Big Game Hunter": 1955,
    "Unrelenting Criticism": 2075,
    "Liberator's Vow": 2101,
    "Archivist of Whispers": 2086,
    "Stalwart Speed": 2076,
    "Legendary Lore": 2116,
    "Stoic Demeanor": 2105,
    "Weighty Terms": 2063,
    Quickfire: 2179,
    Loremaster: 2159
  },
  skills: {
    "Virtue of Courage": 9118,
    "Virtue of Resolve": 9120,
    "Virtue of Justice": 9115,
    Shelter: 9102,
    "Signet of Resolve": 9158,
    '"Receive the Light!"': 9083,
    "Sword of Justice": 9168,
    "Hammer of Wisdom": 9125,
    "Litany of Wrath": 21664,
    "Bow of Truth": 9175,
    "Shield of the Avenger": 9182,
    "Bane Signet": 9093,
    "Signet of Judgment": 9150,
    "Signet of Wrath": 9151,
    '"Retreat!"': 9084,
    "Signet of Mercy": 9163,
    '"Save Yourselves!"': 9085,
    '"Stand Your Ground!"': 9153,
    '"Hold the Line!"': 9152,
    "Wall of Reflection": 9251,
    "Purging Flames": 9187,
    "Hallowed Ground": 9253,
    Sanctuary: 9128,
    "Smite Condition": 9245,
    "Contemplation of Purity": 9248,
    "Judge's Intervention": 9247,
    "Merciful Intervention": 9246,
    "Renewed Focus": 9154,
    "Signet of Courage": 30461,
    Purification: 30025,
    "Test of Faith": 29786,
    "Fragments of Faith": 30553,
    '"Feel My Wrath!"': 29965,
    "Light's Judgment": 30871,
    "Dragon's Maw": 30273,
    "Mantra of Solace": 41714,
    "Mantra of Potence": 40915,
    "Mantra of Truth": 44080,
    "Mantra of Lore": 45460,
    "Mantra of Flame": 46148,
    "Procession of Blades": 30364,
    "Mantra of Liberation": 43357,
    "Tome of Justice": 44364,
    "Tome of Resolve": 41780,
    "Tome of Courage": 42259
  }
};
var Warrior = {
  name: "Warrior",
  armor: "Heavy",
  specializations: {
    Strength: 4,
    Arms: 36,
    Defense: 22,
    Tactics: 11,
    Discipline: 51,
    Berserker: 18,
    Spellbreaker: 61
  },
  traits: {
    "Brave Stride": 1447,
    "Restorative Strength": 1451,
    "Body Blow": 2000,
    "Forceful Greatsword": 1338,
    "Great Fortitude": 1449,
    "Peak Performance": 1444,
    "Berserker's Power": 1437,
    "Might Makes Right": 1454,
    "Merciless Hammer": 1440,
    "Wounding Precision": 1455,
    "Signet Mastery": 1344,
    Opportunist: 1334,
    "Unsuspecting Foe": 1315,
    "Rending Strikes": 1316,
    Blademaster: 1333,
    "Burst Precision": 1336,
    Furious: 1346,
    "Dual Wielding": 1707,
    "Shield Master": 1376,
    "Dogged March": 1488,
    "Cull the Weak": 1372,
    "Defy Pain": 1368,
    "Armored Attack": 1379,
    "Sundering Mace": 1367,
    "Last Stand": 1375,
    "Cleansing Ire": 1649,
    "Rousing Resilience": 1708,
    "Leg Specialist": 1469,
    "Quick Breathing": 1474,
    Empowered: 1471,
    "Burning Arrows": 1479,
    "Empower Allies": 1482,
    "Powerful Synergy": 1667,
    "Shrug It Off": 1486,
    "Vigorous Shouts": 1470,
    "Phalanx Strength": 1711,
    "Crack Shot": 1329,
    "Warrior's Sprint": 1413,
    "Vengeful Return": 1381,
    "Inspiring Battle Standard": 1484,
    "Destruction of the Empowered": 1489,
    "Brawler's Recovery": 1709,
    "Axe Mastery": 1369,
    "Heightened Focus": 1317,
    "Burst Mastery": 1657,
    "Smash Brawler": 2049,
    "Last Blaze": 2039,
    "Savage Instinct": 1977,
    "Blood Reaction": 2011,
    "Heat the Soul": 2042,
    "Dead or Alive": 2002,
    "Bloody Roar": 1928,
    "King of Fires": 2038,
    "Eternal Champion": 2043,
    "Pure Strike": 2107,
    "Guard Counter": 2153,
    "No Escape": 2140,
    "Loss Aversion": 2126,
    "Slow Counter": 2097,
    "Sun and Moon Style": 2095,
    "Enchantment Collapse": 2163,
    "Revenge Counter": 2168,
    "Magebane Tether": 2060
  },
  skills: {
    "Whirling Strike": 41746,
    "Forceful Shot": 41330,
    "Arcing Slice": 42707,
    Flurry: 42494,
    Eviscerate: 43566,
    "Combustive Shot": 42803,
    "Kill Shot": 42041,
    Earthshaker: 40601,
    Mending: 14401,
    "Skull Crack": 41110,
    "Defiant Stance": 21815,
    '"To the Limit!"': 14402,
    Kick: 14502,
    "Healing Signet": 14389,
    "Throw Bolas": 14354,
    Stomp: 14388,
    "Signet of Might": 14404,
    "Signet of Fury": 14410,
    "Signet of Stamina": 14479,
    "Dolyak Signet": 14413,
    '"For Great Justice!"': 14403,
    '"Shake It Off!"': 14372,
    '"On My Mark!"': 14575,
    '"Fear Me!"': 14409,
    "Banner of Defense": 14528,
    "Banner of Strength": 14405,
    "Banner of Discipline": 14407,
    "Banner of Tactics": 14408,
    "Berserker Stance": 14406,
    "Bull's Charge": 14516,
    "Balanced Stance": 14412,
    Frenzy: 14368,
    "Endure Pain": 14392,
    "Battle Standard": 14419,
    "Signet of Rage": 14355,
    Rampage: 14483,
    Berserk: 30435,
    "Gun Flame": 29644,
    "Skull Grinder": 29679,
    "Burning Shackles": 30989,
    "Arc Divider": 29852,
    "Scorched Earth": 29923,
    "Wild Whirl": 31048,
    Decapitate: 30851,
    "Flaming Flurry": 30682,
    "Rupturing Smash": 30879,
    "Head Butt": 30343,
    "Wild Blow": 29941,
    "Shattering Blow": 30074,
    Outrage: 30258,
    "Blood Reckoning": 30189,
    "Natural Healing": 41100,
    "Sundering Leap": 29613,
    "Winds of Disenchantment": 45333,
    "Featherfoot Grace": 45380,
    "Sight beyond Sight": 43745,
    "Imminent Threat": 41919,
    "Break Enchantments": 43123,
    "Breaching Strike": 45252,
    Silencer: 39972,
    "Magehunter Strike": 46044,
    "Boon Crusher": 41283,
    "Wounding Strike": 41543,
    "Fleeting Stability": 43488,
    Dissonance: 44397,
    "Full Counter": 44165
  }
};
var Revenant = {
  name: "Revenant",
  armor: "Heavy",
  specializations: {
    Corruption: 14,
    Retribution: 9,
    Salvation: 12,
    Invocation: 3,
    Devastation: 15,
    Herald: 52,
    Renegade: 63
  },
  traits: {
    "Replenishing Despair": 1793,
    "Demonic Defiance": 1789,
    "Abyssal Chill": 1726,
    "Spontaneous Destruction": 1714,
    "Diabolic Inferno": 1795,
    "Bolstered Anguish": 1727,
    "Maniacal Persistence": 1720,
    "Venom Enhancement": 1741,
    "Pulsating Pestilence": 1721,
    "Close Quarters": 1728,
    "Improved Aggression": 1810,
    "Planar Protection": 1811,
    "Dwarven Battle Training": 1740,
    "Eye for an Eye": 1766,
    "Vicious Reprisal": 1779,
    "Retaliatory Evasion": 1782,
    "Versed in Stone": 1770,
    "Nourishing Roots": 1823,
    "Blinding Truths": 1824,
    "Tranquil Benediction": 1819,
    "Invoking Harmony": 1818,
    "Selfless Amplification": 1815,
    "Tranquil Balance": 1822,
    "Eluding Nullification": 1817,
    "Steadfast Rejuvenation": 1790,
    "Cruel Repercussion": 1732,
    "Cleansing Channel": 1761,
    "Fierce Infusion": 1784,
    "Natural Abundance": 1825,
    Equilibrium: 1774,
    "Rapid Flow": 1760,
    "Momentary Pacification": 1820,
    "Incensed Response": 1781,
    "Charged Mists": 1791,
    "Shrouding Mists": 1719,
    "Roiling Mists": 1749,
    "Ferocious Strikes": 1776,
    "Jade Echo": 1755,
    "Vicious Lacerations": 1767,
    "Malicious Reprisal": 1786,
    "Nefarious Momentum": 1765,
    "Swift Termination": 1715,
    "Assassin's Presence": 1802,
    "Dismantle Fortifications": 1800,
    "Assassin's Annihilation": 1754,
    "Swift Gale": 1813,
    "Radiant Revival": 1806,
    "Hardening Persistence": 1716,
    "Bolster Fortifications": 1738,
    "Shared Empowerment": 1743,
    "Elder's Force": 1746,
    "Harmonize Continuity": 1730,
    "Soothing Bastion": 1772,
    "Enhanced Bulwark": 1803,
    "Ashen Demeanor": 2166,
    "Blood Fury": 2079,
    "Wrought-Iron Will": 2120,
    "Sudden Reversal": 2133,
    Heartpiercer: 2092,
    "All for One": 2108,
    Vindication: 2094,
    "Lasting Legacy": 2100,
    "Righteous Rebel": 2182
  },
  skills: {
    "Legendary Dwarf Stance": 28419,
    "Soothing Stone": 27372,
    "Forced Engagement": 26679,
    "Inspiring Reinforcement": 28516,
    "Rite of the Great Dwarf": 27975,
    "Empowering Misery": 28219,
    "Banish Enchantment": 27505,
    "Pain Absorption": 27322,
    "Unyielding Anguish": 27917,
    "Embrace the Darkness": 28287,
    "Vengeful Hammers": 26557,
    "Legendary Centaur Stance": 28195,
    "Legendary Demon Stance": 28494,
    "Ventari's Will": 28427,
    "Project Tranquility": 29148,
    "Protective Solace": 26821,
    "Natural Harmony": 27025,
    "Purifying Essence": 27715,
    "Energy Expulsion": 27356,
    "Legendary Assassin Stance": 28134,
    "Riposting Shadows": 29209,
    "Enchanted Daggers": 26937,
    "Phase Traversal": 28231,
    "Impossible Odds": 27107,
    "Jade Winds": 28406,
    "Legendary Dragon Stance": 28085,
    "Facet of Light": 27220,
    "Facet of Darkness": 28379,
    "Facet of Elements": 27014,
    "Facet of Chaos": 27760,
    "Facet of Strength": 26644,
    "Facet of Nature": 29371,
    "Legendary Renegade Stance": 46409,
    "Razorclaw's Rage": 42949,
    "Icerazor's Ire": 40485,
    "Breakrazor's Bastion": 45686,
    "Darkrazor's Daring": 41220,
    "Soulcleave's Summit": 45773,
    "Heroic Command": 44076,
    "Orders from Above": 45537,
    "Citadel Bombardment": 42836
  }
};
var Necromancer = {
  name: "Necromancer",
  armor: "Light",
  specializations: {
    Spite: 53,
    Curses: 39,
    "Death Magic": 2,
    "Blood Magic": 19,
    "Soul Reaping": 50,
    Reaper: 34,
    Scourge: 60
  },
  traits: {
    "Spiteful Renewal": 916,
    "Spiteful Talisman": 914,
    "Bitter Chill": 1863,
    "Chill of Death": 899,
    "Rending Shroud": 829,
    "Unholy Fervor": 909,
    "Close to Death": 853,
    "Signets of Suffering": 919,
    "Spiteful Spirit": 903,
    "Plague Sending": 2013,
    "Master of Corruption": 816,
    "Path of Corruption": 1693,
    "Terrifying Descent": 1883,
    "Chilling Darkness": 815,
    "Parasitic Contagion": 1696,
    "Shrouded Removal": 857,
    "Lingering Curse": 801,
    Terror: 812,
    "Putrid Defense": 1922,
    "Flesh of the Master": 820,
    "Necromantic Corruption": 858,
    "Reaper's Protection": 860,
    "Deadly Strength": 855,
    "Death Nova": 842,
    "Unholy Sanctuary": 1694,
    "Corrupter's Fervor": 1940,
    "Ritual of Life": 780,
    "Weakening Shroud": 813,
    "Quickening Thirst": 788,
    "Blood Bond": 1876,
    "Banshee's Wail": 799,
    "Vampiric Presence": 1844,
    "Vampiric Rituals": 782,
    "Life from Death": 789,
    "Unholy Martyr": 1692,
    Transfusion: 778,
    "Unyielding Blast": 875,
    "Soul Marks": 898,
    "Speed of Shadows": 888,
    "Spectral Mastery": 894,
    "Vital Persistence": 861,
    "Fear of Death": 892,
    "Foot in the Grave": 889,
    "Death Perception": 893,
    Dhuumfire: 905,
    "Augury of Death": 1974,
    "Chilling Nova": 2020,
    "Relentless Pursuit": 2026,
    "Soul Eater": 1969,
    "Chilling Victory": 2008,
    "Decimate Defenses": 2031,
    "Blighter's Boon": 1932,
    "Deathly Chill": 1919,
    "Reaper's Onslaught": 2021,
    "Abrasive Grit": 2167,
    "Fell Beacon": 2074,
    "Nourishing Rot": 2102,
    "Desert Empowerment": 2059,
    "Sadistic Searing": 2067,
    "Unending Corruption": 2123,
    "Sand Savant": 2112,
    "Demonic Lore": 2164,
    "Feed from Corruption": 2080
  },
  skills: {
    "Summon Blood Fiend": 10547,
    "Well of Blood": 10527,
    "Signet of Vampirism": 21762,
    "Consume Conditions": 10548,
    "Well of Suffering": 10546,
    "Well of Power": 10609,
    "Well of Corruption": 10545,
    "Summon Bone Minions": 10541,
    "Summon Bone Fiend": 10533,
    "Well of Darkness": 10607,
    "Summon Flesh Wurm": 10543,
    "Summon Shadow Fiend": 10589,
    "Signet of Spite": 10622,
    "Signet of the Locust": 10612,
    "Plague Signet": 10562,
    "Signet of Undeath": 10611,
    "Spectral Armor": 10583,
    "Spectral Wall": 10608,
    "Corrosive Poison Cloud": 10689,
    Epidemic: 10606,
    "Spectral Grasp": 10620,
    "Spectral Walk": 10685,
    "Corrupt Boon": 10602,
    "Blood Is Power": 10544,
    "Death Shroud": 10574,
    "Plague Blast": 10690,
    Plaguelands: 10549,
    "Life Blast": 10554,
    "Summon Flesh Golem": 10646,
    "Reaper's Shroud": 30792,
    "Lich Form": 10550,
    "Life Rend": 29442,
    "Life Slash": 29458,
    "Life Reap": 30278,
    "Death's Charge": 30825,
    "Infusing Terror": 29958,
    "Soul Spiral": 30504,
    "Executioner's Scythe": 30557,
    '"You Are All Weaklings!"': 29414,
    '"Suffer!"': 30670,
    '"Nothing Can Save You!"': 29666,
    '"Your Soul Is Mine!"': 30488,
    '"Chilled to the Bone!"': 30105,
    '"Rise!"': 30772,
    "Sand Flare": 43148,
    "Ghastly Breach": 42355,
    "Trail of Anguish": 40274,
    Dessicate: 42935,
    "Sand Swell": 42917,
    "Sand Cascade": 43448,
    "Garish Pillar": 44428,
    "Serpent Siphon": 41615,
    "Nefarious Favor": 40813,
    "Manifest Sand Shade": 46474,
    "Desert Shroud": 44663
  }
};
var Elementalist = {
  name: "Elementalist",
  armor: "Light",
  specializations: {
    Fire: 31,
    Air: 41,
    Earth: 26,
    Water: 17,
    Arcane: 37,
    Tempest: 48,
    Weaver: 56
  },
  traits: {
    "Burning Precision": 296,
    "One with Fire": 340,
    Conjurer: 328,
    "Power Overwhelming": 334,
    "Burning Fire": 335,
    "Persisting Flames": 1510,
    "Pyromancer's Training": 325,
    "Blinding Ashes": 1675,
    "Zephyr's Boon": 227,
    Inscription: 229,
    "One with Air": 224,
    "Pyromancer's Puissance": 294,
    "Aeromancer's Training": 214,
    "Tempest Defense": 1502,
    "Ferocious Winds": 232,
    "Bolt to the Heart": 226,
    "Fresh Air": 1503,
    "Lightning Rod": 1672,
    "Elemental Shielding": 289,
    "Strength of Stone": 275,
    "Earth's Embrace": 282,
    "Serrated Stones": 1507,
    "Rock Solid": 281,
    "Geomancer's Training": 277,
    "Diamond Skin": 1508,
    "Written in Stone": 287,
    "Soothing Ice": 348,
    "Piercing Shards": 363,
    "Stone Heart": 1674,
    "Soothing Disruption": 364,
    "Stop, Drop, and Roll": 360,
    "Aquamancer's Training": 349,
    "Cleansing Wave": 358,
    "Soothing Power": 2028,
    "Arcane Precision": 253,
    "Powerful Aura": 361,
    "Cleansing Water": 362,
    "Renewing Stamina": 266,
    "Arcane Abatement": 1487,
    "Arcane Resurrection": 265,
    "Elemental Contingency": 1673,
    "Final Shielding": 257,
    "Evasive Arcana": 238,
    "Elemental Surge": 263,
    "Bountiful Power": 1511,
    "Gale Song": 1952,
    "Tempestuous Aria": 1891,
    "Invigorating Torrents": 1902,
    "Harmonious Conduit": 2015,
    "Imbued Melodies": 1839,
    "Latent Stamina": 1962,
    "Lucid Singularity": 2033,
    "Unstable Conduit": 1886,
    "Elemental Bastion": 1986,
    "Superior Elements": 2177,
    "Elemental Pursuit": 2165,
    "Weaver's Prowess": 2180,
    "Elements of Rage": 2131,
    "Bolstered Elements": 2170,
    "Master's Fortitude": 2115,
    "Swift Revenge": 2061,
    "Invigorating Strikes": 2138,
    "Unravel Hexes": 2090
  },
  skills: {
    "Air Attunement": 5494,
    "Earth Attunement": 5495,
    "Fire Attunement": 5492,
    "Glyph of Elemental Harmony": 5569,
    "Arcane Brilliance": 21656,
    "Water Attunement": 5493,
    "Ether Renewal": 5507,
    "Signet of Restoration": 5503,
    "Arcane Wave": 5638,
    "Arcane Shield": 5641,
    "Arcane Power": 5635,
    "Arcane Blast": 5539,
    "Glyph of Storms": 5734,
    "Glyph of Lesser Elementals": 5502,
    "Glyph of Renewal": 5573,
    "Glyph of Elemental Power": 5506,
    "Signet of Fire": 5542,
    "Signet of Water": 5570,
    "Signet of Air": 5572,
    "Signet of Earth": 5571,
    "Cleansing Fire": 5535,
    "Mist Form": 5554,
    "Lightning Flash": 5536,
    "Armor of Earth": 5639,
    "Conjure Flame Axe": 5540,
    "Conjure Frost Bow": 5567,
    "Conjure Lightning Hammer": 5624,
    "Conjure Earth Shield": 5546,
    "Glyph of Elementals": 5666,
    "Conjure Fiery Greatsword": 5516,
    Tornado: 5534,
    '"Feel the Burn!"': 30662,
    '"Wash the Pain Away!"': 29535,
    '"Flash-Freeze!"': 29948,
    '"Eye of the Storm!"': 30047,
    '"Aftershock!"': 30432,
    '"Rebound!"': 29968,
    "Stone Resonance": 44926,
    "Twist of Fate": 45746,
    "Weave Self": 43638,
    "Aquatic Stance": 44239,
    Unravel: 44612,
    "Primordial Stance": 40183
  }
};
var Mesmer = {
  name: "Mesmer",
  armor: "Light",
  specializations: {
    Domination: 10,
    Dueling: 1,
    Illusions: 24,
    Chaos: 45,
    Mirage: 59,
    Inspiration: 23,
    Chronomancer: 40
  },
  traits: {
    "Confounding Suggestions": 686,
    "Empowered Illusions": 682,
    "Rending Shatter": 687,
    "Blurred Inscriptions": 713,
    "Imagined Burden": 681,
    "Power Block": 1688,
    "Phantasmal Fury": 701,
    "Desperate Decoy": 705,
    "Shattered Concentration": 693,
    "Duelist's Discipline": 700,
    "Blinding Dissipation": 1889,
    "Evasive Mirror": 1960,
    "Mental Anguish": 680,
    "Fencer's Finesse": 708,
    "Furious Interruption": 712,
    "Superiority Complex": 692,
    "Shattered Strength": 722,
    Ineptitude: 1950,
    "Deceptive Evasion": 704,
    "Compounding Power": 721,
    "Persistence of Memory": 1869,
    "The Pledge": 691,
    "Phantasmal Haste": 729,
    "Maim the Disillusioned": 1690,
    "Master of Fragmentation": 2035,
    "Malicious Sorcery": 753,
    "Descent into Madness": 670,
    "Illusionary Defense": 675,
    "Master of Manipulation": 677,
    "Mirror of Anguish": 673,
    "Chaotic Transference": 668,
    "Chaotic Interruption": 671,
    "Prismatic Understanding": 674,
    "Bountiful Disillusionment": 1687,
    "Chaotic Dampening": 669,
    "Self-Deception": 2141,
    "Riddle of Sand": 2110,
    "Renewing Oasis": 2082,
    "Shards of Glass": 2178,
    "Mirrored Axes": 2098,
    "Mirage Mantle": 2174,
    "Phantasmal Force": 733,
    "Elusive Mind": 2113,
    "Infinite Horizon": 2070,
    "Dune Cloak": 2169,
    "Medic's Feedback": 756,
    "Restorative Mantras": 738,
    "Persisting Images": 744,
    "Warden's Feedback": 751,
    "Restorative Illusions": 740,
    "Mental Defense": 2005,
    "Protected Phantasms": 1980,
    "Illusionary Inspiration": 1866,
    "Temporal Enchanter": 752,
    "Delayed Reactions": 1838,
    "Time Catches Up": 1995,
    "All's Well That Ends Well": 1987,
    "Danger Time": 2009,
    "Illusionary Reversion": 1913,
    "Improved Alacrity": 1978,
    "Lost Time": 1942,
    "Seize the Moment": 2022,
    Chronophantasma: 1890
  },
  skills: {
    Diversion: 10287,
    "Mind Wrack": 10191,
    "Ether Feast": 10176,
    Distortion: 10192,
    Mirror: 10177,
    "Mantra of Recovery": 10213,
    "Cry of Frustration": 10190,
    "Signet of Midnight": 10234,
    "Signet of Illusions": 10247,
    "Mantra of Resolve": 10207,
    "Signet of Inspiration": 10236,
    "Mantra of Pain": 10211,
    "Signet of Domination": 10232,
    "Arcane Thievery": 10185,
    "Illusion of Life": 10244,
    Blink: 10200,
    "Mantra of Distraction": 10204,
    Mimic: 29578,
    "Signet of the Ether": 21750,
    "Mantra of Concentration": 10237,
    "Phantasmal Defender": 10341,
    Feedback: 10302,
    "Null Field": 10203,
    "Mirror Images": 10202,
    "Phantasmal Disenchanter": 10267,
    Veil: 10187,
    "Time Warp": 10311,
    "Portal Entre": 10197,
    "Continuum Split": 29830,
    "Signet of Humility": 29519,
    "Gravity Well": 30359,
    "Well of Calamity": 30525,
    "Well of Eternity": 30305,
    "Well of Recall": 29856,
    "Well of Precognition": 29526,
    "Mass Invisibility": 10245,
    "False Oasis": 40200,
    "Well of Action": 30814,
    Jaunt: 45449,
    Decoy: 10201,
    "Illusionary Ambush": 45046,
    "Mirage Advance": 42851,
    "Sand through Glass": 43064,
    "Crystal Sands": 41065
  }
};
var Ranger = {
  name: "Ranger",
  armor: "Medium",
  specializations: {
    Skirmishing: 30,
    "Wilderness Survival": 33,
    Beastmastery: 32,
    "Nature Magic": 25,
    Druid: 5,
    Marksmanship: 8,
    Soulbeast: 55
  },
  traits: {
    "Primal Reflexes": 1067,
    "Trapper's Expertise": 1075,
    "Sharpened Edges": 1069,
    "Quick Draw": 1064,
    "Hidden Barbs": 1846,
    "Light on your Feet": 1912,
    "Vicious Quarry": 1888,
    "Strider's Defense": 1700,
    Spotter: 1016,
    "Oakheart Salve": 1086,
    "Soften the Fall": 1098,
    "Taste for Danger": 1099,
    "Refined Toxins": 2032,
    Ambidexterity: 1101,
    "Shared Anguish": 1100,
    "Empathic Bond": 1094,
    "Wilderness Knowledge": 1699,
    "Go for the Eyes": 1861,
    "Poison Master": 1701,
    "Potent Ally": 1072,
    "Resounding Timbre": 1606,
    "Wilting Strike": 975,
    "Two-Handed Training": 1047,
    "Natural Healing": 970,
    "Honed Axes": 1066,
    "Zephyr's Speed": 968,
    "Instinctive Reaction": 978,
    "Bountiful Hunter": 1062,
    "Allies' Aid": 1060,
    "Evasive Purity": 1054,
    "Spirited Arrival": 965,
    "Windborne Notes": 964,
    "Nature's Vengeance": 1038,
    "Protective Ward": 1988,
    "Invigorating Bond": 1697,
    "Druidic Clarity": 1868,
    "Cultivated Synergy": 2016,
    "Primal Echoes": 1935,
    "Verdant Etching": 2001,
    "Natural Stride": 2056,
    "Grace of the Land": 2057,
    "Lingering Light": 2058,
    "Ancient Seeds": 2055,
    "Beastly Warden": 1945,
    "Celestial Shadow": 2053,
    "Hunter's Gaze": 1014,
    Stoneform: 1021,
    "Clarion Bond": 986,
    "Steady Focus": 1000,
    "Brutish Seals": 1001,
    "Predator's Onslaught": 996,
    "Moment of Clarity": 1070,
    "Live Fast": 2071,
    "Fresh Reinforcement": 2134,
    Remorseless: 1015,
    "Lead the Wind": 1698,
    "Unstoppable Union": 2072,
    "Second Skin": 2119,
    "Essence of Speed": 2085,
    "Eternal Bond": 2155,
    "Leader of the Pack": 2128,
    "Oppressive Superiority": 2143,
    "Predator's Cunning": 2161
  },
  skills: {
    "Troll Unguent": 12483,
    "Healing Spring": 12489,
    '"We Heal As One!"': 31914,
    "Water Spirit": 21773,
    "Spike Trap": 12476,
    "Flame Trap": 12499,
    "Viper's Nest": 12496,
    "Frost Trap": 12492,
    "Signet of Renewal": 12502,
    "Signet of the Hunt": 12542,
    "Signet of Stone": 12500,
    "Signet of the Wild": 12491,
    "Sharpening Stone": 12537,
    "Lightning Reflexes": 12494,
    "Quickening Zephyr": 12550,
    "Sun Spirit": 12498,
    "Muddy Terrain": 12501,
    "Frost Spirit": 12497,
    "Stone Spirit": 12495,
    "Storm Spirit": 12493,
    '"Sic \'Em!"': 12633,
    '"Guard!"': 12632,
    '"Search and Rescue!"': 34309,
    '"Strength of the Pack!"': 12516,
    Entangle: 12580,
    "Spirit of Nature": 12569,
    '"Protect Me!"': 12631,
    "Glyph of Rejuvenation": 31407,
    "Glyph of Equality": 31746,
    "Glyph of Alignment": 31322,
    "Glyph of Unity": 31677,
    "Celestial Avatar": 31869,
    "Dolyak Stance": 45789,
    "Glyph of Empowerment": 31582,
    "One Wolf Pack": 45717,
    "Glyph of the Tides": 30238,
    "Griffon Stance": 45142,
    "Bear Stance": 44948,
    Swoop: 44991,
    "Vulture Stance": 40498,
    Bite: 40625,
    "Moa Stance": 45970,
    "Crippling Leap": 43726,
    "Quickening Screech": 42042,
    "Brutal Charge": 46432,
    Chomp: 44885,
    "Tail Lash": 46386,
    "Defy Pain": 43060,
    "Devourer Retreat": 41461,
    Kick: 41524,
    "Tail Swipe": 41575,
    Charge: 45743,
    Maul: 41406,
    "Narcotic Spores": 40111,
    "Harmonic Cry": 44617,
    "Crippling Anguish": 44384,
    "Frenzied Attack": 43548,
    "Call Lightning": 43788,
    Photosynthesize: 43701,
    "Entangling Web": 44097,
    "Poison Gas": 43671,
    "Healing Cloud": 43186,
    "Dark Water": 41837,
    "Rain of Spikes": 41206,
    "Sharpen Spines": 45479,
    Fear: 44360,
    Protection: 42717,
    "Charging Bite": 42797,
    Takedown: 42907,
    "Smoke Assault": 40255,
    "Unflinching Fortitude": 45797,
    "Wing Buffet": 41908,
    "Spiritual Reprieve": 44626,
    "Worldly Impact": 40729,
    "Prelude Lash": 43375,
    "Primal Cry": 40588,
    Beastmode: 42944,
    "Leave Beastmode": 43014
  }
};
var Thief = {
  name: "Thief",
  armor: "Medium",
  specializations: {
    "Critical Strikes": 35,
    "Deadly Arts": 28,
    "Shadow Arts": 20,
    Acrobatics: 54,
    Trickery: 44,
    Daredevil: 7,
    Deadeye: 58
  },
  traits: {
    "Assassin's Fury": 1209,
    "Signets of Power": 1267,
    "Twin Fangs": 1268,
    "Practiced Tolerance": 1272,
    "Sundering Strikes": 1170,
    "No Quarter": 1904,
    "Ankle Shots": 1299,
    "Hidden Killer": 1215,
    "Invigorating Precision": 1702,
    "Dagger Training": 1245,
    Mug: 1276,
    "Trapper's Respite": 1164,
    "Deadly Trapper": 1169,
    "Panic Strike": 1292,
    "Revealed Training": 1704,
    "Potent Poison": 1291,
    "Last Refuge": 1160,
    Executioner: 1269,
    "Shadow's Embrace": 1284,
    "Shadow Protector": 1297,
    "Hidden Thief": 1130,
    "Leeching Venoms": 1300,
    "Cloaked in Shadow": 1134,
    "Shadow's Rejuvenation": 1135,
    "Rending Shade": 1162,
    "Vigorous Recovery": 1289,
    "Pain Response": 1237,
    "Swindler's Equilibrium": 1192,
    "Hard to Catch": 1290,
    "Guarded Initiation": 1241,
    Improvisation: 1167,
    "Assassin's Reward": 1238,
    "Upper Hand": 1295,
    Uncatchable: 1159,
    "Instant Reflexes": 1112,
    "Concealed Defeat": 1293,
    "Don't Stop": 1703,
    "Burst of Agility": 1252,
    "Thrill of the Crime": 1163,
    "Bountiful Theft": 1277,
    Trickster: 1286,
    "Sleight of Hand": 1158,
    "Quick Pockets": 1187,
    "Pressure Striking": 1190,
    "Havoc Mastery": 1933,
    "Weakening Strikes": 2023,
    "Brawler's Tenacity": 1949,
    "Staff Master": 1884,
    "Escapist's Absolution": 1893,
    "Impacting Disruption": 1975,
    "Lotus Training": 1833,
    "Unhindered Combatant": 1964,
    "Bounding Dodger": 2047,
    "Iron Sight": 2173,
    Unforgiving: 2078,
    "Revealed Malice": 2145,
    "One in the Chamber": 2136,
    "Bewildering Ambush": 1706,
    "Peripheral Vision": 2160,
    "Be Quick or Be Killed": 2093,
    "Fire for Effect": 2146,
    "Maleficent Seven": 2111,
    "Silent Scope": 2118
  },
  skills: {
    Withdraw: 13021,
    "Skelk Venom": 21778,
    Steal: 13014,
    "Skale Venom": 13055,
    "Spider Venom": 13037,
    "Ice Drake Venom": 13096,
    "Signet of Malice": 13050,
    "Hide in Shadows": 13027,
    "Devourer Venom": 13093,
    "Needle Trap": 13026,
    "Shadow Trap": 13038,
    Tripwire: 13057,
    Ambush: 13056,
    "Assassin's Signet": 13046,
    "Infiltrator's Signet": 13064,
    "Signet of Agility": 13062,
    "Signet of Shadows": 13060,
    "Scorpion Wire": 13020,
    Caltrops: 13028,
    "Roll for Initiative": 13035,
    Haste: 13066,
    "Smoke Screen": 13065,
    Shadowstep: 13002,
    "Shadow Refuge": 13117,
    "Thieves Guild": 13082,
    "Basilisk Venom": 13132,
    "Dagger Storm": 13085,
    "Fist Flurry": 30868,
    "Distracting Daggers": 30568,
    "Channeled Vigor": 30400,
    "Bandit's Defense": 30661,
    "Impairing Daggers": 30369,
    "Impact Strike": 29516,
    "Malicious Restoration": 45088,
    "Shadow Meld": 45508,
    "Shadow Gust": 46335,
    "Binding Shadow": 41205,
    "Shadow Flare": 41158,
    Mercy: 41372,
    "Deadeye's Mark": 43390,
    "Mace Head Crack": 1131,
    "Throw Chain": 1118,
    "Whirling Strike": 1167,
    "Whirling Axe": 1162,
    "Branch Leap": 1115,
    "Throw Gunk": 1110,
    "Healing Seed": 1139,
    "Eat Egg": 1125,
    "Blinding Tuft": 1148,
    "Ice Shard Stab": 1129,
    "Consume Plasma": 1123,
    "Skull Fear": 1141,
    "Essence Sap": 31438,
    "Blinding Powder": 13044
  }
};
var Engineer = {
  name: "Engineer",
  armor: "Medium",
  specializations: {
    Explosives: 6,
    Firearms: 38,
    Alchemy: 29,
    Inventions: 47,
    Tools: 21,
    Scrapper: 43,
    Holosmith: 57
  },
  traits: {
    "Blasting Zone": 525,
    "Glass Cannon": 1882,
    "Aim-Assisted Rocket": 482,
    "Big Boomer": 1892,
    Grenadier: 514,
    "Short Fuse": 1944,
    "Orbital Command": 1541,
    Shrapnel: 505,
    Minesweeper: 1947,
    "Chemical Rounds": 1878,
    "Heavy Armor Exploit": 1930,
    "High Caliber": 1914,
    "Pinpoint Distribution": 1984,
    "Skilled Marksman": 2006,
    "No Scope": 1923,
    Juggernaut: 510,
    "Modified Ammunition": 526,
    "Invigorating Speed": 396,
    "Protection Injection": 509,
    "Incendiary Powder": 433,
    "Health Insurance": 521,
    "Inversion Enzyme": 520,
    "Self-Regulating Defenses": 469,
    "Backpack Regenerator": 470,
    HGH: 473,
    "Stimulant Supplier": 1871,
    "Iron Blooded": 1854,
    "Over Shield": 394,
    "Experimental Turrets": 1678,
    "Automated Medical Response": 1901,
    "Soothing Detonation": 1834,
    "Autodefense Bomb Dispenser": 507,
    "Mecha Legs": 445,
    "Bunker Down": 1680,
    "Static Discharge": 532,
    "Advanced Turrets": 472,
    "Reactive Lenses": 1997,
    "Medical Dispersion Field": 1916,
    "Power Wrench": 531,
    "Streamlined Kits": 512,
    "Takedown Round": 1832,
    "Adrenal Implant": 523,
    Gadgeteer: 1679,
    "Perfectly Weighted": 1971,
    "Shocking Speed": 1917,
    "Recovery Matrix": 1867,
    "Lock On": 1946,
    "Kinetic Battery": 1856,
    "Expert Examination": 1999,
    "Rapid Regeneration": 1954,
    "Adaptive Armor": 1981,
    "Final Salvo": 2052,
    "Prismatic Converter": 2157,
    "Mass Momentum": 1860,
    "Solar Focusing Lens": 2106,
    "Light Density Amplifier": 2114,
    "Crystal Configuration: Eclipse": 2152,
    "Crystal Configuration: Storm": 2103,
    "Crystal Configuration: Zephyr": 2091,
    "Applied Force": 1849,
    "Thermal Release Valve": 2066,
    "Enhanced Capacity Storage Unit": 2137,
    "Photonic Blasting Module": 2064
  },
  skills: {
    "Elixir H": 5834,
    "Med Kit": 5802,
    "Healing Turret": 5857,
    "A.E.D.": 21659,
    "Flame Turret": 5836,
    "Rifle Turret": 5818,
    "Thumper Turret": 5838,
    "Rocket Turret": 5912,
    "Elixir B": 5821,
    "Net Turret": 5837,
    "Elixir U": 5862,
    "Elixir S": 5861,
    "Elixir C": 5860,
    "Elixir R": 5968,
    "Bomb Kit": 5812,
    Flamethrower: 5927,
    "Elixir Gun": 5933,
    "Tool Kit": 5904,
    "Grenade Kit": 5805,
    "Throw Mine": 6161,
    "Personal Battering Ram": 5811,
    "Slick Shoes": 5825,
    "Utility Goggles": 5865,
    "Supply Crate": 5868,
    "Elite Mortar Kit": 30800,
    "Medic Gyro": 30357,
    "Rocket Boots": 5910,
    "Elixir X": 5832,
    "Bulwark Gyro": 30101,
    "Purge Gyro": 29739,
    "Shredder Gyro": 29921,
    "Blast Gyro Tag": 31248,
    "Sneak Gyro": 30815,
    "Coolant Blast": 40507,
    "Prime Light Beam": 42009,
    "Photon Wall": 43739,
    "Laser Disk": 42842,
    "Spectrum Shield": 41218,
    "Hard Light Arena": 44646,
    "Engage Photon Forge": 42938
  }
};