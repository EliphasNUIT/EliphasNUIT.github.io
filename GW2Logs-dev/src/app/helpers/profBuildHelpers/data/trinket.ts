import { items } from '../professionUtilities/items';
import { stats } from '../professionUtilities/stats';

const trinket = items.trinket;

export class Trinket {
    ring2: number;
    ring1: number;
    amulet: number;
    earring2: number;
    earring1: number;
    back: number;

    constructor() {
        this.back = -1;
        this.earring1 = -1;
        this.earring2 = -1;
        this.amulet = -1;
        this.ring1 = -1;
        this.ring2 = 1;
    }

    setSingleStat(stat: string) {
        this.setStats([stat, stat, stat, stat, stat, stat]);
    }

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

    _getDiv(slots: string[], mobile: boolean): string {
        let divToAdd = '<div center data-armory-embed="items" ';
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

    getDiv(mobile: boolean): {BA: string, AR: string} {
        return {
            BA: this._getDiv(['back', 'earring1', 'earring2'], mobile),
            AR: this._getDiv(['amulet', 'ring1', 'ring2'], mobile)
        };
    }
}
