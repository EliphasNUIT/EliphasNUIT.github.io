define(["professionBuilds/dataBuilds", "professionBuilds/professionUtilities/professions"], function(
    buildData,
    professions
) {
    "use strict";
    var Build = buildData.build;
    var build = null;

    class NecroBuild extends Build {
        constructor(name) {
            super(name, professions.Necromancer);
        }
    }

    class CondiScourgeBuild extends NecroBuild {
        constructor(name) {
            super(name);
            this.armor.setSingleStat("Viper's");
            this.armor.setSingleRune("Superior Rune of the Renegade");
            this.consumable.setConsumable("Rare Veggie Pizza", "Furious Tuning Crystal");
            this.trinket.setSingleStat("Viper's");
            this.wep1.setMainHand("Scepter", "Viper's", "Superior Sigil of Geomancy");
            this.wep2.setOffHand("Torch", "Viper's", "Superior Sigil of Malice");
            this.specialization.setSpec("spec1", "Curses", [
                "Terrifying Descent",
                "Master of Corruption",
                "Lingering Curse"
            ]);
            this.specialization.setSpec("spec2", "Soul Reaping", ["Unyielding Blast", "Vital Persistence", "Dhuumfire"]);
            this.specialization.setSpec("spec3", "Scourge", ["Fell Beacon", "Sadistic Searing", "Demonic Lore"]);
            this.skills.setHealSkill("Sand Flare");
            this.skills.setEliteSkill("Plaguelands");
        }
    }

    // Scourge - Condi
    {
        build = new CondiScourgeBuild("scourgeCondiMO"); 
        build.skills.setUtilitySkills(["Summon Shadow Fiend", "Trail of Anguish", "Epidemic"]);

        build = new CondiScourgeBuild("scourgeCondiGorse");
        build.skills.setUtilitySkills(["Summon Shadow Fiend", "Trail of Anguish", "Blood Is Power"]);
        
        build = new CondiScourgeBuild("scourgeCondiSab");
        build.skills.setUtilitySkills(["Blood Is Power", "Trail of Anguish", "Epidemic"]);
    }
});
