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
  function(Specialization, Skills,ProfessionSkills, Weapons, Trinket, Consumable, Armor) {
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

    var Build = function(name, profession) {
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
    };

    Build.prototype.getSpecializations = function() {
      return this.specialization.getDiv(mobile);
    };

    Build.prototype.getPets = function() {
      return this.skills.getPDiv();
    };

    Build.prototype.getSkills = function() {
      return this.skills.getSDiv(mobile);
    };

    Build.prototype.getProfessionSkills = function() {
      return this.profSkills.getSDiv(mobile);
    };

    Build.prototype.getTrinket = function() {
      return this.trinket.getDiv(mobile);
    };

    Build.prototype.getArmor = function() {
      return this.armor.getDiv(mobile);
    };

    Build.prototype.getWeapon1 = function() {
      return this.wep1.getDiv(mobile);
    };

    Build.prototype.getWeapon2 = function() {
      return this.wep2.getDiv(mobile);
    };

    Build.prototype.getConsumable = function() {
      return this.consumable.getDiv(mobile);
    };

    return { build: Build, builds: Builds };
  }
);
