/**
 * Specialization data
 */
export class Specialization {
    /**
     * First spec line
     */
    private spec1: { name: number, traits: number[] };
    /**
     * Second spec line
     */
    private spec2: { name: number, traits: number[] };
    /**
     * Third spec line
     */
    private spec3: { name: number, traits: number[] };
    /**
     * Profession
     */
    private profession: any;

    /**
     * Create a specialization data
     * @param profession Profession
     */
    constructor(profession) {
        this.profession = profession;
        this.spec1 = { name: -1, traits: [-1, -1, -1] };
        this.spec2 = { name: -1, traits: [-1, -1, -1] };
        this.spec3 = { name: -1, traits: [-1, -1, -1] };
    }

    /**
     * Set a spec line
     * @param specToSet Spec line to set
     * @param specName Name of the spec
     * @param traitArray Traits to use in spec
     */
    setSpec(specToSet: string, specName: string, traitArray: string[]) {
        if (specToSet === '') {
            return;
        }
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

    /**
     * Get the specialization div
     * @param mobile Mobile device or not
     */
    getDiv(mobile: boolean): string {
        const specs = [this.spec1, this.spec2, this.spec3];
        let divToAdd = '<div data-armory-embed="specializations" ';
        let speIDS = 'data-armory-ids="';
        let totalTraits = '';
        for (let i = 0; i < 3; i++) {
            const specialization = specs[i];
            const speID = specialization.name;
            if (speID === -1) {
                continue;
            }
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

    /**
     * Updates class using a json
     * @param data JSON data
     */
    fromJSON(data: {
        spec1: {
            name: string,
            traits: string[]
        },
        spec2: {
            name: string,
            traits: string[]
        },
        spec3: {
            name: string,
            traits: string[]
        }
    }): void {
        this.setSpec('spec1', data.spec1.name, data.spec1.traits);
        this.setSpec('spec2', data.spec2.name, data.spec2.traits);
        this.setSpec('spec3', data.spec3.name, data.spec3.traits);
    }
}
