document.GW2A_EMBED_OPTIONS = {
  lang: 'fr',
};

var DOMContentLoaded_event = document.createEvent("Event");
DOMContentLoaded_event.initEvent("DOMContentLoaded", true, true);

function readSpecializations(build) {
  var divToAdd = '<div spe paddingTop center data-armory-embed="specializations" ';
  var speIDS = 'data-armory-ids="';
  var totalTraits = "";
  var specializations = build.specializations;
  var speL = specializations.length;
  for (var i = 0; i < speL; i++) {
    var specialization = specializations[i];
    var speID = build.class.specializations[specialization.name];
    speIDS += speID + ",";
    var traits = "data-armory-" + speID + '-traits="';
    var traitL = specialization.traits.length;
    for (var j = 0; j < traitL; j++) {
      traits += build.class.traits[specialization.traits[j]] + ",";
    }
    traits = traits.slice(0,-1) + '" ';
    totalTraits += traits;
  }
  speIDS = speIDS.slice(0,-1) + '" ';
  divToAdd += speIDS;
  divToAdd += totalTraits;
  divToAdd += "></div>";
  return divToAdd;
};

function readSkills(build) {
  var divToAdd = '<div skills paddingTop center data-armory-embed="skills" ';
  var skillIDS = 'data-armory-ids="';
  for (var i = 0; i < build.skills.length; i++) {
    var skillID = build.class.skills[build.skills[i]];
    skillIDS += skillID + ",";
  }
  skillIDS = skillIDS.slice(0,-1) + '" ';
  divToAdd += skillIDS;
  divToAdd += 'data-armory-size="80" ';
  divToAdd += 'data-armory-blank-text="Au choix ou voir avec l\'autre classe jouant le même build" ';
  divToAdd += "></div>";
  return divToAdd;
};

function readTrinket(build) {
  var divToAdd = '<div trinket paddingTop center data-armory-embed="items" ';
  var trinketIDS = 'data-armory-ids="';
  var totalStats = "";

  for (var i = 0; i < build.trinket.length; i++) {
    var trinketValue = build.trinket[i];
    var trId = trinket[trinketValue.slot];
    var stat = stats[trinketValue.stat];
    trinketIDS += trId + ",";
    totalStats += 'data-armory-'+ trId +'-stat="' + stat +'" ';
  }
  trinketIDS = trinketIDS.slice(0,-1) + '" ';
  divToAdd += totalStats;
  divToAdd += trinketIDS;  
  divToAdd += 'data-armory-size="70" ';
  divToAdd += "></div>";
  return divToAdd;
};

function displayBuild(divID) {
  var div = $(divID);
  var visibility = div.attr("visibility") === "true";
  div.css("display", "block");
  if (visibility) {
    div.hide(100);
    div.attr("visibility", "false");
  } else {
    div.show(100);
    div.attr("visibility", "true");
  }
  var init = div.attr("init") === "true";
  if (!init) {
    var build = builds[divID];
    div.append(readSpecializations(build));
    div.append(readSkills(build));
    div.append(readTrinket(build));
    div.append('<script async src="https://gw2armory.com/gw2aEmbeds.js"></script>');
    window.document.dispatchEvent(DOMContentLoaded_event);
    div.attr("init", "true");
  }
};
