define([], function() {
	'use strict';

	class ProfessionSkills {
		constructor(profession) {
			this.profession = profession;
			this.skills = [];
		}

		_setSkill(slotType, skillName) {
			var skill = this.profession.skills[skillName];
			if (skill) {
				if (skill.slot.includes(slotType)) {
					this.skills.push(skill.id);
				} else {
					console.warn('Warning: ' + skillName + ' is not a/an ' + slotType + ' skill');
				}
			} else if (skillName.length > 0) {
				console.warn('Warning: ' + skillName + ' is not a ' + this.profession.name + ' skill');
			}
		}
    
		setSkills(skills) {
			for (var i = 0; i < skills.length; i++) {
				this._setSkill('Profession', skills[i]);
			}
		}
    
		getSDiv(mobile) {
			var skills = this.skills;
			if (skills.length === 0) {
				return '';
			}
			var divToAdd = '<div center data-armory-embed="skills" ';
			var skillIDS = 'data-armory-ids="';
			for (var i = 0; i < skills.length; i++) {
				var skillID = skills[i];
				skillIDS += skillID + ',';
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
			divToAdd += '></div>';
			return divToAdd;
		}
	}

	return ProfessionSkills;
});
