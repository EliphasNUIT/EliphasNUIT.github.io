define(
  ["professionBuilds/professionUtilities/stats", "professionBuilds/professionUtilities/items"],
  function(stats, items) {
    "use strict";
    var armor = items.armor;
    var runes = items.runes;

    var Armor = function(armorType) {
      this.armor = armor[armorType];

      this.helm = { stat: -1, rune: -1 };
      this.shoulders = { stat: -1, rune: -1 };
      this.coat = { stat: -1, rune: -1 };
      this.gloves = { stat: -1, rune: -1 };
      this.leggings = { stat: -1, rune: -1 };
      this.boots = { stat: -1, rune: -1 };
    };

    Armor.prototype.setSingleStat = function(stat) {
      this.setStats([stat,stat,stat,stat,stat,stat]);
    }

    Armor.prototype.setStats = function(armorStats) {
      if (armorStats.length !== 6) {
        console.warn("Warning: invalid parameters in Trinkek::setStats");
        return;
      }
      var slots = ["helm", "shoulders", "coat", "gloves", "leggings", "boots"];
      for (var i = 0; i < 6; i++) {
        var stat = stats[armorStats[i]];
        if (stat) {
          this[slots[i]].stat = stat;
        } else {
          console.warn("Warning: unknown stat " + armorStats[i]);
        }
      }
    };

    Armor.prototype.setSingleRune = function(rune) {
      var slots = ["helm", "shoulders", "coat", "gloves", "leggings", "boots"];
      var runeID = runes[rune];
      if (runeID) {
        for (var i = 0; i < 6; i++) {
          this[slots[i]].rune = runeID;
        }
      } else {
        console.warn("Warning: unknown rune " + rune);
      }
    };

    Armor.prototype.set42Rune = function(rune1, rune2) {
      var slots = ["helm", "shoulders", "coat", "gloves", "leggings", "boots"];
      var runeID = runes[rune1];
      if (runeID) {
        for (var i = 0; i < 4; i++) {
          this[slots[i]].rune = runeID;
        }
      } else {
        console.warn("Warning: unknown rune " + rune1);
      }
      runeID = runes[rune2];
      if (runeID) {
        for (var i = 4; i < 6; i++) {
          this[slots[i]].rune = runeID;
        }
      } else {
        console.warn("Warning: unknown rune " + rune2);
      }
    };

    Armor.prototype.getDiv = function(mobile) {
      var divToAdd = '<div center data-armory-embed="items" ';
      var runeDivToAdd = '<div center data-armory-embed="items" ';
      var armorIDS = 'data-armory-ids="';
      var runeIDS = 'data-armory-ids="';
      var totalStats = "";
      var slots = ["helm", "shoulders", "coat", "gloves", "leggings", "boots"];
      for (var i = 0; i < 6; i++) {
        var slot = slots[i];
        var slotStat = this[slot].stat;
        var slotRune = this[slot].rune;
        var slotId = this.armor[slot];
        armorIDS += slotId + ",";
        runeIDS += slotRune + ",";
        totalStats += "data-armory-" + slotId + '-stat="' + slotStat + '" ';
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
      divToAdd += "></div>";
      if (mobile) {
        runeDivToAdd += 'data-armory-size="130" ';
      } else {
        runeDivToAdd += 'data-armory-size="60" ';
      }
      runeDivToAdd += "></div>";
      return { armor: divToAdd, rune: runeDivToAdd };
    };
    return Armor;
  }
);
