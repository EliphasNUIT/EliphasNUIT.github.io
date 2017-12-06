export class Specialization {
    spec1: {name: number, traits: number[]};
    spec2: {name: number, traits: number[]};
    spec3: {name: number, traits: number[]};
    profession: any;

    constructor(profession) {
        this.profession = profession;
        this.spec1 = { name: -1, traits: [-1, -1, -1] };
        this.spec2 = { name: -1, traits: [-1, -1, -1] };
        this.spec3 = { name: -1, traits: [-1, -1, -1] };
    }

    setSpec(specToSet: string, specName: string, traitArray: string[]) {
        if (this.profession.specializations[specName]) {
            this[specToSet].name = this.profession.specializations[specName];
            for (let i = 0; i < 3; i++) {
                const trait = traitArray[i];
                if (this.profession.traits[trait]) {
                    if (this[specToSet].name === this.profession.traits[trait].spe) {
                        this[specToSet].traits[i] = this.profession.traits[trait].id;
                    } else {
                        console.warn('Warning: ' + trait + ' is not a ' + specName + ' trait');
                    }
                } else if (trait.length > 0) {
                    console.warn('Warning: ' + trait + ' is not a ' + this.profession.name + ' trait');
                }
            }
        } else if (specName.length > 0) {
            console.warn('Warning: ' + specName + ' is not a ' + this.profession.name + ' specialization');
        }
    }

    getDiv(mobile: boolean): string {
        const specs = [this.spec1, this.spec2, this.spec3];
        let divToAdd = '<div data-armory-embed="specializations" ';
        let speIDS = 'data-armory-ids="';
        let totalTraits = '';
        for (let i = 0; i < 3; i++) {
            const specialization = specs[i];
            const speID = specialization.name;
            speIDS += speID + ',';
            let traits = 'data-armory-' + speID + '-traits="';
            for (let j = 0; j < 3; j++) {
                const traitID = specialization.traits[j];
                traits += traitID + ',';
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
        divToAdd += '></div>';
        return divToAdd;
    }
}
