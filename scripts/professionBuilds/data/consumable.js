define(["professionBuilds/professionUtilities/items"], function(items) {
    "use strict";
    var consumable = items.consumable;

    var Consumable = function() {
        this.food = -1;
        this.utility = -1;
    };

    Consumable.prototype.setConsumable = function(food, utility) {
        var f = consumable[food],
            u = consumable[utility];
        if (f) {
            this.food = f;
        } else {
            console.warn("Warning: " + food + " does not exist, check gw2spidy");
        }

        if (u) {
            this.utility = u;
        } else {
            console.warn("Warning: " + utility + " does not exist, check gw2spidy");
        }
    };

    Consumable.prototype.getDiv = function(mobile) {
        var divToAdd = '<div center data-armory-embed="items" ';
        var foodIDS = 'data-armory-ids="';
        foodIDS += this.food + ",";
        foodIDS += this.utility + '" ';
        divToAdd += foodIDS;
        if (mobile) {
            divToAdd += 'data-armory-size="130" ';
        } else {
            divToAdd += 'data-armory-size="60" ';
        }
        divToAdd += "></div>";
        return divToAdd;
    };

    return Consumable;
});
