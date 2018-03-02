import { items } from '../professionUtilities/items';

const consumable = items.consumable;

export class Consumable {
    food: number;
    utility: number;
    variants: {food: number, utility: number, name: string}[];

    constructor() {
        this.food = -1;
        this.utility = -1;
        this.variants = [];
    }

    setConsumable(food: string, utility: string) {
        const f = consumable[food],
            u = consumable[utility];
        if (f) {
            this.food = f;
        } else {
            console.warn('Warning: ' + food + ' does not exist, check gw2spidy');
        }

        if (u) {
            this.utility = u;
        } else {
            console.warn('Warning: ' + utility + ' does not exist, check gw2spidy');
        }
    }

    addVariant(name: string, food: string, utility: string) {
        const vari = {
            name: name,
            food: -1,
            utility: -1
        };
        const f = consumable[food],
            u = consumable[utility];
        if (f) {
            vari.food = f;
        } else {
            console.warn('Warning: ' + food + ' does not exist, check gw2spidy');
        }

        if (u) {
            vari.utility = u;
        } else {
            console.warn('Warning: ' + utility + ' does not exist, check gw2spidy');
        }
        this.variants.push(vari);
    }

    getDiv(mobile: boolean): string {
        return this._getDiv(mobile) + this._getVarianteDiv(mobile);
    }

    _getDiv(mobile: boolean): string {
        let title = '';
        if (this.variants.length > 0) {
            title = '<div>Main</div>';
        }
        let divToAdd = title + '<div data-armory-embed="items" ';
        let foodIDS = 'data-armory-ids="';
        foodIDS += this.food + ',';
        foodIDS += this.utility + '" ';
        divToAdd += foodIDS;
        if (mobile) {
            divToAdd += 'data-armory-size="130" ';
        } else {
            divToAdd += 'data-armory-size="60" ';
        }
        divToAdd += '></div>';
        return divToAdd;
    }

    _getVarianteDiv(mobile: boolean): string {
        let divToAdd = '';
        for (let i = 0; i < this.variants.length; i++) {
            const vari = this.variants[i];
            const title = '<div>' + vari.name + '</div>';
            divToAdd += title + '<div data-armory-embed="items" ';
            let foodIDS = 'data-armory-ids="';
            foodIDS += vari.food + ',';
            foodIDS += vari.utility + '" ';
            divToAdd += foodIDS;
            if (mobile) {
                divToAdd += 'data-armory-size="130" ';
            } else {
                divToAdd += 'data-armory-size="60" ';
            }
            divToAdd += '></div>';
        }
        return divToAdd;
    }
}
