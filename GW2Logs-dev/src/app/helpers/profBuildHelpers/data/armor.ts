import { items, ArmorData } from '../professionUtilities/items';
import { stats } from '../professionUtilities/stats';

/**
 * Rune data
 */
const runes = items.runes;

/**
 *Class reprensenting armor sets
 */
export class Armor {
    /**
     * The armor type
     */
    armorType: ArmorData;
    /**
     * Helm data
     */
    helm: {stat: number, rune: number};
    /**
     * Shoulders data
     */
    shoulders: {stat: number, rune: number};
    /**
     * Coat data
     */
    coat: {stat: number, rune: number};
    /**
     * Gloves data
     */
    gloves: {stat: number, rune: number};
    /**
     * Leggings data
     */
    leggings: {stat: number, rune: number};
    /**
     * Boots data
     */
    boots: {stat: number, rune: number};

    /**
     * Create an armor set
     * @param armorType the armor type: Heavy, Medium, Light
     */
    constructor(armorType: string) {
        this.armorType = items.armor[armorType];

        this.helm = { stat: -1, rune: -1 };
        this.shoulders = { stat: -1, rune: -1 };
        this.coat = { stat: -1, rune: -1 };
        this.gloves = { stat: -1, rune: -1 };
        this.leggings = { stat: -1, rune: -1 };
        this.boots = { stat: -1, rune: -1 };
    }

    /**
     * Set the same stat on all armor pieces
     * @param stat the stat to use on all armor pieces
     */
    setSingleStat(stat: string): void {
        this.setStats([stat, stat, stat, stat, stat, stat]);
    }

    /**
     * Set the stats on the armor piece
     * @param armorStats Array of stats in the following order: helm - shoulders - coat - gloves - leggings - boots
     */
    setStats(armorStats: string[]): void {
        if (armorStats.length !== 6) {
            console.warn('Warning: invalid parameters in Armor::setStats');
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

    /**
     * Set 6 times the same rune
     * @param rune The name of the rune
     */
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

    /**
     * Set runes in a 4 2 pattern
     * @param rune1 The name of the first 4 runes
     * @param rune2 The name of the last 2 runes
     */
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

    /**
     * Get the div elements to put in the html
     * @param mobile if mobile device
     * @returns Two div elements to put in the html, armor set in armor and runes in rune
     */
    getDiv(mobile: boolean): {armor: string, rune: string} {
        let divToAdd = '<div data-armory-embed="items" ';
        let runeDivToAdd = '<div data-armory-embed="items" ';
        let armorIDS = 'data-armory-ids="';
        let runeIDS = 'data-armory-ids="';
        let totalStats = '';
        const slots = ['helm', 'shoulders', 'coat', 'gloves', 'leggings', 'boots'];
        for (let i = 0; i < 6; i++) {
            const slot = slots[i];
            const slotStat = this[slot].stat;
            const slotRune = this[slot].rune;
            const slotId = this.armorType[slot];
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
