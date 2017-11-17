define(["professionBuilds/dataBuilds", "professionBuilds/professionUtilities/professions"], function(
    buildData,
    professions
) {
    "use strict";
    var Build = buildData.build;
    class WarriorBuild extends Build {
        constructor(name) {
            super(name, professions.Warrior);
        }
    }

    class BerserkerBuild extends WarriorBuild {
        constructor(name) {
            super(name);
            this.armor.setSingleStat("Viper's");
            this.armor.setSingleRune("Superior Rune of the Renegade");
            this.consumable.setConsumable("Rare Veggie Pizza", "Toxic Focusing Crystal");
            this.trinket.setSingleStat("Viper's");
            this.wep1.setMainHand("Sword", "Viper's", "Superior Sigil of Geomancy");
            this.wep1.setOffHand("Torch", "Viper's", "Superior Sigil of Malice");
            this.wep2.setTwoHand("Longbow", "Viper's", "Superior Sigil of Geomancy", "Superior Sigil of Malice");
            this.specialization.setSpec("spec1", "Arms", ["Wounding Precision", "Blademaster", "Furious"]);
            this.specialization.setSpec("spec2", "Tactics", ["Empowered", "Empower Allies", "Powerful Synergy"]);
            this.specialization.setSpec("spec3", "Berserker", ["Last Blaze", "Heat the Soul", "King of Fires"]);
            this.skills.setHealSkill("Blood Reckoning");
            this.skills.setUtilitySkills(["Shattering Blow", "Banner of Discipline", "Banner of Strength"]);
            this.skills.setEliteSkill("Head Butt");
        }
    }
    var build = null;
    // Condi
    {
        build = new BerserkerBuild("bers");

        build = new BerserkerBuild("bersCC");
        build.skills.setUtilitySkills(["Wild Blow", "Banner of Discipline", "Banner of Strength"]);
    }
});
