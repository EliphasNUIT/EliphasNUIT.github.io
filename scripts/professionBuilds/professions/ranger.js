define(["professionBuilds/dataBuilds", "professionBuilds/professionUtilities/professions"], function(
    buildData,
    professions
) {
    "use strict";
    var Build = buildData.build;
    var Profession = professions.Ranger;
    var build = null;

    // Condi
    {
        build = new Build("druidCondiVg", Profession);
        build.armor.setSingleStat("Viper's");
        build.armor.set42Rune("Superior Rune of the Nightmare","Superior Rune of the Trapper");
        build.consumable.setConsumable("Prickly Pear Pie", "Toxic Focusing Crystal");
        build.trinket.setSingleStat("Viper's");
        build.wep1.setTwoHand("Longbow", "Viper's", "Superior Sigil of Malice", "Superior Sigil of Geomancy");
        build.wep2.setMainHand("Axe", "Viper's", "Superior Sigil of Malice");
        build.wep2.setOffHand("Torch", "Viper's", "Superior Sigil of Geomancy");
        build.specialization.setSpec("spec1", "Skirmishing", ["Sharpened Edges", "Spotter", "Quick Draw"]);
        build.specialization.setSpec("spec2", "Wilderness Survival", ["Taste for Danger", "Ambidexterity", "Poison Master"]);
        build.specialization.setSpec("spec3", "Druid", ["Cultivated Synergy", "Verdant Etching", "Grace of the Land"]);
        build.skills.pets =  ["Juvenile Lynx", "Juvenile Electric Wyvern"];
        build.skills.setHealSkill("Glyph of Rejuvenation");
        build.skills.setUtilitySkills(["Glyph of the Tides", "Sun Spirit", "Frost Spirit"]);
        build.skills.setEliteSkill("Glyph of Unity");

        build = new Build("druidCondi", Profession);
        build.armor.setSingleStat("Viper's");
        build.armor.set42Rune("Superior Rune of the Nightmare","Superior Rune of the Trapper");
        build.consumable.setConsumable("Prickly Pear Pie", "Toxic Focusing Crystal");
        build.trinket.setSingleStat("Viper's");
        build.wep1.setTwoHand("Longbow", "Viper's", "Superior Sigil of Malice", "Superior Sigil of Geomancy");
        build.wep2.setMainHand("Axe", "Viper's", "Superior Sigil of Malice");
        build.wep2.setOffHand("Torch", "Viper's", "Superior Sigil of Geomancy");
        build.specialization.setSpec("spec1", "Skirmishing", ["Sharpened Edges", "Spotter", "Quick Draw"]);
        build.specialization.setSpec("spec2", "Wilderness Survival", ["Taste for Danger", "Ambidexterity", "Poison Master"]);
        build.specialization.setSpec("spec3", "Druid", ["Cultivated Synergy", "Verdant Etching", "Grace of the Land"]);
        build.skills.pets =  ["Juvenile Lynx", "Juvenile Electric Wyvern"];
        build.skills.setHealSkill("Glyph of Rejuvenation");
        build.skills.setUtilitySkills(["Glyph of Empowerment", "Sun Spirit", "Frost Spirit"]);
        build.skills.setEliteSkill("Glyph of Unity");

        build = new Build("soulbeastCondi", Profession);
        build.armor.setSingleStat("Viper's");
        build.armor.set42Rune("Superior Rune of the Nightmare","Superior Rune of the Trapper");
        build.consumable.setConsumable("Rare Veggie Pizza", "Toxic Focusing Crystal");
        build.trinket.setSingleStat("Viper's");
        build.wep1.setTwoHand("Longbow", "Viper's", "Superior Sigil of Malice", "Superior Sigil of Geomancy");
        build.wep2.setMainHand("Dagger", "Viper's", "Superior Sigil of Malice");
        build.wep2.setOffHand("Torch", "Viper's", "Superior Sigil of Geomancy");
        build.specialization.setSpec("spec1", "Skirmishing", ["Sharpened Edges", "Hidden Barbs", "Quick Draw"]);
        build.specialization.setSpec("spec2", "Wilderness Survival", ["Taste for Danger", "Ambidexterity", "Poison Master"]);
        build.specialization.setSpec("spec3", "Soulbeast", ["Live Fast", "Predator's Cunning", "Oppressive Superiority"]);
        build.skills.pets =  ["Juvenile Lynx", "Juvenile Warthog", "Juvenile Fanged Iboga"];
        build.skills.setHealSkill('"We Heal As One!"');
        build.skills.setUtilitySkills(["Viper's Nest", "Flame Trap", "Sharpening Stone"]);
        build.skills.setEliteSkill("One Wolf Pack");
        
    }

    // Heal
    {
        build = new Build("druidVg", Profession);
        build.armor.setSingleStat("Harrier's");
        build.armor.setSingleRune("Superior Rune of the Monk");
        build.consumable.setConsumable("Delicious Rice Ball", "Bountiful Maintenance Oil");
        build.trinket.setStats(["Magi's","Minstrel's","Magi's","Minstrel's","Minstrel's","Minstrel's"]);
        build.wep1.setTwoHand("Staff", "Magi's", "Superior Sigil of Transference", "Superior Sigil of Water");
        build.wep2.setMainHand("Axe", "Magi's", "Superior Sigil of Transference");
        build.wep2.setOffHand("Warhorn", "Magi's", "Superior Sigil of Water");
        build.specialization.setSpec("spec1", "Skirmishing", ["Sharpened Edges", "Spotter", "Quick Draw"]);
        build.specialization.setSpec("spec2", "Nature Magic", ["Allies' Aid", "Windborne Notes", "Nature's Vengeance"]);
        build.specialization.setSpec("spec3", "Druid", ["Primal Echoes", "Verdant Etching", "Grace of the Land"]);
        build.skills.pets =  ["Juvenile Rock Gazelle", "Juvenile Electric Wyvern"];
        build.skills.setHealSkill("Glyph of Rejuvenation");
        build.skills.setUtilitySkills(["Glyph of the Tides", "Sun Spirit", "Frost Spirit"]);
        build.skills.setEliteSkill("Entangle");

        build = new Build("druidSab", Profession);
        build.armor.setSingleStat("Harrier's");
        build.armor.setSingleRune("Superior Rune of the Monk");
        build.consumable.setConsumable("Delicious Rice Ball", "Bountiful Maintenance Oil");
        build.trinket.setStats(["Magi's","Minstrel's","Magi's","Minstrel's","Minstrel's","Minstrel's"]);
        build.wep1.setTwoHand("Staff", "Magi's", "Superior Sigil of Transference", "Superior Sigil of Water");
        build.wep2.setMainHand("Axe", "Magi's", "Superior Sigil of Transference");
        build.wep2.setOffHand("Warhorn", "Magi's", "Superior Sigil of Water");
        build.specialization.setSpec("spec1", "Skirmishing", ["Sharpened Edges", "Spotter", "Quick Draw"]);
        build.specialization.setSpec("spec2", "Nature Magic", ["Allies' Aid", "Windborne Notes", "Nature's Vengeance"]);
        build.specialization.setSpec("spec3", "Druid", ["Primal Echoes", "Verdant Etching", "Grace of the Land"]);
        build.skills.pets =  ["Juvenile Rock Gazelle", "Juvenile Electric Wyvern"];
        build.skills.setHealSkill("Glyph of Rejuvenation");
        build.skills.setUtilitySkills(["Glyph of Empowerment", "Sun Spirit", "Frost Spirit"]);
        build.skills.setEliteSkill("Glyph of Unity");

        build = new Build("druidSloth", Profession);
        build.armor.setSingleStat("Harrier's");
        build.armor.setSingleRune("Superior Rune of the Monk");
        build.consumable.setConsumable("Delicious Rice Ball", "Bountiful Maintenance Oil");
        build.trinket.setStats(["Magi's","Minstrel's","Magi's","Minstrel's","Minstrel's","Minstrel's"]);
        build.wep1.setTwoHand("Staff", "Magi's", "Superior Sigil of Transference", "Superior Sigil of Water");
        build.wep2.setMainHand("Axe", "Magi's", "Superior Sigil of Transference");
        build.wep2.setOffHand("Warhorn", "Magi's", "Superior Sigil of Water");
        build.specialization.setSpec("spec1", "Skirmishing", ["Sharpened Edges", "Spotter", "Quick Draw"]);
        build.specialization.setSpec("spec2", "Nature Magic", ["Allies' Aid", "Windborne Notes", "Nature's Vengeance"]);
        build.specialization.setSpec("spec3", "Druid", ["Primal Echoes", "Verdant Etching", "Grace of the Land"]);
        build.skills.pets =  ["Juvenile Rock Gazelle", "Juvenile Electric Wyvern"];
        build.skills.setHealSkill("Glyph of Rejuvenation");
        build.skills.setUtilitySkills(['"Protect Me!"', "Sun Spirit", "Frost Spirit"]);
        build.skills.setEliteSkill("Glyph of Unity");

        build = new Build("druidMatt", Profession);
        build.armor.setSingleStat("Harrier's");
        build.armor.setSingleRune("Superior Rune of the Monk");
        build.consumable.setConsumable("Delicious Rice Ball", "Bountiful Maintenance Oil");
        build.trinket.setStats(["Magi's","Minstrel's","Magi's","Minstrel's","Minstrel's","Minstrel's"]);
        build.wep1.setTwoHand("Staff", "Magi's", "Superior Sigil of Transference", "Superior Sigil of Water");
        build.wep2.setMainHand("Axe", "Magi's", "Superior Sigil of Transference");
        build.wep2.setOffHand("Warhorn", "Magi's", "Superior Sigil of Water");
        build.specialization.setSpec("spec1", "Skirmishing", ["Trapper's Expertise", "Spotter", "Quick Draw"]);
        build.specialization.setSpec("spec2", "Nature Magic", ["Allies' Aid", "Windborne Notes", "Nature's Vengeance"]);
        build.specialization.setSpec("spec3", "Druid", ["Primal Echoes", "Verdant Etching", "Grace of the Land"]);
        build.skills.pets =  ["Juvenile Rock Gazelle", "Juvenile Electric Wyvern"];
        build.skills.setHealSkill("Healing Spring");
        build.skills.setUtilitySkills(["Glyph of the Tides", "Sun Spirit", "Stone Spirit"]);
        build.skills.setEliteSkill("Spirit of Nature");

        build = new Build("druidXera", Profession);
        build.armor.setSingleStat("Harrier's");
        build.armor.setSingleRune("Superior Rune of the Monk");
        build.consumable.setConsumable("Delicious Rice Ball", "Bountiful Maintenance Oil");
        build.trinket.setStats(["Magi's","Minstrel's","Magi's","Minstrel's","Minstrel's","Minstrel's"]);
        build.wep1.setTwoHand("Staff", "Magi's", "Superior Sigil of Transference", "Superior Sigil of Water");
        build.wep2.setMainHand("Axe", "Magi's", "Superior Sigil of Transference");
        build.wep2.setOffHand("Warhorn", "Magi's", "Superior Sigil of Water");
        build.specialization.setSpec("spec1", "Skirmishing", ["Trapper's Expertise", "Spotter", "Quick Draw"]);
        build.specialization.setSpec("spec2", "Nature Magic", ["Allies' Aid", "Windborne Notes", "Nature's Vengeance"]);
        build.specialization.setSpec("spec3", "Druid", ["Primal Echoes", "Verdant Etching", "Grace of the Land"]);
        build.skills.pets =  ["Juvenile Rock Gazelle", "Juvenile Electric Wyvern"];
        build.skills.setHealSkill("Healing Spring");
        build.skills.setUtilitySkills(["Glyph of Empowerment", "Frost Spirit", "Stone Spirit"]);
        build.skills.setEliteSkill("Glyph of Unity");

        build = new Build("druidSpirit", Profession);
        build.armor.setSingleStat("Harrier's");
        build.armor.setSingleRune("Superior Rune of the Monk");
        build.consumable.setConsumable("Delicious Rice Ball", "Bountiful Maintenance Oil");
        build.trinket.setStats(["Magi's","Minstrel's","Magi's","Minstrel's","Minstrel's","Minstrel's"]);
        build.wep1.setTwoHand("Staff", "Magi's", "Superior Sigil of Transference", "Superior Sigil of Water");
        build.wep2.setMainHand("Axe", "Magi's", "Superior Sigil of Transference");
        build.wep2.setOffHand("Warhorn", "Magi's", "Superior Sigil of Water");
        build.specialization.setSpec("spec1", "Skirmishing", ["Sharpened Edges", "Spotter", "Quick Draw"]);
        build.specialization.setSpec("spec2", "Nature Magic", ["Allies' Aid", "Windborne Notes", "Nature's Vengeance"]);
        build.specialization.setSpec("spec3", "Druid", ["Primal Echoes", "Celestial Shadow", "Grace of the Land"]);
        build.skills.pets =  ["Juvenile Fern Hound", "Juvenile Electric Wyvern"];
        build.skills.setHealSkill("Water Spirit");
        build.skills.setUtilitySkills(["Stone Spirit", "Frost Spirit", "Sun Spirit"]);
        build.skills.setEliteSkill("Spirit of Nature");

        build = new Build("druidKite", Profession);
        build.armor.setSingleStat("Harrier's");
        build.armor.setSingleRune("Superior Rune of the Monk");
        build.consumable.setConsumable("Delicious Rice Ball", "Bountiful Maintenance Oil");
        build.trinket.setStats(["Magi's","Minstrel's","Magi's","Minstrel's","Minstrel's","Minstrel's"]);
        build.wep1.setTwoHand("Staff", "Magi's", "Superior Sigil of Transference", "Superior Sigil of Water");
        build.wep2.setTwoHand("Greatsword", "Magi's", "Superior Sigil of Transference", "Superior Sigil of Agility");
        build.specialization.setSpec("spec1", "Skirmishing", ["Sharpened Edges", "Spotter", "Quick Draw"]);
        build.specialization.setSpec("spec2", "Nature Magic", ["Allies' Aid", "Windborne Notes", "Nature's Vengeance"]);
        build.specialization.setSpec("spec3", "Druid", ["Primal Echoes", "Celestial Shadow", "Grace of the Land"]);
        build.skills.pets =  ["Juvenile Fern Hound", "Juvenile Electric Wyvern"];
        build.skills.setHealSkill("Water Spirit");
        build.skills.setUtilitySkills(["Stone Spirit", "Frost Spirit", "Sun Spirit"]);
        build.skills.setEliteSkill("Spirit of Nature");

        build = new Build("druidSam", Profession);
        build.armor.setSingleStat("Harrier's");
        build.armor.setSingleRune("Superior Rune of the Monk");
        build.consumable.setConsumable("Delicious Rice Ball", "Bountiful Maintenance Oil");
        build.trinket.setStats(["Magi's","Minstrel's","Magi's","Minstrel's","Minstrel's","Minstrel's"]);
        build.wep1.setTwoHand("Staff", "Magi's", "Superior Sigil of Transference", "Superior Sigil of Water");
        build.wep2.setMainHand("Axe", "Magi's", "Superior Sigil of Transference");
        build.wep2.setOffHand("Warhorn", "Magi's", "Superior Sigil of Water");
        build.specialization.setSpec("spec1", "Skirmishing", ["Sharpened Edges", "Spotter", "Quick Draw"]);
        build.specialization.setSpec("spec2", "Nature Magic", ["Allies' Aid", "Windborne Notes", "Nature's Vengeance"]);
        build.specialization.setSpec("spec3", "Druid", ["Primal Echoes", "Verdant Etching", "Grace of the Land"]);
        build.skills.pets =  ["Juvenile Jacaranda", "Juvenile Electric Wyvern"];
        build.skills.setHealSkill("Glyph of Rejuvenation");
        build.skills.setUtilitySkills(["Glyph of the Tides", "Frost Spirit", "Stone Spirit"]);
        build.skills.setEliteSkill("Glyph of Unity");
        
    }
});
