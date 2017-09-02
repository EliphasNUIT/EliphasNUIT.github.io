

builds = {};


var DOMContentLoaded_event = document.createEvent("Event");
DOMContentLoaded_event.initEvent("DOMContentLoaded", true, true);

function readSpecializations(build) {
    var divToAdd = "<div spe data-armory-embed=\"specializations\" ";
    var speIDS = "data-armory-ids=\"";
    var totalTraits = "";
    var specializations = build.specializations;
    var speL = specializations.length;
    for (var i = 0; i < speL; i++) {
        var specialization = specializations[i];
        var speID = build.class.specializations[specialization.name];
        speIDS += speID;
        if (i < speL - 1) {
            speIDS += ",";
        }
        var traits = "data-armory-" + speID + "-traits=\"";
        var traitL = specialization.traits.length
        for (var j = 0; j < traitL; j++) {
            traits += build.class.traits[specialization.traits[j]];
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