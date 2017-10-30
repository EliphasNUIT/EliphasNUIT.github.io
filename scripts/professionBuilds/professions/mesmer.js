define(["professionBuilds/dataBuilds", "professionBuilds/professionUtilities/professions"], function(
    buildData,
    professions
) {
    "use strict";
    var Build = buildData.build;
    var Profession = professions.Mesmer;
    var build = null;
    // minstrel
    {
        build = new Build("chrTankMinstrel", Profession);
        build.armor.setSingleStat("Minstrel's");
        build.armor.setSingleRune("Superior Rune of the Firebrand");
        build.consumable.setConsumable("Bowl of Nopalitos Sauté", "Magnanimous Maintenance Oil");
        build.trinket.setSingleStat("Minstrel's");
        build.wep1.setMainHand("Sword", "Minstrel's", "Superior Sigil of Concentration");
        build.wep1.setOffHand("Shield", "Minstrel's", "Superior Sigil of Water");
        build.wep2.setOffHand("Focus", "Minstrel's", "Superior Sigil of Water");
        build.specialization.setSpec("spec1", "Domination", [
            "Empowered Illusions",
            "Blurred Inscriptions",
            "Mental Anguish"
        ]);
        build.specialization.setSpec("spec2", "Inspiration", [
            "Persisting Images",
            "Restorative Illusions",
            "Illusionary Inspiration"
        ]);
        build.specialization.setSpec("spec3", "Chronomancer", [
            "All's Well That Ends Well",
            "Improved Alacrity",
            "Chronophantasma"
        ]);
        build.skills.setHealSkill("Well of Eternity");
        build.skills.setUtilitySkills(["Well of Action", "Well of Recall", "Signet of Inspiration"]);
        build.skills.setEliteSkill("Signet of Humility");

        build = new Build("chrTankDei", Profession);
        build.armor.setSingleStat("Minstrel's");
        build.armor.setSingleRune("Superior Rune of the Firebrand");
        build.consumable.setConsumable("Bowl of Nopalitos Sauté", "Magnanimous Maintenance Oil");
        build.trinket.setSingleStat("Minstrel's");
        build.wep1.setMainHand("Sword", "Minstrel's", "Superior Sigil of Transference");
        build.wep1.setOffHand("Shield", "Minstrel's", "Superior Sigil of Water");
        build.wep2.setOffHand("Focus", "Minstrel's", "Superior Sigil of Water");
        build.specialization.setSpec("spec1", "Domination", [
            "Empowered Illusions",
            "Blurred Inscriptions",
            "Mental Anguish"
        ]);
        build.specialization.setSpec("spec2", "Inspiration", [
            "Persisting Images",
            "Restorative Illusions",
            "Illusionary Inspiration"
        ]);
        build.specialization.setSpec("spec3", "Chronomancer", [
            "All's Well That Ends Well",
            "Improved Alacrity",
            "Chronophantasma"
        ]);
        build.skills.setHealSkill("Mantra of Recovery");
        build.skills.setUtilitySkills(["Well of Action", "Well of Precognition", "Well of Recall"]);
        build.skills.setEliteSkill("Time Warp");
    }

    // boon share
    {
        build = new Build("chrTank", Profession);
        build.armor.setStats([
            "Berserker's",
            "Berserker's",
            "Berserker's",
            "Berserker's",
            "Commander's",
            "Berserker's"
        ]);
        build.armor.setSingleRune("Superior Rune of Leadership");
        build.consumable.setConsumable("Bowl of Nopalitos Sauté", "Magnanimous Maintenance Oil");
        build.trinket.setSingleStat("Commander's");
        build.wep1.setMainHand("Sword", "Berserker's", "Superior Sigil of Concentration");
        build.wep1.setOffHand("Shield", "Commander's", "Superior Sigil of Force");
        build.wep2.setOffHand("Focus", "Commander's", "Superior Sigil of Force");
        build.specialization.setSpec("spec1", "Domination", [
            "Empowered Illusions",
            "Blurred Inscriptions",
            "Mental Anguish"
        ]);
        build.specialization.setSpec("spec2", "Inspiration", [
            "Persisting Images",
            "Warden's Feedback",
            "Illusionary Inspiration"
        ]);
        build.specialization.setSpec("spec3", "Chronomancer", [
            "All's Well That Ends Well",
            "Improved Alacrity",
            "Chronophantasma"
        ]);
        build.skills.setHealSkill("Well of Eternity");
        build.skills.setUtilitySkills(["Well of Action", "Well of Recall", "Signet of Inspiration"]);
        build.skills.setEliteSkill("Gravity Well");

        build = new Build("chrTankKC", Profession);
        build.armor.setStats([
            "Berserker's",
            "Berserker's",
            "Berserker's",
            "Berserker's",
            "Commander's",
            "Berserker's"
        ]);
        build.armor.setSingleRune("Superior Rune of Leadership");
        build.consumable.setConsumable("Bowl of Nopalitos Sauté", "Magnanimous Maintenance Oil");
        build.trinket.setSingleStat("Commander's");
        build.wep1.setMainHand("Sword", "Berserker's", "Superior Sigil of Concentration");
        build.wep1.setOffHand("Shield", "Commander's", "Superior Sigil of Force");
        build.wep2.setOffHand("Focus", "Commander's", "Superior Sigil of Force");
        build.specialization.setSpec("spec1", "Dueling", [
            "Phantasmal Fury",
            "Fencer's Finesse",
            "Superiority Complex"
        ]);
        build.specialization.setSpec("spec2", "Inspiration", [
            "Persisting Images",
            "Warden's Feedback",
            "Illusionary Inspiration"
        ]);
        build.specialization.setSpec("spec3", "Chronomancer", [
            "All's Well That Ends Well",
            "Danger Time",
            "Chronophantasma"
        ]);
        build.skills.setHealSkill("Well of Eternity");
        build.skills.setUtilitySkills(["Well of Action", "Well of Recall", "Signet of Inspiration"]);
        build.skills.setEliteSkill("Signet of Humility");

        build = new Build("chrDPSKC", Profession);
        build.armor.setStats([
            "Berserker's",
            "Berserker's",
            "Berserker's",
            "Berserker's",
            "Commander's",
            "Berserker's"
        ]);
        build.armor.setSingleRune("Superior Rune of Leadership");
        build.consumable.setConsumable("Bowl of Nopalitos Sauté", "Magnanimous Maintenance Oil");
        build.trinket.setSingleStat("Commander's");
        build.wep1.setMainHand("Sword", "Berserker's", "Superior Sigil of Concentration");
        build.wep1.setOffHand("Shield", "Berserker's", "Superior Sigil of Force");
        build.wep2.setOffHand("Focus", "Berserker's", "Superior Sigil of Force");
        build.specialization.setSpec("spec1", "Dueling", [
            "Phantasmal Fury",
            "Fencer's Finesse",
            "Superiority Complex"
        ]);
        build.specialization.setSpec("spec2", "Inspiration", [
            "Persisting Images",
            "Warden's Feedback",
            "Illusionary Inspiration"
        ]);
        build.specialization.setSpec("spec3", "Chronomancer", [
            "All's Well That Ends Well",
            "Danger Time",
            "Chronophantasma"
        ]);
        build.skills.setHealSkill("Well of Eternity");
        build.skills.setUtilitySkills(["Well of Action", "Well of Recall", "Signet of Inspiration"]);
        build.skills.setEliteSkill("Signet of Humility");

        build = new Build("chrDPS", Profession);
        build.armor.setStats([
            "Berserker's",
            "Berserker's",
            "Berserker's",
            "Berserker's",
            "Commander's",
            "Berserker's"
        ]);
        build.armor.setSingleRune("Superior Rune of Leadership");
        build.consumable.setConsumable("Bowl of Nopalitos Sauté", "Magnanimous Maintenance Oil");
        build.trinket.setSingleStat("Commander's");
        build.wep1.setMainHand("Sword", "Berserker's", "Superior Sigil of Concentration");
        build.wep1.setOffHand("Shield", "Berserker's", "Superior Sigil of Force");
        build.wep2.setOffHand("Focus", "Berserker's", "Superior Sigil of Force");
        build.specialization.setSpec("spec1", "Domination", [
            "Empowered Illusions",
            "Blurred Inscriptions",
            "Mental Anguish"
        ]);
        build.specialization.setSpec("spec2", "Inspiration", [
            "Persisting Images",
            "Warden's Feedback",
            "Illusionary Inspiration"
        ]);
        build.specialization.setSpec("spec3", "Chronomancer", [
            "All's Well That Ends Well",
            "Improved Alacrity",
            "Chronophantasma"
        ]);
        build.skills.setHealSkill("Well of Eternity");
        build.skills.setUtilitySkills(["Well of Action", "Well of Recall", "Signet of Inspiration"]);
        build.skills.setEliteSkill("Gravity Well");

        build = new Build("chrDPSDeimos", Profession);
        build.armor.setStats([
            "Berserker's",
            "Berserker's",
            "Berserker's",
            "Berserker's",
            "Commander's",
            "Berserker's"
        ]);
        build.armor.setSingleRune("Superior Rune of Leadership");
        build.consumable.setConsumable("Bowl of Nopalitos Sauté", "Magnanimous Maintenance Oil");
        build.trinket.setSingleStat("Commander's");
        build.wep1.setMainHand("Sword", "Berserker's", "Superior Sigil of Concentration");
        build.wep2.setMainHand("Scepter", "Berserker's", "Superior Sigil of Accuracy");
        build.wep1.setOffHand("Shield", "Berserker's", "Superior Sigil of Force");
        build.wep2.setOffHand("Sword", "Berserker's", "Superior Sigil of Force");
        build.specialization.setSpec("spec1", "Illusions", [
            "Compounding Power",
            "Phantasmal Haste",
            "Phantasmal Force"
        ]);
        build.specialization.setSpec("spec2", "Domination", [
            "Empowered Illusions",
            "Blurred Inscriptions",
            "Mental Anguish"
        ]);
        build.specialization.setSpec("spec3", "Chronomancer", [
            "All's Well That Ends Well",
            "Improved Alacrity",
            "Chronophantasma"
        ]);
        build.skills.setHealSkill("Well of Eternity");
        build.skills.setUtilitySkills(["Well of Action", "Well of Recall", "Signet of Inspiration"]);
        build.skills.setEliteSkill("Time Warp");

        build = new Build("chrDPSMatt", Profession);
        build.armor.setStats([
            "Berserker's",
            "Berserker's",
            "Berserker's",
            "Berserker's",
            "Commander's",
            "Berserker's"
        ]);
        build.armor.setSingleRune("Superior Rune of Leadership");
        build.consumable.setConsumable("Bowl of Nopalitos Sauté", "Magnanimous Maintenance Oil");
        build.trinket.setSingleStat("Commander's");
        build.wep1.setMainHand("Sword", "Berserker's", "Superior Sigil of Concentration");
        build.wep1.setOffHand("Shield", "Berserker's", "Superior Sigil of Force");
        build.wep2.setOffHand("Focus", "Berserker's", "Superior Sigil of Force");
        build.specialization.setSpec("spec1", "Domination", [
            "Empowered Illusions",
            "Blurred Inscriptions",
            "Mental Anguish"
        ]);
        build.specialization.setSpec("spec2", "Inspiration", [
            "Persisting Images",
            "Warden's Feedback",
            "Illusionary Inspiration"
        ]);
        build.specialization.setSpec("spec3", "Chronomancer", [
            "All's Well That Ends Well",
            "Improved Alacrity",
            "Chronophantasma"
        ]);
        build.skills.setHealSkill("Well of Eternity");
        build.skills.setUtilitySkills(["Well of Action", "Feedback", "Signet of Inspiration"]);
        build.skills.setEliteSkill("Signet of Humility");

        build = new Build("chrDPSCairn", Profession);
        build.armor.setStats([
            "Berserker's",
            "Berserker's",
            "Berserker's",
            "Berserker's",
            "Commander's",
            "Berserker's"
        ]);
        build.armor.setSingleRune("Superior Rune of Leadership");
        build.consumable.setConsumable("Bowl of Nopalitos Sauté", "Magnanimous Maintenance Oil");
        build.trinket.setSingleStat("Commander's");
        build.wep1.setMainHand("Sword", "Berserker's", "Superior Sigil of Concentration");
        build.wep1.setOffHand("Shield", "Berserker's", "Superior Sigil of Force");
        build.wep2.setOffHand("Focus", "Berserker's", "Superior Sigil of Force");
        build.specialization.setSpec("spec1", "Domination", [
            "Empowered Illusions",
            "Blurred Inscriptions",
            "Mental Anguish"
        ]);
        build.specialization.setSpec("spec2", "Inspiration", [
            "Persisting Images",
            "Restorative Illusions",
            "Illusionary Inspiration"
        ]);
        build.specialization.setSpec("spec3", "Chronomancer", [
            "All's Well That Ends Well",
            "Improved Alacrity",
            "Chronophantasma"
        ]);
        build.skills.setHealSkill("Well of Eternity");
        build.skills.setUtilitySkills(["Well of Action", "Well of Recall", "Signet of Inspiration"]);
        build.skills.setEliteSkill("Time Warp");
    }

    // condi
    {
        build = new Build("mirageCondiMatt", Profession);
        build.armor.setSingleStat("Viper's");
        build.armor.setSingleRune("Superior Rune of the Berserker");
        build.consumable.setConsumable("Rare Veggie Pizza", "Toxic Focusing Crystal");
        build.trinket.setSingleStat("Viper's");
        build.wep1.setMainHand("Axe", "Viper's", "Superior Sigil of Malice");
        build.wep1.setOffHand("Pistol", "Viper's", "Superior Sigil of Geomancy");
        build.wep2.setOffHand("Torch", "Viper's", "Superior Sigil of Geomancy");
        build.specialization.setSpec("spec1", "Dueling", [
            "Duelist's Discipline",
            "Blinding Dissipation",
            "Superiority Complex"
        ]);
        build.specialization.setSpec("spec2", "Illusions", [
            "Compounding Power",
            "Phantasmal Haste",
            "Phantasmal Force"
        ]);
        build.specialization.setSpec("spec3", "Mirage", ["Riddle of Sand", "Mirrored Axes", "Dune Cloak"]);
        build.skills.setHealSkill("Signet of the Ether");
        build.skills.setUtilitySkills(["Feedback", "Signet of Domination", "Signet of Midnight"]);
        build.skills.setEliteSkill("Signet of Humility");

        build = new Build("mirageCondiCairn", Profession);
        build.armor.setSingleStat("Viper's");
        build.armor.setSingleRune("Superior Rune of the Berserker");
        build.consumable.setConsumable("Rare Veggie Pizza", "Toxic Focusing Crystal");
        build.trinket.setSingleStat("Viper's");
        build.wep1.setMainHand("Axe", "Viper's", "Superior Sigil of Malice");
        build.wep1.setOffHand("Pistol", "Viper's", "Superior Sigil of Geomancy");
        build.wep2.setOffHand("Torch", "Viper's", "Superior Sigil of Geomancy");
        build.specialization.setSpec("spec1", "Dueling", [
            "Duelist's Discipline",
            "Blinding Dissipation",
            "Superiority Complex"
        ]);
        build.specialization.setSpec("spec2", "Illusions", [
            "Compounding Power",
            "Phantasmal Haste",
            "Phantasmal Force"
        ]);
        build.specialization.setSpec("spec3", "Mirage", ["Riddle of Sand", "Mirrored Axes", "Dune Cloak"]);
        build.skills.setHealSkill("Signet of the Ether");
        build.skills.setUtilitySkills(["Crystal Sands", "Signet of Domination", "Signet of Midnight"]);
        build.skills.setEliteSkill("Jaunt");

        build = new Build("mirageCondiCC", Profession);
        build.armor.setSingleStat("Viper's");
        build.armor.setSingleRune("Superior Rune of the Berserker");
        build.consumable.setConsumable("Rare Veggie Pizza", "Toxic Focusing Crystal");
        build.trinket.setSingleStat("Viper's");
        build.wep1.setMainHand("Scepter", "Viper's", "Superior Sigil of Malice");
        build.wep1.setOffHand("Pistol", "Viper's", "Superior Sigil of Geomancy");
        build.wep2.setOffHand("Torch", "Viper's", "Superior Sigil of Geomancy");
        build.specialization.setSpec("spec1", "Dueling", [
            "Duelist's Discipline",
            "Blinding Dissipation",
            "Superiority Complex"
        ]);
        build.specialization.setSpec("spec2", "Illusions", [
            "Compounding Power",
            "Phantasmal Haste",
            "Malicious Sorcery"
        ]);
        build.specialization.setSpec("spec3", "Mirage", ["Riddle of Sand", "Mirage Mantle", "Dune Cloak"]);
        build.skills.setHealSkill("Signet of the Ether");
        build.skills.setUtilitySkills(["Mantra of Distraction", "Signet of Domination", "Signet of Midnight"]);
        build.skills.setEliteSkill("Signet of Humility");
    }
});
