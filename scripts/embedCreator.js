document.GW2A_EMBED_OPTIONS = {
  lang: 'en',
};

var DOMContentLoaded_event = document.createEvent("Event");
DOMContentLoaded_event.initEvent("DOMContentLoaded", true, true);

function readSpecializations(build) {
  var divToAdd = '<div spe paddingTop data-armory-embed="specializations" ';
  var speIDS = 'data-armory-ids="';
  var totalTraits = "";
  var specializations = build.specializations;
  var speL = specializations.length;
  for (var i = 0; i < speL; i++) {
    var specialization = specializations[i];
    var speID = build.class.specializations[specialization.name] ? build.class.specializations[specialization.name] : -1;
    speIDS += speID + ",";
    var traits = "data-armory-" + speID + '-traits="';
    var traitL = specialization.traits.length;
    for (var j = 0; j < traitL; j++) {
      var traitID = build.class.traits[specialization.traits[j]] ? build.class.traits[specialization.traits[j]] : -1;
      traits += traitID + ",";
    }
    traits = traits.slice(0, -1) + '" ';
    totalTraits += traits;
  }
  speIDS = speIDS.slice(0, -1) + '" ';
  divToAdd += speIDS;
  divToAdd += totalTraits;
  divToAdd += "></div>";
  return divToAdd;
};

function readPets(build) {
  var divToAdd = '<div pets center> ';
  for (var i = 0; i < build.pets.length; i++) {  
    var petData= pets[build.pets[i]] ? pets[build.pets[i]] : null;
    if (petData) {
      var img = '<img small src="';
      img += petData.icon + '" ';
      img += 'title="'+ build.pets[i] + '">'
      divToAdd += img;
    }
    
  }
  divToAdd += " </div>";
  return divToAdd;
};

function readSkills(build) {
  var divToAdd = '<div skills paddingTop center data-armory-embed="skills" ';
  var skillIDS = 'data-armory-ids="';
  for (var i = 0; i < build.skills.length; i++) {
    var skillID = build.class.skills[build.skills[i]] ? build.class.skills[build.skills[i]] : -1;
    skillIDS += skillID + ",";
  }
  skillIDS = skillIDS.slice(0, -1) + '" ';
  divToAdd += skillIDS;
  divToAdd += 'data-armory-size="60" ';
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
    var trId = trinket[trinketValue.slot] ? trinket[trinketValue.slot] : -1;
    trinketIDS += trId + ",";
    if (trId !== -1) {
      var stat = stats[trinketValue.stat] ? stats[trinketValue.stat] : -1;
      totalStats += 'data-armory-' + trId + '-stat="' + stat + '" ';
    }

  }
  trinketIDS = trinketIDS.slice(0, -1) + '" ';
  divToAdd += totalStats;
  divToAdd += trinketIDS;
  divToAdd += 'data-armory-size="60" ';
  divToAdd += "></div>";
  return divToAdd;
};

function readArmor(build) {
  var divToAdd = '<div armor paddingTop center data-armory-embed="items" ';
  var runeDivToAdd = '<div paddingTop center data-armory-embed="items" ';
  var armorIDS = 'data-armory-ids="';
  var runeIDS = 'data-armory-ids="';
  var totalStats = "";
  var armorToUse = armor[build.class.armor];
  for (var i = 0; i < build.armor.length; i++) {
    var armorValue = build.armor[i];
    var arId = armorToUse[armorValue.slot] ? armorToUse[armorValue.slot] : -1;
    armorIDS += arId + ",";
    if (arId !== -1) {
      var runeID = runes[armorValue.rune] ? runes[armorValue.rune] : -1;
      var stat = stats[armorValue.stat] ? stats[armorValue.stat] : -1;
      runeIDS += runeID + ",";
      totalStats += 'data-armory-' + arId + '-stat="' + stat + '" ';
    }
  }
  armorIDS = armorIDS.slice(0, -1) + '" ';
  runeIDS = runeIDS.slice(0, -1) + '" ';
  divToAdd += totalStats;
  divToAdd += armorIDS;
  runeDivToAdd += runeIDS;
  divToAdd += 'data-armory-size="60" ';
  divToAdd += "></div>";
  runeDivToAdd += 'data-armory-size="60" ';
  runeDivToAdd += "></div>";
  return { armor: divToAdd, rune: runeDivToAdd };
};

function readWeapon1(build) {
  var divToAdd = '<div weapons1 paddingTop left data-armory-embed="items" ';
  var sigilDivToAdd = '<div sigil1 paddingTop left data-armory-embed="items" ';
  var ids = 'data-armory-ids="';
  var sigilIDS = 'data-armory-ids="';
  var totalStats = "";
  var mh2Hand = false;
  for (var i = 0; i < build.weapons.length; i++) {
    var weaponValue = build.weapons[i];
    var wepId = weapons[weaponValue.type] ? weapons[weaponValue.type] : -1;
    if (weaponValue.slot === "mh1" || weaponValue.slot === "oh1") {
      ids += wepId + ",";
      if (wepId !== -1) {
        var stat = stats[weaponValue.stat] ? stats[weaponValue.stat] : -1;
        totalStats += 'data-armory-' + wepId + '-stat="' + stat + '" ';
        mh2Hand = weaponValue.sigils.length > 1;
        for (var j = 0; j < weaponValue.sigils.length; j++) {
          var sigilValue = weaponValue.sigils[j];
          sigilId = sigils[sigilValue] ? sigils[sigilValue] : -1;
          sigilIDS += sigilId + ",";
        }
      } else if (weaponValue.slot === "mh1") {
        sigilIDS += "-1" + ",";
      } else if (!mh2Hand && weaponValue.slot === "oh1") {
        sigilIDS += "-1" + ",";
      }
    }
  }
  ids = ids.slice(0, -1) + '" ';
  divToAdd += totalStats;
  divToAdd += ids;
  divToAdd += 'data-armory-size="60" ';
  divToAdd += 'data-armory-blank-text="Vide" ';
  divToAdd += "></div>";

  sigilIDS = sigilIDS.slice(0, -1) + '" ';
  sigilDivToAdd += sigilIDS;
  sigilDivToAdd += 'data-armory-size="60" ';
  sigilDivToAdd += 'data-armory-blank-text="Vide" ';
  sigilDivToAdd += "></div>";

  return { wep: divToAdd, sig: sigilDivToAdd };
};

function readWeapon2(build) {
  var divToAdd = '<div weapons2 paddingTop left data-armory-embed="items" ';
  var sigilDivToAdd = '<div sigil2 paddingTop left data-armory-embed="items" ';
  var ids = 'data-armory-ids="';
  var sigilIDS = 'data-armory-ids="';
  var totalStats = "";
  var mh2Hand = false;
  for (var i = 0; i < build.weapons.length; i++) {
    var weaponValue = build.weapons[i];
    var wepId = weapons[weaponValue.type] ? weapons[weaponValue.type] : -1;
    if (weaponValue.slot === "mh2" || weaponValue.slot === "oh2") {
      ids += wepId + ",";
      if (wepId !== -1) {
        var stat = stats[weaponValue.stat] ? stats[weaponValue.stat] : -1;
        totalStats += 'data-armory-' + wepId + '-stat="' + stat + '" ';
        mh2Hand = weaponValue.sigils.length > 1;
        for (var j = 0; j < weaponValue.sigils.length; j++) {
          var sigilValue = weaponValue.sigils[j];
          sigilId = sigils[sigilValue] ? sigils[sigilValue] : -1;
          sigilIDS += sigilId + ",";
        }
      } else if (weaponValue.slot === "mh2") {
        sigilIDS += "-1" + ",";
      } else if (!mh2Hand && weaponValue.slot === "oh2") {
        sigilIDS += "-1" + ",";
      }
    }
  };

  ids = ids.slice(0, -1) + '" ';
  divToAdd += totalStats;
  divToAdd += ids;
  divToAdd += 'data-armory-size="60" ';
  divToAdd += 'data-armory-blank-text="Vide" ';
  divToAdd += "></div>";

  sigilIDS = sigilIDS.slice(0, -1) + '" ';
  sigilDivToAdd += sigilIDS;
  sigilDivToAdd += 'data-armory-size="60" ';
  sigilDivToAdd += 'data-armory-blank-text="Vide" ';
  sigilDivToAdd += "></div>";

  return { wep: divToAdd, sig: sigilDivToAdd };
};

function readFoods(build) {
  var divToAdd = '<div food paddingTop center data-armory-embed="items" ';
  var foodIDS = 'data-armory-ids="';
  for (var i = 0; i < build.food.length; i++) {
    var foodID = foods[build.food[i]] ? foods[build.food[i]] : -1;
    foodIDS += foodID + ",";
  }
  foodIDS = foodIDS.slice(0, -1) + '" ';
  divToAdd += foodIDS;
  divToAdd += 'data-armory-size="60" ';
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
    if (build.pets) {
      div.append(readPets(build));
    }
    div.append(readTrinket(build));
    var equipement = readArmor(build);
    div.append(equipement.armor);
    div.append(equipement.rune);
    var wep1 = readWeapon1(build);
    var wep2 = readWeapon2(build)
    div.append(wep1.wep);
    div.append(wep2.wep);
    div.append(wep1.sig);
    div.append(wep2.sig);
    div.append(readFoods(build));
    div.append('<script async src="https://gw2armory.com/gw2aEmbeds.js"></script>');
    //window.document.dispatchEvent(DOMContentLoaded_event);
    div.attr("init", "true");
  }
};
