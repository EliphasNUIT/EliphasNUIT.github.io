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
 * Override data
 */
class BuildOverride {
    /**
     * Armor data
     */
    private _armor: Armor;
    /**
     * Consumable data
     */
    private _consumable: Consumable;
    /**
     * Trinket data
     */
    private _trinket: Trinket;
    /**
     * Second weapon set data, can be set to null
     */
    private _wep2: Weapons;
    /**
     * Primary weapon set data
     */
    private _wep1: Weapons;
    /**
     * Specialization data
     */
    private _specialization: Specialization;
    /**
     * Profession skills data, can be set to null
     */
    private _profSkills: ProfessionSkills;
    /**
     * Skills data
     */
    private _skills: Skills;
    /**
     * Original build
     */
    private originalBuild: ProfBuild;
    /**
     * Visible or not
     */
    open: boolean;

    /**
     * Create a build override
     * @param originalBuild Original build to override
     * @param open Visible by default or not
     */
    constructor(originalBuild: ProfBuild, open: boolean) {
        this._armor = null;
        this._consumable = null;
        this._profSkills = null;
        this._skills = null;
        this._specialization = null;
        this._trinket = null;
        this._wep1 = null;
        this._wep2 = null;
        this.originalBuild = originalBuild;
        this.open = open;
    }

    /**
     * Wep2 getter, correctly create one if null
     */
    get wep2(): Weapons {
        if (this._wep2 === null) {
            this._wep2 = new Weapons(this.originalBuild.profession);
        }
        return this._wep2;
    }

    /**
     * Checks if wep2 has been created
     */
    hasWep2(): boolean {
        return this._wep2 !== null;
    }

    /**
     * Wep1 getter, correctly create one if null
     */
    get wep1(): Weapons {
        if (this._wep1 === null) {
            this._wep1 = new Weapons(this.originalBuild.profession);
        }
        return this._wep1;
    }

    /**
     * Checks if wep1 has been created
     */
    hasWep1(): boolean {
        return this._wep1 !== null;
    }

    /**
     * Trinket getter, correctly create one if null
     */
    get trinket(): Trinket {
        if (this._trinket === null) {
            this._trinket = new Trinket();
        }
        return this._trinket;
    }

    /**
     * Checks if trinket has been created
     */
    hasTrinket(): boolean {
        return this._trinket !== null;
    }

    /**
     * Specialization getter, correctly create one if null
     */
    get specialization(): Specialization {
        if (this._specialization === null) {
            this._specialization = new Specialization(this.originalBuild.profession);
        }
        return this._specialization;
    }

    /**
     * Checks if specialization has been created
     */
    hasSpecialization(): boolean {
        return this._specialization !== null;
    }

    /**
     * Skills getter, correctly create one if null
     */
    get skills(): Skills {
        if (this._skills === null) {
            this._skills = new Skills(this.originalBuild.profession);
        }
        return this._skills;
    }

    /**
     * Checks if skills has been created
     */
    hasSkills(): boolean {
        return this._skills !== null;
    }

    /**
     * Armor getter, correctly create one if null
     */
    get armor(): Armor {
        if (this._armor === null) {
            this._armor = new Armor(this.originalBuild.profession.armor);
        }
        return this._armor;
    }

    /**
     * Checks if armor has been created
     */
    hasArmor(): boolean {
        return this._armor !== null;
    }

    /**
     * Profession skills getter, correctly create one if null
     */
    get profSkills(): ProfessionSkills {
        if (this._profSkills === null) {
            this._profSkills = new ProfessionSkills(this.originalBuild.profession);
        }
        return this._profSkills;
    }

    /**
     * Checks if profession skills has been created
     */
    hasProfSkills(): boolean {
        return this._profSkills !== null;
    }

    /**
     * Consumable getter, correctly create one if null
     */
    get consumable(): Consumable {
        if (this._consumable === null) {
            this._consumable = new Consumable();
        }
        return this._consumable;
    }

    /**
     * Checks if consumable has been created
     */
    hasConsumable(): boolean {
        return this._consumable !== null;
    }
}

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
    protected armor: Armor;
    /**
     * Consumable data
     */
    protected consumable: Consumable;
    /**
     * Trinket data
     */
    protected trinket: Trinket;
    /**
     * Second weapon set data, can be set to null
     */
    protected wep2: Weapons;
    /**
     * Primary weapon set data
     */
    protected wep1: Weapons;
    /**
     * Specialization data
     */
    protected specialization: Specialization;
    /**
     * Profession skills data, can be set to null
     */
    protected profSkills: ProfessionSkills;
    /**
     * Skills data
     */
    protected skills: Skills;
    /**
     * Profession
     */
    public profession: any;
    /**
     * Icon path
     */
    protected icon = 'assets/profIcons/';
    /**
     * Overrides
     */
    private overrides: Map<string, BuildOverride>;

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
        if (this.overrides.has(override) && this.overrides.get(override).hasSpecialization()) {
            return this.overrides.get(override).specialization.getDiv(mobile);
        }
        return this.specialization.getDiv(mobile);
    }

    /**
     * Get the pets div
     * @param override Name of the override
     */
    getPets(override: string = null): string {
        if (this.overrides.has(override) && this.overrides.get(override).hasSkills()) {
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
        if (this.overrides.has(override) && this.overrides.get(override).hasSkills()) {
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
        if (this.overrides.has(override) && this.overrides.get(override).hasProfSkills()) {
            return this.overrides.get(override).profSkills.getDiv(mobile);
        }
        if (this.profSkills === null) {
            return '';
        }
        return this.profSkills.getDiv(mobile);
    }

    /**
     * Get the trinket div
     * @param override Name of the override
     */
    getTrinket(override: string = null): { BA: string, AR: string } {
        if (this.overrides.has(override) && this.overrides.get(override).hasTrinket()) {
            return this.overrides.get(override).trinket.getDiv(mobile);
        }
        return this.trinket.getDiv(mobile);
    }

    /**
     * Get the armor div
     * @param override Name of the override
     */
    getArmor(override: string = null): { armor: string, rune: string } {
        if (this.overrides.has(override) && this.overrides.get(override).hasArmor()) {
            return this.overrides.get(override).armor.getDiv(mobile);
        }
        return this.armor.getDiv(mobile);
    }

    /**
     * Get the primary weapon set div
     * @param override Name of the override
     */
    getWeapon1(override: string = null): { wep: string, sig: string } {
        if (this.overrides.has(override) && this.overrides.get(override).hasWep1()) {
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
        if (this.overrides.has(override) && this.overrides.get(override).hasWep2()) {
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
        if (this.overrides.has(override) && this.overrides.get(override).hasConsumable()) {
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
    addOverride(name: string, open: boolean = true): BuildOverride {
        const res = new BuildOverride(this, open);
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

    /**
     * Check if the build has skills
     * @param override Override name
     */
    hasSkills(override: string = null): boolean {
        if (this.overrides.has(override)) {
            return this.overrides.get(override).hasSkills();
        }
        return this.skills !== null;
    }

    /**
     * Check if the build has a secondary weapon set
     * @param override Override name
     */
    isSingleWeapon(override: string = null): boolean {
        if (this.overrides.has(override)) {
            return !this.overrides.get(override).hasWep2();
        }
        return this.wep2 === null;
    }
}


