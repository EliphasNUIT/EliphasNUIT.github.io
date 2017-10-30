define(["professionBuilds/dataBuilds", "professionBuilds/professionUtilities/professions"], function(
    buildData,
    professions
) {
    "use strict";
    var Build = buildData.build;
    var Profession = professions.Engineer;
    var build = null;
    // Condi
    {
        build = new Build("engiCondi", Profession);
        build.armor.setSingleStat("Viper's");
        build.armor.setSingleRune("Superior Rune of the Berserker");
        build.consumable.setConsumable("Rare Veggie Pizza", "Furious Tuning Crystal");
        build.trinket.setSingleStat("Viper's");
        build.wep1.setMainHand("Pistol", "Viper's", "Superior Sigil of Geomancy");
        build.wep1.setOffHand("Pistol", "Viper's", "Superior Sigil of Malice");
        build.wep2 = null;
        build.specialization.setSpec("spec1", "Explosives", ["Glass Cannon", "Aim-Assisted Rocket", "Shrapnel"]);
        build.specialization.setSpec("spec2", "Firearms", [
            "Chemical Rounds",
            "Pinpoint Distribution",
            "Incendiary Powder"
        ]);
        build.specialization.setSpec("spec3", "Tools", ["Static Discharge", "Streamlined Kits", "Kinetic Battery"]);
        build.skills.setHealSkill("Healing Turret");
        build.skills.setUtilitySkills(["Bomb Kit", "Grenade Kit", "Flamethrower"]);
        build.skills.setEliteSkill("Elite Mortar Kit");
    }

    // Power
    {
        build = new Build("holoPower", Profession);
        build.armor.setSingleStat("Berserker's");
        build.armor.setSingleRune("Superior Rune of the Scholar");
        build.consumable.setConsumable("Bowl of Sweet and Spicy Butternut Squash Soup", "Superior Sharpening Stone");
        build.trinket.setSingleStat("Berserker's");
        build.wep1.setTwoHand("Rifle", "Berserker's", "Superior Sigil of Force", "Superior Sigil of Air");
        build.wep2 = null;
        build.specialization.setSpec("spec1", "Explosives", ["Glass Cannon", "Big Boomer", "Shrapnel"]);
        build.specialization.setSpec("spec2", "Firearms", [
            "High Caliber",
            "Pinpoint Distribution",
            "Modified Ammunition"
        ]);
        build.specialization.setSpec("spec3", "Holosmith", [
            "Solar Focusing Lens",
            "Crystal Configuration: Eclipse",
            "Photonic Blasting Module"
        ]);
        build.skills.setHealSkill("Healing Turret");
        build.skills.setUtilitySkills(["Bomb Kit", "Grenade Kit", "Laser Disk"]);
        build.skills.setEliteSkill("Prime Light Beam");
    }
});
