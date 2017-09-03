var errorFunc = function(data) {
  console.error("oh shit");
};

var Class = function(name) {
  this.name = name;
  this.specializations = {};
  this.traits = {};
  this.skills = {};
};

Class.prototype.buildFromAPI = function() {
  var _this = this;
  FW_GW2().getProfession(
    this.name,
    "en",
    function(data) {
      var classData = data;
      for (var i = 0; i < classData.specializations.length; i++) {
        var speID = classData.specializations[i];
        FW_GW2().getSpecialization(
          speID,
          "en",
          function(data) {
            var specializationData = data;
            _this.specializations[specializationData.name] =
              specializationData.id;
            for (var j = 0; j < specializationData.major_traits.length; j++) {
              var traitID = specializationData.major_traits[j];
              FW_GW2().getTrait(
                traitID,
                "en",
                function(data) {
                  var traitData = data;
                  _this.traits[traitData.name] = traitData.id;
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
          "en",
          function(data) {
            _this.skills[data.name] = data.id;
          },
          errorFunc
        );
      }
    },
    errorFunc
  );
};

var myClasses = [
  new Class("Guardian"),
  new Class("Warrior"),
  new Class("Revenant"),
  new Class("Necromancer"),
  new Class("Elementalist"),
  new Class("Mesmer"),
  new Class("Ranger"),
  new Class("Thief"),
  new Class("Engineer")
];
