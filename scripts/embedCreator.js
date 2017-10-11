document.GW2A_EMBED_OPTIONS = {
    lang: "fr"
};

function detectmob() {
    if (
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)
    ) {
        return true;
    } else {
        return false;
    }
};

var mobile = detectmob();

function readSpecializations(build) {
    var divToAdd = '<div spe data-armory-embed="specializations" ';
    var speIDS = 'data-armory-ids="';
    var totalTraits = "";
    var specializations = build.specializations;
    var speL = specializations.length;
    for (var i = 0; i < speL; i++) {
        var specialization = specializations[i];
        var speID = build.class.specializations[specialization.name]
            ? build.class.specializations[specialization.name]
            : -1;
        speIDS += speID + ",";
        var traits = "data-armory-" + speID + '-traits="';
        var traitL = specialization.traits.length;
        for (var j = 0; j < traitL; j++) {
            var traitID = build.class.traits[specialization.traits[j]]
                ? build.class.traits[specialization.traits[j]]
                : -1;
            traits += traitID + ",";
        }
        traits = traits.slice(0, -1) + '" ';
        totalTraits += traits;
    }
    speIDS = speIDS.slice(0, -1) + '" ';
    divToAdd += speIDS;
    divToAdd += totalTraits;
    if (mobile) {
        divToAdd += 'data-armory-size="130" ';
    } else {
        divToAdd += 'data-armory-size="70" ';
    }
    divToAdd += "></div>";
    return divToAdd;
}

function readPets(build) {
    var divToAdd = "<div center> ";
    for (var i = 0; i < build.pets.length; i++) {
        var petData = pets[build.pets[i]] ? pets[build.pets[i]] : null;
        if (petData) {
            var img = '<img small src="';
            img += petData.icon + '" ';
            img += 'title="' + build.pets[i] + '">';
            divToAdd += img;
        }
    }
    divToAdd += " </div>";
    return divToAdd;
}

function readSkills(build) {
    var divToAdd = '<div center data-armory-embed="skills" ';
    var skillIDS = 'data-armory-ids="';
    for (var i = 0; i < build.skills.length; i++) {
        var skillID = build.class.skills[build.skills[i]] ? build.class.skills[build.skills[i]] : -1;
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
}

function readAmuletRings(build) {
    var divToAdd = '<div center data-armory-embed="items" ';
    var trinketIDS = 'data-armory-ids="';
    var totalStats = "";
    for (var i = 0; i < build.trinket.length; i++) {
        var trinketValue = build.trinket[i];
        if (trinketValue.slot === "back" || trinketValue.slot === "earring2" || trinketValue.slot === "earring1") {
            continue;
        }
        var trId = trinket[trinketValue.slot] ? trinket[trinketValue.slot] : -1;
        trinketIDS += trId + ",";
        if (trId !== -1) {
            var stat = stats[trinketValue.stat] ? stats[trinketValue.stat] : -1;
            totalStats += "data-armory-" + trId + '-stat="' + stat + '" ';
        }
    }
    trinketIDS = trinketIDS.slice(0, -1) + '" ';
    divToAdd += totalStats;
    divToAdd += trinketIDS;
    if (mobile) {
        divToAdd += 'data-armory-size="130" ';
    } else {
        divToAdd += 'data-armory-size="60" ';
    }
    //divToAdd += 'data-armory-inline-text="wiki" ';
    divToAdd += "></div>";
    return divToAdd;
}

function readBackAccessories(build) {
    var divToAdd = '<div center data-armory-embed="items" ';
    var trinketIDS = 'data-armory-ids="';
    var totalStats = "";
    for (var i = 0; i < build.trinket.length; i++) {
        var trinketValue = build.trinket[i];
        if (trinketValue.slot === "amulet" || trinketValue.slot === "ring2" || trinketValue.slot === "ring1") {
            continue;
        }
        var trId = trinket[trinketValue.slot] ? trinket[trinketValue.slot] : -1;
        trinketIDS += trId + ",";
        if (trId !== -1) {
            var stat = stats[trinketValue.stat] ? stats[trinketValue.stat] : -1;
            totalStats += "data-armory-" + trId + '-stat="' + stat + '" ';
        }
    }
    trinketIDS = trinketIDS.slice(0, -1) + '" ';
    divToAdd += totalStats;
    divToAdd += trinketIDS;
    if (mobile) {
        divToAdd += 'data-armory-size="130" ';
    } else {
        divToAdd += 'data-armory-size="60" ';
    }
    //divToAdd += 'data-armory-inline-text="wiki" ';
    divToAdd += "></div>";
    return divToAdd;
}

function readArmor(build) {
    var divToAdd = '<div center data-armory-embed="items" ';
    var runeDivToAdd = '<div center data-armory-embed="items" ';
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
            totalStats += "data-armory-" + arId + '-stat="' + stat + '" ';
        }
    }
    armorIDS = armorIDS.slice(0, -1) + '" ';
    runeIDS = runeIDS.slice(0, -1) + '" ';
    divToAdd += totalStats;
    divToAdd += armorIDS;
    runeDivToAdd += runeIDS;
    if (mobile) {
        divToAdd += 'data-armory-size="130" ';
    } else {
        divToAdd += 'data-armory-size="60" ';
    }
    //divToAdd += 'data-armory-inline-text="wiki" ';
    divToAdd += "></div>";
    if (mobile) {
        runeDivToAdd += 'data-armory-size="130" ';
    } else {
        runeDivToAdd += 'data-armory-size="60" ';
    }
    //runeDivToAdd += 'data-armory-inline-text="wiki" ';
    runeDivToAdd += "></div>";
    return { armor: divToAdd, rune: runeDivToAdd };
}

function readWeapon1(build) {
    var divToAdd = '<div center data-armory-embed="items" ';
    var sigilDivToAdd = '<div center data-armory-embed="items" ';
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
                totalStats += "data-armory-" + wepId + '-stat="' + stat + '" ';
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
    if (mobile) {
        divToAdd += 'data-armory-size="130" ';
    } else {
        divToAdd += 'data-armory-size="60" ';
    }
    divToAdd += 'data-armory-blank-text="Vide" ';
    //divToAdd += 'data-armory-inline-text="wiki" ';
    divToAdd += "></div>";

    sigilIDS = sigilIDS.slice(0, -1) + '" ';
    sigilDivToAdd += sigilIDS;
    if (mobile) {
        sigilDivToAdd += 'data-armory-size="130" ';
    } else {
        sigilDivToAdd += 'data-armory-size="60" ';
    }
    sigilDivToAdd += 'data-armory-blank-text="Vide" ';
    //sigilDivToAdd += 'data-armory-inline-text="wiki" ';
    sigilDivToAdd += "></div>";

    return { wep: divToAdd, sig: sigilDivToAdd };
}

function readWeapon2(build) {
    var divToAdd = '<div center data-armory-embed="items" ';
    var sigilDivToAdd = '<div center data-armory-embed="items" ';
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
                totalStats += "data-armory-" + wepId + '-stat="' + stat + '" ';
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
    }

    ids = ids.slice(0, -1) + '" ';
    divToAdd += totalStats;
    divToAdd += ids;
    if (mobile) {
        divToAdd += 'data-armory-size="130" ';
    } else {
        divToAdd += 'data-armory-size="60" ';
    }
    divToAdd += 'data-armory-blank-text="Vide" ';
    //divToAdd += 'data-armory-inline-text="wiki" ';
    divToAdd += "></div>";

    sigilIDS = sigilIDS.slice(0, -1) + '" ';
    sigilDivToAdd += sigilIDS;
    if (mobile) {
        sigilDivToAdd += 'data-armory-size="130" ';
    } else {
        sigilDivToAdd += 'data-armory-size="60" ';
    }
    sigilDivToAdd += 'data-armory-blank-text="Vide" ';
    //sigilDivToAdd += 'data-armory-inline-text="wiki" ';
    sigilDivToAdd += "></div>";

    return { wep: divToAdd, sig: sigilDivToAdd };
}

function readFoods(build) {
    var divToAdd = '<div center data-armory-embed="items" ';
    var foodIDS = 'data-armory-ids="';
    for (var i = 0; i < build.food.length; i++) {
        var foodID = foods[build.food[i]] ? foods[build.food[i]] : -1;
        foodIDS += foodID + ",";
    }
    foodIDS = foodIDS.slice(0, -1) + '" ';
    divToAdd += foodIDS;
    if (mobile) {
        divToAdd += 'data-armory-size="130" ';
    } else {
        divToAdd += 'data-armory-size="60" ';
    }
    divToAdd += "></div>";
    return divToAdd;
}

var nBox = 0;

function displayBuild(divID, buildId) {
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
        var build = builds[buildId];
        //traits
        var traitBoxId = "traitBox" + nBox++;
        div.append("<div id='" + traitBoxId + "' traitBox></div>");
        var traitDiv = $("#" + traitBoxId);
        traitDiv.append("<div center bold>Aptitudes</div>");
        traitDiv.append(readSpecializations(build));
        // skills
        var skillBoxId = "traitBox" + nBox++;
        div.append("<div id='" + skillBoxId + "' skillBox></div>");
        var skillDiv = $("#" + skillBoxId);
        skillDiv.append("<div center bold>Compétences</div>");
        skillDiv.append(readSkills(build));
        if (build.pets) {
            skillDiv.append(readPets(build));
        }
        // equipement
        var equipementBoxId = "equipementBox" + nBox++;
        div.append("<div id='" + equipementBoxId + "' equipementBox></div>");
        var equipementDiv = $("#" + equipementBoxId);
        // Armor
        var armorTitleId = "armorTitle" + nBox++;
        equipementDiv.append("<div id='" + armorTitleId + "' armorTitle></div>");
        var armorDiv = $("#" + armorTitleId);
        armorDiv.append("<div center bold>Armure</div>");
        var armorBoxId = "armorBox" + nBox++;
        armorDiv.append("<div id='" + armorBoxId + "' armorBox></div>");
        var armorBox = $("#" + armorBoxId);
        var equipement = readArmor(build);
        armorBox.append(equipement.armor);
        armorBox.append(equipement.rune);
        // Trinkets
        var wepTrinketTitleId = "wepTrinketTitle" + nBox++;
        equipementDiv.append("<div id='" + wepTrinketTitleId + "' wepTrinketTitle></div>");
        var wepTrinketDiv = $("#" + wepTrinketTitleId);
        wepTrinketDiv.append("<div center bold>Bijoux</div>");
        var trinketBoxId = "trinketBox" + nBox++;
        wepTrinketDiv.append("<div id='" + trinketBoxId + "' trinketBox></div>");
        $("#" + trinketBoxId).append(readBackAccessories(build));
        $("#" + trinketBoxId).append(readAmuletRings(build));
        // Weapons
        wepTrinketDiv.append("<div center bold>Armes</div>");
        var wepsBoxId = "wepsBox" + nBox++;
        wepTrinketDiv.append("<div id='" + wepsBoxId + "' wepsBox></div>");
        var wepsBox = $("#" + wepsBoxId);
        var wepBox1Id = "wepBox1" + nBox++;
        wepsBox.append("<div id='" + wepBox1Id + "' wepBox1></div>");
        var wepBox1 = $("#" + wepBox1Id);
        var wepBox2Id = "wepBox2" + nBox++;
        wepsBox.append("<div id='" + wepBox2Id + "' wepBox2></div>");
        var wepBox2 = $("#" + wepBox2Id);
        var wep1 = readWeapon1(build);
        var wep2 = readWeapon2(build);
        wepBox1.append(wep1.wep);
        wepBox1.append(wep1.sig);
        wepBox2.append(wep2.wep);
        wepBox2.append(wep2.sig);
        // Food
        wepTrinketDiv.append("<div center bold>Consommables</div>");
        wepTrinketDiv.append(readFoods(build));
        div.append('<script async src="https://unpkg.com/armory-embeds/armory-embeds.js"></script>');
        //window.document.dispatchEvent(DOMContentLoaded_event);
        div.attr("init", "true");
    }
}
