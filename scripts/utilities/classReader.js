/* eslint-disable */

var errorFunc = function(data) {
	console.error('oh shit');
};

var Profession = function(name) {
	this.name = name;
	this.specializations = {};
	this.traits = {};
	this.skills = {};
	this.weapons = {};
};

Profession.prototype.buildFromAPI = function() {
	var _this = this;
	FW_GW2().getProfession(
		this.name,
		'en',
		function(data) {
			var classData = data;
			_this.weapons = data.weapons;
			for (var i = 0; i < classData.specializations.length; i++) {
				var speID = classData.specializations[i];
				FW_GW2().getSpecialization(
					speID,
					'en',
					function(data) {
						var specializationData = data;
						_this.specializations[specializationData.name] =
              specializationData.id;
						for (var j = 0; j < specializationData.major_traits.length; j++) {
							var traitID = specializationData.major_traits[j];
							FW_GW2().getTrait(
								traitID,
								'en',
								function(data) {
									var traitData = data;
									_this.traits[traitData.name] = {
										id: traitData.id,
										spe: traitData.specialization
									};
								},
								errorFunc
							);
						}
					},
					errorFunc
				);
			}
			for (var i = 0; i < classData.skills.length; i++) {
				var skillID = classData.skills[i].id;
				FW_GW2().getSkill(
					skillID,
					'en',
					function(data) {
						_this.skills[data.name] = { id: data.id, slot: data.slot };
					},
					errorFunc
				);
			}
		},
		errorFunc
	);
};

var myClasses = [
	new Profession('Guardian'),
	new Profession('Warrior'),
	new Profession('Revenant'),
	new Profession('Necromancer'),
	new Profession('Elementalist'),
	new Profession('Mesmer'),
	new Profession('Ranger'),
	new Profession('Thief'),
	new Profession('Engineer')
];
