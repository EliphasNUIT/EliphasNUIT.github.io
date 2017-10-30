define(["professionBuilds/dataBuilds", "professionBuilds/professionUtilities/professions"], function(
    buildData,
    professions
) {
    "use strict";
    var Build = buildData.build;
    var Profession = professions.Guardian;
    var build = null;
    // Power
    {
        build = new Build("dhPowerZealRad", Profession);
        build.armor.setSingleStat("Berserker's");
        build.armor.setSingleRune("Superior Rune of the Scholar");
        build.consumable.setConsumable("Bowl of Sweet and Spicy Butternut Squash Soup", "Superior Sharpening Stone");
        build.trinket.setSingleStat("Berserker's");
        build.wep1.setMainHand("Scepter", "Berserker's", "Superior Sigil of Force");
        build.wep1.setOffHand("Torch", "Berserker's", "Superior Sigil of Air");
        build.wep2.setTwoHand("Greatsword", "Berserker's", "Superior Sigil of Force", "Superior Sigil of Air");
        build.specialization.setSpec("spec1", "Zeal", ["Fiery Wrath", "Zealous Blade", "Symbolic Avenger"]);
        build.specialization.setSpec("spec2", "Radiance", [
            "Healer's Retribution",
            "Retribution",
            "Righteous Instincts"
        ]);
        build.specialization.setSpec("spec3", "Dragonhunter", [
            "Piercing Light",
            "Zealot's Aggression",
            "Big Game Hunter"
        ]);
        build.skills.setHealSkill("Litany of Wrath");
        build.skills.setUtilitySkills(["Procession of Blades", '"Stand Your Ground!"', "Bane Signet"]);
        build.skills.setEliteSkill("Dragon's Maw");

        build = new Build("dhPowerZealRadKC", Profession);
        build.armor.setSingleStat("Berserker's");
        build.armor.setSingleRune("Superior Rune of the Scholar");
        build.consumable.setConsumable("Bowl of Sweet and Spicy Butternut Squash Soup", "Superior Sharpening Stone");
        build.trinket.setSingleStat("Berserker's");
        build.wep1.setMainHand("Scepter", "Berserker's", "Superior Sigil of Force");
        build.wep1.setOffHand("Torch", "Berserker's", "Superior Sigil of Impact");
        build.wep2.setTwoHand("Greatsword", "Berserker's", "Superior Sigil of Force", "Superior Sigil of Impact");
        build.specialization.setSpec("spec1", "Zeal", ["Fiery Wrath", "Zealous Blade", "Symbolic Avenger"]);
        build.specialization.setSpec("spec2", "Radiance", [
            "Healer's Retribution",
            "Retribution",
            "Righteous Instincts"
        ]);
        build.specialization.setSpec("spec3", "Dragonhunter", [
            "Piercing Light",
            "Zealot's Aggression",
            "Big Game Hunter"
        ]);
        build.skills.setHealSkill("Litany of Wrath");
        build.skills.setUtilitySkills(["Procession of Blades", "Hallowed Ground", "Bane Signet"]);
        build.skills.setEliteSkill("Dragon's Maw");
    }

    // Condi
    {
        build = new Build("fbDPS", Profession);
        build.armor.setStats(["Sinister", "Sinister", "Grieving", "Grieving", "Grieving", "Grieving"]);
        build.armor.setSingleRune("Superior Rune of Balthazar");
        build.consumable.setConsumable("Bowl of Fire Meat Chili", "Toxic Focusing Crystal");
        build.trinket.setSingleStat("Grieving");
        build.wep1.setMainHand("Scepter", "Grieving", "Superior Sigil of Bursting");
        build.wep1.setOffHand("Torch", "Grieving", "Superior Sigil of Smoldering");
        build.wep2.setMainHand("Sword", "Grieving", "Superior Sigil of Bursting");
        build.specialization.setSpec("spec1", "Zeal", ["Fiery Wrath", "Kindled Zeal", "Symbolic Avenger"]);
        build.specialization.setSpec("spec2", "Radiance", ["Right-Hand Strength", "Radiant Fire", "Amplified Wrath"]);
        build.specialization.setSpec("spec3", "Firebrand", ["Archivist of Whispers", "Legendary Lore", "Quickfire"]);
        build.skills.setHealSkill("Mantra of Solace");
        build.skills.setUtilitySkills(["Mantra of Potence", "Mantra of Flame", "Signet of Wrath"]);
        build.skills.setEliteSkill("Renewed Focus");
    }
});
