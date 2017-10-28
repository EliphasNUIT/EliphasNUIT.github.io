define([], function() {
  "use strict";
  
  var Skills = function(profession) {
    this.profession = profession;
    this.healSkill = -1;
    this.utilitySkills = [-1, -1, -1];
    this.eliteSkill = -1;
  };

  Skills.prototype.setHealSkill = function(skillName) {
    var heal = this.profession.skills[skillName];
    if (heal) {
      if (heal.slot === "Heal") {
          this.healSkill = this.profession.skills[skillName];
      } else{

      }
      
    } else if (skillName.length > 0){

    }
  };

  Skills.prototype.setUtilitySkills = function(skillNameArray) {
    for (var i = 0; i < 3; i++) {
      var skillName = skillNameArray[i];
      if (skillName.length > 0 && this.profession.skills[skillName]) {
        this.healSkill = this.profession.skills[skillName];
      }
    }
  };

  Skills.prototype.setEliteSkill = function(skillName) {
    if (skillName.length > 0 && this.profession.skills[skillName]) {
      this.healSkill = this.profession.skills[skillName];
    }
  };

  Skills.prototype.getDiv = function(mobile) {
    var skills = [this.healSkill, this.utilitySkills[0], this.utilitySkills[1], this.utilitySkills[2], this.eliteSkill]
    var divToAdd = '<div center data-armory-embed="skills" ';
    var skillIDS = 'data-armory-ids="';
    for (var i = 0; i < skills.length; i++) {
      var skillID = skills[i];
      skillIDS += skillID + ",";
    }
    skillIDS = skillIDS.slice(0, -1) + '" ';
    divToAdd += skillIDS;
    if (mobile) {
      divToAdd += 'data-armory-size="130" ';
    } else {
      divToAdd += 'data-armory-size="70" ';
    }
    //divToAdd += 'data-armory-inline-text="wiki" ';
    divToAdd +=
      'data-armory-blank-text="Au choix ou voir avec l\'autre classe jouant le même build" ';
    divToAdd += "></div>";
    return divToAdd;
  };;

  return Skills;
});
