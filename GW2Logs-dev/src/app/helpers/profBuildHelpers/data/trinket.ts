import { items } from '../professionUtilities/items';
import { stats } from '../professionUtilities/stats';

/**
 * Trinket data
 */
const trinket = items.trinket;

/**
 * Class representing a trinket set
 */
export class Trinket {
    /**
     * Ring 2 id
     */
    private ring2: number;
    /**
     * Ring 1 id
     */
    private ring1: number;
    /**
     * Amulet id
     */
    private amulet: number;
    /**
     * Earring 2 id
     */
    private earring2: number;
    /**
     * Earring 1 id
     */
    private earring1: number;
    /**
     * Back id
     */
    private back: number;

    /**
     * Create a trinket set data
     */
    constructor() {
        this.back = -1;
        this.earring1 = -1;
        this.earring2 = -1;
        this.amulet = -1;
        this.ring1 = -1;
        this.ring2 = 1;
    }

    /**
     * Set a stat on the trinket set
     * @param stat The stat to set on all trinket pieces
     */
    setSingleStat(stat: string) {
        this.setStats([stat, stat, stat, stat, stat, stat]);
    }

    /**
     * Set stats on trinket pieces
     * @param trinketStats Array of stats to set on the trinket pieces in the followin order:
     *  back - earring1 - earring2 - amulet - ring1 - ring2
     */
    setStats(trinketStats: string[]): string {
        if (trinketStats.length !== 6) {
            console.warn('Warning: invalid parameters in Trinkek::setStats');
            return;
        }
        const slots = ['back', 'earring1', 'earring2', 'amulet', 'ring1', 'ring2'];
        for (let i = 0; i < 6; i++) {
            const stat = stats[trinketStats[i]];
            if (stat) {
                this[slots[i]] = stat;
            } else {
                console.warn('Warning: unknown stat ' + trinketStats[i]);
            }
        }
    }

    /**
     * Return the div for the given slots - PRIVATE
     * @param slots The slots that will be put in the div
     * @param mobile Mobile device or not
     */
    private _getDiv(slots: string[], mobile: boolean): string {
        let divToAdd = '<div data-armory-embed="items" ';
        let trinketIDS = 'data-armory-ids="';
        let totalStats = '';
        for (let i = 0; i < slots.length; i++) {
            const slot = trinket[slots[i]];
            const stat = this[slots[i]];
            trinketIDS += slot + ',';
            totalStats += 'data-armory-' + slot + '-stat="' + stat + '" ';
        }
        trinketIDS = trinketIDS.slice(0, -1) + '" ';
        divToAdd += totalStats;
        divToAdd += trinketIDS;
        if (mobile) {
            divToAdd += 'data-armory-size="130" ';
        } else {
            divToAdd += 'data-armory-size="60" ';
        }
        // divToAdd += 'data-armory-inline-text="wiki" ';
        divToAdd += '></div>';
        return divToAdd;
    }

    /**
     * Get the trinket div
     * @param mobile Mobile device or not
     */
    getDiv(mobile: boolean): { BA: string, AR: string } {
        return {
            BA: this._getDiv(['back', 'earring1', 'earring2'], mobile),
            AR: this._getDiv(['amulet', 'ring1', 'ring2'], mobile)
        };
    }
}
