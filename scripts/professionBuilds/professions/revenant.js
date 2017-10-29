define(["professionBuilds/dataBuilds", "professionBuilds/professionUtilities/professions"], function(buildData, professions) {
    "use strict";
    var Build = buildData.build;
    var Revenant = professions.Revenant;
    var build = null;
    // Condi
    {
        build = new Build("renCondi",Revenant);
        build.armor.setSingleStat("Viper's");
        build.armor.set42Rune("Superior Rune of the Nightmare","Superior Rune of the Trapper");
        build.consumable.setConsumable("Rare Veggie Pizza", "Toxic Focusing Crystal");
        build.trinket.setSingleStat("Viper's");      
        build.wep1.setMainHand("Mace","Viper's","Superior Sigil of Smoldering");
        build.wep2.setOffHand("Axe","Viper's","Superior Sigil of Geomancy");
        build.specialization.setSpec("spec1","Corruption",["Venom Enhancement", "Abyssal Chill", "Diabolic Inferno"]);
        build.specialization.setSpec("spec2","Devastation",["Ferocious Strikes", "Assassin's Presence", "Swift Termination"]);
        build.specialization.setSpec("spec3","Renegade",["Blood Fury", "Heartpiercer", "Lasting Legacy"]);
        build.profSkills.noSkills = true;
        build.profSkills.setSkills(["Legendary Renegade Stance", "Legendary Demon Stance"]);
    }

    // Special
    {
        build = new Build("herVentari",Revenant);
        build.armor.setSingleStat("Minstrel's");
        build.armor.setSingleRune("Superior Rune of Water");
        build.consumable.setConsumable("Delicious Rice Ball", "Bountiful Maintenance Oil");
        build.trinket.setSingleStat("Magi's");      
        build.wep1.setMainHand("Sword","Minstrel's","Superior Sigil of Transference");
        build.wep1.setOffHand("Shield","Magi's","Superior Sigil of Water");
        build.wep2.setTwoHand("Staff","Magi's","Superior Sigil of Transference","Superior Sigil of Water");
        build.specialization.setSpec("spec1","Retribution",["Close Quarters", "Eye for an Eye", "Steadfast Rejuvenation"]);
        build.specialization.setSpec("spec2","Salvation",["Nourishing Roots", "Invoking Harmony", "Natural Abundance"]);
        build.specialization.setSpec("spec3","Herald",["Radiant Revival", "Bolster Fortifications", "Soothing Bastion"]);
        build.profSkills.noSkills = true;
        build.profSkills.setSkills(["Legendary Centaur Stance", "Legendary Dragon Stance"]);
    }
});
