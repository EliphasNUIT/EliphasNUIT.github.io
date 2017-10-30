define(["professionBuilds/dataBuilds", "professionBuilds/professionUtilities/professions"], function(
    buildData,
    professions
) {
    "use strict";
    var Build = buildData.build;
    var Profession = professions.Necromancer;
    var build = null;
    // Reaper - Condi
    {
        build = new Build("reaperCondiMO", Profession);
        build.armor.setSingleStat("Grieving");
        build.armor.setSingleRune("Superior Rune of the Krait");
        build.consumable.setConsumable("Rare Veggie Pizza", "Toxic Focusing Crystal");
        build.trinket.setSingleStat("Viper's");
        build.wep1.setMainHand("Scepter", "Viper's", "Superior Sigil of Geomancy");
        build.wep1.setOffHand("Dagger", "Viper's", "Superior Sigil of Earth");
        build.wep2.setTwoHand("Greatsword", "Viper's", "Superior Sigil of Geomancy", "Superior Sigil of Earth");
        build.specialization.setSpec("spec1", "Curses", [
            "Chilling Darkness",
            "Master of Corruption",
            "Lingering Curse"
        ]);
        build.specialization.setSpec("spec2", "Soul Reaping", ["Unyielding Blast", "Vital Persistence", "Dhuumfire"]);
        build.specialization.setSpec("spec3", "Reaper", ["Chilling Nova", "Decimate Defenses", "Deathly Chill"]);
        build.skills.setHealSkill("Summon Blood Fiend");
        build.skills.setUtilitySkills(["Summon Shadow Fiend", "Blood Is Power", "Epidemic"]);
        build.skills.setEliteSkill("Plaguelands");
    }

    // Scourge - Condi
    {
        build = new Build("scourgeCondiMO", Profession);

        build.armor.setSingleStat("Viper's");
        build.armor.setSingleRune("Superior Rune of the Renegade");
        build.consumable.setConsumable("Rare Veggie Pizza", "Furious Tuning Crystal");
        build.trinket.setSingleStat("Viper's");
        build.wep1.setMainHand("Scepter", "Viper's", "Superior Sigil of Geomancy");
        build.wep2.setOffHand("Torch", "Viper's", "Superior Sigil of Malice");
        build.specialization.setSpec("spec1", "Curses", [
            "Terrifying Descent",
            "Master of Corruption",
            "Lingering Curse"
        ]);
        build.specialization.setSpec("spec2", "Soul Reaping", ["Unyielding Blast", "Vital Persistence", "Dhuumfire"]);
        build.specialization.setSpec("spec3", "Scourge", ["Fell Beacon", "Sadistic Searing", "Demonic Lore"]);
        build.skills.setHealSkill("Sand Flare");
        build.skills.setUtilitySkills(["Summon Shadow Fiend", "Trail of Anguish", "Epidemic"]);
        build.skills.setEliteSkill("Plaguelands");

        build = new Build("scourgeCondiGorse", Profession);
        build.armor.setSingleStat("Viper's");
        build.armor.setSingleRune("Superior Rune of the Renegade");
        build.consumable.setConsumable("Rare Veggie Pizza", "Furious Tuning Crystal");
        build.trinket.setSingleStat("Viper's");
        build.wep1.setMainHand("Scepter", "Viper's", "Superior Sigil of Geomancy");
        build.wep2.setOffHand("Torch", "Viper's", "Superior Sigil of Malice");
        build.specialization.setSpec("spec1", "Curses", [
            "Terrifying Descent",
            "Master of Corruption",
            "Lingering Curse"
        ]);
        build.specialization.setSpec("spec2", "Soul Reaping", ["Unyielding Blast", "Vital Persistence", "Dhuumfire"]);
        build.specialization.setSpec("spec3", "Scourge", ["Fell Beacon", "Sadistic Searing", "Demonic Lore"]);
        build.skills.setHealSkill("Sand Flare");
        build.skills.setUtilitySkills(["Summon Shadow Fiend", "Trail of Anguish", "Blood Is Power"]);
        build.skills.setEliteSkill("Plaguelands");

        build = new Build("scourgeCondiSab", Profession);
        build.armor.setSingleStat("Viper's");
        build.armor.setSingleRune("Superior Rune of the Renegade");
        build.consumable.setConsumable("Rare Veggie Pizza", "Furious Tuning Crystal");
        build.trinket.setSingleStat("Viper's");
        build.wep1.setMainHand("Scepter", "Viper's", "Superior Sigil of Geomancy");
        build.wep2.setOffHand("Torch", "Viper's", "Superior Sigil of Malice");
        build.specialization.setSpec("spec1", "Curses", [
            "Terrifying Descent",
            "Master of Corruption",
            "Lingering Curse"
        ]);
        build.specialization.setSpec("spec2", "Soul Reaping", ["Unyielding Blast", "Vital Persistence", "Dhuumfire"]);
        build.specialization.setSpec("spec3", "Scourge", ["Fell Beacon", "Sadistic Searing", "Demonic Lore"]);
        build.skills.setHealSkill("Sand Flare");
        build.skills.setUtilitySkills(["Blood Is Power", "Trail of Anguish", "Epidemic"]);
        build.skills.setEliteSkill("Plaguelands");
    }
});
