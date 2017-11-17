define(["professionBuilds/dataBuilds", "professionBuilds/professionUtilities/professions"], function(
    buildData,
    professions
) {
    "use strict";
    var Build = buildData.build;
    var build = null;

    class RangerBuild extends Build {
        constructor(name) {
            super(name, professions.Ranger);
        }
    }

    class CondiRangerBuild extends RangerBuild {
        constructor(name) {
            super(name);
            this.armor.setSingleStat("Viper's");
            this.armor.set42Rune("Superior Rune of the Nightmare","Superior Rune of the Trapper");
            this.wep1.setTwoHand("Longbow", "Viper's", "Superior Sigil of Agony", "Superior Sigil of Geomancy");
            this.wep2.setOffHand("Torch", "Viper's", "Superior Sigil of Geomancy");
            this.trinket.setSingleStat("Viper's");
            this.specialization.setSpec("spec2", "Wilderness Survival", ["Taste for Danger", "Ambidexterity", "Poison Master"]);
        }
    }

    class CondiDruidBuild extends CondiRangerBuild {
        constructor(name) {
            super(name);
            this.wep2.setMainHand("Axe", "Viper's", "Superior Sigil of Agony");
            this.consumable.setConsumable("Prickly Pear Pie", "Toxic Focusing Crystal");
            this.skills.pets =  ["Juvenile Lynx", "Juvenile Electric Wyvern"];
            this.specialization.setSpec("spec1", "Skirmishing", ["Sharpened Edges", "Spotter", "Quick Draw"]);
            this.specialization.setSpec("spec3", "Druid", ["Cultivated Synergy", "Verdant Etching", "Grace of the Land"]);
            this.skills.setHealSkill("Glyph of Rejuvenation");
            this.skills.setEliteSkill("Glyph of Unity");
        }
    }

    class CondiSoulbeastBuild extends CondiRangerBuild {
        constructor(name) {
            super(name);
            this.consumable.setConsumable("Rare Veggie Pizza", "Toxic Focusing Crystal");
            this.wep2.setMainHand("Dagger", "Viper's", "Superior Sigil of Agony");

            this.specialization.setSpec("spec1", "Skirmishing", ["Sharpened Edges", "Hidden Barbs", "Quick Draw"]);
            this.specialization.setSpec("spec2", "Wilderness Survival", ["Taste for Danger", "Ambidexterity", "Poison Master"]);
            this.specialization.setSpec("spec3", "Soulbeast", ["Live Fast", "Predator's Cunning", "Leader of the Pack"]);

            this.skills.pets =  ["Juvenile Lynx", "Juvenile Warthog", "Juvenile Fanged Iboga"];
            this.skills.setHealSkill("Bear Stance");

            this.skills.setUtilitySkills(["Viper's Nest", "Vulture Stance", "Sharpening Stone"]);
            this.skills.setEliteSkill("One Wolf Pack");
        }
    }


    class BoonDruidBuild extends RangerBuild {
        constructor(name) {
            super(name);
            this.armor.setSingleStat("Harrier's");
            this.armor.setSingleRune("Superior Rune of the Monk");
            this.consumable.setConsumable("Delicious Rice Ball", "Bountiful Maintenance Oil");
            this.trinket.setSingleStat("Harrier's");
            this.wep1.setTwoHand("Staff", "Harrier's", "Superior Sigil of Transference", "Superior Sigil of Water");
            this.wep2.setMainHand("Axe", "Harrier's", "Superior Sigil of Transference");
            this.wep2.setOffHand("Warhorn", "Harrier's", "Superior Sigil of Water");
            this.specialization.setSpec("spec1", "Skirmishing", ["Sharpened Edges", "Spotter", "Quick Draw"]);
            this.specialization.setSpec("spec2", "Nature Magic", ["Instinctive Reaction", "Windborne Notes", "Nature's Vengeance"]);
            this.specialization.setSpec("spec3", "Druid", ["Primal Echoes", "Verdant Etching", "Grace of the Land"]);
            this.skills.pets =  ["Juvenile Rock Gazelle", "Juvenile Electric Wyvern"];
            this.skills.setHealSkill("Glyph of Rejuvenation");
            this.skills.setUtilitySkills(["Glyph of Empowerment", "", ""]);
            this.skills.setEliteSkill("Glyph of Unity");
        }
    }

    class TrapperBoonDruidBuild extends BoonDruidBuild {
        constructor(name) {
            super(name);
            this.specialization.setSpec("spec1", "Skirmishing", ["Trapper's Expertise", "Spotter", "Quick Draw"]);
            this.skills.setHealSkill("Healing Spring");
        }
    }

    // Condi
    {
        build = new CondiDruidBuild("druidCondiVg");      
        build.skills.setUtilitySkills(["Glyph of the Tides", "Sun Spirit", "Frost Spirit"]);

        build = new CondiDruidBuild("druidCondi");
        build.skills.setUtilitySkills(["Glyph of Empowerment", "Sun Spirit", "Frost Spirit"]);

        build = new CondiSoulbeastBuild("soulbeastCondi");
        
    }

    // Heal
    {
        build = new BoonDruidBuild("druidVg");  
        build.skills.setUtilitySkills(["Glyph of the Tides", "", ""]);
        build.skills.setEliteSkill("Entangle");

        build = new BoonDruidBuild("druidSab");

        build = new BoonDruidBuild("druidSloth");
        build.skills.setUtilitySkills(["\"Protect Me!\"", "", ""]);

        build = new TrapperBoonDruidBuild("druidMatt");
        build.skills.setUtilitySkills(["Glyph of the Tides", "", ""]);
        build.skills.setEliteSkill("Spirit of Nature");

        build = new TrapperBoonDruidBuild("druidXera");

        build = new BoonDruidBuild("druidSpirit");
        build.skills.setEliteSkill("Spirit of Nature");

        build = new BoonDruidBuild("druidKite");
        build.wep2.setTwoHand("Greatsword", "Magi's", "Superior Sigil of Transference", "Superior Sigil of Agility");
        build.skills.setEliteSkill("Spirit of Nature");

        build = new BoonDruidBuild("druidSam");
        build.skills.pets =  ["Juvenile Jacaranda", "Juvenile Electric Wyvern"];
        build.skills.setUtilitySkills(["Glyph of the Tides", "", ""]);
        
    }
});
