define(["professionBuilds/dataBuilds", "professionBuilds/professionUtilities/professions"], function (
    buildData,
    professions
) {
    "use strict";
    var Build = buildData.build;

    class RevenantBuild extends Build {
        constructor(name) {
            super(name, professions.Revenant);
            this.skills = null;
        }
    }

    class CondiRenegadeBuild extends RevenantBuild {
        constructor(name) {
            super(name);
            this.armor.setSingleStat("Viper's");
            this.armor.set42Rune("Superior Rune of the Nightmare", "Superior Rune of the Trapper");
            this.consumable.setConsumable("Rare Veggie Pizza", "Toxic Focusing Crystal");
            this.trinket.setSingleStat("Viper's");
            this.wep1.setMainHand("Mace", "Viper's", "Superior Sigil of Smoldering");
            this.wep2.setOffHand("Axe", "Viper's", "Superior Sigil of Geomancy");
            this.specialization.setSpec("spec1", "Corruption", ["Venom Enhancement", "Abyssal Chill", "Diabolic Inferno"]);
            this.specialization.setSpec("spec2", "Devastation", [
                "Ferocious Strikes",
                "Assassin's Presence",
                "Swift Termination"
            ]);
            this.specialization.setSpec("spec3", "Renegade", ["Blood Fury", "Heartpiercer", "Lasting Legacy"]);
            this.profSkills.setSkills(["Legendary Renegade Stance", "Legendary Demon Stance"]);
        }
    }

    class KiteHeraldBuild extends RevenantBuild {
        constructor(name) {
            super(name);
            this.armor.setSingleStat("Minstrel's");
            this.armor.setSingleRune("Superior Rune of Water");
            this.consumable.setConsumable("Delicious Rice Ball", "Bountiful Maintenance Oil");
            this.trinket.setSingleStat("Magi's");
            this.specialization.setSpec("spec1", "Retribution", [
                "Close Quarters",
                "Eye for an Eye",
                "Steadfast Rejuvenation"
            ]);
            this.specialization.setSpec("spec2", "Salvation", [
                "Nourishing Roots",
                "Invoking Harmony",
                "Natural Abundance"
            ]);
            this.specialization.setSpec("spec3", "Herald", [
                "Radiant Revival",
                "Bolster Fortifications",
                "Soothing Bastion"
            ]);
            this.profSkills.setSkills(["Legendary Centaur Stance", "Legendary Dragon Stance"]);

            this.wep2.setTwoHand("Staff", "Magi's", "Superior Sigil of Transference", "Superior Sigil of Water");
        }
    }

    var build = null;
    // Condi
    {
        build = new CondiRenegadeBuild("renCondi");
    }

    // Special
    {
        build = new KiteHeraldBuild("herDeiVentari");

        build.wep1.setMainHand("Sword", "Minstrel's", "Superior Sigil of Transference");
        build.wep1.setOffHand("Shield", "Magi's", "Superior Sigil of Water");

        build = new KiteHeraldBuild("herCairnVentari");

        build.wep1.setTwoHand("Hammer", "Magi's", "Superior Sigil of Transference", "Superior Sigil of Water");

    }
});
