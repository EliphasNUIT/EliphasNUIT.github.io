define(["professionBuilds/dataBuilds", "professionBuilds/professionUtilities/professions"], function(
    buildData,
    professions
) {
    "use strict";
    var Build = buildData.build;
    var Profession = professions.Warrior;
    var build = null;
    // Condi
    {
        build = new Build("bersCPS2Banners", Profession);
        build.armor.setSingleStat("Viper's");
        build.armor.setSingleRune("Superior Rune of the Aristocracy");
        build.consumable.setConsumable("Fried Golden Dumpling", "Toxic Focusing Crystal");
        build.trinket.setSingleStat("Viper's");
        build.wep1.setMainHand("Sword", "Viper's", "Superior Sigil of Geomancy");
        build.wep1.setOffHand("Torch", "Viper's", "Superior Sigil of Malice");
        build.wep2.setTwoHand("Longbow", "Viper's", "Superior Sigil of Geomancy", "Superior Sigil of Malice");
        build.specialization.setSpec("spec1", "Arms", ["Wounding Precision", "Blademaster", "Furious"]);
        build.specialization.setSpec("spec2", "Tactics", ["Empowered", "Empower Allies", "Phalanx Strength"]);
        build.specialization.setSpec("spec3", "Berserker", ["Last Blaze", "Heat the Soul", "King of Fires"]);
        build.skills.setHealSkill("Blood Reckoning");
        build.skills.setUtilitySkills(['"For Great Justice!"', "Banner of Discipline","Banner of Strength"]);
        build.skills.setEliteSkill("Head Butt");

        build = new Build("bersCPS", Profession);
        build.armor.setSingleStat("Viper's");
        build.armor.setSingleRune("Superior Rune of the Aristocracy");
        build.consumable.setConsumable("Fried Golden Dumpling", "Toxic Focusing Crystal");
        build.trinket.setSingleStat("Viper's");
        build.wep1.setMainHand("Sword", "Viper's", "Superior Sigil of Geomancy");
        build.wep1.setOffHand("Torch", "Viper's", "Superior Sigil of Malice");
        build.wep2.setTwoHand("Longbow", "Viper's", "Superior Sigil of Geomancy", "Superior Sigil of Malice");
        build.specialization.setSpec("spec1", "Arms", ["Wounding Precision", "Blademaster", "Furious"]);
        build.specialization.setSpec("spec2", "Tactics", ["Empowered", "Empower Allies", "Phalanx Strength"]);
        build.specialization.setSpec("spec3", "Berserker", ["Last Blaze", "Heat the Soul", "King of Fires"]);
        build.skills.setHealSkill("Blood Reckoning");
        build.skills.setUtilitySkills(['"For Great Justice!"', "Shattering Blow",""]);
        build.skills.setEliteSkill("Head Butt");

        build = new Build("bersCPSCC", Profession);
        build.armor.setSingleStat("Viper's");
        build.armor.setSingleRune("Superior Rune of the Aristocracy");
        build.consumable.setConsumable("Fried Golden Dumpling", "Toxic Focusing Crystal");
        build.trinket.setSingleStat("Viper's");
        build.wep1.setMainHand("Sword", "Viper's", "Superior Sigil of Geomancy");
        build.wep1.setOffHand("Torch", "Viper's", "Superior Sigil of Malice");
        build.wep2.setTwoHand("Longbow", "Viper's", "Superior Sigil of Geomancy", "Superior Sigil of Malice");
        build.specialization.setSpec("spec1", "Arms", ["Wounding Precision", "Blademaster", "Furious"]);
        build.specialization.setSpec("spec2", "Tactics", ["Empowered", "Empower Allies", "Phalanx Strength"]);
        build.specialization.setSpec("spec3", "Berserker", ["Last Blaze", "Heat the Soul", "King of Fires"]);
        build.skills.setHealSkill("Blood Reckoning");
        build.skills.setUtilitySkills(['"For Great Justice!"', "Wild Blow",""]);
        build.skills.setEliteSkill("Head Butt");
    }
});
