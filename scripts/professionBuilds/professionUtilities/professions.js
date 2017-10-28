define([], function() {
  "use strict";
  var Guardian = {
    name: "Guardian",
    specializations: {
      Zeal: 42,
      Radiance: 16,
      Virtues: 46,
      Dragonhunter: 27,
      Valor: 13,
      Firebrand: 62,
      Honor: 49
    },
    traits: {
      "Fiery Wrath": { id: 634 },
      "Wrathful Spirit": { id: 563 },
      "Binding Jeopardy": { id: 628 },
      "Zealous Scepter": { id: 1925 },
      "Kindled Zeal": { id: 1556 },
      "Zealous Blade": { id: 653 },
      "Shattered Aegis": { id: 637 },
      "Inner Fire": { id: 577 },
      "Right-Hand Strength": { id: 566 },
      "Symbolic Avenger": { id: 2017 },
      "Healer's Retribution": { id: 574 },
      "Eternal Armory": { id: 635 },
      "Wrath of Justice": { id: 578 },
      Retribution: { id: 565 },
      "Amplified Wrath": { id: 1686 },
      "Righteous Instincts": { id: 1683 },
      "Unscathed Contender": { id: 624 },
      "Radiant Fire": { id: 567 },
      "Perfect Inscriptions": { id: 579 },
      "Retaliatory Subconscious": { id: 625 },
      "Master of Consecrations": { id: 617 },
      "Virtuous Solace": { id: 603 },
      "Absolute Resolution": { id: 610 },
      "Glacial Heart": { id: 587 },
      "Permeating Wrath": { id: 622 },
      "Indomitable Courage": { id: 612 },
      "Dulled Senses": { id: 1983 },
      "Piercing Light": { id: 1898 },
      "Hunter's Determination": { id: 2037 },
      "Soaring Devastation": { id: 1911 },
      "Battle Presence": { id: 554 },
      "Zealot's Aggression": { id: 1835 },
      Bulwark: { id: 1943 },
      "Hunter's Fortification": { id: 1908 },
      "Heavy Light": { id: 1963 },
      "Strength of the Fallen": { id: 588 },
      "Smiter's Boon": { id: 581 },
      "Big Game Hunter": { id: 1955 },
      "Focus Mastery": { id: 633 },
      "Stalwart Defender": { id: 580 },
      "Strength in Numbers": { id: 584 },
      "Altruistic Healing": { id: 585 },
      "Monk's Focus": { id: 586 },
      "Retributive Armor": { id: 589 },
      "Unrelenting Criticism": { id: 2075 },
      "Communal Defenses": { id: 1684 },
      "Liberator's Vow": { id: 2101 },
      "Weighty Terms": { id: 2063 },
      "Stalwart Speed": { id: 2076 },
      "Legendary Lore": { id: 2116 },
      "Stoic Demeanor": { id: 2105 },
      "Invigorated Bulwark": { id: 1899 },
      "Protector's Impact": { id: 654 },
      Quickfire: { id: 2179 },
      "Archivist of Whispers": { id: 2086 },
      "Protective Reviver": { id: 559 },
      Loremaster: { id: 2159 },
      "Honorable Staff": { id: 557 },
      "Pure of Heart": { id: 549 },
      "Empowering Might": { id: 562 },
      "Pure of Voice": { id: 553 },
      "Writ of Persistence": { id: 558 },
      "Force of Will": { id: 1682 }
    },
    skills: {
      "Virtue of Courage": { id: 9118, slot: "Profession_3" },
      "Virtue of Resolve": { id: 9120, slot: "Profession_2" },
      "Virtue of Justice": { id: 9115, slot: "Profession_1" },
      Shelter: { id: 9102, slot: "Heal" },
      '"Receive the Light!"': { id: 9083, slot: "Heal" },
      "Hammer of Wisdom": { id: 9125, slot: "Utility" },
      "Sword of Justice": { id: 9168, slot: "Utility" },
      "Signet of Resolve": { id: 9158, slot: "Heal" },
      "Litany of Wrath": { id: 21664, slot: "Heal" },
      "Shield of the Avenger": { id: 9182, slot: "Utility" },
      "Bane Signet": { id: 9093, slot: "Utility" },
      "Signet of Judgment": { id: 9150, slot: "Utility" },
      "Signet of Wrath": { id: 9151, slot: "Utility" },
      "Signet of Mercy": { id: 9163, slot: "Utility" },
      "Bow of Truth": { id: 9175, slot: "Utility" },
      '"Save Yourselves!"': { id: 9085, slot: "Utility" },
      '"Retreat!"': { id: 9084, slot: "Utility" },
      '"Stand Your Ground!"': { id: 9153, slot: "Utility" },
      '"Hold the Line!"': { id: 9152, slot: "Utility" },
      "Wall of Reflection": { id: 9251, slot: "Utility" },
      "Purging Flames": { id: 9187, slot: "Utility" },
      "Hallowed Ground": { id: 9253, slot: "Utility" },
      Sanctuary: { id: 9128, slot: "Utility" },
      "Contemplation of Purity": { id: 9248, slot: "Utility" },
      "Judge's Intervention": { id: 9247, slot: "Utility" },
      "Merciful Intervention": { id: 9246, slot: "Utility" },
      "Smite Condition": { id: 9245, slot: "Utility" },
      '"Feel My Wrath!"': { id: 29965, slot: "Elite" },
      "Signet of Courage": { id: 30461, slot: "Elite" },
      "Renewed Focus": { id: 9154, slot: "Elite" },
      Purification: { id: 30025, slot: "Heal" },
      "Test of Faith": { id: 29786, slot: "Utility" },
      "Fragments of Faith": { id: 30553, slot: "Utility" },
      "Light's Judgment": { id: 30871, slot: "Utility" },
      "Mantra of Solace": { id: 41714, slot: "Heal" },
      "Mantra of Potence": { id: 40915, slot: "Utility" },
      "Dragon's Maw": { id: 30273, slot: "Elite" },
      "Procession of Blades": { id: 30364, slot: "Utility" },
      "Mantra of Flame": { id: 46148, slot: "Utility" },
      "Mantra of Truth": { id: 44080, slot: "Utility" },
      "Mantra of Lore": { id: 45460, slot: "Utility" },
      "Mantra of Liberation": { id: 43357, slot: "Elite" },
      "Tome of Courage": { id: 42259, slot: "Profession_3" },
      "Tome of Resolve": { id: 41780, slot: "Profession_2" },
      "Stow Tome": { id: 41380, slot: "Profession_1" },
      "Tome of Justice": { id: 44364, slot: "Profession_1" }
    },
    weapons: {
      Axe: {
        specialization: 62,
        flags: ["Mainhand"],
        skills: [
          { id: 45047, slot: "Weapon_1" },
          { id: 40624, slot: "Weapon_2" },
          { id: 45402, slot: "Weapon_3" }
        ]
      },
      Focus: {
        flags: ["Offhand"],
        skills: [{ id: 9112, slot: "Weapon_4" }, { id: 9082, slot: "Weapon_5" }]
      },
      Greatsword: {
        flags: ["TwoHand"],
        skills: [
          { id: 9137, slot: "Weapon_1" },
          { id: 9081, slot: "Weapon_2" },
          { id: 9080, slot: "Weapon_3" },
          { id: 9146, slot: "Weapon_4" },
          { id: 9147, slot: "Weapon_5" }
        ]
      },
      Hammer: {
        flags: ["TwoHand"],
        skills: [
          { id: 9159, slot: "Weapon_1" },
          { id: 9194, slot: "Weapon_2" },
          { id: 9260, slot: "Weapon_3" },
          { id: 9124, slot: "Weapon_4" },
          { id: 9195, slot: "Weapon_5" }
        ]
      },
      Spear: {
        flags: ["TwoHand", "Aquatic"],
        skills: [
          { id: 9189, slot: "Weapon_1" },
          { id: 9190, slot: "Weapon_2" },
          { id: 9191, slot: "Weapon_3" },
          { id: 9192, slot: "Weapon_4" },
          { id: 9193, slot: "Weapon_5" }
        ]
      },
      Longbow: {
        specialization: 27,
        flags: ["TwoHand"],
        skills: [
          { id: 30471, slot: "Weapon_1" },
          { id: 30229, slot: "Weapon_2" },
          { id: 29630, slot: "Weapon_3" },
          { id: 29789, slot: "Weapon_4" },
          { id: 30628, slot: "Weapon_5" }
        ]
      },
      Mace: {
        flags: ["Mainhand"],
        skills: [
          { id: 9109, slot: "Weapon_1" },
          { id: 9111, slot: "Weapon_2" },
          { id: 9086, slot: "Weapon_3" }
        ]
      },
      Scepter: {
        flags: ["Mainhand"],
        skills: [
          { id: 9098, slot: "Weapon_1" },
          { id: 9090, slot: "Weapon_2" },
          { id: 9099, slot: "Weapon_3" }
        ]
      },
      Shield: {
        flags: ["Offhand"],
        skills: [
          { id: 15834, slot: "Weapon_4" },
          { id: 9087, slot: "Weapon_4" },
          { id: 9091, slot: "Weapon_5" }
        ]
      },
      Staff: {
        flags: ["TwoHand"],
        skills: [
          { id: 9122, slot: "Weapon_1" },
          { id: 9140, slot: "Weapon_2" },
          { id: 9143, slot: "Weapon_3" },
          { id: 9265, slot: "Weapon_4" },
          { id: 9144, slot: "Weapon_5" }
        ]
      },
      Sword: {
        flags: ["Mainhand"],
        skills: [
          { id: 9105, slot: "Weapon_1" },
          { id: 9097, slot: "Weapon_2" },
          { id: 9107, slot: "Weapon_3" }
        ]
      },
      Torch: {
        flags: ["Offhand"],
        skills: [{ id: 9104, slot: "Weapon_4" }, { id: 9088, slot: "Weapon_5" }]
      },
      Trident: {
        flags: ["TwoHand", "Aquatic"],
        skills: [
          { id: 9205, slot: "Weapon_1" },
          { id: 9207, slot: "Weapon_2" },
          { id: 9208, slot: "Weapon_3" },
          { id: 9209, slot: "Weapon_4" },
          { id: 9206, slot: "Weapon_5" }
        ]
      }
    }
  };
  var Warrior = {
    name: "Warrior",
    specializations: {
      Defense: 22,
      Tactics: 11,
      Discipline: 51,
      Berserker: 18,
      Strength: 4,
      Arms: 36,
      Spellbreaker: 61
    },
    traits: {
      "Cull the Weak": { id: 1372 },
      "Defy Pain": { id: 1368 },
      "Armored Attack": { id: 1379 },
      "Dogged March": { id: 1488 },
      "Sundering Mace": { id: 1367 },
      "Last Stand": { id: 1375 },
      "Rousing Resilience": { id: 1708 },
      "Shield Master": { id: 1376 },
      "Leg Specialist": { id: 1469 },
      "Quick Breathing": { id: 1474 },
      Empowered: { id: 1471 },
      "Shrug It Off": { id: 1486 },
      "Burning Arrows": { id: 1479 },
      "Cleansing Ire": { id: 1649 },
      "Empower Allies": { id: 1482 },
      "Powerful Synergy": { id: 1667 },
      "Vigorous Shouts": { id: 1470 },
      "Phalanx Strength": { id: 1711 },
      "Crack Shot": { id: 1329 },
      "Warrior's Sprint": { id: 1413 },
      "Vengeful Return": { id: 1381 },
      "Destruction of the Empowered": { id: 1489 },
      "Inspiring Battle Standard": { id: 1484 },
      "Brawler's Recovery": { id: 1709 },
      "Axe Mastery": { id: 1369 },
      "Heightened Focus": { id: 1317 },
      "Burst Mastery": { id: 1657 },
      "Savage Instinct": { id: 1977 },
      "Heat the Soul": { id: 2042 },
      "Smash Brawler": { id: 2049 },
      "Bloody Roar": { id: 1928 },
      "Blood Reaction": { id: 2011 },
      "Last Blaze": { id: 2039 },
      "King of Fires": { id: 2038 },
      "Eternal Champion": { id: 2043 },
      "Dead or Alive": { id: 2002 },
      "Peak Performance": { id: 1444 },
      "Brave Stride": { id: 1447 },
      "Body Blow": { id: 2000 },
      "Restorative Strength": { id: 1451 },
      "Forceful Greatsword": { id: 1338 },
      "Great Fortitude": { id: 1449 },
      "Berserker's Power": { id: 1437 },
      "Might Makes Right": { id: 1454 },
      "Merciless Hammer": { id: 1440 },
      "Wounding Precision": { id: 1455 },
      Opportunist: { id: 1334 },
      "Unsuspecting Foe": { id: 1315 },
      "Burst Precision": { id: 1336 },
      Blademaster: { id: 1333 },
      Furious: { id: 1346 },
      "Dual Wielding": { id: 1707 },
      "Signet Mastery": { id: 1344 },
      "Pure Strike": { id: 2107 },
      "No Escape": { id: 2140 },
      "Loss Aversion": { id: 2126 },
      "Rending Strikes": { id: 1316 },
      "Slow Counter": { id: 2097 },
      "Guard Counter": { id: 2153 },
      "Sun and Moon Style": { id: 2095 },
      "Enchantment Collapse": { id: 2163 },
      "Magebane Tether": { id: 2060 },
      "Revenge Counter": { id: 2168 }
    },
    skills: {
      "Forceful Shot": { id: 41330, slot: "Profession_1" },
      "Arcing Slice": { id: 42707, slot: "Profession_1" },
      Flurry: { id: 42494, slot: "Profession_1" },
      "Whirling Strike": { id: 41746, slot: "Profession_1" },
      Eviscerate: { id: 43566, slot: "Profession_1" },
      "Skull Crack": { id: 41110, slot: "Profession_1" },
      "Combustive Shot": { id: 42803, slot: "Profession_1" },
      "Kill Shot": { id: 42041, slot: "Profession_1" },
      Earthshaker: { id: 40601, slot: "Profession_1" },
      '"To the Limit!"': { id: 14402, slot: "Heal" },
      "Healing Signet": { id: 14389, slot: "Heal" },
      "Defiant Stance": { id: 21815, slot: "Heal" },
      Kick: { id: 14502, slot: "Utility" },
      "Bull's Charge": { id: 14516, slot: "Utility" },
      Mending: { id: 14401, slot: "Heal" },
      Stomp: { id: 14388, slot: "Utility" },
      "Signet of Fury": { id: 14410, slot: "Utility" },
      "Signet of Stamina": { id: 14479, slot: "Utility" },
      "Dolyak Signet": { id: 14413, slot: "Utility" },
      "Signet of Might": { id: 14404, slot: "Utility" },
      "Throw Bolas": { id: 14354, slot: "Utility" },
      '"For Great Justice!"': { id: 14403, slot: "Utility" },
      '"Shake It Off!"': { id: 14372, slot: "Utility" },
      '"On My Mark!"': { id: 14575, slot: "Utility" },
      '"Fear Me!"': { id: 14409, slot: "Utility" },
      "Banner of Defense": { id: 14528, slot: "Utility" },
      "Banner of Strength": { id: 14405, slot: "Utility" },
      "Banner of Discipline": { id: 14407, slot: "Utility" },
      "Banner of Tactics": { id: 14408, slot: "Utility" },
      "Berserker Stance": { id: 14406, slot: "Utility" },
      "Endure Pain": { id: 14392, slot: "Utility" },
      "Battle Standard": { id: 14419, slot: "Elite" },
      "Signet of Rage": { id: 14355, slot: "Elite" },
      Rampage: { id: 14483, slot: "Elite" },
      Berserk: { id: 30185, slot: "Profession_2" },
      "Balanced Stance": { id: 14412, slot: "Utility" },
      "Gun Flame": { id: 29644, slot: "Profession_1" },
      "Skull Grinder": { id: 29679, slot: "Profession_1" },
      "Burning Shackles": { id: 30989, slot: "Profession_1" },
      Frenzy: { id: 14368, slot: "Utility" },
      "Wild Whirl": { id: 31048, slot: "Profession_1" },
      "Scorched Earth": { id: 29923, slot: "Profession_1" },
      "Arc Divider": { id: 29852, slot: "Profession_1" },
      "Flaming Flurry": { id: 30682, slot: "Profession_1" },
      Decapitate: { id: 30851, slot: "Profession_1" },
      "Rupturing Smash": { id: 30879, slot: "Profession_1" },
      "Head Butt": { id: 30343, slot: "Elite" },
      "Wild Blow": { id: 29941, slot: "Utility" },
      "Sundering Leap": { id: 29613, slot: "Utility" },
      "Blood Reckoning": { id: 30189, slot: "Heal" },
      Outrage: { id: 30258, slot: "Utility" },
      "Shattering Blow": { id: 30074, slot: "Utility" },
      "Natural Healing": { id: 41100, slot: "Heal" },
      "Featherfoot Grace": { id: 45380, slot: "Utility" },
      "Sight beyond Sight": { id: 43745, slot: "Utility" },
      "Winds of Disenchantment": { id: 45333, slot: "Elite" },
      "Imminent Threat": { id: 41919, slot: "Utility" },
      "Break Enchantments": { id: 43123, slot: "Utility" },
      "Breaching Strike": { id: 45252, slot: "Profession_1" },
      Silencer: { id: 39972, slot: "Profession_2" },
      "Boon Crusher": { id: 41283, slot: "Profession_2" },
      "Wounding Strike": { id: 41543, slot: "Profession_2" },
      "Fleeting Stability": { id: 43488, slot: "Profession_2" },
      "Magehunter Strike": { id: 46044, slot: "Profession_2" },
      Dissonance: { id: 44397, slot: "Profession_2" },
      "Full Counter": { id: 44165, slot: "Profession_2" }
    },
    weapons: {
      Axe: {
        flags: ["Mainhand", "Offhand"],
        skills: [
          { id: 14369, slot: "Weapon_1" },
          { id: 14421, slot: "Weapon_2" },
          { id: 14398, slot: "Weapon_3" },
          { id: 14418, slot: "Weapon_4" },
          { id: 14399, slot: "Weapon_5" }
        ]
      },
      Dagger: {
        specialization: 61,
        flags: ["Mainhand", "Offhand"],
        skills: [
          { id: 42745, slot: "Weapon_1" },
          { id: 46233, slot: "Weapon_2" },
          { id: 44937, slot: "Weapon_3" },
          { id: 44004, slot: "Weapon_4" },
          { id: 45160, slot: "Weapon_5" }
        ]
      },
      Greatsword: {
        flags: ["TwoHand"],
        skills: [
          { id: 14356, slot: "Weapon_1" },
          { id: 14554, slot: "Weapon_2" },
          { id: 14447, slot: "Weapon_3" },
          { id: 14510, slot: "Weapon_4" },
          { id: 14446, slot: "Weapon_5" }
        ]
      },
      Hammer: {
        flags: ["TwoHand"],
        skills: [
          { id: 14358, slot: "Weapon_1" },
          { id: 14386, slot: "Weapon_2" },
          { id: 14482, slot: "Weapon_3" },
          { id: 14359, slot: "Weapon_4" },
          { id: 14511, slot: "Weapon_5" }
        ]
      },
      Spear: {
        flags: ["TwoHand", "Aquatic"],
        skills: [
          { id: 14437, slot: "Weapon_1" },
          { id: 14440, slot: "Weapon_2" },
          { id: 14448, slot: "Weapon_3" },
          { id: 14441, slot: "Weapon_4" },
          { id: 14480, slot: "Weapon_5" }
        ]
      },
      Longbow: {
        flags: ["TwoHand"],
        skills: [
          { id: 14431, slot: "Weapon_1" },
          { id: 14519, slot: "Weapon_2" },
          { id: 14381, slot: "Weapon_3" },
          { id: 14505, slot: "Weapon_4" },
          { id: 14504, slot: "Weapon_5" }
        ]
      },
      Mace: {
        flags: ["Mainhand", "Offhand"],
        skills: [
          { id: 14376, slot: "Weapon_1" },
          { id: 14507, slot: "Weapon_2" },
          { id: 14503, slot: "Weapon_3" },
          { id: 14518, slot: "Weapon_4" },
          { id: 14415, slot: "Weapon_5" }
        ]
      },
      Rifle: {
        flags: ["TwoHand"],
        skills: [
          { id: 14432, slot: "Weapon_1" },
          { id: 14416, slot: "Weapon_2" },
          { id: 14472, slot: "Weapon_3" },
          { id: 14395, slot: "Weapon_4" },
          { id: 14360, slot: "Weapon_5" }
        ]
      },
      Shield: {
        flags: ["Offhand"],
        skills: [
          { id: 14361, slot: "Weapon_4" },
          { id: 14362, slot: "Weapon_5" }
        ]
      },
      Speargun: {
        flags: ["TwoHand", "Aquatic"],
        skills: [
          { id: 14552, slot: "Weapon_1" },
          { id: 14466, slot: "Weapon_2" },
          { id: 14481, slot: "Weapon_3" },
          { id: 14467, slot: "Weapon_4" },
          { id: 14465, slot: "Weapon_5" }
        ]
      },
      Sword: {
        flags: ["Mainhand", "Offhand"],
        skills: [
          { id: 14364, slot: "Weapon_1" },
          { id: 14366, slot: "Weapon_2" },
          { id: 14497, slot: "Weapon_3" },
          { id: 14498, slot: "Weapon_4" },
          { id: 14400, slot: "Weapon_5" }
        ]
      },
      Torch: {
        specialization: 18,
        flags: ["Offhand"],
        skills: [
          { id: 29845, slot: "Weapon_4" },
          { id: 29940, slot: "Weapon_5" }
        ]
      },
      Warhorn: {
        flags: ["Offhand"],
        skills: [
          { id: 14393, slot: "Weapon_4" },
          { id: 14394, slot: "Weapon_5" }
        ]
      }
    }
  };
  var Revenant = {
    name: "Revenant",
    specializations: {
      Corruption: 14,
      Herald: 52,
      Renegade: 63,
      Salvation: 12,
      Retribution: 9,
      Devastation: 15,
      Invocation: 3
    },
    traits: {
      "Replenishing Despair": { id: 1793 },
      "Bolstered Anguish": { id: 1727 },
      "Spontaneous Destruction": { id: 1714 },
      "Demonic Defiance": { id: 1789 },
      "Venom Enhancement": { id: 1741 },
      "Maniacal Persistence": { id: 1720 },
      "Pulsating Pestilence": { id: 1721 },
      "Diabolic Inferno": { id: 1795 },
      "Swift Gale": { id: 1813 },
      "Radiant Revival": { id: 1806 },
      "Shared Empowerment": { id: 1743 },
      "Hardening Persistence": { id: 1716 },
      "Bolster Fortifications": { id: 1738 },
      "Elder's Force": { id: 1746 },
      "Enhanced Bulwark": { id: 1803 },
      "Soothing Bastion": { id: 1772 },
      "Harmonize Continuity": { id: 1730 },
      "Abyssal Chill": { id: 1726 },
      "Blood Fury": { id: 2079 },
      "Ashen Demeanor": { id: 2166 },
      "Wrought-Iron Will": { id: 2120 },
      "Sudden Reversal": { id: 2133 },
      Heartpiercer: { id: 2092 },
      "All for One": { id: 2108 },
      "Lasting Legacy": { id: 2100 },
      "Righteous Rebel": { id: 2182 },
      "Nourishing Roots": { id: 1823 },
      "Blinding Truths": { id: 1824 },
      Vindication: { id: 2094 },
      "Tranquil Balance": { id: 1822 },
      "Tranquil Benediction": { id: 1819 },
      "Invoking Harmony": { id: 1818 },
      "Selfless Amplification": { id: 1815 },
      "Eluding Nullification": { id: 1817 },
      "Natural Abundance": { id: 1825 },
      "Momentary Pacification": { id: 1820 },
      "Planar Protection": { id: 1811 },
      "Close Quarters": { id: 1728 },
      "Improved Aggression": { id: 1810 },
      "Eye for an Eye": { id: 1766 },
      "Retaliatory Evasion": { id: 1782 },
      "Vicious Reprisal": { id: 1779 },
      "Dwarven Battle Training": { id: 1740 },
      "Ferocious Strikes": { id: 1776 },
      "Vicious Lacerations": { id: 1767 },
      "Versed in Stone": { id: 1770 },
      "Malicious Reprisal": { id: 1786 },
      "Assassin's Presence": { id: 1802 },
      "Swift Termination": { id: 1715 },
      "Dismantle Fortifications": { id: 1800 },
      "Steadfast Rejuvenation": { id: 1790 },
      "Cleansing Channel": { id: 1761 },
      "Cruel Repercussion": { id: 1732 },
      Equilibrium: { id: 1774 },
      "Jade Echo": { id: 1755 },
      "Assassin's Annihilation": { id: 1754 },
      "Nefarious Momentum": { id: 1765 },
      "Fierce Infusion": { id: 1784 },
      "Rapid Flow": { id: 1760 },
      "Incensed Response": { id: 1781 },
      "Roiling Mists": { id: 1749 },
      "Shrouding Mists": { id: 1719 },
      "Charged Mists": { id: 1791 }
    },
    skills: {
      "Legendary Dwarf Stance": { id: 28419, slot: "Profession_1" },
      "Soothing Stone": { id: 27372, slot: "Heal" },
      "Inspiring Reinforcement": { id: 28516, slot: "Utility" },
      "Forced Engagement": { id: 26679, slot: "Utility" },
      "Vengeful Hammers": { id: 26557, slot: "Utility" },
      "Rite of the Great Dwarf": { id: 27975, slot: "Elite" },
      "Legendary Demon Stance": { id: 28494, slot: "Profession_1" },
      "Empowering Misery": { id: 28219, slot: "Heal" },
      "Pain Absorption": { id: 27322, slot: "Utility" },
      "Banish Enchantment": { id: 27505, slot: "Utility" },
      "Embrace the Darkness": { id: 28287, slot: "Elite" },
      "Unyielding Anguish": { id: 27917, slot: "Utility" },
      "Ventari's Will": { id: 28427, slot: "Heal" },
      "Legendary Centaur Stance": { id: 28195, slot: "Profession_1" },
      "Project Tranquility": { id: 29148, slot: "Heal" },
      "Protective Solace": { id: 26821, slot: "Utility" },
      "Natural Harmony": { id: 27025, slot: "Utility" },
      "Purifying Essence": { id: 27715, slot: "Utility" },
      "Legendary Assassin Stance": { id: 28134, slot: "Profession_1" },
      "Enchanted Daggers": { id: 26937, slot: "Heal" },
      "Riposting Shadows": { id: 29209, slot: "Utility" },
      "Phase Traversal": { id: 28231, slot: "Utility" },
      "Jade Winds": { id: 28406, slot: "Elite" },
      "Legendary Dragon Stance": { id: 28085, slot: "Profession_1" },
      "Facet of Light": { id: 27220, slot: "Heal" },
      "Facet of Darkness": { id: 28379, slot: "Utility" },
      "Facet of Elements": { id: 27014, slot: "Utility" },
      "Facet of Strength": { id: 26644, slot: "Utility" },
      "Facet of Chaos": { id: 27760, slot: "Elite" },
      "Impossible Odds": { id: 27107, slot: "Utility" },
      "Facet of Nature": { id: 29371, slot: "Profession_2" },
      "Breakrazor's Bastion": { id: 45686, slot: "Heal" },
      "Legendary Renegade Stance": { id: 46409, slot: "Profession_1" },
      "Icerazor's Ire": { id: 40485, slot: "Utility" },
      "Soulcleave's Summit": { id: 45773, slot: "Elite" },
      "Darkrazor's Daring": { id: 41220, slot: "Utility" },
      "Heroic Command": { id: 44076, slot: "Profession_2" },
      "Citadel Bombardment": { id: 42836, slot: "Profession_3" },
      "Energy Expulsion": { id: 27356, slot: "Elite" },
      "Orders from Above": { id: 45537, slot: "Profession_4" },
      "Razorclaw's Rage": { id: 42949, slot: "Utility" }
    },
    weapons: {
      Axe: {
        flags: ["Offhand"],
        skills: [
          { id: 28029, slot: "Weapon_4" },
          { id: 28409, slot: "Weapon_5" }
        ]
      },
      Hammer: {
        flags: ["TwoHand"],
        skills: [
          { id: 28549, slot: "Weapon_1" },
          { id: 28253, slot: "Weapon_2" },
          { id: 27976, slot: "Weapon_3" },
          { id: 27665, slot: "Weapon_4" },
          { id: 28110, slot: "Weapon_5" }
        ]
      },
      Spear: {
        flags: ["TwoHand", "Aquatic"],
        skills: [
          { id: 28714, slot: "Weapon_1" },
          { id: 28915, slot: "Weapon_2" },
          { id: 28827, slot: "Weapon_3" },
          { id: 28692, slot: "Weapon_4" },
          { id: 28930, slot: "Weapon_5" }
        ]
      },
      Mace: {
        flags: ["Mainhand"],
        skills: [
          { id: 27066, slot: "Weapon_1" },
          { id: 28357, slot: "Weapon_2" },
          { id: 27964, slot: "Weapon_3" }
        ]
      },
      Shield: {
        specialization: 52,
        flags: ["Offhand"],
        skills: [
          { id: 29386, slot: "Weapon_4" },
          { id: 28262, slot: "Weapon_5" }
        ]
      },
      Shortbow: {
        specialization: 63,
        flags: ["TwoHand"],
        skills: [
          { id: 40497, slot: "Weapon_1" },
          { id: 40175, slot: "Weapon_2" },
          { id: 41829, slot: "Weapon_3" },
          { id: 43993, slot: "Weapon_4" },
          { id: 41820, slot: "Weapon_5" }
        ]
      },
      Staff: {
        flags: ["TwoHand"],
        skills: [
          { id: 29180, slot: "Weapon_1" },
          { id: 29145, slot: "Weapon_2" },
          { id: 29288, slot: "Weapon_3" },
          { id: 29321, slot: "Weapon_4" },
          { id: 28978, slot: "Weapon_5" }
        ]
      },
      Sword: {
        flags: ["Mainhand", "Offhand"],
        skills: [
          { id: 29057, slot: "Weapon_1" },
          { id: 29233, slot: "Weapon_2" },
          { id: 26699, slot: "Weapon_3" },
          { id: 28571, slot: "Weapon_4" },
          { id: 27074, slot: "Weapon_5" }
        ]
      }
    }
  };
  var Necromancer = {
    name: "Necromancer",
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
      "Spiteful Renewal": { id: 916 },
      "Bitter Chill": { id: 1863 },
      "Chill of Death": { id: 899 },
      "Spiteful Talisman": { id: 914 },
      "Signets of Suffering": { id: 919 },
      "Close to Death": { id: 853 },
      "Spiteful Spirit": { id: 903 },
      "Terrifying Descent": { id: 1883 },
      "Unholy Fervor": { id: 909 },
      "Plague Sending": { id: 2013 },
      "Chilling Darkness": { id: 815 },
      "Master of Corruption": { id: 816 },
      "Path of Corruption": { id: 1693 },
      "Rending Shroud": { id: 829 },
      Terror: { id: 812 },
      "Weakening Shroud": { id: 813 },
      "Parasitic Contagion": { id: 1696 },
      "Lingering Curse": { id: 801 },
      "Shrouded Removal": { id: 857 },
      "Flesh of the Master": { id: 820 },
      "Putrid Defense": { id: 1922 },
      "Necromantic Corruption": { id: 858 },
      "Reaper's Protection": { id: 860 },
      "Deadly Strength": { id: 855 },
      "Corrupter's Fervor": { id: 1940 },
      "Death Nova": { id: 842 },
      "Unholy Sanctuary": { id: 1694 },
      "Ritual of Life": { id: 780 },
      "Quickening Thirst": { id: 788 },
      "Blood Bond": { id: 1876 },
      "Life from Death": { id: 789 },
      "Banshee's Wail": { id: 799 },
      "Vampiric Presence": { id: 1844 },
      "Vampiric Rituals": { id: 782 },
      Transfusion: { id: 778 },
      "Unyielding Blast": { id: 875 },
      "Unholy Martyr": { id: 1692 },
      "Soul Marks": { id: 898 },
      "Speed of Shadows": { id: 888 },
      "Spectral Mastery": { id: 894 },
      "Vital Persistence": { id: 861 },
      "Fear of Death": { id: 892 },
      "Death Perception": { id: 893 },
      Dhuumfire: { id: 905 },
      "Augury of Death": { id: 1974 },
      "Relentless Pursuit": { id: 2026 },
      "Soul Eater": { id: 1969 },
      "Chilling Victory": { id: 2008 },
      "Decimate Defenses": { id: 2031 },
      "Blighter's Boon": { id: 1932 },
      "Deathly Chill": { id: 1919 },
      "Abrasive Grit": { id: 2167 },
      "Fell Beacon": { id: 2074 },
      "Desert Empowerment": { id: 2059 },
      "Nourishing Rot": { id: 2102 },
      "Sadistic Searing": { id: 2067 },
      "Unending Corruption": { id: 2123 },
      "Reaper's Onslaught": { id: 2021 },
      "Feed from Corruption": { id: 2080 },
      "Sand Savant": { id: 2112 },
      "Chilling Nova": { id: 2020 },
      "Demonic Lore": { id: 2164 },
      "Foot in the Grave": { id: 889 }
    },
    skills: {
      "Summon Blood Fiend": { id: 10547, slot: "Heal" },
      "Consume Conditions": { id: 10548, slot: "Heal" },
      "Signet of Vampirism": { id: 21762, slot: "Heal" },
      "Well of Blood": { id: 10527, slot: "Heal" },
      "Well of Power": { id: 10609, slot: "Utility" },
      "Well of Darkness": { id: 10607, slot: "Utility" },
      "Well of Corruption": { id: 10545, slot: "Utility" },
      "Summon Bone Fiend": { id: 10533, slot: "Utility" },
      "Summon Bone Minions": { id: 10541, slot: "Utility" },
      "Summon Shadow Fiend": { id: 10589, slot: "Utility" },
      "Summon Flesh Wurm": { id: 10543, slot: "Utility" },
      "Signet of the Locust": { id: 10612, slot: "Utility" },
      "Spectral Armor": { id: 10583, slot: "Utility" },
      "Well of Suffering": { id: 10546, slot: "Utility" },
      "Signet of Spite": { id: 10622, slot: "Utility" },
      "Spectral Grasp": { id: 10620, slot: "Utility" },
      "Signet of Undeath": { id: 10611, slot: "Utility" },
      "Corrosive Poison Cloud": { id: 10689, slot: "Utility" },
      "Spectral Walk": { id: 10685, slot: "Utility" },
      Epidemic: { id: 10606, slot: "Utility" },
      "Spectral Wall": { id: 10608, slot: "Utility" },
      "Blood Is Power": { id: 10544, slot: "Utility" },
      "Death Shroud": { id: 10574, slot: "Profession_1" },
      "Plague Signet": { id: 10562, slot: "Utility" },
      "Plague Blast": { id: 10690, slot: "Downed_1" },
      "Corrupt Boon": { id: 10602, slot: "Utility" },
      Plaguelands: { id: 10549, slot: "Elite" },
      "Life Blast": { id: 10554, slot: "Downed_1" },
      "Summon Flesh Golem": { id: 10646, slot: "Elite" },
      "Reaper's Shroud": { id: 30792, slot: "Profession_1" },
      "Life Slash": { id: 29458, slot: "Downed_1" },
      "Infusing Terror": { id: 29958, slot: "Downed_3" },
      "Death's Charge": { id: 30825, slot: "Downed_2" },
      "Soul Spiral": { id: 30504, slot: "Downed_4" },
      "Executioner's Scythe": { id: 30557, slot: "Weapon_5" },
      '"You Are All Weaklings!"': { id: 29414, slot: "Utility" },
      "Life Rend": { id: 29442, slot: "Downed_1" },
      "Lich Form": { id: 10550, slot: "Elite" },
      '"Nothing Can Save You!"': { id: 29666, slot: "Utility" },
      '"Rise!"': { id: 30772, slot: "Utility" },
      '"Your Soul Is Mine!"': { id: 30488, slot: "Heal" },
      '"Chilled to the Bone!"': { id: 30105, slot: "Elite" },
      "Ghastly Breach": { id: 42355, slot: "Elite" },
      "Life Reap": { id: 30278, slot: "Downed_1" },
      '"Suffer!"': { id: 30670, slot: "Utility" },
      "Trail of Anguish": { id: 40274, slot: "Utility" },
      "Sand Swell": { id: 42917, slot: "Utility" },
      "Serpent Siphon": { id: 41615, slot: "Utility" },
      "Nefarious Favor": { id: 40813, slot: "Profession_2" },
      "Sand Cascade": { id: 43448, slot: "Profession_3" },
      "Garish Pillar": { id: 44428, slot: "Profession_4" },
      "Manifest Sand Shade": { id: 46473, slot: "Profession_1" },
      "Sand Flare": { id: 43148, slot: "Heal" },
      "Desert Shroud": { id: 44663, slot: "Profession_5" },
      Dessicate: { id: 42935, slot: "Utility" }
    },
    weapons: {
      Axe: {
        flags: ["Mainhand"],
        skills: [
          { id: 10561, slot: "Weapon_1" },
          { id: 10528, slot: "Weapon_2" },
          { id: 10701, slot: "Weapon_3" }
        ]
      },
      Dagger: {
        flags: ["Mainhand", "Offhand"],
        skills: [
          { id: 10702, slot: "Weapon_1" },
          { id: 10563, slot: "Weapon_2" },
          { id: 10529, slot: "Weapon_3" },
          { id: 10705, slot: "Weapon_4" },
          { id: 10706, slot: "Weapon_5" }
        ]
      },
      Focus: {
        flags: ["Offhand"],
        skills: [
          { id: 10707, slot: "Weapon_4" },
          { id: 10555, slot: "Weapon_5" }
        ]
      },
      Greatsword: {
        specialization: 34,
        flags: ["TwoHand"],
        skills: [
          { id: 29705, slot: "Weapon_1" },
          { id: 30163, slot: "Weapon_2" },
          { id: 30860, slot: "Weapon_3" },
          { id: 29855, slot: "Weapon_4" },
          { id: 29740, slot: "Weapon_5" }
        ]
      },
      Spear: {
        flags: ["TwoHand", "Aquatic"],
        skills: [
          { id: 10692, slot: "Weapon_1" },
          { id: 10694, slot: "Weapon_2" },
          { id: 10619, slot: "Weapon_3" },
          { id: 10695, slot: "Weapon_4" },
          { id: 10616, slot: "Weapon_5" }
        ]
      },
      Scepter: {
        flags: ["Mainhand"],
        skills: [
          { id: 10698, slot: "Weapon_1" },
          { id: 10532, slot: "Weapon_2" },
          { id: 10709, slot: "Weapon_3" }
        ]
      },
      Staff: {
        flags: ["TwoHand"],
        skills: [
          { id: 10596, slot: "Weapon_1" },
          { id: 19117, slot: "Weapon_2" },
          { id: 10605, slot: "Weapon_3" },
          { id: 19116, slot: "Weapon_4" },
          { id: 19115, slot: "Weapon_5" }
        ]
      },
      Torch: {
        specialization: 60,
        flags: ["Offhand"],
        skills: [
          { id: 45846, slot: "Weapon_4" },
          { id: 44296, slot: "Weapon_5" }
        ]
      },
      Trident: {
        flags: ["TwoHand", "Aquatic"],
        skills: [
          { id: 10623, slot: "Weapon_1" },
          { id: 10624, slot: "Weapon_2" },
          { id: 10625, slot: "Weapon_3" },
          { id: 10628, slot: "Weapon_4" },
          { id: 10629, slot: "Weapon_5" }
        ]
      },
      Warhorn: {
        flags: ["Offhand"],
        skills: [
          { id: 10556, slot: "Weapon_4" },
          { id: 10557, slot: "Weapon_5" }
        ]
      }
    }
  };
  var Elementalist = {
    name: "Elementalist",
    specializations: {
      Fire: 31,
      Air: 41,
      Earth: 26,
      Arcane: 37,
      Tempest: 48,
      Weaver: 56,
      Water: 17
    },
    traits: {
      "Burning Precision": { id: 296 },
      "Burning Fire": { id: 335 },
      Conjurer: { id: 328 },
      "Pyromancer's Training": { id: 325 },
      "One with Fire": { id: 340 },
      "Power Overwhelming": { id: 334 },
      "Persisting Flames": { id: 1510 },
      "Pyromancer's Puissance": { id: 294 },
      "Blinding Ashes": { id: 1675 },
      "Zephyr's Boon": { id: 227 },
      "One with Air": { id: 224 },
      "Ferocious Winds": { id: 232 },
      Inscription: { id: 229 },
      "Aeromancer's Training": { id: 214 },
      "Tempest Defense": { id: 1502 },
      "Bolt to the Heart": { id: 226 },
      "Lightning Rod": { id: 1672 },
      "Earth's Embrace": { id: 282 },
      "Serrated Stones": { id: 1507 },
      "Elemental Shielding": { id: 289 },
      "Strength of Stone": { id: 275 },
      "Rock Solid": { id: 281 },
      "Geomancer's Training": { id: 277 },
      "Fresh Air": { id: 1503 },
      "Diamond Skin": { id: 1508 },
      "Written in Stone": { id: 287 },
      "Stone Heart": { id: 1674 },
      "Arcane Precision": { id: 253 },
      "Renewing Stamina": { id: 266 },
      "Arcane Abatement": { id: 1487 },
      "Arcane Resurrection": { id: 265 },
      "Elemental Contingency": { id: 1673 },
      "Final Shielding": { id: 257 },
      "Evasive Arcana": { id: 238 },
      "Elemental Surge": { id: 263 },
      "Bountiful Power": { id: 1511 },
      "Latent Stamina": { id: 1962 },
      "Gale Song": { id: 1952 },
      "Unstable Conduit": { id: 1886 },
      "Invigorating Torrents": { id: 1902 },
      "Harmonious Conduit": { id: 2015 },
      "Imbued Melodies": { id: 1839 },
      "Lucid Singularity": { id: 2033 },
      "Elemental Bastion": { id: 1986 },
      "Tempestuous Aria": { id: 1891 },
      "Superior Elements": { id: 2177 },
      "Elemental Pursuit": { id: 2165 },
      "Master's Fortitude": { id: 2115 },
      "Weaver's Prowess": { id: 2180 },
      "Swift Revenge": { id: 2061 },
      "Bolstered Elements": { id: 2170 },
      "Elements of Rage": { id: 2131 },
      "Woven Stride": { id: 2090 },
      "Soothing Ice": { id: 348 },
      "Piercing Shards": { id: 363 },
      "Stop, Drop, and Roll": { id: 360 },
      "Soothing Disruption": { id: 364 },
      "Cleansing Wave": { id: 358 },
      "Aquamancer's Training": { id: 349 },
      "Cleansing Water": { id: 362 },
      "Powerful Aura": { id: 361 },
      "Invigorating Strikes": { id: 2138 },
      "Soothing Power": { id: 2028 }
    },
    skills: {
      "Air Attunement": { id: 5494, slot: "Profession_3" },
      "Earth Attunement": { id: 5495, slot: "Profession_4" },
      "Fire Attunement": { id: 5492, slot: "Profession_1" },
      "Glyph of Elemental Harmony": { id: 5569, slot: "Heal" },
      "Ether Renewal": { id: 5507, slot: "Heal" },
      "Signet of Restoration": { id: 5503, slot: "Heal" },
      "Water Attunement": { id: 5493, slot: "Profession_2" },
      "Arcane Wave": { id: 5638, slot: "Utility" },
      "Arcane Shield": { id: 5641, slot: "Utility" },
      "Arcane Power": { id: 5635, slot: "Utility" },
      "Arcane Blast": { id: 5539, slot: "Utility" },
      "Arcane Brilliance": { id: 21656, slot: "Heal" },
      "Glyph of Lesser Elementals": { id: 5502, slot: "Utility" },
      "Glyph of Renewal": { id: 5573, slot: "Utility" },
      "Glyph of Elemental Power": { id: 5506, slot: "Utility" },
      "Signet of Fire": { id: 5542, slot: "Utility" },
      "Signet of Air": { id: 5572, slot: "Utility" },
      "Signet of Earth": { id: 5571, slot: "Utility" },
      "Cleansing Fire": { id: 5535, slot: "Utility" },
      "Lightning Flash": { id: 5536, slot: "Utility" },
      "Mist Form": { id: 5554, slot: "Utility" },
      "Signet of Water": { id: 5570, slot: "Utility" },
      "Conjure Frost Bow": { id: 5567, slot: "Utility" },
      "Conjure Lightning Hammer": { id: 5624, slot: "Utility" },
      "Conjure Earth Shield": { id: 5546, slot: "Utility" },
      "Conjure Fiery Greatsword": { id: 5516, slot: "Elite" },
      Tornado: { id: 5534, slot: "Elite" },
      "Glyph of Elementals": { id: 5666, slot: "Elite" },
      '"Wash the Pain Away!"': { id: 29535, slot: "Heal" },
      '"Eye of the Storm!"': { id: 30047, slot: "Utility" },
      "Conjure Flame Axe": { id: 5540, slot: "Utility" },
      '"Flash-Freeze!"': { id: 29948, slot: "Utility" },
      "Aquatic Stance": { id: 44239, slot: "Heal" },
      '"Rebound!"': { id: 29968, slot: "Elite" },
      '"Aftershock!"': { id: 30432, slot: "Utility" },
      "Glyph of Storms": { id: 5734, slot: "Utility" },
      "Armor of Earth": { id: 5639, slot: "Utility" },
      "Weave Self": { id: 43638, slot: "Elite" },
      Unravel: { id: 44612, slot: "Utility" },
      '"Feel the Burn!"': { id: 30662, slot: "Utility" },
      "Twist of Fate": { id: 45746, slot: "Utility" },
      "Primordial Stance": { id: 40183, slot: "Utility" },
      "Stone Resonance": { id: 44926, slot: "Utility" }
    },
    weapons: {
      Dagger: {
        flags: ["Mainhand", "Offhand"],
        skills: [
          { id: 15718, slot: "Weapon_1", attunement: "Fire" },
          { id: 15716, slot: "Weapon_1", attunement: "Water" },
          { id: 5489, slot: "Weapon_1", attunement: "Air" },
          { id: 15717, slot: "Weapon_1", attunement: "Earth" },
          { id: 5496, slot: "Weapon_2", attunement: "Fire" },
          { id: 5537, slot: "Weapon_2", attunement: "Water" },
          { id: 5646, slot: "Weapon_2", attunement: "Air" },
          { id: 5525, slot: "Weapon_2", attunement: "Earth" },
          { id: 40963, slot: "Weapon_3", attunement: "Air" },
          { id: 46018, slot: "Weapon_3", attunement: "Water" },
          { id: 46140, slot: "Weapon_3", attunement: "Water" },
          { id: 42379, slot: "Weapon_3", attunement: "Fire" },
          { id: 44652, slot: "Weapon_3", attunement: "Fire" },
          { id: 42330, slot: "Weapon_3", attunement: "Fire" },
          { id: 5644, slot: "Weapon_3", attunement: "Fire" },
          { id: 5487, slot: "Weapon_3", attunement: "Water" },
          { id: 5527, slot: "Weapon_3", attunement: "Air" },
          { id: 5559, slot: "Weapon_3", attunement: "Earth" },
          { id: 5691, slot: "Weapon_4", attunement: "Fire" },
          { id: 5520, slot: "Weapon_4", attunement: "Water" },
          { id: 5529, slot: "Weapon_4", attunement: "Air" },
          { id: 5690, slot: "Weapon_4", attunement: "Earth" },
          { id: 5557, slot: "Weapon_5", attunement: "Fire" },
          { id: 5558, slot: "Weapon_5", attunement: "Water" },
          { id: 5687, slot: "Weapon_5", attunement: "Air" },
          { id: 5522, slot: "Weapon_5", attunement: "Earth" }
        ]
      },
      Focus: {
        flags: ["Offhand"],
        skills: [
          { id: 5497, slot: "Weapon_4", attunement: "Fire" },
          { id: 5556, slot: "Weapon_4", attunement: "Water" },
          { id: 5530, slot: "Weapon_4", attunement: "Air" },
          { id: 5555, slot: "Weapon_4", attunement: "Earth" },
          { id: 5678, slot: "Weapon_5", attunement: "Fire" },
          { id: 5490, slot: "Weapon_5", attunement: "Water" },
          { id: 5562, slot: "Weapon_5", attunement: "Air" },
          { id: 5521, slot: "Weapon_5", attunement: "Earth" }
        ]
      },
      Scepter: {
        flags: ["Mainhand"],
        skills: [
          { id: 5508, slot: "Weapon_1", attunement: "Fire" },
          { id: 5693, slot: "Weapon_1", attunement: "Water" },
          { id: 5526, slot: "Weapon_1", attunement: "Air" },
          { id: 5500, slot: "Weapon_1", attunement: "Earth" },
          { id: 5692, slot: "Weapon_2", attunement: "Fire" },
          { id: 5538, slot: "Weapon_2", attunement: "Water" },
          { id: 5561, slot: "Weapon_2", attunement: "Air" },
          { id: 5695, slot: "Weapon_2", attunement: "Earth" },
          { id: 40794, slot: "Weapon_3", attunement: "Air" },
          { id: 46014, slot: "Weapon_3", attunement: "Water" },
          { id: 45742, slot: "Weapon_3", attunement: "Water" },
          { id: 42954, slot: "Weapon_3", attunement: "Fire" },
          { id: 43576, slot: "Weapon_3", attunement: "Fire" },
          { id: 42181, slot: "Weapon_3", attunement: "Fire" },
          { id: 5675, slot: "Weapon_3", attunement: "Fire" },
          { id: 5510, slot: "Weapon_3", attunement: "Water" },
          { id: 5694, slot: "Weapon_3", attunement: "Air" },
          { id: 5696, slot: "Weapon_3", attunement: "Earth" }
        ]
      },
      Staff: {
        flags: ["TwoHand"],
        skills: [
          { id: 5491, slot: "Weapon_1", attunement: "Fire" },
          { id: 5549, slot: "Weapon_1", attunement: "Water" },
          { id: 5518, slot: "Weapon_1", attunement: "Air" },
          { id: 5519, slot: "Weapon_1", attunement: "Earth" },
          { id: 5548, slot: "Weapon_2", attunement: "Fire" },
          { id: 5550, slot: "Weapon_2", attunement: "Water" },
          { id: 5552, slot: "Weapon_2", attunement: "Air" },
          { id: 5528, slot: "Weapon_2", attunement: "Earth" },
          { id: 42321, slot: "Weapon_3", attunement: "Air" },
          { id: 44550, slot: "Weapon_3", attunement: "Water" },
          { id: 41184, slot: "Weapon_3", attunement: "Water" },
          { id: 43762, slot: "Weapon_3", attunement: "Fire" },
          { id: 41125, slot: "Weapon_3", attunement: "Fire" },
          { id: 40332, slot: "Weapon_3", attunement: "Fire" },
          { id: 5679, slot: "Weapon_3", attunement: "Fire" },
          { id: 5681, slot: "Weapon_3", attunement: "Water" },
          { id: 5553, slot: "Weapon_3", attunement: "Air" },
          { id: 5685, slot: "Weapon_3", attunement: "Earth" },
          { id: 5680, slot: "Weapon_4", attunement: "Fire" },
          { id: 5515, slot: "Weapon_4", attunement: "Water" },
          { id: 5682, slot: "Weapon_4", attunement: "Air" },
          { id: 5683, slot: "Weapon_4", attunement: "Earth" },
          { id: 5501, slot: "Weapon_5", attunement: "Fire" },
          { id: 5551, slot: "Weapon_5", attunement: "Water" },
          { id: 5671, slot: "Weapon_5", attunement: "Air" },
          { id: 5686, slot: "Weapon_5", attunement: "Earth" }
        ]
      },
      Sword: {
        specialization: 56,
        flags: ["Mainhand"],
        skills: [
          { id: 39964, slot: "Weapon_1", attunement: "Fire" },
          { id: 41052, slot: "Weapon_1", attunement: "Water" },
          { id: 44681, slot: "Weapon_1", attunement: "Air" },
          { id: 43616, slot: "Weapon_1", attunement: "Earth" },
          { id: 45313, slot: "Weapon_2", attunement: "Fire" },
          { id: 44405, slot: "Weapon_2", attunement: "Water" },
          { id: 44998, slot: "Weapon_2", attunement: "Air" },
          { id: 40709, slot: "Weapon_2", attunement: "Earth" },
          { id: 42271, slot: "Weapon_3", attunement: "Fire" },
          { id: 43074, slot: "Weapon_3", attunement: "Fire" },
          { id: 46447, slot: "Weapon_3", attunement: "Fire" },
          { id: 42867, slot: "Weapon_3", attunement: "Water" },
          { id: 40170, slot: "Weapon_3", attunement: "Water" },
          { id: 46295, slot: "Weapon_3", attunement: "Air" },
          { id: 44451, slot: "Weapon_3", attunement: "Fire" },
          { id: 41167, slot: "Weapon_3", attunement: "Water" },
          { id: 43803, slot: "Weapon_3", attunement: "Air" },
          { id: 40139, slot: "Weapon_3", attunement: "Earth" }
        ]
      },
      Trident: {
        flags: ["TwoHand", "Aquatic"],
        skills: [
          { id: 5598, slot: "Weapon_1", attunement: "Fire" },
          { id: 5604, slot: "Weapon_1", attunement: "Water" },
          { id: 5656, slot: "Weapon_1", attunement: "Air" },
          { id: 5657, slot: "Weapon_1", attunement: "Earth" },
          { id: 5597, slot: "Weapon_2", attunement: "Fire" },
          { id: 5605, slot: "Weapon_2", attunement: "Water" },
          { id: 5655, slot: "Weapon_2", attunement: "Air" },
          { id: 5658, slot: "Weapon_2", attunement: "Earth" },
          { id: 40378, slot: "Weapon_3", attunement: "Fire" },
          { id: 41712, slot: "Weapon_3", attunement: "Fire" },
          { id: 46185, slot: "Weapon_3", attunement: "Fire" },
          { id: 46360, slot: "Weapon_3", attunement: "Water" },
          { id: 41001, slot: "Weapon_3", attunement: "Water" },
          { id: 39981, slot: "Weapon_3", attunement: "Air" },
          { id: 5566, slot: "Weapon_3", attunement: "Fire" },
          { id: 5606, slot: "Weapon_3", attunement: "Water" },
          { id: 5652, slot: "Weapon_3", attunement: "Air" },
          { id: 5662, slot: "Weapon_3", attunement: "Earth" },
          { id: 5599, slot: "Weapon_4", attunement: "Fire" },
          { id: 5748, slot: "Weapon_4", attunement: "Water" },
          { id: 5648, slot: "Weapon_4", attunement: "Air" },
          { id: 5659, slot: "Weapon_4", attunement: "Earth" },
          { id: 5600, slot: "Weapon_5", attunement: "Fire" },
          { id: 5607, slot: "Weapon_5", attunement: "Water" },
          { id: 5650, slot: "Weapon_5", attunement: "Air" },
          { id: 5661, slot: "Weapon_5", attunement: "Earth" }
        ]
      },
      Warhorn: {
        specialization: 48,
        flags: ["Offhand"],
        skills: [
          { id: 29548, slot: "Weapon_4", attunement: "Fire" },
          { id: 30864, slot: "Weapon_4", attunement: "Water" },
          { id: 30008, slot: "Weapon_4", attunement: "Air" },
          { id: 29453, slot: "Weapon_4", attunement: "Earth" },
          { id: 29533, slot: "Weapon_5", attunement: "Fire" },
          { id: 30446, slot: "Weapon_5", attunement: "Water" },
          { id: 30795, slot: "Weapon_5", attunement: "Air" },
          { id: 30336, slot: "Weapon_5", attunement: "Earth" }
        ]
      }
    }
  };
  var Mesmer = {
    name: "Mesmer",
    specializations: {
      Domination: 10,
      Dueling: 1,
      Inspiration: 23,
      Chaos: 45,
      Illusions: 24,
      Chronomancer: 40,
      Mirage: 59
    },
    traits: {
      "Rending Shatter": { id: 687 },
      "Confounding Suggestions": { id: 686 },
      "Blurred Inscriptions": { id: 713 },
      "Empowered Illusions": { id: 682 },
      "Shattered Concentration": { id: 693 },
      "Furious Interruption": { id: 712 },
      "Imagined Burden": { id: 681 },
      "Power Block": { id: 1688 },
      "Phantasmal Fury": { id: 701 },
      "Desperate Decoy": { id: 705 },
      "Duelist's Discipline": { id: 700 },
      "Blinding Dissipation": { id: 1889 },
      "Evasive Mirror": { id: 1960 },
      Ineptitude: { id: 1950 },
      "Deceptive Evasion": { id: 704 },
      "Fencer's Finesse": { id: 708 },
      "Mental Anguish": { id: 680 },
      "Superiority Complex": { id: 692 },
      "Restorative Mantras": { id: 738 },
      "Persisting Images": { id: 744 },
      "Warden's Feedback": { id: 751 },
      "Restorative Illusions": { id: 740 },
      "Protected Phantasms": { id: 1980 },
      "Mental Defense": { id: 2005 },
      "Illusionary Inspiration": { id: 1866 },
      "Descent into Madness": { id: 670 },
      "Illusionary Defense": { id: 675 },
      "Master of Manipulation": { id: 677 },
      "Chaotic Transference": { id: 668 },
      "Chaotic Dampening": { id: 669 },
      "Chaotic Interruption": { id: 671 },
      "Prismatic Understanding": { id: 674 },
      "Medic's Feedback": { id: 756 },
      "Temporal Enchanter": { id: 752 },
      "Compounding Power": { id: 721 },
      "Bountiful Disillusionment": { id: 1687 },
      "The Pledge": { id: 691 },
      "Phantasmal Haste": { id: 729 },
      "Maim the Disillusioned": { id: 1690 },
      "Phantasmal Force": { id: 733 },
      "Shattered Strength": { id: 722 },
      "Malicious Sorcery": { id: 753 },
      "Delayed Reactions": { id: 1838 },
      "All's Well That Ends Well": { id: 1987 },
      "Mirror of Anguish": { id: 673 },
      "Persistence of Memory": { id: 1869 },
      "Danger Time": { id: 2009 },
      "Time Catches Up": { id: 1995 },
      "Illusionary Reversion": { id: 1913 },
      "Improved Alacrity": { id: 1978 },
      "Seize the Moment": { id: 2022 },
      "Self-Deception": { id: 2141 },
      "Renewing Oasis": { id: 2082 },
      "Lost Time": { id: 1942 },
      "Riddle of Sand": { id: 2110 },
      "Desert Distortion": { id: 2178 },
      "Mirage Mantle": { id: 2174 },
      "Mirrored Axes": { id: 2098 },
      "Master of Fragmentation": { id: 2035 },
      "Infinite Horizon": { id: 2070 },
      "Elusive Mind": { id: 2113 },
      Chronophantasma: { id: 1890 },
      "Dune Cloak": { id: 2169 }
    },
    skills: {
      Distortion: { id: 10192, slot: "Profession_4" },
      Diversion: { id: 10287, slot: "Profession_3" },
      "Cry of Frustration": { id: 10190, slot: "Profession_2" },
      "Mind Wrack": { id: 10191, slot: "Profession_1" },
      "Ether Feast": { id: 10176, slot: "Heal" },
      Mirror: { id: 10177, slot: "Heal" },
      "Signet of the Ether": { id: 21750, slot: "Heal" },
      "Mantra of Recovery": { id: 10213, slot: "Heal" },
      "Signet of Inspiration": { id: 10236, slot: "Utility" },
      "Signet of Domination": { id: 10232, slot: "Utility" },
      "Signet of Illusions": { id: 10247, slot: "Utility" },
      "Mantra of Distraction": { id: 10204, slot: "Utility" },
      "Mantra of Resolve": { id: 10207, slot: "Utility" },
      "Mantra of Concentration": { id: 10237, slot: "Utility" },
      Blink: { id: 10200, slot: "Utility" },
      "Arcane Thievery": { id: 10185, slot: "Utility" },
      "Mantra of Pain": { id: 10211, slot: "Utility" },
      "Illusion of Life": { id: 10244, slot: "Utility" },
      Mimic: { id: 29578, slot: "Utility" },
      Decoy: { id: 10201, slot: "Utility" },
      "Signet of Midnight": { id: 10234, slot: "Utility" },
      "Null Field": { id: 10203, slot: "Utility" },
      "Phantasmal Defender": { id: 10341, slot: "Utility" },
      "Mirror Images": { id: 10202, slot: "Utility" },
      Feedback: { id: 10302, slot: "Utility" },
      "Phantasmal Disenchanter": { id: 10267, slot: "Utility" },
      "Portal Entre": { id: 10197, slot: "Utility" },
      Veil: { id: 10187, slot: "Utility" },
      "Signet of Humility": { id: 29519, slot: "Elite" },
      "Mass Invisibility": { id: 10245, slot: "Elite" },
      "Continuum Split": { id: 29830, slot: "Profession_5" },
      "Gravity Well": { id: 30359, slot: "Elite" },
      "Well of Eternity": { id: 30305, slot: "Heal" },
      "Time Warp": { id: 10311, slot: "Elite" },
      "Well of Calamity": { id: 30525, slot: "Utility" },
      "Well of Action": { id: 30814, slot: "Utility" },
      "False Oasis": { id: 40200, slot: "Heal" },
      Jaunt: { id: 45449, slot: "Elite" },
      "Illusionary Ambush": { id: 45046, slot: "Utility" },
      "Mirage Advance": { id: 42851, slot: "Utility" },
      "Sand through Glass": { id: 43064, slot: "Utility" },
      "Well of Precognition": { id: 29526, slot: "Utility" },
      "Well of Recall": { id: 29856, slot: "Utility" },
      "Crystal Sands": { id: 41065, slot: "Utility" }
    },
    weapons: {
      Axe: {
        specialization: 59,
        flags: ["Mainhand"],
        skills: [
          { id: 44791, slot: "Weapon_1" },
          { id: 45243, slot: "Weapon_2" },
          { id: 43761, slot: "Weapon_3" }
        ]
      },
      Focus: {
        flags: ["Offhand"],
        skills: [
          { id: 10186, slot: "Weapon_4" },
          { id: 10282, slot: "Weapon_5" }
        ]
      },
      Greatsword: {
        flags: ["TwoHand"],
        skills: [
          { id: 10219, slot: "Weapon_1" },
          { id: 10333, slot: "Weapon_2" },
          { id: 10218, slot: "Weapon_3" },
          { id: 10221, slot: "Weapon_4" },
          { id: 10220, slot: "Weapon_5" }
        ]
      },
      Spear: {
        flags: ["TwoHand", "Aquatic"],
        skills: [
          { id: 10315, slot: "Weapon_1" },
          { id: 10318, slot: "Weapon_2" },
          { id: 10251, slot: "Weapon_3" },
          { id: 10325, slot: "Weapon_4" },
          { id: 10255, slot: "Weapon_5" }
        ]
      },
      Pistol: {
        flags: ["Offhand"],
        skills: [
          { id: 10175, slot: "Weapon_4" },
          { id: 10229, slot: "Weapon_5" }
        ]
      },
      Scepter: {
        flags: ["Mainhand"],
        skills: [
          { id: 10289, slot: "Weapon_1" },
          { id: 10276, slot: "Weapon_2" },
          { id: 10168, slot: "Weapon_3" }
        ]
      },
      Shield: {
        specialization: 40,
        flags: ["Offhand"],
        skills: [
          { id: 30769, slot: "Weapon_4" },
          { id: 30643, slot: "Weapon_5" }
        ]
      },
      Staff: {
        flags: ["TwoHand"],
        skills: [
          { id: 10273, slot: "Weapon_1" },
          { id: 10310, slot: "Weapon_2" },
          { id: 10216, slot: "Weapon_3" },
          { id: 10331, slot: "Weapon_4" },
          { id: 10169, slot: "Weapon_5" }
        ]
      },
      Sword: {
        flags: ["Mainhand", "Offhand"],
        skills: [
          { id: 10334, slot: "Weapon_2" },
          { id: 10173, slot: "Weapon_3" },
          { id: 10170, slot: "Weapon_1" },
          { id: 10280, slot: "Weapon_4" },
          { id: 10174, slot: "Weapon_5" }
        ]
      },
      Torch: {
        flags: ["Offhand"],
        skills: [
          { id: 10285, slot: "Weapon_4" },
          { id: 10189, slot: "Weapon_5" }
        ]
      },
      Trident: {
        flags: ["TwoHand", "Aquatic"],
        skills: [
          { id: 10258, slot: "Weapon_1" },
          { id: 10259, slot: "Weapon_2" },
          { id: 10327, slot: "Weapon_3" },
          { id: 10328, slot: "Weapon_4" },
          { id: 10260, slot: "Weapon_5" }
        ]
      }
    }
  };
  var Ranger = {
    name: "Ranger",
    specializations: {
      Marksmanship: 8,
      Skirmishing: 30,
      "Wilderness Survival": 33,
      Beastmastery: 32,
      Druid: 5,
      "Nature Magic": 25,
      Soulbeast: 55
    },
    traits: {
      "Hunter's Gaze": { id: 1014 },
      "Clarion Bond": { id: 986 },
      "Steady Focus": { id: 1000 },
      "Brutish Seals": { id: 1001 },
      "Moment of Clarity": { id: 1070 },
      "Predator's Onslaught": { id: 996 },
      Stoneform: { id: 1021 },
      Remorseless: { id: 1015 },
      "Sharpened Edges": { id: 1069 },
      "Lead the Wind": { id: 1698 },
      "Primal Reflexes": { id: 1067 },
      Spotter: { id: 1016 },
      "Trapper's Expertise": { id: 1075 },
      "Strider's Defense": { id: 1700 },
      "Hidden Barbs": { id: 1846 },
      "Quick Draw": { id: 1064 },
      "Soften the Fall": { id: 1098 },
      "Light on your Feet": { id: 1912 },
      "Oakheart Salve": { id: 1086 },
      "Taste for Danger": { id: 1099 },
      Ambidexterity: { id: 1101 },
      "Empathic Bond": { id: 1094 },
      "Wilderness Knowledge": { id: 1699 },
      "Poison Master": { id: 1701 },
      "Go for the Eyes": { id: 1861 },
      "Potent Ally": { id: 1072 },
      "Resounding Timbre": { id: 1606 },
      "Refined Toxins": { id: 2032 },
      "Vicious Quarry": { id: 1888 },
      "Shared Anguish": { id: 1100 },
      "Two-Handed Training": { id: 1047 },
      "Natural Healing": { id: 970 },
      "Zephyr's Speed": { id: 968 },
      "Honed Axes": { id: 1066 },
      "Beastly Warden": { id: 1945 },
      "Druidic Clarity": { id: 1868 },
      "Wilting Strike": { id: 975 },
      "Cultivated Synergy": { id: 2016 },
      "Primal Echoes": { id: 1935 },
      "Verdant Etching": { id: 2001 },
      "Natural Stride": { id: 2056 },
      "Grace of the Land": { id: 2057 },
      "Lingering Light": { id: 2058 },
      "Celestial Shadow": { id: 2053 },
      "Ancient Seeds": { id: 2055 },
      "Bountiful Hunter": { id: 1062 },
      "Instinctive Reaction": { id: 978 },
      "Allies' Aid": { id: 1060 },
      "Evasive Purity": { id: 1054 },
      "Spirited Arrival": { id: 965 },
      "Windborne Notes": { id: 964 },
      "Nature's Vengeance": { id: 1038 },
      "Invigorating Bond": { id: 1697 },
      "Protective Ward": { id: 1988 },
      "Fresh Reinforcement": { id: 2134 },
      "Unstoppable Union": { id: 2072 },
      "Second Skin": { id: 2119 },
      "Eternal Bond": { id: 2155 },
      "Live Fast": { id: 2071 },
      "Leader of the Pack": { id: 2128 },
      "Oppressive Superiority": { id: 2143 },
      "Predator's Cunning": { id: 2161 },
      "Essence of Speed": { id: 2085 }
    },
    skills: {
      "Troll Unguent": { id: 12483, slot: "Heal" },
      '"We Heal As One!"': { id: 31914, slot: "Heal" },
      "Healing Spring": { id: 12489, slot: "Heal" },
      "Water Spirit": { id: 21773, slot: "Heal" },
      "Spike Trap": { id: 12476, slot: "Utility" },
      "Flame Trap": { id: 12499, slot: "Utility" },
      "Viper's Nest": { id: 12496, slot: "Utility" },
      "Frost Trap": { id: 12492, slot: "Utility" },
      "Signet of the Hunt": { id: 12542, slot: "Utility" },
      "Signet of the Wild": { id: 12491, slot: "Utility" },
      "Signet of Renewal": { id: 12502, slot: "Utility" },
      "Signet of Stone": { id: 12500, slot: "Utility" },
      "Lightning Reflexes": { id: 12494, slot: "Utility" },
      "Muddy Terrain": { id: 12501, slot: "Utility" },
      "Sun Spirit": { id: 12498, slot: "Utility" },
      "Stone Spirit": { id: 12495, slot: "Utility" },
      "Frost Spirit": { id: 12497, slot: "Utility" },
      "Storm Spirit": { id: 12493, slot: "Utility" },
      "Quickening Zephyr": { id: 12550, slot: "Utility" },
      '"Protect Me!"': { id: 12631, slot: "Utility" },
      '"Sic \'Em!"': { id: 12633, slot: "Utility" },
      '"Strength of the Pack!"': { id: 12516, slot: "Elite" },
      '"Guard!"': { id: 12632, slot: "Utility" },
      '"Search and Rescue!"': { id: 34309, slot: "Utility" },
      Entangle: { id: 12580, slot: "Elite" },
      "Sharpening Stone": { id: 12537, slot: "Utility" },
      "Glyph of Alignment": { id: 31322, slot: "Utility" },
      "Glyph of Equality": { id: 31746, slot: "Utility" },
      "Glyph of Empowerment": { id: 31582, slot: "Utility" },
      "Glyph of the Tides": { id: 30238, slot: "Utility" },
      "Glyph of Unity": { id: 31677, slot: "Elite" },
      "One Wolf Pack": { id: 45717, slot: "Elite" },
      "Spirit of Nature": { id: 12569, slot: "Elite" },
      "Griffon Stance": { id: 45142, slot: "Utility" },
      "Moa Stance": { id: 45970, slot: "Utility" },
      "Dolyak Stance": { id: 45789, slot: "Utility" },
      "Glyph of Rejuvenation": { id: 31407, slot: "Heal" },
      "Vulture Stance": { id: 40498, slot: "Utility" },
      Swoop: { id: 44991, slot: "Profession_1" },
      "Quickening Screech": { id: 42042, slot: "Profession_2" },
      Bite: { id: 40625, slot: "Profession_1" },
      "Defy Pain": { id: 43060, slot: "Profession_2" },
      "Brutal Charge": { id: 46432, slot: "Profession_2" },
      "Crippling Leap": { id: 43726, slot: "Profession_1" },
      "Tail Lash": { id: 46386, slot: "Profession_1" },
      "Devourer Retreat": { id: 41461, slot: "Profession_2" },
      Chomp: { id: 44885, slot: "Profession_2" },
      Charge: { id: 45743, slot: "Profession_2" },
      "Tail Swipe": { id: 41575, slot: "Profession_2" },
      Kick: { id: 41524, slot: "Profession_1" },
      "Bear Stance": { id: 44948, slot: "Heal" },
      "Celestial Avatar": { id: 31869, slot: "Profession_5" },
      Maul: { id: 41406, slot: "Profession_1" },
      "Crippling Anguish": { id: 44384, slot: "Profession_1" },
      "Narcotic Spores": { id: 40111, slot: "Profession_2" },
      "Harmonic Cry": { id: 44617, slot: "Profession_1" },
      "Frenzied Attack": { id: 43548, slot: "Profession_2" },
      "Call Lightning": { id: 43788, slot: "Profession_1" },
      "Entangling Web": { id: 44097, slot: "Profession_1" },
      "Poison Gas": { id: 43671, slot: "Profession_2" },
      Protection: { id: 42717, slot: "Profession_1" },
      "Healing Cloud": { id: 43186, slot: "Profession_1" },
      "Charging Bite": { id: 42797, slot: "Profession_1" },
      Fear: { id: 44360, slot: "Profession_2" },
      "Rain of Spikes": { id: 41206, slot: "Profession_1" },
      "Dark Water": { id: 41837, slot: "Profession_2" },
      "Sharpen Spines": { id: 45479, slot: "Profession_2" },
      "Wing Buffet": { id: 41908, slot: "Profession_2" },
      Takedown: { id: 42907, slot: "Profession_1" },
      "Spiritual Reprieve": { id: 44626, slot: "Profession_3" },
      "Primal Cry": { id: 40588, slot: "Profession_3" },
      "Prelude Lash": { id: 43375, slot: "Profession_3" },
      "Worldly Impact": { id: 40729, slot: "Profession_3" },
      Beastmode: { id: 42944, slot: "Profession_5" },
      "Leave Beastmode": { id: 43014, slot: "Profession_5" },
      "Unflinching Fortitude": { id: 45797, slot: "Profession_3" },
      "Smoke Assault": { id: 40255, slot: "Profession_2" },
      Photosynthesize: { id: 43701, slot: "Profession_2" }
    },
    weapons: {
      Axe: {
        flags: ["Mainhand", "Offhand"],
        skills: [
          { id: 12466, slot: "Weapon_1" },
          { id: 12480, slot: "Weapon_2" },
          { id: 12490, slot: "Weapon_3" },
          { id: 12638, slot: "Weapon_4" },
          { id: 12639, slot: "Weapon_5" }
        ]
      },
      Dagger: {
        specialization: 55,
        flags: ["Mainhand", "Offhand"],
        skills: [
          { id: 45426, slot: "Weapon_1" },
          { id: 43536, slot: "Weapon_2" },
          { id: 46123, slot: "Weapon_3" },
          { id: 12478, slot: "Weapon_4" },
          { id: 12477, slot: "Weapon_5" }
        ]
      },
      Greatsword: {
        flags: ["TwoHand"],
        skills: [
          { id: 12474, slot: "Weapon_1" },
          { id: 12525, slot: "Weapon_2" },
          { id: 12521, slot: "Weapon_3" },
          { id: 12522, slot: "Weapon_4" },
          { id: 12475, slot: "Weapon_5" }
        ]
      },
      Spear: {
        flags: ["TwoHand", "Aquatic"],
        skills: [
          { id: 12553, slot: "Weapon_1" },
          { id: 12559, slot: "Weapon_2" },
          { id: 12557, slot: "Weapon_3" },
          { id: 12561, slot: "Weapon_4" },
          { id: 12552, slot: "Weapon_5" }
        ]
      },
      Longbow: {
        flags: ["TwoHand"],
        skills: [
          { id: 12510, slot: "Weapon_1" },
          { id: 12509, slot: "Weapon_2" },
          { id: 12573, slot: "Weapon_3" },
          { id: 12511, slot: "Weapon_4" },
          { id: 12469, slot: "Weapon_5" }
        ]
      },
      Shortbow: {
        flags: ["TwoHand"],
        skills: [
          { id: 12470, slot: "Weapon_1" },
          { id: 12468, slot: "Weapon_2" },
          { id: 12517, slot: "Weapon_3" },
          { id: 12507, slot: "Weapon_4" },
          { id: 12508, slot: "Weapon_5" }
        ]
      },
      Speargun: {
        flags: ["TwoHand", "Aquatic"],
        skills: [
          { id: 12526, slot: "Weapon_1" },
          { id: 12529, slot: "Weapon_2" },
          { id: 12528, slot: "Weapon_3" },
          { id: 12527, slot: "Weapon_4" },
          { id: 12530, slot: "Weapon_5" }
        ]
      },
      Staff: {
        specialization: 5,
        flags: ["TwoHand"],
        skills: [
          { id: 31710, slot: "Weapon_1" },
          { id: 31889, slot: "Weapon_2" },
          { id: 31535, slot: "Weapon_3" },
          { id: 31700, slot: "Weapon_4" },
          { id: 31496, slot: "Weapon_5" }
        ]
      },
      Sword: {
        flags: ["Mainhand"],
        skills: [
          { id: 12471, slot: "Weapon_1" },
          { id: 12482, slot: "Weapon_2" },
          { id: 12481, slot: "Weapon_3" }
        ]
      },
      Torch: {
        flags: ["Offhand"],
        skills: [
          { id: 12635, slot: "Weapon_4" },
          { id: 12504, slot: "Weapon_5" }
        ]
      },
      Warhorn: {
        flags: ["Offhand"],
        skills: [
          { id: 12620, slot: "Weapon_4" },
          { id: 12621, slot: "Weapon_5" }
        ]
      }
    }
  };
  var Thief = {
    name: "Thief",
    specializations: {
      "Critical Strikes": 35,
      "Shadow Arts": 20,
      Acrobatics: 54,
      Trickery: 44,
      "Deadly Arts": 28,
      Deadeye: 58,
      Daredevil: 7
    },
    traits: {
      "Assassin's Fury": { id: 1209 },
      "Signets of Power": { id: 1267 },
      "Twin Fangs": { id: 1268 },
      "Sundering Strikes": { id: 1170 },
      "Practiced Tolerance": { id: 1272 },
      "Ankle Shots": { id: 1299 },
      "No Quarter": { id: 1904 },
      "Hidden Killer": { id: 1215 },
      "Invigorating Precision": { id: 1702 },
      "Last Refuge": { id: 1160 },
      "Concealed Defeat": { id: 1293 },
      "Shadow's Embrace": { id: 1284 },
      "Shadow Protector": { id: 1297 },
      "Leeching Venoms": { id: 1300 },
      "Cloaked in Shadow": { id: 1134 },
      "Hidden Thief": { id: 1130 },
      "Shadow's Rejuvenation": { id: 1135 },
      "Rending Shade": { id: 1162 },
      "Guarded Initiation": { id: 1241 },
      "Vigorous Recovery": { id: 1289 },
      "Hard to Catch": { id: 1290 },
      "Assassin's Reward": { id: 1238 },
      "Swindler's Equilibrium": { id: 1192 },
      "Don't Stop": { id: 1703 },
      "Instant Reflexes": { id: 1112 },
      "Upper Hand": { id: 1295 },
      Uncatchable: { id: 1159 },
      "Bountiful Theft": { id: 1277 },
      "Burst of Agility": { id: 1252 },
      "Pressure Striking": { id: 1190 },
      "Quick Pockets": { id: 1187 },
      Trickster: { id: 1286 },
      "Pain Response": { id: 1237 },
      "Thrill of the Crime": { id: 1163 },
      "Bewildering Ambush": { id: 1706 },
      "Sleight of Hand": { id: 1158 },
      Mug: { id: 1276 },
      "Trapper's Respite": { id: 1164 },
      "Dagger Training": { id: 1245 },
      "Deadly Trapper": { id: 1169 },
      "Revealed Training": { id: 1704 },
      "Potent Poison": { id: 1291 },
      "Panic Strike": { id: 1292 },
      Executioner: { id: 1269 },
      Improvisation: { id: 1167 },
      "Revealed Malice": { id: 2145 },
      "Silent Scope": { id: 2118 },
      "One in the Chamber": { id: 2136 },
      "Iron Sight": { id: 2173 },
      Unforgiving: { id: 2078 },
      "Peripheral Vision": { id: 2160 },
      "Maleficent Seven": { id: 2111 },
      "Be Quick or Be Killed": { id: 2093 },
      "Fire for Effect": { id: 2146 },
      "Havoc Mastery": { id: 1933 },
      "Weakening Strikes": { id: 2023 },
      "Brawler's Tenacity": { id: 1949 },
      "Staff Master": { id: 1884 },
      "Escapist's Absolution": { id: 1893 },
      "Impacting Disruption": { id: 1975 },
      "Lotus Training": { id: 1833 },
      "Bounding Dodger": { id: 2047 },
      "Unhindered Combatant": { id: 1964 }
    },
    skills: {
      Steal: { id: 13014, slot: "Profession_1" },
      Withdraw: { id: 13021, slot: "Heal" },
      "Hide in Shadows": { id: 13027, slot: "Heal" },
      "Signet of Malice": { id: 13050, slot: "Heal" },
      "Skelk Venom": { id: 21778, slot: "Heal" },
      "Spider Venom": { id: 13037, slot: "Utility" },
      "Skale Venom": { id: 13055, slot: "Utility" },
      "Ice Drake Venom": { id: 13096, slot: "Utility" },
      "Devourer Venom": { id: 13093, slot: "Utility" },
      Tripwire: { id: 13057, slot: "Utility" },
      Ambush: { id: 13056, slot: "Utility" },
      "Needle Trap": { id: 13026, slot: "Utility" },
      "Shadow Trap": { id: 13038, slot: "Utility" },
      "Assassin's Signet": { id: 13046, slot: "Utility" },
      "Infiltrator's Signet": { id: 13064, slot: "Utility" },
      "Signet of Agility": { id: 13062, slot: "Utility" },
      "Scorpion Wire": { id: 13020, slot: "Utility" },
      "Roll for Initiative": { id: 13035, slot: "Utility" },
      "Signet of Shadows": { id: 13060, slot: "Utility" },
      Haste: { id: 13066, slot: "Utility" },
      Caltrops: { id: 13028, slot: "Utility" },
      Shadowstep: { id: 13002, slot: "Utility" },
      "Smoke Screen": { id: 13065, slot: "Utility" },
      "Thieves Guild": { id: 13082, slot: "Elite" },
      "Basilisk Venom": { id: 13132, slot: "Elite" },
      "Dagger Storm": { id: 13085, slot: "Elite" },
      "Shadow Refuge": { id: 13117, slot: "Utility" },
      "Blinding Powder": { id: 13044, slot: "Utility" },
      "Channeled Vigor": { id: 30400, slot: "Heal" },
      "Fist Flurry": { id: 30868, slot: "Utility" },
      "Bandit's Defense": { id: 30661, slot: "Utility" },
      "Impairing Daggers": { id: 30369, slot: "Utility" },
      "Distracting Daggers": { id: 30568, slot: "Utility" },
      "Malicious Restoration": { id: 45088, slot: "Heal" },
      "Shadow Meld": { id: 45508, slot: "Elite" },
      "Shadow Gust": { id: 46335, slot: "Utility" },
      Mercy: { id: 41372, slot: "Utility" },
      "Binding Shadow": { id: 41205, slot: "Utility" },
      "Shadow Flare": { id: 41158, slot: "Utility" },
      "Deadeye's Mark": { id: 43390, slot: "Profession_1" },
      "Mace Head Crack": { id: 1131, slot: "Profession_2" },
      "Impact Strike": { id: 29516, slot: "Elite" },
      "Whirling Strike": { id: 1167, slot: "Profession_2" },
      "Throw Gunk": { id: 1110, slot: "Profession_2" },
      "Throw Chain": { id: 1118, slot: "Profession_2" },
      "Branch Leap": { id: 1115, slot: "Profession_2" },
      "Whirling Axe": { id: 1162, slot: "Profession_2" },
      "Healing Seed": { id: 1139, slot: "Profession_2" },
      "Eat Egg": { id: 1125, slot: "Profession_2" },
      "Blinding Tuft": { id: 1148, slot: "Profession_2" },
      "Ice Shard Stab": { id: 1129, slot: "Profession_2" },
      "Consume Plasma": { id: 1123, slot: "Profession_2" },
      "Skull Fear": { id: 1141, slot: "Profession_2" },
      "Essence Sap": { id: 31438, slot: "Profession_2" }
    },
    weapons: {
      Dagger: {
        flags: ["Mainhand", "Offhand"],
        skills: [
          { id: 13004, slot: "Weapon_1" },
          { id: 13097, slot: "Weapon_2" },
          { id: 13006, slot: "Weapon_3", offhand: "Dagger" },
          { id: 13040, slot: "Weapon_3", offhand: "Pistol" },
          { id: 13110, slot: "Weapon_3", offhand: "Nothing" },
          { id: 13019, slot: "Weapon_4" },
          { id: 13013, slot: "Weapon_5" },
          { id: 16432, slot: "Weapon_5" }
        ]
      },
      Spear: {
        flags: ["TwoHand", "Aquatic"],
        skills: [
          { id: 13119, slot: "Weapon_1" },
          { id: 13069, slot: "Weapon_2" },
          { id: 13122, slot: "Weapon_3" },
          { id: 13070, slot: "Weapon_4" },
          { id: 13068, slot: "Weapon_5" }
        ]
      },
      Pistol: {
        flags: ["Mainhand", "Offhand"],
        skills: [
          { id: 13084, slot: "Weapon_1" },
          { id: 13008, slot: "Weapon_2" },
          { id: 13011, slot: "Weapon_3", offhand: "Pistol" },
          { id: 13010, slot: "Weapon_3", offhand: "Dagger" },
          { id: 13111, slot: "Weapon_3", offhand: "Nothing" },
          { id: 13012, slot: "Weapon_4" },
          { id: 13113, slot: "Weapon_5" }
        ]
      },
      Rifle: {
        specialization: 58,
        flags: ["TwoHand"],
        skills: [
          { id: 41422, slot: "Weapon_1" },
          { id: 41494, slot: "Weapon_2" },
          { id: 43916, slot: "Weapon_3" },
          { id: 41937, slot: "Weapon_4" },
          { id: 40600, slot: "Weapon_5" }
        ]
      },
      Shortbow: {
        flags: ["TwoHand"],
        skills: [
          { id: 13022, slot: "Weapon_1" },
          { id: 13041, slot: "Weapon_2" },
          { id: 13083, slot: "Weapon_3" },
          { id: 13024, slot: "Weapon_4" },
          { id: 13025, slot: "Weapon_5" }
        ]
      },
      Speargun: {
        flags: ["TwoHand", "Aquatic"],
        skills: [
          { id: 13072, slot: "Weapon_1" },
          { id: 13073, slot: "Weapon_2" },
          { id: 13074, slot: "Weapon_3" },
          { id: 13075, slot: "Weapon_4" },
          { id: 13076, slot: "Weapon_5" }
        ]
      },
      Staff: {
        specialization: 7,
        flags: ["TwoHand"],
        skills: [
          { id: 30614, slot: "Weapon_1" },
          { id: 29911, slot: "Weapon_2" },
          { id: 30520, slot: "Weapon_3" },
          { id: 30775, slot: "Weapon_4" },
          { id: 30597, slot: "Weapon_5" }
        ]
      },
      Sword: {
        flags: ["Mainhand"],
        skills: [
          { id: 13009, slot: "Weapon_1" },
          { id: 13015, slot: "Weapon_2" },
          { id: 13016, slot: "Weapon_3", offhand: "Dagger" },
          { id: 13031, slot: "Weapon_3", offhand: "Pistol" },
          { id: 13112, slot: "Weapon_3", offhand: "Nothing" }
        ]
      }
    }
  };
  var Engineer = {
    name: "Engineer",
    specializations: {
      Explosives: 6,
      Firearms: 38,
      Inventions: 47,
      Tools: 21,
      Scrapper: 43,
      Holosmith: 57,
      Alchemy: 29
    },
    traits: {
      Grenadier: { id: 514 },
      "Blasting Zone": { id: 525 },
      "Aim-Assisted Rocket": { id: 482 },
      "Big Boomer": { id: 1892 },
      "Glass Cannon": { id: 1882 },
      "Short Fuse": { id: 1944 },
      "Orbital Command": { id: 1541 },
      Shrapnel: { id: 505 },
      Minesweeper: { id: 1947 },
      "Chemical Rounds": { id: 1878 },
      "High Caliber": { id: 1914 },
      "Heavy Armor Exploit": { id: 1930 },
      "Pinpoint Distribution": { id: 1984 },
      "Skilled Marksman": { id: 2006 },
      "No Scope": { id: 1923 },
      Juggernaut: { id: 510 },
      "Modified Ammunition": { id: 526 },
      "Incendiary Powder": { id: 433 },
      "Over Shield": { id: 394 },
      "Autodefense Bomb Dispenser": { id: 507 },
      "Soothing Detonation": { id: 1834 },
      "Mecha Legs": { id: 445 },
      "Automated Medical Response": { id: 1901 },
      "Advanced Turrets": { id: 472 },
      "Experimental Turrets": { id: 1678 },
      "Bunker Down": { id: 1680 },
      "Medical Dispersion Field": { id: 1916 },
      "Streamlined Kits": { id: 512 },
      "Power Wrench": { id: 531 },
      "Lock On": { id: 1946 },
      "Static Discharge": { id: 532 },
      "Takedown Round": { id: 1832 },
      "Kinetic Battery": { id: 1856 },
      "Perfectly Weighted": { id: 1971 },
      "Recovery Matrix": { id: 1867 },
      "Rapid Regeneration": { id: 1954 },
      "Reactive Lenses": { id: 1997 },
      "Shocking Speed": { id: 1917 },
      "Adrenal Implant": { id: 523 },
      "Expert Examination": { id: 1999 },
      "Mass Momentum": { id: 1860 },
      Gadgeteer: { id: 1679 },
      "Adaptive Armor": { id: 1981 },
      "Final Salvo": { id: 2052 },
      "Light Density Amplifier": { id: 2114 },
      "Prismatic Converter": { id: 2157 },
      "Solar Focusing Lens": { id: 2106 },
      "Crystal Configuration: Storm": { id: 2103 },
      "Crystal Configuration: Eclipse": { id: 2152 },
      "Thermal Release Valve": { id: 2066 },
      "Applied Force": { id: 1849 },
      "Enhanced Capacity Storage Unit": { id: 2137 },
      "Photonic Blasting Module": { id: 2064 },
      "Invigorating Speed": { id: 396 },
      "Protection Injection": { id: 509 },
      "Self-Regulating Defenses": { id: 469 },
      "Backpack Regenerator": { id: 470 },
      "Health Insurance": { id: 521 },
      "Inversion Enzyme": { id: 520 },
      "Crystal Configuration: Zephyr": { id: 2091 },
      HGH: { id: 473 },
      "Iron Blooded": { id: 1854 },
      "Stimulant Supplier": { id: 1871 }
    },
    skills: {
      "Elixir H": { id: 5834, slot: "Heal" },
      "Med Kit": { id: 5802, slot: "Heal" },
      "Healing Turret": { id: 5857, slot: "Heal" },
      "A.E.D.": { id: 21659, slot: "Heal" },
      "Flame Turret": { id: 5836, slot: "Utility" },
      "Net Turret": { id: 5837, slot: "Utility" },
      "Thumper Turret": { id: 5838, slot: "Utility" },
      "Rocket Turret": { id: 5912, slot: "Utility" },
      "Elixir B": { id: 5821, slot: "Utility" },
      "Rifle Turret": { id: 5818, slot: "Utility" },
      "Elixir S": { id: 5861, slot: "Utility" },
      "Elixir C": { id: 5860, slot: "Utility" },
      "Grenade Kit": { id: 5805, slot: "Utility" },
      "Bomb Kit": { id: 5812, slot: "Utility" },
      "Elixir R": { id: 5968, slot: "Utility" },
      Flamethrower: { id: 5927, slot: "Utility" },
      "Elixir Gun": { id: 5933, slot: "Utility" },
      "Utility Goggles": { id: 5865, slot: "Utility" },
      "Tool Kit": { id: 5904, slot: "Utility" },
      "Rocket Boots": { id: 5910, slot: "Utility" },
      "Personal Battering Ram": { id: 5811, slot: "Utility" },
      "Slick Shoes": { id: 5825, slot: "Utility" },
      "Supply Crate": { id: 5868, slot: "Elite" },
      "Elite Mortar Kit": { id: 30800, slot: "Elite" },
      "Medic Gyro": { id: 30357, slot: "Heal" },
      "Bulwark Gyro": { id: 30101, slot: "Utility" },
      "Blast Gyro Tag": { id: 31248, slot: "Utility" },
      "Shredder Gyro": { id: 29921, slot: "Utility" },
      "Sneak Gyro": { id: 30815, slot: "Elite" },
      "Prime Light Beam": { id: 42009, slot: "Elite" },
      "Coolant Blast": { id: 40507, slot: "Heal" },
      "Photon Wall": { id: 43739, slot: "Utility" },
      "Laser Disk": { id: 42842, slot: "Utility" },
      "Hard Light Arena": { id: 44646, slot: "Utility" },
      "Spectrum Shield": { id: 41218, slot: "Utility" },
      "Engage Photon Forge": { id: 42938, slot: "Profession_5" },
      "Throw Mine": { id: 6161, slot: "Utility" },
      "Elixir U": { id: 5862, slot: "Utility" },
      "Elixir X": { id: 5832, slot: "Elite" },
      "Purge Gyro": { id: 29739, slot: "Utility" }
    },
    weapons: {
      Hammer: {
        specialization: 43,
        flags: ["TwoHand"],
        skills: [
          { id: 30501, slot: "Weapon_1" },
          { id: 30088, slot: "Weapon_2" },
          { id: 30665, slot: "Weapon_3" },
          { id: 29840, slot: "Weapon_4" },
          { id: 30713, slot: "Weapon_5" }
        ]
      },
      Pistol: {
        flags: ["Mainhand", "Offhand"],
        skills: [
          { id: 5827, slot: "Weapon_1" },
          { id: 5828, slot: "Weapon_2" },
          { id: 5829, slot: "Weapon_3" },
          { id: 5831, slot: "Weapon_4" },
          { id: 5830, slot: "Weapon_5" }
        ]
      },
      Rifle: {
        flags: ["TwoHand"],
        skills: [
          { id: 6003, slot: "Weapon_1" },
          { id: 6004, slot: "Weapon_2" },
          { id: 6153, slot: "Weapon_3" },
          { id: 6154, slot: "Weapon_4" },
          { id: 6005, slot: "Weapon_5" }
        ]
      },
      Shield: {
        flags: ["Offhand"],
        skills: [{ id: 6053, slot: "Weapon_4" }, { id: 6054, slot: "Weapon_5" }]
      },
      Speargun: {
        flags: ["TwoHand", "Aquatic"],
        skills: [
          { id: 6148, slot: "Weapon_1" },
          { id: 6147, slot: "Weapon_2" },
          { id: 6146, slot: "Weapon_3" },
          { id: 6149, slot: "Weapon_4" },
          { id: 6145, slot: "Weapon_5" }
        ]
      },
      Sword: {
        specialization: 57,
        flags: ["Mainhand"],
        skills: [
          { id: 43476, slot: "Weapon_1" },
          { id: 44110, slot: "Weapon_2" },
          { id: 40160, slot: "Weapon_3" }
        ]
      }
    }
  };

  Guardian.armor = "Heavy";
  Warrior.armor = "Heavy";
  Revenant.armor = "Heavy";
  Engineer.armor = "Medium";
  Ranger.armor = "Medium";
  Thief.armor = "Medium";
  Elementalist.armor = "Light";
  Necromancer.armor = "Light";
  Mesmer.armor = "Light";

  return {
    Guardian: Guardian,
    Warrior: Warrior,
    Revenant: Revenant,
    Engineer: Engineer,
    Ranger: Ranger,
    Thief: Thief,
    Elementalist: Elementalist,
    Necromancer: Necromancer,
    Mesmer: Mesmer
  };
});
