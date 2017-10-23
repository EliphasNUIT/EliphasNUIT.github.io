define(["../dataBuilds", "../utilities/classes"], function(buildData, classes) {
    "use strict";
    var builds = buildData.builds;
    var build = buildData.build;
    var Revenant = classes.Revenant;
    // Condi
    {
        builds.set(
            "renCondi",
            new build({
                class: Revenant,
                specializations: [
                    {
                        name: "Corruption",
                        traits: ["Venom Enhancement", "Abyssal Chill", "Diabolic Inferno"]
                    },
                    {
                        name: "Devastation",
                        traits: ["Ferocious Strikes", "Assassin's Presence", "Swift Termination"]
                    },
                    {
                        name: "Renegade",
                        traits: ["Blood Fury", "Heartpiercer", "Lasting Legacy"]
                    }
                ],
                pets: null,
                skills: ["Legendary Renegade Stance", "Legendary Demon Stance"],
                armor: [
                    { slot: "helm", stat: "Viper's", rune: "Superior Rune of the Nightmare" },
                    {
                        slot: "shoulders",
                        stat: "Viper's",
                        rune: "Superior Rune of the Nightmare"
                    },
                    { slot: "coat", stat: "Viper's", rune: "Superior Rune of the Nightmare" },
                    { slot: "gloves", stat: "Viper's", rune: "Superior Rune of the Nightmare" },
                    { slot: "leggings", stat: "Viper's", rune: "Superior Rune of the Trapper" },
                    { slot: "boots", stat: "Viper's", rune: "Superior Rune of the Trapper" }
                ],
                trinket: [
                    { slot: "amulet", stat: "Viper's" },
                    { slot: "ring1", stat: "Viper's" },
                    { slot: "ring2", stat: "Viper's" },
                    { slot: "back", stat: "Viper's" },
                    { slot: "earring1", stat: "Viper's" },
                    { slot: "earring2", stat: "Viper's" }
                ],
                weapons: [
                    {
                        slot: "mh1",
                        type: "Mace",
                        stat: "Viper's",
                        sigils: ["Superior Sigil of Smoldering"]
                    },
                    {
                        slot: "oh1",
                        type: "",
                        stat: "",
                        sigils: [""]
                    },
                    {
                        slot: "mh2",
                        type: "",
                        stat: "",
                        sigils: [""]
                    },
                    {
                        slot: "oh2",
                        type: "Axe",
                        stat: "Viper's",
                        sigils: ["Superior Sigil of Geomancy"]
                    }
                ],
                food: ["Rare Veggie Pizza", "Toxic Focusing Crystal"]
            })
        );
    }

    // Special
    {
        builds.set(
            "herVentari",
            new build({
                class: Revenant,
                specializations: [
                    {
                        name: "Retribution",
                        traits: ["Close Quarters", "Eye for an Eye", "Steadfast Rejuvenation"]
                    },
                    {
                        name: "Salvation",
                        traits: ["Nourishing Roots", "Invoking Harmony", "Natural Abundance"]
                    },
                    {
                        name: "Herald",
                        traits: ["Radiant Revival", "Bolster Fortifications", "Soothing Bastion"]
                    }
                ],
                pets: null,
                skills: ["Legendary Centaur Stance", "Legendary Dragon Stance"],
                armor: [
                    { slot: "helm", stat: "Minstrel's", rune: "Superior Rune of Water" },
                    {
                        slot: "shoulders",
                        stat: "Minstrel's",
                        rune: "Superior Rune of Water"
                    },
                    { slot: "coat", stat: "Minstrel's", rune: "Superior Rune of Water" },
                    { slot: "gloves", stat: "Minstrel's", rune: "Superior Rune of Water" },
                    { slot: "leggings", stat: "Minstrel's", rune: "Superior Rune of Water" },
                    { slot: "boots", stat: "Minstrel's", rune: "Superior Rune of Water" }
                ],
                trinket: [
                    { slot: "amulet", stat: "Magi's" },
                    { slot: "ring1", stat: "Magi's" },
                    { slot: "ring2", stat: "Magi's" },
                    { slot: "back", stat: "Magi's" },
                    { slot: "earring1", stat: "Magi's" },
                    { slot: "earring2", stat: "Magi's" }
                ],
                weapons: [
                    {
                        slot: "mh1",
                        type: "Sword",
                        stat: "Minstrel's",
                        sigils: ["Superior Sigil of Transference"]
                    },
                    {
                        slot: "oh1",
                        type: "Shield",
                        stat: "Magi's",
                        sigils: ["Superior Sigil of Water"]
                    },
                    {
                        slot: "mh2",
                        type: "Staff",
                        stat: "Magi's",
                        sigils: ["Superior Sigil of Transference", "Superior Sigil of Water"]
                    },
                    {
                        slot: "oh2",
                        type: "",
                        stat: "",
                        sigils: [""]
                    }
                ],
                food: ["Delicious Rice Ball", "Bountiful Maintenance Oil"]
            })
        );
    }
});
