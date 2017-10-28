define(
  [
    "professionBuilds/professionUtilities/stats",
    "professionBuilds/professionUtilities/items"
  ],
  function(stats, items) {
    "use strict";
    var weapons = items.weapons;
    var sigils = items.sigils;

    var Weapons = function(profession) {
      this.profession = profession;

      this.mainHand = { id: -1, stat: -1, sigil: -1 };
      this.offHand = { id: -1, stat: -1, sigil: -1 };
    };

    Weapons.prototype._argumentCheck = function(typeID, statID, sigilID) {
      if (!statID) {
        return false;
      }

      if (!sigilID) {
        return false;
      }

      if (!typeID) {
        return false;
      }
      return true;
    };

    Weapons.prototype.setMainHand = function(type, stat, sigil) {
      var statID = stats[stat];
      var sigilID = sigils[sigil];
      var wepID = weapons[type];

      if (!this._argumentCheck(wepID, statID, sigilID)) {
        console.warn("Warning: Invalid parameters in setMainHand");
        return;
      }

      if (!this.profession.weapons[type]) {
        console.warn("Warning: " + this.profession.name + " can't use " + type);
        return;
      }
      if (!this.profession.weapons[type].flags.includes("Mainhand")) {
        console.warn(
          "Warning: " +
            this.profession.name +
            " can't use " +
            type +
            " as a main hand weapon"
        );
        return;
      }

      this.mainHand.id = wepID;
      this.mainHand.stat = statID;
      this.mainHand.sigil = sigilID;
    };

    Weapons.prototype.setOffHand = function(type,stat, sigil) {
      var statID = stats[stat];
      var sigilID = sigils[sigil];
      var wepID = weapons[type];

      if (!this._argumentCheck(wepID, statID, sigilID)) {
        console.warn("Warning: Invalid parameters in setOffHand");
        return;
      }

      if (!this.profession.weapons[type]) {
        console.warn("Warning: " + this.profession.name + " can't use " + type);
        return;
      }
      if (!this.profession.weapons[type].flags.includes("Offhand")) {
        console.warn(
          "Warning: " +
            this.profession.name +
            " can't use " +
            type +
            " as an off hand weapon"
        );
        return;
      }

      this.offHand.id = wepID;
      this.offHand.stat = statID;
      this.offHand.sigil = sigilID;
    };

    Weapons.prototype.setTwoHand = function(type, stat, sigil1, sigil2) {
      var statID = stats[stat];
      var sigil1ID = sigils[sigil1];
      var sigil2ID = sigils[sigil2];
      var wepID = weapons[type];

      if (!this._argumentCheck(wepID, statID, sigil1ID)) {
        console.warn("Warning: Invalid parameters in setTwoHand");
        return;
      }

      if (!this._argumentCheck(wepID, statID, sigil2ID)) {
        return;
      }

      if (!this.profession.weapons[type]) {
        console.warn("Warning: " + this.profession.name + " can't use " + type);
        return;
      }
      if (!this.profession.weapons[type].flags.includes("TwoHand")) {
        console.warn(
          "Warning: " +
            this.profession.name +
            " can't use " +
            type +
            " as a two hand weapon"
        );
        return;
      }

      this.mainHand.id = wepID;
      this.mainHand.stat = statID;
      this.mainHand.sigil = sigil1ID;
      this.offHand.sigil = sigil2ID;
    };

    Weapons.prototype.getDiv = function(mobile) {
      var divToAdd = '<div center data-armory-embed="items" ';
      var sigilDivToAdd = '<div center data-armory-embed="items" ';
      var ids = 'data-armory-ids="';
      var sigilIDS = 'data-armory-ids="';
      var totalStats = "";

      var wepID, statID, sigilID;
      // main hand
      wepID = this.mainHand.id;
      statID = this.mainHand.stat;
      sigilID = this.mainHand.sigil;

      ids += wepID + ",";
      totalStats += "data-armory-" + wepID + '-stat="' + statID + '" ';
      sigilIDS += sigilID + ",";

      // offhand
      wepID = this.offHand.id;
      statID = this.offHand.stat;
      sigilID = this.offHand.sigil;

      ids += wepID + '" ';
      totalStats += "data-armory-" + wepID + '-stat="' + statID + '" ';
      sigilIDS += sigilID + '" ';
      //
      divToAdd += totalStats;
      divToAdd += ids;
      if (mobile) {
        divToAdd += 'data-armory-size="130" ';
      } else {
        divToAdd += 'data-armory-size="60" ';
      }
      divToAdd += 'data-armory-blank-text="Vide" ';
      divToAdd += "></div>";

      sigilDivToAdd += sigilIDS;
      if (mobile) {
        sigilDivToAdd += 'data-armory-size="130" ';
      } else {
        sigilDivToAdd += 'data-armory-size="60" ';
      }
      sigilDivToAdd += 'data-armory-blank-text="Vide" ';
      sigilDivToAdd += "></div>";

      return { wep: divToAdd, sig: sigilDivToAdd };
    };
    return Weapons;
  }
);
