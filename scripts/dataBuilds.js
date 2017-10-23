define(["utilities/items", "utilities/classes", "utilities/stats", "utilities/pets"], function(items, classes, stats, pets) {
    "use strict";
    
    var sigils = items.sigils;
    var weapons = items.weapons;
    var trinket = items.trinket;
    var armor = items.armor;
    var runes = items.runes;
    var foods = items.foods;

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
    }

    var builds = new Map();

    var mobile = detectmob();

    var build = function(params) {
        this.class = params.class ? params.class : null;
        this.specializations = params.specializations ? params.specializations : [];
        this.skills = params.skills ? params.skills : [];
        this.pets = params.pets ? params.pets : [];
        this.armor = params.armor ? params.armor : [];
        this.weapons = params.weapons ? params.weapons : [];
        this.trinket = params.trinket ? params.trinket : [];
        this.food = params.food ? params.food : [];
    };

    build.prototype.getSpecializations = function() {
        var divToAdd = '<div trait data-armory-embed="specializations" ';
        var speIDS = 'data-armory-ids="';
        var totalTraits = "";
        var specializations = this.specializations;
        var speL = specializations.length;
        for (var i = 0; i < speL; i++) {
            var specialization = specializations[i];
            var speID = this.class.specializations[specialization.name]
                ? this.class.specializations[specialization.name]
                : -1;
            speIDS += speID + ",";
            var traits = "data-armory-" + speID + '-traits="';
            var traitL = specialization.traits.length;
            for (var j = 0; j < traitL; j++) {
                var traitID = this.class.traits[specialization.traits[j]]
                    ? this.class.traits[specialization.traits[j]]
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
    };

    build.prototype.getPets = function() {
        var divToAdd = "<div center> ";
        for (var i = 0; i < this.pets.length; i++) {
            var petData = pets[this.pets[i]] ? pets[this.pets[i]] : null;
            if (petData) {
                var img = '<img small src="';
                img += petData.icon + '" ';
                img += 'title="' + this.pets[i] + '">';
                divToAdd += img;
            }
        }
        divToAdd += " </div>";
        return divToAdd;
    };

    build.prototype.getSkills = function() {
        var divToAdd = '<div center data-armory-embed="skills" ';
        var skillIDS = 'data-armory-ids="';
        for (var i = 0; i < this.skills.length; i++) {
            var skillID = this.class.skills[this.skills[i]] ? this.class.skills[this.skills[i]] : -1;
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
    };

    build.prototype.getAmuletRings = function() {
        var divToAdd = '<div center data-armory-embed="items" ';
        var trinketIDS = 'data-armory-ids="';
        var totalStats = "";
        for (var i = 0; i < this.trinket.length; i++) {
            var trinketValue = this.trinket[i];
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
    };

    build.prototype.getBackAccessories = function() {
        var divToAdd = '<div center data-armory-embed="items" ';
        var trinketIDS = 'data-armory-ids="';
        var totalStats = "";
        for (var i = 0; i < this.trinket.length; i++) {
            var trinketValue = this.trinket[i];
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
    };

    build.prototype.getArmor = function() {
        var divToAdd = '<div center data-armory-embed="items" ';
        var runeDivToAdd = '<div center data-armory-embed="items" ';
        var armorIDS = 'data-armory-ids="';
        var runeIDS = 'data-armory-ids="';
        var totalStats = "";
        var armorToUse = armor[this.class.armor];
        for (var i = 0; i < this.armor.length; i++) {
            var armorValue = this.armor[i];
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
    };

    build.prototype.getWeapon1 = function() {
        var divToAdd = '<div center data-armory-embed="items" ';
        var sigilDivToAdd = '<div center data-armory-embed="items" ';
        var ids = 'data-armory-ids="';
        var sigilIDS = 'data-armory-ids="';
        var totalStats = "";
        var mh2Hand = false;
        for (var i = 0; i < this.weapons.length; i++) {
            var weaponValue = this.weapons[i];
            var wepId = weapons[weaponValue.type] ? weapons[weaponValue.type] : -1;
            if (weaponValue.slot === "mh1" || weaponValue.slot === "oh1") {
                ids += wepId + ",";
                if (wepId !== -1) {
                    var stat = stats[weaponValue.stat] ? stats[weaponValue.stat] : -1;
                    totalStats += "data-armory-" + wepId + '-stat="' + stat + '" ';
                    mh2Hand = weaponValue.sigils.length > 1;
                    for (var j = 0; j < weaponValue.sigils.length; j++) {
                        var sigilValue = weaponValue.sigils[j];
                        var sigilId = sigils[sigilValue] ? sigils[sigilValue] : -1;
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
    };

    build.prototype.getWeapon2 = function() {
        var divToAdd = '<div center data-armory-embed="items" ';
        var sigilDivToAdd = '<div center data-armory-embed="items" ';
        var ids = 'data-armory-ids="';
        var sigilIDS = 'data-armory-ids="';
        var totalStats = "";
        var mh2Hand = false;
        for (var i = 0; i < this.weapons.length; i++) {
            var weaponValue = this.weapons[i];
            var wepId = weapons[weaponValue.type] ? weapons[weaponValue.type] : -1;
            if (weaponValue.slot === "mh2" || weaponValue.slot === "oh2") {
                ids += wepId + ",";
                if (wepId !== -1) {
                    var stat = stats[weaponValue.stat] ? stats[weaponValue.stat] : -1;
                    totalStats += "data-armory-" + wepId + '-stat="' + stat + '" ';
                    mh2Hand = weaponValue.sigils.length > 1;
                    for (var j = 0; j < weaponValue.sigils.length; j++) {
                        var sigilValue = weaponValue.sigils[j];
                        var sigilId = sigils[sigilValue] ? sigils[sigilValue] : -1;
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
    };

    build.prototype.getFoods = function() {
        var divToAdd = '<div center data-armory-embed="items" ';
        var foodIDS = 'data-armory-ids="';
        for (var i = 0; i < this.food.length; i++) {
            var foodID = foods[this.food[i]] ? foods[this.food[i]] : -1;
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
    };

    return {
        build: build,
        builds: builds
    };
});
