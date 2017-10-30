define(["professionBuilds/dataBuilds", "professionBuilds/professionUtilities/professions"], function(
    buildData,
    professions
) {
    "use strict";
    var Build = buildData.build;
    var Profession = professions.Thief;
    var build = null;

    // Power
    {
        build = new Build("drdPower", Profession);
        build.armor.setSingleStat("Berserker's");
        build.armor.setSingleRune("Superior Rune of the Scholar");
        build.consumable.setConsumable("Bowl of Sweet and Spicy Butternut Squash Soup", "Superior Sharpening Stone");
        build.trinket.setSingleStat("Berserker's");
        build.wep1.setTwoHand("Staff", "Berserker's", "Superior Sigil of Force", "Superior Sigil of Air");
        build.specialization.setSpec("spec1", "Deadly Arts", ["Mug", "Revealed Training", "Executioner"]);
        build.specialization.setSpec("spec2", "Critical Strikes", ["Twin Fangs", "Practiced Tolerance", "No Quarter"]);
        build.specialization.setSpec("spec3", "Daredevil", ["Havoc Mastery", "Staff Master", "Bounding Dodger"]);
        build.skills.setHealSkill("Signet of Malice");
        build.skills.setUtilitySkills(["Assassin's Signet", "Spider Venom", "Fist Flurry"]);
        build.skills.setEliteSkill("Basilisk Venom");

        build = new Build("drdPowerSab", Profession);
        build.armor.setSingleStat("Berserker's");
        build.armor.setSingleRune("Superior Rune of the Scholar");
        build.consumable.setConsumable("Bowl of Sweet and Spicy Butternut Squash Soup", "Superior Sharpening Stone");
        build.trinket.setSingleStat("Berserker's");
        build.wep1.setTwoHand("Staff", "Berserker's", "Superior Sigil of Force", "Superior Sigil of Air");
        build.specialization.setSpec("spec1", "Deadly Arts", ["Mug", "Revealed Training", "Executioner"]);
        build.specialization.setSpec("spec2", "Critical Strikes", ["Twin Fangs", "Practiced Tolerance", "No Quarter"]);
        build.specialization.setSpec("spec3", "Daredevil", ["Havoc Mastery", "Staff Master", "Bounding Dodger"]);
        build.skills.setHealSkill("Signet of Malice");
        build.skills.setUtilitySkills(["Assassin's Signet", "Shadowstep", "Fist Flurry"]);
        build.skills.setEliteSkill("Basilisk Venom");
    }

    // Condi
    {
        build = new Build("drdCondi", Profession);
        build.armor.setSingleStat("Viper's");
        build.armor.setSingleRune("Superior Rune of the Krait");
        build.consumable.setConsumable("Rare Veggie Pizza", "Toxic Focusing Crystal");
        build.trinket.setSingleStat("Viper's");
        build.wep1.setMainHand("Dagger", "Viper's", "Superior Sigil of Geomancy");
        build.wep2.setOffHand("Dagger", "Viper's", "Superior Sigil of Malice");
        build.specialization.setSpec("spec1", "Deadly Arts", ["Dagger Training", "Panic Strike", "Potent Poison"]);
        build.specialization.setSpec("spec2", "Trickery", ["Uncatchable", "Trickster", "Sleight of Hand"]);
        build.specialization.setSpec("spec3", "Daredevil", [
            "Havoc Mastery",
            "Escapist's Absolution",
            "Lotus Training"
        ]);
        build.skills.setHealSkill("Signet of Malice");
        build.skills.setUtilitySkills(["Spider Venom", "Devourer Venom", "Caltrops"]);
        build.skills.setEliteSkill("Basilisk Venom");

        build = new Build("drdCondiSab", Profession);
        build.armor.setSingleStat("Viper's");
        build.armor.setSingleRune("Superior Rune of the Krait");
        build.consumable.setConsumable("Rare Veggie Pizza", "Toxic Focusing Crystal");
        build.trinket.setSingleStat("Viper's");
        build.wep1.setMainHand("Dagger", "Viper's", "Superior Sigil of Geomancy");
        build.wep2.setOffHand("Dagger", "Viper's", "Superior Sigil of Malice");
        build.specialization.setSpec("spec1", "Deadly Arts", ["Dagger Training", "Panic Strike", "Potent Poison"]);
        build.specialization.setSpec("spec2", "Trickery", ["Uncatchable", "Trickster", "Sleight of Hand"]);
        build.specialization.setSpec("spec3", "Daredevil", [
            "Havoc Mastery",
            "Escapist's Absolution",
            "Lotus Training"
        ]);
        build.skills.setHealSkill("Signet of Malice");
        build.skills.setUtilitySkills(["Spider Venom", "Shadowstep", "Caltrops"]);
        build.skills.setEliteSkill("Basilisk Venom");
    }
});
