define(
  ["professionBuilds/dataBuilds", "professionBuilds/professions/total"],
  function(buildData, total) {
    "use strict";
    document.GW2A_EMBED_OPTIONS = {
      lang: "fr"
    };

    var builds = buildData.builds;

    var nBox = 0;

    function traitBox(div, build) {
      var traitBoxId = "traitBox" + nBox++;
      div.append("<div id='" + traitBoxId + "' traitBox></div>");
      var traitDiv = $("#" + traitBoxId);
      traitDiv.append("<div center bold>Aptitudes</div>");
      traitDiv.append(build.getSpecializations());
    }

    function skillBox(div, build) {
      var skillBoxId = "skillBox" + nBox++;
      div.append("<div id='" + skillBoxId + "' skillBox></div>");
      var skillDiv = $("#" + skillBoxId);
      skillDiv.append("<div center bold>Compétences</div>");
      var skills = build.getSkills();    
      var skillListID = "skillList" + nBox++;
      skillDiv.append("<div id='" + skillListID + "' skillList></div>");
      var skillListDiv = $("#" + skillListID)
      skillListDiv.append(skills.heal);
      skillListDiv.append(skills.utilities);
      skillListDiv.append(skills.elite);

      skillDiv.append(build.getPets());
    }

    function armorBox(equipementDiv, build) {
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
    }

    function weaponsBox(wepTrinketDiv, build) {
      wepTrinketDiv.append("<div center bold>Armes</div>");
      var wepsBoxId = "wepsBox" + nBox++;
      wepTrinketDiv.append("<div id='" + wepsBoxId + "' wepsBox></div>");
      var wepsBox = $("#" + wepsBoxId);
      var wepBox1Id = "wepBox1" + nBox++;
      
      wepsBox.append("<div id='" + wepBox1Id + "' wepBox1></div>");
      var wepBox1 = $("#" + wepBox1Id);
      if (build.wep2 !== null) {
        wepBox1.append("<div center bold>Set 1</div>");
      }
      var wep1 = build.getWeapon1();
      wepBox1.append(wep1.wep);
      wepBox1.append(wep1.sig);
      if (build.wep2 !== null) {
        var wepBox2Id = "wepBox2" + nBox++;
        wepsBox.append("<div id='" + wepBox2Id + "' wepBox2></div>");
        var wepBox2 = $("#" + wepBox2Id);
        wepBox2.append("<div center bold>Set 2</div>");      
        var wep2 = build.getWeapon2();          
        wepBox2.append(wep2.wep);
        wepBox2.append(wep2.sig);
      }     
    }

    function trinketBox(wepTrinketDiv, build) {
      var trinketBoxId = "trinketBox" + nBox++;
      wepTrinketDiv.append("<div id='" + trinketBoxId + "' trinketBox></div>");
      var trinket = build.getTrinket();
      $("#" + trinketBoxId).append(trinket.BA);
      $("#" + trinketBoxId).append(trinket.AR);
    }

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
      if (!init && builds.has(buildId)) {
        var build = builds.get(buildId);
        traitBox(div, build);
        skillBox(div, build);
        // equipement
        var equipementBoxId = "equipementBox" + nBox++;
        div.append("<div id='" + equipementBoxId + "' equipementBox></div>");
        var equipementDiv = $("#" + equipementBoxId);
        {
          armorBox(equipementDiv, build);
          var wepTrinketTitleId = "wepTrinketTitle" + nBox++;
          equipementDiv.append(
            "<div id='" + wepTrinketTitleId + "' wepTrinketTitle></div>"
          );
          var wepTrinketDiv = $("#" + wepTrinketTitleId);
          wepTrinketDiv.append("<div center bold>Bijoux</div>");
          {
            trinketBox(wepTrinketDiv, build);
            weaponsBox(wepTrinketDiv, build);
            // Food
            wepTrinketDiv.append("<div center bold>Consommables</div>");
            wepTrinketDiv.append(build.getConsumable());
          }
        }

        div.append(
          '<script async src="https://unpkg.com/armory-embeds/armory-embeds.js"></script>'
        );
        div.attr("init", "true");
      }
    }

    window.displayBuild = displayBuild;
  }
);
