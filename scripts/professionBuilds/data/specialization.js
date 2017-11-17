define([], function() {
    "use strict";

    class Specialization {
        constructor(profession) {
            this.profession = profession;
            this.spec1 = { name: -1, traits: [-1, -1, -1] };
            this.spec2 = { name: -1, traits: [-1, -1, -1] };
            this.spec3 = { name: -1, traits: [-1, -1, -1] };
        }

        setSpec(specToSet, specName, traitArray) {
            if (this.profession.specializations[specName]) {
                this[specToSet].name = this.profession.specializations[specName];
                for (var i = 0; i < 3; i++) {
                    var trait = traitArray[i];
                    if (this.profession.traits[trait]) {
                        if (this[specToSet].name === this.profession.traits[trait].spe) {
                            this[specToSet].traits[i] = this.profession.traits[trait].id;
                        } else {
                            console.warn("Warning: " + trait + " is not a " + specName + " trait");
                        }
                    } else if (trait.length > 0) {
                        console.warn("Warning: " + trait + " is not a " + this.profession.name + " trait");
                    }
                }
            } else if (specName.length > 0) {
                console.warn("Warning: " + specName + " is not a " + this.profession.name + " specialization");
            }
        }

        getDiv(mobile) {
            var specs = [this.spec1, this.spec2, this.spec3];
            var divToAdd = "<div trait data-armory-embed=\"specializations\" ";
            var speIDS = "data-armory-ids=\"";
            var totalTraits = "";
            for (var i = 0; i < 3; i++) {
                var specialization = specs[i];
                var speID = specialization.name;
                speIDS += speID + ",";
                var traits = "data-armory-" + speID + "-traits=\"";
                for (var j = 0; j < 3; j++) {
                    var traitID = specialization.traits[j];
                    traits += traitID + ",";
                }
                traits = traits.slice(0, -1) + "\" ";
                totalTraits += traits;
            }
            speIDS = speIDS.slice(0, -1) + "\" ";
            divToAdd += speIDS;
            divToAdd += totalTraits;
            if (mobile) {
                divToAdd += "data-armory-size=\"130\" ";
            } else {
                divToAdd += "data-armory-size=\"70\" ";
            }
            divToAdd += "></div>";
            return divToAdd;
        }
    }

    return Specialization;
});
