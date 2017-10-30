define(["professionBuilds/professionUtilities/pets"], function(pets) {
    "use strict";

    var Skills = function(profession) {
        this.profession = profession;
        this.pets = [];
        this.healSkill = -1;
        this.utilitySkill0 = -1;
        this.utilitySkill1 = -1;
        this.utilitySkill2 = -1;
        this.eliteSkill = -1;
    };

    Skills.prototype._setSkill = function(slot, slotType, skillName) {
        var skill = this.profession.skills[skillName];
        if (skill) {
            if (skill.slot === slotType) {
                this[slot] = skill.id;
            } else {
                console.warn("Warning: " + skillName + " is not a/an " + slotType + " skill");
            }
        } else if (skillName.length > 0) {
            console.warn("Warning: " + skillName + " is not a " + this.profession.name + " skill");
        }
    };

    Skills.prototype.setHealSkill = function(skillName) {
        this._setSkill("healSkill", "Heal", skillName);
    };

    Skills.prototype.setUtilitySkills = function(skillNameArray) {
        for (var i = 0; i < 3; i++) {
            var skillName = skillNameArray[i];
            this._setSkill("utilitySkill" + i, "Utility", skillName);
        }
    };

    Skills.prototype.setEliteSkill = function(skillName) {
        this._setSkill("eliteSkill", "Elite", skillName);
    };

    Skills.prototype._getHealDiv = function(mobile) {
        var divToAdd = '<div center data-armory-embed="skills" ';
        var skillIDS = 'data-armory-ids="';
        skillIDS += this.healSkill;
        skillIDS += '" ';
        divToAdd += skillIDS;
        if (mobile) {
            divToAdd += 'data-armory-size="130" ';
        } else {
            divToAdd += 'data-armory-size="70" ';
        }
        //divToAdd += 'data-armory-inline-text="wiki" ';
        divToAdd += 'data-armory-blank-text="Au choix ou voir avec l\'autre classe jouant le même build" ';
        divToAdd += "></div>";
        return divToAdd;
    };

    Skills.prototype._getEliteDiv = function(mobile) {
        var divToAdd = '<div center data-armory-embed="skills" ';
        var skillIDS = 'data-armory-ids="';
        skillIDS += this.eliteSkill;
        skillIDS += '" ';
        divToAdd += skillIDS;
        if (mobile) {
            divToAdd += 'data-armory-size="130" ';
        } else {
            divToAdd += 'data-armory-size="70" ';
        }
        //divToAdd += 'data-armory-inline-text="wiki" ';
        divToAdd += 'data-armory-blank-text="Au choix ou voir avec l\'autre classe jouant le même build" ';
        divToAdd += "></div>";
        return divToAdd;
    };

    Skills.prototype._getUtilitiesDiv = function(mobile) {
        var skills = [this.utilitySkill0, this.utilitySkill1, this.utilitySkill2];
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
        divToAdd += 'data-armory-blank-text="Au choix ou voir avec l\'autre classe jouant le même build" ';
        divToAdd += "></div>";
        return divToAdd;
    };

    Skills.prototype.getSDiv = function(mobile) {
        return {
            heal: this._getHealDiv(mobile),
            utilities: this._getUtilitiesDiv(mobile),
            elite: this._getEliteDiv(mobile)
        };
    };

    Skills.prototype.getPDiv = function() {
        var divToAdd = "<div center> ";
        for (var i = 0; i < this.pets.length; i++) {
            var petData = pets[this.pets[i]] ? pets[this.pets[i]] : null;
            if (petData) {
                var img = '<img small src="';
                img += petData.icon + '" ';
                img += 'title="' + this.pets[i] + '">';
                divToAdd += img;
            }
        }
        divToAdd += " </div>";
        return divToAdd;
    };

    return Skills;
});
