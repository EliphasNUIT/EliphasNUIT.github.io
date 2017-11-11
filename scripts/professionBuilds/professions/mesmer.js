define(["professionBuilds/dataBuilds", "professionBuilds/professionUtilities/professions"], function (
    buildData,
    professions
) {
    "use strict";
    var Build = buildData.build;

    class MesBuild extends Build {
        constructor(name) {
            super(name, professions.Mesmer);
        };
    };

    class MinstrelShareBuild extends MesBuild {
        constructor(name) {
            super(name);
            this.armor.setSingleStat("Minstrel's");
            this.armor.setSingleRune("Superior Rune of the Firebrand");
            this.consumable.setConsumable("Bowl of Nopalitos Sauté", "Magnanimous Maintenance Oil");
            this.trinket.setSingleStat("Minstrel's");
            this.wep1.setMainHand("Sword", "Minstrel's", "Superior Sigil of Concentration");
            this.wep1.setOffHand("Shield", "Minstrel's", "Superior Sigil of Water");
            this.wep2.setOffHand("Focus", "Minstrel's", "Superior Sigil of Water");
            this.specialization.setSpec("spec1", "Domination", [
                "Empowered Illusions",
                "Blurred Inscriptions",
                "Mental Anguish"
            ]);
            this.specialization.setSpec("spec2", "Inspiration", [
                "Persisting Images",
                "Restorative Illusions",
                "Illusionary Inspiration"
            ]);
            this.specialization.setSpec("spec3", "Chronomancer", [
                "All's Well That Ends Well",
                "Improved Alacrity",
                "Chronophantasma"
            ]);
        };
    };

    class BoonShareBuild extends MesBuild {
        constructor(name) {
            super(name);
            this.armor.setStats([
                "Berserker's",
                "Berserker's",
                "Berserker's",
                "Berserker's",
                "Commander's",
                "Berserker's"
            ]);
            this.armor.setSingleRune("Superior Rune of Leadership");
            this.consumable.setConsumable("Bowl of Nopalitos Sauté", "Magnanimous Maintenance Oil");
            this.trinket.setSingleStat("Commander's");
            this.wep1.setMainHand("Sword", "Berserker's", "Superior Sigil of Concentration");
            this.wep1.setOffHand("Shield", "Berserker's", "Superior Sigil of Force");
            this.wep2.setOffHand("Focus", "Berserker's", "Superior Sigil of Force");
            this.specialization.setSpec("spec1", "Domination", [
                "Empowered Illusions",
                "Blurred Inscriptions",
                "Mental Anguish"
            ]);
            this.specialization.setSpec("spec3", "Chronomancer", [
                "All's Well That Ends Well",
                "Improved Alacrity",
                "Chronophantasma"
            ]);
            this.skills.setHealSkill("Well of Eternity");
            this.skills.setUtilitySkills(["Well of Action", "Well of Recall", "Signet of Inspiration"]);
        };
    };

    class BoonShareTankBuild extends BoonShareBuild {
        constructor(name) {
            super(name);
            this.wep1.setOffHand("Shield", "Commander's", "Superior Sigil of Force");
            this.wep2.setOffHand("Focus", "Commander's", "Superior Sigil of Force");
        };
    };

    class CondiMiragePhantasmBuild extends MesBuild {
        constructor(name) {
            super(name);
            this.armor.setSingleStat("Viper's");
            this.armor.setSingleRune("Superior Rune of the Renegade");
            this.consumable.setConsumable("Rare Veggie Pizza", "Toxic Focusing Crystal");
            this.trinket.setSingleStat("Viper's");
            this.wep1.setMainHand("Axe", "Viper's", "Superior Sigil of Malice");
            this.wep1.setOffHand("Pistol", "Viper's", "Superior Sigil of Geomancy");
            this.wep2.setOffHand("Torch", "Viper's", "Superior Sigil of Geomancy");
            this.specialization.setSpec("spec1", "Dueling", [
                "Duelist's Discipline",
                "Blinding Dissipation",
                "Superiority Complex"
            ]);
            this.specialization.setSpec("spec2", "Illusions", [
                "Compounding Power",
                "Phantasmal Haste",
                "Phantasmal Force"
            ]);
            this.specialization.setSpec("spec3", "Mirage", ["Riddle of Sand", "Mirrored Axes", "Dune Cloak"]);
            this.skills.setHealSkill("Signet of the Ether");
        };
    };

    class CondiMirageCloneBuild extends MesBuild {
        constructor(name) {
            super(name);
            this.armor.setSingleStat("Viper's");
            this.armor.setSingleRune("Superior Rune of the Renegade");
            this.consumable.setConsumable("Bowl of Orrian Truffle and Meat Stew", "Toxic Focusing Crystal");
            this.trinket.setSingleStat("Viper's");
            this.wep1.setMainHand("Axe", "Viper's", "Superior Sigil of Malice");
            this.wep2.setOffHand("Torch", "Viper's", "Superior Sigil of Energy");
            this.specialization.setSpec("spec1", "Dueling", [
                "Duelist's Discipline",
                "Blinding Dissipation",
                "Superiority Complex"
            ]);
            this.specialization.setSpec("spec2", "Chaos", [
                "Descent into Madness",
                "Chaotic Transference",
                "Bountiful Disillusionment"
            ]);
            this.specialization.setSpec("spec3", "Mirage", ["Self-Deception", "Mirrored Axes", "Infinite Horizon"]);
            this.skills.setHealSkill("False Oasis");
        };
    };


    var build = null;
    // minstrel
    {
        build = new MinstrelShareBuild("chrTankMinstrel");     
        build.specialization.setSpec("spec2", "Inspiration", [
            "Persisting Images",
            "Restorative Illusions",
            "Illusionary Inspiration"
        ]);
        build.skills.setHealSkill("Well of Eternity");
        build.skills.setUtilitySkills(["Well of Action", "Well of Recall", "Signet of Inspiration"]);
        build.skills.setEliteSkill("Signet of Humility");

        build = new MinstrelShareBuild("chrTankDei");  
        build.skills.setHealSkill("Mantra of Recovery");
        build.skills.setUtilitySkills(["Well of Action", "Well of Precognition", "Well of Recall"]);
        build.skills.setEliteSkill("Time Warp");
    }

    // boon share
    {
        build = new BoonShareTankBuild("chrTank");   
        build.specialization.setSpec("spec2", "Inspiration", [
            "Persisting Images",
            "Warden's Feedback",
            "Illusionary Inspiration"
        ]);        
        build.skills.setEliteSkill("Gravity Well");

        build = new BoonShareTankBuild("chrTankKC");   
        build.specialization.setSpec("spec2", "Inspiration", [
            "Persisting Images",
            "Warden's Feedback",
            "Illusionary Inspiration"
        ]);        
        build.skills.setEliteSkill("Signet of Humility");

        build = new BoonShareBuild("chrDPS");
        build.specialization.setSpec("spec2", "Inspiration", [
            "Persisting Images",
            "Warden's Feedback",
            "Illusionary Inspiration"
        ]);
        build.skills.setEliteSkill("Signet of Humility");

        build = new BoonShareBuild("chrDPSKC");
        build.specialization.setSpec("spec2", "Inspiration", [
            "Persisting Images",
            "Warden's Feedback",
            "Illusionary Inspiration"
        ]);
        build.skills.setEliteSkill("Gravity Well");

        build = new BoonShareBuild("chrDPSDeimos");
        build.wep2.setMainHand("Scepter", "Berserker's", "Superior Sigil of Accuracy");
        build.specialization.setSpec("spec2", "Illusions", [
            "Compounding Power",
            "Phantasmal Haste",
            "Phantasmal Force"
        ]);
        build.skills.setEliteSkill("Time Warp");

        build = new BoonShareBuild("chrDPSMatt");
        build.specialization.setSpec("spec2", "Inspiration", [
            "Persisting Images",
            "Warden's Feedback",
            "Illusionary Inspiration"
        ]);
        build.skills.setUtilitySkills(["Well of Action", "Feedback", "Signet of Inspiration"]);
        build.skills.setEliteSkill("Signet of Humility");

        build = new BoonShareBuild("chrDPSCairn");
        build.specialization.setSpec("spec2", "Inspiration", [
            "Persisting Images",
            "Restorative Illusions",
            "Illusionary Inspiration"
        ]);
        build.skills.setEliteSkill("Time Warp");
    }

    // condi phantasme
    {
        build = new CondiMiragePhantasmBuild("mirageCondiMatt");
        build.skills.setUtilitySkills(["Feedback", "Signet of Domination", "Signet of Midnight"]);
        build.skills.setEliteSkill("Signet of Humility");

        build = new CondiMiragePhantasmBuild("mirageCondiCairn");
        build.skills.setUtilitySkills(["Crystal Sands", "Signet of Domination", "Signet of Midnight"]);
        build.skills.setEliteSkill("Jaunt");

        build = new CondiMiragePhantasmBuild("mirageCondiCC");
        build.wep1.setMainHand("Scepter", "Viper's", "Superior Sigil of Malice");
        build.specialization.setSpec("spec2", "Illusions", [
            "Compounding Power",
            "Phantasmal Haste",
            "Malicious Sorcery"
        ]);
        build.specialization.setSpec("spec3", "Mirage", ["Riddle of Sand", "Mirage Mantle", "Dune Cloak"]);
        build.skills.setUtilitySkills(["Mantra of Distraction", "Signet of Domination", "Signet of Midnight"]);
        build.skills.setEliteSkill("Signet of Humility");
    }

    // condi clone
    {
        build = new CondiMirageCloneBuild("mirageCondiCMatt");
        build.skills.setUtilitySkills(["Feedback", "Signet of Domination", "Signet of Midnight"]);
        build.skills.setEliteSkill("Signet of Humility");

        build = new CondiMirageCloneBuild("mirageCondiCCairn");
        build.skills.setUtilitySkills(["Crystal Sands", "Signet of Domination", "Signet of Midnight"]);
        build.skills.setEliteSkill("Jaunt");

        build = new CondiMirageCloneBuild("mirageCondiCCC");
        build.skills.setUtilitySkills(["Mantra of Distraction", "Signet of Domination", "Signet of Midnight"]);
        build.skills.setEliteSkill("Signet of Humility");
    }
});
