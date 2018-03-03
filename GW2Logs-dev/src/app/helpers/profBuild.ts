import { Skills } from './profBuildHelpers/data/skills';
import { ProfessionSkills } from './profBuildHelpers/data/professionSkills';
import { Specialization } from './profBuildHelpers/data/specialization';
import { Weapons } from './profBuildHelpers/data/weapons';
import { Armor } from './profBuildHelpers/data/armor';
import { Trinket } from './profBuildHelpers/data/trinket';
import { Consumable } from './profBuildHelpers/data/consumable';

function detectmob() {
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
    } else {
        return false;
    }
}

export let buildDatabase: Map<string, ProfBuild> = new Map<string, ProfBuild>();

const mobile = false;


export class ProfBuild {
    id: string;
    name: string;
    armor: Armor;
    consumable: Consumable;
    trinket: Trinket;
    wep2: Weapons;
    wep1: Weapons;
    specialization: Specialization;
    profSkills: ProfessionSkills;
    skills: Skills;
    profession: any;
    icon = 'assets/profIcons/';

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
        buildDatabase.set(id, this);
    }

    getSpecializations(override: string = null): string {
        if (this.overrides.has(override) && this.overrides.get(override).specialization) {
            return this.overrides.get(override).specialization.getDiv(mobile);
        }
        return this.specialization.getDiv(mobile);
    }

    getPets(override: string = null): string {
        if (this.overrides.has(override) && this.overrides.get(override).skills) {
            return this.overrides.get(override).skills.getPDiv();
        }
        if (this.skills === null) {
            return '';
        }
        return this.skills.getPDiv();
    }

    getSkills(override: string = null): { heal: string, utilities: string, elite: string } {
        if (this.overrides.has(override) && this.overrides.get(override).skills) {
            return this.overrides.get(override).skills.getSDiv(mobile);
        }
        if (this.skills === null) {
            return null;
        }
        return this.skills.getSDiv(mobile);
    }

    getProfessionSkills(override: string = null): string {
        if (this.overrides.has(override) && this.overrides.get(override).profSkills) {
            return this.overrides.get(override).profSkills.getSDiv(mobile);
        }
        if (this.profSkills === null) {
            return '';
        }
        return this.profSkills.getSDiv(mobile);
    }

    getTrinket(override: string = null): { BA: string, AR: string } {
        if (this.overrides.has(override) && this.overrides.get(override).trinket) {
            return this.overrides.get(override).trinket.getDiv(mobile);
        }
        return this.trinket.getDiv(mobile);
    }

    getArmor(override: string = null): { armor: string, rune: string } {
        if (this.overrides.has(override) && this.overrides.get(override).armor) {
            return this.overrides.get(override).armor.getDiv(mobile);
        }
        return this.armor.getDiv(mobile);
    }

    getWeapon1(override: string = null): { wep: string, sig: string } {
        if (this.overrides.has(override) && this.overrides.get(override).wep1) {
            return this.overrides.get(override).wep1.getDiv(mobile);
        }
        if (this.wep1 === null) {
            return null;
        }
        return this.wep1.getDiv(mobile);
    }

    getWeapon2(override: string = null): { wep: string, sig: string } {
        if (this.overrides.has(override) && this.overrides.get(override).wep2) {
            return this.overrides.get(override).wep2.getDiv(mobile);
        }
        if (this.wep2 === null) {
            return null;
        }
        return this.wep2.getDiv(mobile);
    }

    getConsumable(override: string = null): string {
        if (this.overrides.has(override) && this.overrides.get(override).consumable) {
            return this.overrides.get(override).consumable.getDiv(mobile);
        }
        return this.consumable.getDiv(mobile);
    }

    getIcon(): string {
        return this.icon;
    }

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
}


