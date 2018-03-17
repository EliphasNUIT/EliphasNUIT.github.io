import { Skills } from './profBuildHelpers/data/skills';
import { ProfessionSkills } from './profBuildHelpers/data/professionSkills';
import { Specialization } from './profBuildHelpers/data/specialization';
import { Weapons } from './profBuildHelpers/data/weapons';
import { Armor } from './profBuildHelpers/data/armor';
import { Trinket } from './profBuildHelpers/data/trinket';
import { Consumable } from './profBuildHelpers/data/consumable';

/**
 * Detect if mobile device
 */
function detectmob(): boolean {
    if (
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)
    ) {
        return true;
    }
    return false;
}
/**
 * Build database
 */
export let buildDatabase: Map<string, ProfBuild> = new Map<string, ProfBuild>();

/**
 * Mobile device or not
 */
const mobile = detectmob();

/**
 * Build data
 */
export class ProfBuild {
    /**
     * Id of the build
     */
    id: string;
    /**
     * Name of the build
     */
    name: string;
    /**
     * Armor data
     */
    armor: Armor;
    /**
     * Consumable data
     */
    consumable: Consumable;
    /**
     * Trinket data
     */
    trinket: Trinket;
    /**
     * Second weapon set data, can be set to null
     */
    wep2: Weapons;
    /**
     * Primary weapon set data
     */
    wep1: Weapons;
    /**
     * Specialization data
     */
    specialization: Specialization;
    /**
     * Profession skills data, can be set to null
     */
    profSkills: ProfessionSkills;
    /**
     * Skills data
     */
    skills: Skills;
    /**
     * Profession
     */
    profession: any;
    /**
     * Icon path
     */
    icon = 'assets/profIcons/';
    /**
     * Overrides
     */
    overrides: Map<string, {
        skills: Skills,
        profSkills: ProfessionSkills,
        specialization: Specialization,
        wep1: Weapons,
        wep2: Weapons,
        armor: Armor,
        trinket: Trinket,
        consumable: Consumable,
        open: Boolean
    }>;

    /**
     * Create a profession build
     * @param id Id of the build
     * @param profession Profession of the build
     * @param name Name of the build
     */
    constructor(id: string, profession: any, name: string) {
        this.id = id;
        this.name = name;
        this.profession = profession;
        this.skills = new Skills(profession);
        this.profSkills = new ProfessionSkills(profession);
        this.specialization = new Specialization(profession);
        this.wep1 = new Weapons(profession);
        this.wep2 = new Weapons(profession);
        this.armor = new Armor(profession.armor);
        this.trinket = new Trinket();
        this.consumable = new Consumable();
        this.overrides = new Map();
        if (!buildDatabase.has(id)) {
            buildDatabase.set(id, this);
        } else {
            console.warn('Warning: build ' + id + ' already exists in the database');
        }
    }

    /**
     * Get the specialization div
     * @param override Name of the override
     */
    getSpecializations(override: string = null): string {
        if (this.overrides.has(override) && this.overrides.get(override).specialization) {
            return this.overrides.get(override).specialization.getDiv(mobile);
        }
        return this.specialization.getDiv(mobile);
    }

    /**
     * Get the pets div
     * @param override Name of the override
     */
    getPets(override: string = null): string {
        if (this.overrides.has(override) && this.overrides.get(override).skills) {
            return this.overrides.get(override).skills.getPDiv();
        }
        if (this.skills === null) {
            return '';
        }
        return this.skills.getPDiv();
    }

    /**
     * Get the skills div
     * @param override Name of the override
     */
    getSkills(override: string = null): { heal: string, utilities: string, elite: string } {
        if (this.overrides.has(override) && this.overrides.get(override).skills) {
            return this.overrides.get(override).skills.getSDiv(mobile);
        }
        if (this.skills === null) {
            return null;
        }
        return this.skills.getSDiv(mobile);
    }

    /**
     * Get the profession skills div
     * @param override Name of the override
     */
    getProfessionSkills(override: string = null): string {
        if (this.overrides.has(override) && this.overrides.get(override).profSkills) {
            return this.overrides.get(override).profSkills.getSDiv(mobile);
        }
        if (this.profSkills === null) {
            return '';
        }
        return this.profSkills.getSDiv(mobile);
    }

    /**
     * Get the trinket div
     * @param override Name of the override
     */
    getTrinket(override: string = null): { BA: string, AR: string } {
        if (this.overrides.has(override) && this.overrides.get(override).trinket) {
            return this.overrides.get(override).trinket.getDiv(mobile);
        }
        return this.trinket.getDiv(mobile);
    }

    /**
     * Get the armor div
     * @param override Name of the override
     */
    getArmor(override: string = null): { armor: string, rune: string } {
        if (this.overrides.has(override) && this.overrides.get(override).armor) {
            return this.overrides.get(override).armor.getDiv(mobile);
        }
        return this.armor.getDiv(mobile);
    }

    /**
     * Get the primary weapon set div
     * @param override Name of the override
     */
    getWeapon1(override: string = null): { wep: string, sig: string } {
        if (this.overrides.has(override) && this.overrides.get(override).wep1) {
            return this.overrides.get(override).wep1.getDiv(mobile);
        }
        if (this.wep1 === null) {
            return null;
        }
        return this.wep1.getDiv(mobile);
    }

    /**
     * Get the secondary weapon set div
     * @param override Name of the override
     */
    getWeapon2(override: string = null): { wep: string, sig: string } {
        if (this.overrides.has(override) && this.overrides.get(override).wep2) {
            return this.overrides.get(override).wep2.getDiv(mobile);
        }
        if (this.wep2 === null) {
            return null;
        }
        return this.wep2.getDiv(mobile);
    }

    /**
     * Get the consumable div
     * @param override Name of the override
     */
    getConsumable(override: string = null): string {
        if (this.overrides.has(override) && this.overrides.get(override).consumable) {
            return this.overrides.get(override).consumable.getDiv(mobile);
        }
        return this.consumable.getDiv(mobile);
    }

    /**
     * Get the icon path
     */
    getIcon(): string {
        return this.icon;
    }

    /**
     * Add an override to the build
     * @param name Name of the override
     * @param open Visible by default or not
     */
    addOverride(name: string, open: boolean = true): {
        skills: Skills,
        profSkills: ProfessionSkills,
        specialization: Specialization,
        wep1: Weapons,
        wep2: Weapons,
        armor: Armor,
        trinket: Trinket,
        consumable: Consumable,
        open: Boolean
    } {
        const res = {
            skills: null,
            profSkills: null,
            specialization: null,
            wep1: null,
            wep2: null,
            armor: null,
            trinket: null,
            consumable: null,
            open: open
        };
        this.overrides.set(name, res);
        return res;
    }

    /**
     * Get the overrides of the build
     * @returns Array of the name of the overrides
     */
    getOverrides(): string[] {
        const res = ['Main'];
        this.overrides.forEach(function (value, key, map) {
            if (value.open) {
                res.push(key);
            }
        });
        return res;
    }
}


