import { items } from '../professionUtilities/items';
import { stats } from '../professionUtilities/stats';

/**
 * Weapon data
 */
const weapons = items.weapons;
/**
 * Sigil data
 */
const sigils = items.sigils;

/**
 * Weapon data
 */
export class Weapons {
    /**
     * OffHand data
     */
    private offHand: { id: number; stat: number; sigil: number; };
    /**
     * MainHand data
     */
    private mainHand: { id: number; stat: number; sigil: number; };
    /**
     * Profession
     */
    private profession: any;

    /**
     * Create a weapon data
     * @param profession Profession
     */
    constructor(profession: any) {
        this.profession = profession;

        this.mainHand = { id: -1, stat: -1, sigil: -1 };
        this.offHand = { id: -1, stat: -1, sigil: -1 };
    }

    /**
     * Private method to check if given ids are valid
     * @param typeID Id of the weapon
     * @param statID Id of the stat
     * @param sigilID Id of the sigil
     */
    private _argumentCheck(typeID: Number, statID: Number, sigilID: Number) {
        if (!statID) {
            return false;
        }

        if (!sigilID) {
            return false;
        }

        if (!typeID) {
            return false;
        }
        return true;
    }

    /**
     * Set main hand weapon
     * @param type Weapon type
     * @param stat Stat
     * @param sigil Sigil
     */
    setMainHand(type: string, stat: string, sigil: string) {
        const statID: number = stats[stat];
        const sigilID: number = sigils[sigil];
        const wepID: number = weapons[type];

        if (!this._argumentCheck(wepID, statID, sigilID)) {
            console.warn('Warning: Invalid parameters in setMainHand');
            return;
        }

        if (!this.profession.weapons[type]) {
            console.warn('Warning: ' + this.profession.name + ' can\'t use ' + type);
            return;
        }
        if (!this.profession.weapons[type].flags.includes('Mainhand')) {
            console.warn('Warning: ' + this.profession.name + ' can\'t use ' + type + ' as a main hand weapon');
            return;
        }

        this.mainHand.id = wepID;
        this.mainHand.stat = statID;
        this.mainHand.sigil = sigilID;
    }

    /**
     * Set off hand weapon
     * @param type Weapon type
     * @param stat Stat
     * @param sigil Sigil
     */
    setOffHand(type: string, stat: string, sigil: string) {
        const statID: number = stats[stat];
        const sigilID: number = sigils[sigil];
        const wepID: number = weapons[type];

        if (!this._argumentCheck(wepID, statID, sigilID)) {
            console.warn('Warning: Invalid parameters in setOffHand');
            return;
        }

        if (!this.profession.weapons[type]) {
            console.warn('Warning: ' + this.profession.name + ' can\'t use ' + type);
            return;
        }
        if (!this.profession.weapons[type].flags.includes('Offhand')) {
            console.warn('Warning: ' + this.profession.name + ' can\'t use ' + type + ' as an off hand weapon');
            return;
        }

        this.offHand.id = wepID;
        this.offHand.stat = statID;
        this.offHand.sigil = sigilID;
    }

    /**
     * Set two handed weapon
     * @param type Weapon type
     * @param stat Stat
     * @param sigil1 First sigil
     * @param sigil2 Second sigil
     */
    setTwoHand(type: string, stat: string, sigil1: string, sigil2: string) {
        const statID: number = stats[stat];
        const sigil1ID: number = sigils[sigil1];
        const sigil2ID: number = sigils[sigil2];
        const wepID: number = weapons[type];

        if (!this._argumentCheck(wepID, statID, sigil1ID)) {
            console.warn('Warning: Invalid parameters in setTwoHand');
            return;
        }

        if (!this._argumentCheck(wepID, statID, sigil2ID)) {
            return;
        }

        if (!this.profession.weapons[type]) {
            console.warn('Warning: ' + this.profession.name + ' can\'t use ' + type);
            return;
        }
        if (!this.profession.weapons[type].flags.includes('TwoHand')) {
            console.warn('Warning: ' + this.profession.name + ' can\'t use ' + type + ' as a two hand weapon');
            return;
        }

        this.mainHand.id = wepID;
        this.mainHand.stat = statID;
        this.mainHand.sigil = sigil1ID;
        this.offHand.id = -1;
        this.offHand.stat = -1;
        this.offHand.sigil = sigil2ID;
    }

    /**
     * Get weapon div
     * @param mobile Mobile device or not
     */
    getDiv(mobile): {wep: string, sig: string} {
        let divToAdd = '<div data-armory-embed="items" ';
        let sigilDivToAdd = '<div data-armory-embed="items" ';
        let ids = 'data-armory-ids="';
        let sigilIDS = 'data-armory-ids="';
        let totalStats = '';

        let wepID, statID, sigilID;
        // main hand
        wepID = this.mainHand.id;
        statID = this.mainHand.stat;
        sigilID = this.mainHand.sigil;

        ids += wepID + ',';
        totalStats += 'data-armory-' + wepID + '-stat="' + statID + '" ';
        sigilIDS += sigilID + ',';

        // offhand
        wepID = this.offHand.id;
        statID = this.offHand.stat;
        sigilID = this.offHand.sigil;

        ids += wepID + '" ';
        totalStats += 'data-armory-' + wepID + '-stat="' + statID + '" ';
        sigilIDS += sigilID + '" ';
        //
        divToAdd += totalStats;
        divToAdd += ids;
        if (mobile) {
            divToAdd += 'data-armory-size="130" ';
        } else {
            divToAdd += 'data-armory-size="60" ';
        }
        divToAdd += 'data-armory-blank-text="Vide" ';
        divToAdd += '></div>';

        sigilDivToAdd += sigilIDS;
        if (mobile) {
            sigilDivToAdd += 'data-armory-size="130" ';
        } else {
            sigilDivToAdd += 'data-armory-size="60" ';
        }
        sigilDivToAdd += 'data-armory-blank-text="Vide" ';
        sigilDivToAdd += '></div>';

        return { wep: divToAdd, sig: sigilDivToAdd };
    }
}
