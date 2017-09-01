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
    return this.skills[name] ? this.skills[name] : -1;
};

Class.prototype.getSpecialization = function(name) {
    return this.specializations[name] ? this.specializations[name].id : -1;
};

Class.prototype.getTrait = function(name) {
    for (var spe in this.specializations) {
        if (this.specializations.hasOwnProperty(spe)) {
            if (this.specializations[spe].traits[name]) {
                return this.specializations[spe].traits[name];
            }
        }
    }
    return -1;
};

var DOMContentLoaded_event = document.createEvent("Event");
DOMContentLoaded_event.initEvent("DOMContentLoaded", true, true);


builds = {};


function readSpecializations(build) {
    var divToAdd = "<div spe data-armory-embed=\"specializations\" ";
    var speIDS = "data-armory-ids=\"";
    var totalTraits = "";
    var specializations = build.specializations;
    var speL = specializations.length;
    for (var i = 0; i < speL; i++) {
        var specialization = specializations[i];
        var speID = build.class.getSpecialization(specialization.name);
        speIDS += speID;
        if (i < speL - 1) {
            speIDS += ",";
        }
        var traits = "data-armory-" + speID + "-traits=\"";
        var traitL = specialization.traits.length
        for (var j = 0; j < traitL; j++) {
            traits += build.class.getTrait(specialization.traits[j]);
            if (j < traitL - 1) {
                traits += ",";
            }
        }
        traits += "\" ";
        totalTraits += traits;
    }
    speIDS += "\" ";
    divToAdd += speIDS;
    divToAdd += totalTraits;
    divToAdd += "></div>";
    return divToAdd;
};

function displayBuild(divID) {
    var div = $(divID);
    var visibility = div.attr("visibility") === "true";
    div.css("display", "block");
    if (visibility) {
        div.hide(100);
        div.attr("visibility", "false")
    } else {
        div.show(100);
        div.attr("visibility", "true")
    }
    var init = div.attr("init") === "true";
    if (!init) {
        var build = builds[divID];
        div.append(readSpecializations(build));
        window.document.dispatchEvent(DOMContentLoaded_event);
        div.attr("init", "true");
    }
};