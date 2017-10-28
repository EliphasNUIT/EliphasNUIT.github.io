define(["professionBuilds/dataBuilds", "professionBuilds/utilities/classes"], function(buildData, classes) {
    "use strict";
    var builds = buildData.builds;
    var build = buildData.build;
    var Thief = classes.Thief;

    // Power
    {
        builds.set(
            "drdPower",
            new build({
                class: Thief,
                specializations: [
                    {
                        name: "Deadly Arts",
                        traits: ["Mug", "Revealed Training", "Executioner"]
                    },
                    {
                        name: "Critical Strikes",
                        traits: ["Twin Fangs", "Practiced Tolerance", "No Quarter"]
                    },
                    {
                        name: "Daredevil",
                        traits: ["Havoc Mastery", "Staff Master", "Bounding Dodger"]
                    }
                ],
                skills: ["Signet of Malice", "Assassin's Signet", "Spider Venom", "Fist Flurry", "Basilisk Venom"],
                pets: null,
                armor: [
                    { slot: "helm", stat: "Berserker's", rune: "Superior Rune of the Scholar" },
                    {
                        slot: "shoulders",
                        stat: "Berserker's",
                        rune: "Superior Rune of the Scholar"
                    },
                    { slot: "coat", stat: "Berserker's", rune: "Superior Rune of the Scholar" },
                    {
                        slot: "gloves",
                        stat: "Berserker's",
                        rune: "Superior Rune of the Scholar"
                    },
                    {
                        slot: "leggings",
                        stat: "Berserker's",
                        rune: "Superior Rune of the Scholar"
                    },
                    { slot: "boots", stat: "Berserker's", rune: "Superior Rune of the Scholar" }
                ],
                trinket: [
                    { slot: "amulet", stat: "Berserker's" },
                    { slot: "ring1", stat: "Berserker's" },
                    { slot: "ring2", stat: "Berserker's" },
                    { slot: "back", stat: "Berserker's" },
                    { slot: "earring1", stat: "Berserker's" },
                    { slot: "earring2", stat: "Berserker's" }
                ],
                weapons: [
                    {
                        slot: "mh1",
                        type: "Staff",
                        stat: "Berserker's",
                        sigils: ["Superior Sigil of Force", "Superior Sigil of Air"]
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
                        type: "",
                        stat: "",
                        sigils: [""]
                    }
                ],
                food: ["Bowl of Sweet and Spicy Butternut Squash Soup", "Superior Sharpening Stone"]
            })
        );

        builds.set(
            "drdPowerSab",
            new build({
                class: Thief,
                specializations: [
                    {
                        name: "Deadly Arts",
                        traits: ["Mug", "Revealed Training", "Executioner"]
                    },
                    {
                        name: "Critical Strikes",
                        traits: ["Twin Fangs", "Practiced Tolerance", "No Quarter"]
                    },
                    {
                        name: "Daredevil",
                        traits: ["Havoc Mastery", "Staff Master", "Bounding Dodger"]
                    }
                ],
                skills: ["Signet of Malice", "Assassin's Signet", "Shadowstep", "Fist Flurry", "Basilisk Venom"],
                pets: null,
                armor: [
                    { slot: "helm", stat: "Berserker's", rune: "Superior Rune of the Scholar" },
                    {
                        slot: "shoulders",
                        stat: "Berserker's",
                        rune: "Superior Rune of the Scholar"
                    },
                    { slot: "coat", stat: "Berserker's", rune: "Superior Rune of the Scholar" },
                    {
                        slot: "gloves",
                        stat: "Berserker's",
                        rune: "Superior Rune of the Scholar"
                    },
                    {
                        slot: "leggings",
                        stat: "Berserker's",
                        rune: "Superior Rune of the Scholar"
                    },
                    { slot: "boots", stat: "Berserker's", rune: "Superior Rune of the Scholar" }
                ],
                trinket: [
                    { slot: "amulet", stat: "Berserker's" },
                    { slot: "ring1", stat: "Berserker's" },
                    { slot: "ring2", stat: "Berserker's" },
                    { slot: "back", stat: "Berserker's" },
                    { slot: "earring1", stat: "Berserker's" },
                    { slot: "earring2", stat: "Berserker's" }
                ],
                weapons: [
                    {
                        slot: "mh1",
                        type: "Staff",
                        stat: "Berserker's",
                        sigils: ["Superior Sigil of Force", "Superior Sigil of Air"]
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
                        type: "",
                        stat: "",
                        sigils: [""]
                    }
                ],
                food: ["Bowl of Sweet and Spicy Butternut Squash Soup", "Superior Sharpening Stone"]
            })
        );
    }

    // Condi
    {
        builds.set(
            "drdCondi",
            new build({
                class: Thief,
                specializations: [
                    {
                        name: "Deadly Arts",
                        traits: ["Dagger Training", "Panic Strike", "Potent Poison"]
                    },
                    {
                        name: "Trickery",
                        traits: ["Uncatchable", "Trickster", "Sleight of Hand"]
                    },
                    {
                        name: "Daredevil",
                        traits: ["Havoc Mastery", "Escapist's Absolution", "Lotus Training"]
                    }
                ],
                skills: ["Signet of Malice", "Spider Venom", "Devourer Venom", "Caltrops", "Basilisk Venom"],
                pets: null,
                armor: [
                    { slot: "helm", stat: "Viper's", rune: "Superior Rune of the Krait" },
                    {
                        slot: "shoulders",
                        stat: "Viper's",
                        rune: "Superior Rune of the Krait"
                    },
                    { slot: "coat", stat: "Viper's", rune: "Superior Rune of the Krait" },
                    {
                        slot: "gloves",
                        stat: "Viper's",
                        rune: "Superior Rune of the Krait"
                    },
                    {
                        slot: "leggings",
                        stat: "Viper's",
                        rune: "Superior Rune of the Krait"
                    },
                    { slot: "boots", stat: "Viper's", rune: "Superior Rune of the Krait" }
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
                        type: "Dagger",
                        stat: "Viper's",
                        sigils: ["Superior Sigil of Geomancy"]
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
                        type: "Dagger",
                        stat: "Viper's",
                        sigils: ["Superior Sigil of Malice"]
                    }
                ],
                food: ["Rare Veggie Pizza", "Toxic Focusing Crystal"]
            })
        );

        builds.set(
            "drdCondiSab",
            new build({
                class: Thief,
                specializations: [
                    {
                        name: "Deadly Arts",
                        traits: ["Dagger Training", "Panic Strike", "Potent Poison"]
                    },
                    {
                        name: "Trickery",
                        traits: ["Uncatchable", "Trickster", "Sleight of Hand"]
                    },
                    {
                        name: "Daredevil",
                        traits: ["Havoc Mastery", "Escapist's Absolution", "Lotus Training"]
                    }
                ],
                skills: ["Signet of Malice", "Spider Venom", "Shadowstep", "Caltrops", "Basilisk Venom"],
                pets: null,
                armor: [
                    { slot: "helm", stat: "Viper's", rune: "Superior Rune of the Krait" },
                    {
                        slot: "shoulders",
                        stat: "Viper's",
                        rune: "Superior Rune of the Krait"
                    },
                    { slot: "coat", stat: "Viper's", rune: "Superior Rune of the Krait" },
                    {
                        slot: "gloves",
                        stat: "Viper's",
                        rune: "Superior Rune of the Krait"
                    },
                    {
                        slot: "leggings",
                        stat: "Viper's",
                        rune: "Superior Rune of the Krait"
                    },
                    { slot: "boots", stat: "Viper's", rune: "Superior Rune of the Krait" }
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
                        type: "Dagger",
                        stat: "Viper's",
                        sigils: ["Superior Sigil of Geomancy"]
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
                        type: "Dagger",
                        stat: "Viper's",
                        sigils: ["Superior Sigil of Malice"]
                    }
                ],
                food: ["Rare Veggie Pizza", "Toxic Focusing Crystal"]
            })
        );
    }
});
