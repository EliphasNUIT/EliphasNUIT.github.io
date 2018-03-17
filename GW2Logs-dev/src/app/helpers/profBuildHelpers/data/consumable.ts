import { items } from '../professionUtilities/items';

/**
 * Consumable data
 */
const consumable = items.consumable;

/**
 * Class representing consumables
 */
export class Consumable {
    /**
     * Food id
     */
    food: number;
    /**
     * Utility id
     */
    utility: number;

    /**
     * Create a consumable data
     */
    constructor() {
        this.food = -1;
        this.utility = -1;
    }

    /**
     * Set the consumables
     * @param food Food name
     * @param utility Utility name
     */
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

    /**
     * Get the consumable div
     * @param mobile If mobile device
     */
    getDiv(mobile: boolean): string {
        let divToAdd = '<div data-armory-embed="items" ';
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
}
