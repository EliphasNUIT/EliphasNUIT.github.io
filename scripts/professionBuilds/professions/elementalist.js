define(["professionBuilds/dataBuilds", "professionBuilds/professionUtilities/professions"], function(
    buildData,
    professions
) {
    "use strict";
    var Build = buildData.build;
    var Profession = professions.Elementalist;
    var build = null;
    // Condi
    {
        build = new Build("tempPS", Profession);
        build.armor.setStats(["Sinister", "Sinister", "Viper's", "Sinister", "Sinister", "Sinister"]);
        build.armor.setSingleRune("Superior Rune of Balthazar");
        build.consumable.setConsumable("Rare Veggie Pizza", "Toxic Focusing Crystal");
        build.trinket.setSingleStat("Sinister");
        build.wep1.setMainHand("Scepter", "Sinister", "Superior Sigil of Bursting");
        build.wep1.setOffHand("Warhorn", "Viper's", "Superior Sigil of Smoldering");
        build.wep2 = null;
        build.specialization.setSpec("spec1", "Fire", [
            "Burning Precision",
            "Pyromancer's Training",
            "Persisting Flames"
        ]);
        build.specialization.setSpec("spec2", "Arcane", ["Arcane Precision", "Final Shielding", "Elemental Surge"]);
        build.specialization.setSpec("spec3", "Tempest", ["Unstable Conduit", "Harmonious Conduit", "Imbued Melodies"]);
        build.skills.setHealSkill("Arcane Brilliance");
        build.skills.setUtilitySkills(["Signet of Fire", "Arcane Power", "Glyph of Elemental Power"]);
        build.skills.setEliteSkill("Glyph of Elementals");

        build = new Build("tempPSSab", Profession);
        build.armor.setStats(["Sinister", "Sinister", "Viper's", "Sinister", "Sinister", "Sinister"]);
        build.armor.setSingleRune("Superior Rune of Balthazar");
        build.consumable.setConsumable("Rare Veggie Pizza", "Toxic Focusing Crystal");
        build.trinket.setSingleStat("Sinister");
        build.wep1.setMainHand("Scepter", "Sinister", "Superior Sigil of Bursting");
        build.wep1.setOffHand("Warhorn", "Viper's", "Superior Sigil of Smoldering");
        build.wep2 = null;
        build.specialization.setSpec("spec1", "Fire", [
            "Burning Precision",
            "Pyromancer's Training",
            "Persisting Flames"
        ]);
        build.specialization.setSpec("spec2", "Arcane", ["Arcane Precision", "Final Shielding", "Elemental Surge"]);
        build.specialization.setSpec("spec3", "Tempest", ["Unstable Conduit", "Harmonious Conduit", "Imbued Melodies"]);
        build.skills.setHealSkill("Arcane Brilliance");
        build.skills.setUtilitySkills(["Signet of Fire", "Arcane Power", "Lightning Flash"]);
        build.skills.setEliteSkill("Glyph of Elementals");

        build = new Build("weavCondi", Profession);
        build.armor.setStats(["Viper's", "Grieving", "Grieving", "Grieving", "Viper's", "Grieving"]);
        build.armor.setSingleRune("Superior Rune of the Renegade");
        build.consumable.setConsumable("Rare Veggie Pizza", "Toxic Focusing Crystal");
        build.trinket.setSingleStat("Viper's");
        build.wep1.setMainHand("Dagger", "Viper's", "Superior Sigil of Bursting");
        build.wep1.setOffHand("Focus", "Viper's", "Superior Sigil of Smoldering");
        build.wep2 = null;
        build.specialization.setSpec("spec1", "Fire", [
            "Burning Precision",
            "Pyromancer's Training",
            "Persisting Flames"
        ]);
        build.specialization.setSpec("spec2", "Arcane", ["Arcane Precision", "Final Shielding", "Elemental Surge"]);
        build.specialization.setSpec("spec3", "Weaver", ["Superior Elements", "Weaver's Prowess", "Elements of Rage"]);
        build.skills.setHealSkill("Arcane Brilliance");
        build.skills.setUtilitySkills(["Signet of Fire", "Arcane Power", "Primordial Stance"]);
        build.skills.setEliteSkill("Conjure Fiery Greatsword");

        build = new Build("weavCondiSab", Profession);
        build.armor.setStats(["Viper's", "Grieving", "Grieving", "Grieving", "Viper's", "Grieving"]);
        build.armor.setSingleRune("Superior Rune of the Renegade");
        build.consumable.setConsumable("Rare Veggie Pizza", "Toxic Focusing Crystal");
        build.trinket.setSingleStat("Viper's");
        build.wep1.setMainHand("Dagger", "Viper's", "Superior Sigil of Bursting");
        build.wep1.setOffHand("Focus", "Viper's", "Superior Sigil of Smoldering");
        build.wep2 = null;
        build.specialization.setSpec("spec1", "Fire", [
            "Burning Precision",
            "Pyromancer's Training",
            "Persisting Flames"
        ]);
        build.specialization.setSpec("spec2", "Arcane", ["Arcane Precision", "Final Shielding", "Elemental Surge"]);
        build.specialization.setSpec("spec3", "Weaver", ["Superior Elements", "Weaver's Prowess", "Elements of Rage"]);
        build.skills.setHealSkill("Arcane Brilliance");
        build.skills.setUtilitySkills(["Signet of Fire", "Arcane Power", "Lightning Flash"]);
        build.skills.setEliteSkill("Conjure Fiery Greatsword");
    }

    // Power
    {
        build = new Build("weavPower1", Profession);
        build.armor.setSingleStat("Berserker's");
        build.armor.setSingleRune("Superior Rune of the Scholar");
        build.consumable.setConsumable("Bowl of Sweet and Spicy Butternut Squash Soup", "Superior Sharpening Stone");
        build.trinket.setSingleStat("Berserker's");
        build.wep1.setTwoHand("Staff", "Berserker's", "Superior Sigil of Force", "Superior Sigil of Accuracy");
        build.wep2 = null;
        build.specialization.setSpec("spec1", "Fire", [
            "Burning Precision",
            "Pyromancer's Training",
            "Persisting Flames"
        ]);
        build.specialization.setSpec("spec2", "Arcane", [
            "Renewing Stamina",
            "Elemental Contingency",
            "Bountiful Power"
        ]);
        build.specialization.setSpec("spec3", "Weaver", ["Superior Elements", "Swift Revenge", "Elements of Rage"]);
        build.skills.setHealSkill("Glyph of Elemental Harmony");
        build.skills.setUtilitySkills(["Conjure Frost Bow", "Glyph of Storms", "Signet of Fire"]);
        build.skills.setEliteSkill("Conjure Fiery Greatsword");

        build = new Build("weavPower2", Profession);
        build.armor.setSingleStat("Berserker's");
        build.armor.setSingleRune("Superior Rune of the Scholar");
        build.consumable.setConsumable("Bowl of Sweet and Spicy Butternut Squash Soup", "Superior Sharpening Stone");
        build.trinket.setSingleStat("Berserker's");
        build.wep1.setTwoHand("Staff", "Berserker's", "Superior Sigil of Force", "Superior Sigil of Air");
        build.wep2 = null;
        build.specialization.setSpec("spec1", "Fire", [
            "Burning Precision",
            "Pyromancer's Training",
            "Persisting Flames"
        ]);
        build.specialization.setSpec("spec2", "Arcane", [
            "Renewing Stamina",
            "Elemental Contingency",
            "Bountiful Power"
        ]);
        build.specialization.setSpec("spec3", "Weaver", ["Superior Elements", "Swift Revenge", "Elements of Rage"]);
        build.skills.setHealSkill("Glyph of Elemental Harmony");
        build.skills.setUtilitySkills(["Conjure Frost Bow", "Glyph of Storms", "Primordial Stance"]);
        build.skills.setEliteSkill("Conjure Fiery Greatsword");

        build = new Build("weavPowerKC", Profession);
        build.armor.setSingleStat("Berserker's");
        build.armor.setSingleRune("Superior Rune of the Scholar");
        build.consumable.setConsumable("Bowl of Sweet and Spicy Butternut Squash Soup", "Superior Sharpening Stone");
        build.trinket.setSingleStat("Berserker's");
        build.wep1.setTwoHand("Staff", "Assassin's", "Superior Sigil of Force", "Superior Sigil of Impact");
        build.wep2 = null;
        build.specialization.setSpec("spec1", "Fire", [
            "Burning Precision",
            "Pyromancer's Training",
            "Persisting Flames"
        ]);
        build.specialization.setSpec("spec2", "Air", ["Ferocious Winds", "Tempest Defense", "Bolt to the Heart"]);
        build.specialization.setSpec("spec3", "Weaver", ["Superior Elements", "Swift Revenge", "Elements of Rage"]);
        build.skills.setHealSkill("Glyph of Elemental Harmony");
        build.skills.setUtilitySkills(["Conjure Frost Bow", "Glyph of Storms", "Signet of Fire"]);
        build.skills.setEliteSkill("Weave Self");
    }

    // Special
    {
        build = new Build("tempAura", Profession);
        build.armor.setSingleStat("Magi's");
        build.armor.setSingleRune("Superior Rune of the Monk");
        build.consumable.setConsumable("Delicious Rice Ball", "Bountiful Maintenance Oil");
        build.trinket.setSingleStat("Magi's");
        build.wep1.setTwoHand("Staff", "Magi's", "Superior Sigil of Transference", "Superior Sigil of Water");
        build.wep2 = null;
        build.specialization.setSpec("spec1", "Water", ["Soothing Ice", "Aquamancer's Training", "Soothing Power"]);
        build.specialization.setSpec("spec2", "Arcane", ["Renewing Stamina", "Arcane Resurrection", "Evasive Arcana"]);
        build.specialization.setSpec("spec3", "Tempest", [
            "Latent Stamina",
            "Invigorating Torrents",
            "Elemental Bastion"
        ]);
        build.skills.setHealSkill('"Wash the Pain Away!"');
        build.skills.setUtilitySkills(['"Feel the Burn!"', '"Flash-Freeze!"', "Lightning Flash"]);
        build.skills.setEliteSkill('"Rebound!"');
    }
});

////// POWER
