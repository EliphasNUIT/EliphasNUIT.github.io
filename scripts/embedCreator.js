define(
    [
        "builds",
        "classBuilds/mesmer",
        "classBuilds/elementalist",
        "classBuilds/engineer",
        "classBuilds/guardian",
        "classBuilds/necromancer",
        "classBuilds/ranger",
        "classBuilds/revenant",
        "classBuilds/thief",
        "classBuilds/warrior"
    ],
    function(buildData, mesmer, elementalist, engineer, guardian, necromancer, ranger, revenant, thief, warrior) {
        "use strict";
        document.GW2A_EMBED_OPTIONS = {
            lang: "fr"
        };

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
            if (!init && buildData.builds.has(buildId)) {
                var build = buildData.builds.get(buildId);
                //traits
                var traitBoxId = "traitBox" + nBox++;
                div.append("<div id='" + traitBoxId + "' traitBox></div>");
                var traitDiv = $("#" + traitBoxId);
                traitDiv.append("<div center bold>Aptitudes</div>");
                traitDiv.append(build.getSpecializations());
                // skills
                var skillBoxId = "skillBox" + nBox++;
                div.append("<div id='" + skillBoxId + "' skillBox></div>");
                var skillDiv = $("#" + skillBoxId);
                skillDiv.append("<div center bold>Compétences</div>");
                skillDiv.append(build.getSkills());
                skillDiv.append(build.getPets());
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
                var equipement = build.getArmor();
                armorBox.append(equipement.armor);
                armorBox.append(equipement.rune);
                // Trinkets
                var wepTrinketTitleId = "wepTrinketTitle" + nBox++;
                equipementDiv.append("<div id='" + wepTrinketTitleId + "' wepTrinketTitle></div>");
                var wepTrinketDiv = $("#" + wepTrinketTitleId);
                wepTrinketDiv.append("<div center bold>Bijoux</div>");
                var trinketBoxId = "trinketBox" + nBox++;
                wepTrinketDiv.append("<div id='" + trinketBoxId + "' trinketBox></div>");
                $("#" + trinketBoxId).append(build.getBackAccessories());
                $("#" + trinketBoxId).append(build.getAmuletRings());
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
                var wep1 = build.getWeapon1();
                var wep2 = build.getWeapon2();
                wepBox1.append(wep1.wep);
                wepBox1.append(wep1.sig);
                wepBox2.append(wep2.wep);
                wepBox2.append(wep2.sig);
                // Food
                wepTrinketDiv.append("<div center bold>Consommables</div>");
                wepTrinketDiv.append(build.getFoods());
                div.append('<script async src="https://unpkg.com/armory-embeds/armory-embeds.js"></script>');
                //window.document.dispatchEvent(DOMContentLoaded_event);
                div.attr("init", "true");
            }
        }
        
        window.displayBuild = displayBuild;
    }
);
