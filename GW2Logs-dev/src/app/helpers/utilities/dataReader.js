/* eslint-disable */

var errorFunc = function (data) {
	console.error('oh shit');
};

var Profession = function (name, armor) {
	this.name = name;
	this.specializations = {};
	this.traits = {};
	this.skills = {};
    this.weapons = {};
    this.armor = armor;
};

Profession.prototype.buildFromAPI = function () {
	var _this = this;
	FW_GW2().getProfession(
		this.name,
		'en',
		function (data) {
			var classData = data;
			_this.weapons = data.weapons;
			for (var i = 0; i < classData.specializations.length; i++) {
				var speID = classData.specializations[i];
				FW_GW2().getSpecialization(
					speID,
					'en',
					function (data) {
						var specializationData = data;
						_this.specializations[specializationData.name] =
							specializationData.id;
						for (var j = 0; j < specializationData.major_traits.length; j++) {
							var traitID = specializationData.major_traits[j];
							FW_GW2().getTrait(
								traitID,
								'en',
								function (data) {
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
					function (data) {
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
	new Profession('Guardian', 'Heavy'),
	new Profession('Warrior', 'Heavy'),
	new Profession('Revenant', 'Heavy'),
	new Profession('Necromancer', 'Light'),
	new Profession('Elementalist', 'Light'),
	new Profession('Mesmer', 'Light'),
	new Profession('Ranger', 'Medium'),
	new Profession('Thief', 'Medium'),
	new Profession('Engineer', 'Medium')
];

var timeout = 3000;

var createDLForClasses = function () {


	var createDL = function (json) {
		var blob = new Blob([json], { type: "application/json" });
		var url = URL.createObjectURL(blob);

		var a = document.createElement('a');
		a.download = "professions.js";
		a.href = url;
		a.textContent = "Download " + a.download;

		document.getElementById('content').appendChild(a);
	};


	var doAPI = function (i) {
		window.setTimeout(function () {
			var myClass = myClasses[i];
			myClass.buildFromAPI();
			console.log("building class for " + myClass.name);
		}, i * timeout);
	};


	for (var i = 0; i < myClasses.length; i++) {
		doAPI(i);
	}
	window.setTimeout(function () {
		var str = "";
		for (var j = 0; j < myClasses.length; j++) {
			var myClass = myClasses[j];
			str += "const " + myClass.name + " = " + JSON.stringify(myClass) + "; \n";
		}
		createDL(str);
	}, (myClasses.length + 1) * timeout);
};


var createDLForStats = function () {
	var errorFunc = function () { };
	var statstoDL = {"": -1};

    FW_GW2().getItemstats(function (data) {
        var statData = data;
		console.log("starting getting stats");

        for (var i = 0; i < data.length; i++) {
            FW_GW2().getItemstat(statData[i], 'en', function (data) {
				if (!data.name || data.name.length === 0 || !data.attributes) {
					return;
				}
				var attributes = data.attributes;
				for (var k in attributes) {
				  if (attributes.hasOwnProperty(k)) {
				    if (attributes[k] === 0) {
				      return;
				    }
				  }
				}
				statstoDL[data.name] = data.id;
				console.log("got " + data.name);
			}, errorFunc);
		}
	}, errorFunc);

	window.setTimeout(function () {
		var str = JSON.stringify(statstoDL);
		str = "const stats = " + str + "; \n";
		console.log("total " + str);
		var blob = new Blob([str], { type: "application/json" });
		var url = URL.createObjectURL(blob);

		var a = document.createElement('a');
		a.download = "stats.js";
		a.href = url;
		a.textContent = "Download " + a.download;

		document.getElementById('content').appendChild(a);
	}, 2 * timeout);
}

var createDLForPets = function () {
	var petsToDL = {};
	var doPet = function (i) {
		FW_GW2().getPet(i, "en", function (data) {
			if (data.name) {
				console.log("got " + data.name);
				petsToDL[data.name] = { id: data.id, icon: data.icon };
			}
		}, errorFunc);
	}
	FW_GW2().getPets(function (data) {
		var petData = data;
		console.log("starting getting pets");
		for (var i = 0; i < petData.length; i++) {
			doPet(petData[i]);
		}
	}, errorFunc);

	window.setTimeout(function () {
		var str = JSON.stringify(petsToDL);
		str = "var pets = " + str + "; \n";
		console.log("total " + str);
		var blob = new Blob([str], { type: "application/json" });
		var url = URL.createObjectURL(blob);

		var a = document.createElement('a');
		a.download = "pets.js";
		a.href = url;
		a.textContent = "Download " + a.download;

		document.getElementById('content').appendChild(a);
	}, 10000);
}
