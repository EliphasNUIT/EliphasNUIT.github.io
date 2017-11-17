define(["professionBuilds/dataBuilds", "professionBuilds/professionUtilities/professions"], function (
    buildData,
    professions
) {
    "use strict";
    var Build = buildData.build;
    var build = null;

    class EleBuild extends Build {
        constructor(name) {
            super(name, professions.Elementalist);
            this.wep2 = null;
        }
    }

    class CondiWeaverBuild extends EleBuild {
        constructor(name) {
            super(name);
            this.armor.setStats(["Viper's", "Grieving", "Grieving", "Grieving", "Viper's", "Grieving"]);
            this.armor.setSingleRune("Superior Rune of the Renegade");
            this.consumable.setConsumable("Rare Veggie Pizza", "Toxic Focusing Crystal");
            this.trinket.setSingleStat("Viper's");
            this.wep1.setMainHand("Sword", "Viper's", "Superior Sigil of Bursting");
            this.wep1.setOffHand("Focus", "Viper's", "Superior Sigil of Smoldering");
            this.specialization.setSpec("spec1", "Fire", [
                "Burning Precision",
                "Pyromancer's Training",
                "Persisting Flames"
            ]);
            this.specialization.setSpec("spec2", "Arcane", ["Arcane Precision", "Final Shielding", "Elemental Surge"]);
            this.specialization.setSpec("spec3", "Weaver", ["Superior Elements", "Weaver's Prowess", "Elements of Rage"]);
            this.skills.setHealSkill("Arcane Brilliance");
            this.skills.setEliteSkill("Weave Self");
        }
    }

    class PowerWeaverBuild extends EleBuild {
        constructor(name) {
            super(name);
            this.armor.setSingleStat("Berserker's");
            this.armor.setSingleRune("Superior Rune of the Scholar");
            this.consumable.setConsumable("Bowl of Sweet and Spicy Butternut Squash Soup", "Superior Sharpening Stone");
            this.trinket.setSingleStat("Berserker's");
            this.specialization.setSpec("spec1", "Fire", [
                "Burning Precision",
                "Pyromancer's Training",
                "Persisting Flames"
            ]);
            this.specialization.setSpec("spec3", "Weaver", ["Superior Elements", "Swift Revenge", "Elements of Rage"]);
            this.skills.setHealSkill("Glyph of Elemental Harmony");
            this.skills.setEliteSkill("Weave Self");
        }
    }

    class CondiTempestBuild extends EleBuild {
        constructor(name) {
            super(name);
            this.armor.setStats(["Sinister", "Sinister", "Viper's", "Sinister", "Sinister", "Sinister"]);
            this.armor.setSingleRune("Superior Rune of Balthazar");
            this.consumable.setConsumable("Rare Veggie Pizza", "Toxic Focusing Crystal");
            this.trinket.setSingleStat("Sinister");
            this.wep1.setMainHand("Scepter", "Sinister", "Superior Sigil of Bursting");
            this.wep1.setOffHand("Warhorn", "Viper's", "Superior Sigil of Smoldering");
            this.specialization.setSpec("spec1", "Fire", [
                "Burning Precision",
                "Pyromancer's Training",
                "Persisting Flames"
            ]);
            this.specialization.setSpec("spec2", "Arcane", ["Arcane Precision", "Final Shielding", "Elemental Surge"]);
            this.specialization.setSpec("spec3", "Tempest", ["Unstable Conduit", "Harmonious Conduit", "Imbued Melodies"]);
            this.skills.setHealSkill("Arcane Brilliance");
        }
    }

    // Condi
    {
        build = new CondiTempestBuild("tempPS");
        build.skills.setUtilitySkills(["Signet of Fire", "Arcane Power", "Glyph of Elemental Power"]);
        build.skills.setEliteSkill("Glyph of Elementals");

        build = new CondiTempestBuild("tempPSSab");
        build.skills.setUtilitySkills(["Signet of Fire", "Arcane Power", "Lightning Flash"]);
        build.skills.setEliteSkill("Glyph of Elementals");

        build = new CondiWeaverBuild("weavCondi");
        build.skills.setUtilitySkills(["Signet of Fire", "Arcane Power", "Primordial Stance"]);
        build = new CondiWeaverBuild("weavCondiSab");
        build.skills.setUtilitySkills(["Signet of Fire", "Arcane Power", "Lightning Flash"]);
    }

    // Power
    {
        build = new PowerWeaverBuild("weavPower1");
        build.wep1.setTwoHand("Staff", "Berserker's", "Superior Sigil of Force", "Superior Sigil of Accuracy");
        build.specialization.setSpec("spec2", "Arcane", [
            "Renewing Stamina",
            "Elemental Contingency",
            "Bountiful Power"
        ]);
        build.skills.setUtilitySkills(["Conjure Lightning Hammer", "Glyph of Storms", "Signet of Fire"]);

        build = new PowerWeaverBuild("weavPower2");
        build.wep1.setTwoHand("Staff", "Berserker's", "Superior Sigil of Force", "Superior Sigil of Air");
        build.specialization.setSpec("spec2", "Arcane", [
            "Renewing Stamina",
            "Elemental Contingency",
            "Bountiful Power"
        ]);
        build.skills.setUtilitySkills(["Conjure Lightning Hammer", "Glyph of Storms", "Primordial Stance"]);

        build = new PowerWeaverBuild("weavPowerKC");
        build.wep1.setTwoHand("Staff", "Assassin's", "Superior Sigil of Force", "Superior Sigil of Impact");
        build.specialization.setSpec("spec2", "Air", ["Ferocious Winds", "Tempest Defense", "Bolt to the Heart"]);
        build.skills.setUtilitySkills(["Conjure Frost Bow", "Glyph of Storms", "Signet of Fire"]);
    }

    // Special
    {
        build = new EleBuild("tempAura");
        build.armor.setSingleStat("Magi's");
        build.armor.setSingleRune("Superior Rune of the Monk");
        build.consumable.setConsumable("Delicious Rice Ball", "Bountiful Maintenance Oil");
        build.trinket.setSingleStat("Magi's");
        build.wep1.setTwoHand("Staff", "Magi's", "Superior Sigil of Transference", "Superior Sigil of Water");

        build.specialization.setSpec("spec1", "Water", ["Soothing Ice", "Aquamancer's Training", "Soothing Power"]);
        build.specialization.setSpec("spec2", "Arcane", ["Renewing Stamina", "Arcane Resurrection", "Evasive Arcana"]);
        build.specialization.setSpec("spec3", "Tempest", [
            "Latent Stamina",
            "Invigorating Torrents",
            "Elemental Bastion"
        ]);
        build.skills.setHealSkill("\"Wash the Pain Away!\"");
        build.skills.setUtilitySkills(["\"Feel the Burn!\"", "\"Flash-Freeze!\"", "Lightning Flash"]);
        build.skills.setEliteSkill("\"Rebound!\"");
    }
});

////// POWER
