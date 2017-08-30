var Specialization = function(id, traits) {
    this.traits = traits;
    this.id = id;
};

var Class = function(specializations, skills) {
    this.specializations = {};
    for (var i = 0; i < specializations.length; i++) {
        var spe = specializations[i];
        this.specializations[spe.name] = new Specialization(spe.id, spe.traits)
    }
    this.skills = skills;
};

Class.prototype.getSkill = function(name) {
    return this.skills[name] ? this.skills[name] : 0;
};

Class.prototype.getSpecialization = function(name) {
    return this.specializations[name] ? this.specializations[name].id : 0;
};

Class.prototype.getTrait = function(name) {
    for (var spe in this.specializations) {
        if (this.specializations.hasOwnProperty(spe)) {
            if (this.specializations[spe].traits[name]) {
                return this.specializations[spe].traits[name];
            }
        }
    }
    return 0;
};