import { items } from '../professionUtilities/items';
import { stats } from '../professionUtilities/stats';


const armor = items.armor;
const runes = items.runes;

export class Armor {
    armor: string;
    helm: {stat: number, rune: number};
    shoulders: {stat: number, rune: number};
    coat: {stat: number, rune: number};
    gloves: {stat: number, rune: number};
    leggings: {stat: number, rune: number};
    boots: {stat: number, rune: number};

    constructor(armorType) {
        this.armor = armor[armorType];

        this.helm = { stat: -1, rune: -1 };
        this.shoulders = { stat: -1, rune: -1 };
        this.coat = { stat: -1, rune: -1 };
        this.gloves = { stat: -1, rune: -1 };
        this.leggings = { stat: -1, rune: -1 };
        this.boots = { stat: -1, rune: -1 };
    }

    setSingleStat(stat: string): void {
        this.setStats([stat, stat, stat, stat, stat, stat]);
    }

    setStats(armorStats: string[]): void {
        if (armorStats.length !== 6) {
            console.warn('Warning: invalid parameters in Trinkek::setStats');
            return;
        }
        const slots = ['helm', 'shoulders', 'coat', 'gloves', 'leggings', 'boots'];
        for (let i = 0; i < 6; i++) {
            const stat = stats[armorStats[i]];
            if (stat) {
                this[slots[i]].stat = stat;
            } else {
                console.warn('Warning: unknown stat ' + armorStats[i]);
            }
        }
    }

    setSingleRune(rune: string): void {
        const slots = ['helm', 'shoulders', 'coat', 'gloves', 'leggings', 'boots'];
        const runeID = runes[rune];
        if (runeID) {
            for (let i = 0; i < 6; i++) {
                this[slots[i]].rune = runeID;
            }
        } else {
            console.warn('Warning: unknown rune ' + rune);
        }
    }

    set42Rune(rune1: string, rune2: string): void {
        const slots = ['helm', 'shoulders', 'coat', 'gloves', 'leggings', 'boots'];
        let runeID = runes[rune1];
        let i = 0;
        if (runeID) {
            for (i = 0; i < 4; i++) {
                this[slots[i]].rune = runeID;
            }
        } else {
            console.warn('Warning: unknown rune ' + rune1);
        }
        runeID = runes[rune2];
        if (runeID) {
            for (i = 4; i < 6; i++) {
                this[slots[i]].rune = runeID;
            }
        } else {
            console.warn('Warning: unknown rune ' + rune2);
        }
    }

    getDiv(mobile: boolean): {armor: string, rune: string} {
        let divToAdd = '<div center data-armory-embed="items" ';
        let runeDivToAdd = '<div center data-armory-embed="items" ';
        let armorIDS = 'data-armory-ids="';
        let runeIDS = 'data-armory-ids="';
        let totalStats = '';
        const slots = ['helm', 'shoulders', 'coat', 'gloves', 'leggings', 'boots'];
        for (let i = 0; i < 6; i++) {
            const slot = slots[i];
            const slotStat = this[slot].stat;
            const slotRune = this[slot].rune;
            const slotId = this.armor[slot];
            armorIDS += slotId + ',';
            runeIDS += slotRune + ',';
            totalStats += 'data-armory-' + slotId + '-stat="' + slotStat + '" ';
        }
        armorIDS = armorIDS.slice(0, -1) + '" ';
        runeIDS = runeIDS.slice(0, -1) + '" ';
        divToAdd += totalStats;
        divToAdd += armorIDS;
        runeDivToAdd += runeIDS;
        if (mobile) {
            divToAdd += 'data-armory-size="130" ';
        } else {
            divToAdd += 'data-armory-size="60" ';
        }
        divToAdd += '></div>';
        if (mobile) {
            runeDivToAdd += 'data-armory-size="130" ';
        } else {
            runeDivToAdd += 'data-armory-size="60" ';
        }
        runeDivToAdd += '></div>';
        return { armor: divToAdd, rune: runeDivToAdd };
    }
}
