define(
  ["professionBuilds/professionUtilities/stats", "professionBuilds/professionUtilities/items"],
  function(stats, items) {
    "use strict";
    var trinket = items.trinket;

    var Trinket = function() {
      this.back = -1;
      this.earring1 = -1;
      this.earring2 = -1;
      this.amulet = -1;
      this.ring1 = -1;
      this.ring2 = 1;
    };


    Trinket.prototype.setStats = function(trinketStats) {
        if (trinketStats.length !== 6) {
            console.warn("Warning: invalid parameters in Trinkek::setStats");
            return;
        }
        var slots = ["back","earring1","earring2","amulet","ring1","ring2"];
        for (var i = 0; i < 6; i++) {
            var stat = stats[trinketStats[i]];
            if (stat) {
                this[slots[i]] = stat;
            } else {
                console.warn("Warning: unknown stat " + trinketStats[i]);
            }         
        }
    };

    Trinket.prototype._getDiv = function(slots, mobile) {
      var divToAdd = '<div center data-armory-embed="items" ';
      var trinketIDS = 'data-armory-ids="';
      var totalStats = "";
      for (var i = 0; i < slots.length; i++) {
        var slot = trinket[slots[i]];
        var stat = this[slots[i]];
        trinketIDS += slot + ",";
        totalStats += "data-armory-" + slot + '-stat="' + stat + '" ';
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

    Trinket.prototype.getDiv = function(mobile) {
      return {
        BA: this._getDiv(["back", "earring1", "earring2"], mobile),
        AR: this._getDiv(["amulet", "ring1", "ring2"], mobile)
      };
    };

    return Trinket;
  }
);
