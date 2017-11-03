define(
    [
        "professionBuilds/data/specialization",
        "professionBuilds/data/skills",
        "professionBuilds/data/professionSkills",
        "professionBuilds/data/weapons",
        "professionBuilds/data/trinket",
        "professionBuilds/data/consumable",
        "professionBuilds/data/armor"
    ],
    function(Specialization, Skills, ProfessionSkills, Weapons, Trinket, Consumable, Armor) {
        "use strict";

        function detectmob() {
            if (
                navigator.userAgent.match(/Android/i) ||
                navigator.userAgent.match(/webOS/i) ||
                navigator.userAgent.match(/iPhone/i) ||
                navigator.userAgent.match(/iPad/i) ||
                navigator.userAgent.match(/iPod/i) ||
                navigator.userAgent.match(/BlackBerry/i) ||
                navigator.userAgent.match(/Windows Phone/i)
            ) {
                return true;
            } else {
                return false;
            }
        }

        var mobile = detectmob();

        var Builds = new Map();

        class Build {
            constructor(name, profession) {
                this.profession = profession;
                this.skills = new Skills(profession);
                this.profSkills = new ProfessionSkills(profession);
                this.specialization = new Specialization(profession);
                this.wep1 = new Weapons(profession);
                this.wep2 = new Weapons(profession);
                this.armor = new Armor(profession.armor);
                this.trinket = new Trinket();
                this.consumable = new Consumable();

                Builds.set(name, this);
            }

            getSpecializations() {
                return this.specialization.getDiv(mobile);
            }

            getPets() {
                return this.skills.getPDiv();
            }

            getSkills() {
                return this.skills.getSDiv(mobile);
            }

            getProfessionSkills() {
                return this.profSkills.getSDiv(mobile);
            }

            getTrinket() {
                return this.trinket.getDiv(mobile);
            }

            getArmor() {
                return this.armor.getDiv(mobile);
            }

            getWeapon1() {
                return this.wep1.getDiv(mobile);
            }

            getWeapon2() {
                return this.wep2.getDiv(mobile);
            }

            getConsumable() {
                return this.consumable.getDiv(mobile);
            }
        }

        return { build: Build, builds: Builds };
    }
);
