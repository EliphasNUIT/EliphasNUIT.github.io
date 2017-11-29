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

const mobile = detectmob();


export class ProfBuild {
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

    constructor(name: string, profession: any) {
        this.profession = profession;
        this.skills = new Skills(profession);
        this.profSkills = new ProfessionSkills(profession);
        this.specialization = new Specialization(profession);
        this.wep1 = new Weapons(profession);
        this.wep2 = new Weapons(profession);
        this.armor = new Armor(profession.armor);
        this.trinket = new Trinket();
        this.consumable = new Consumable();
        buildDatabase.set(name, this);
    }

    getSpecializations(): string {
        return this.specialization.getDiv(mobile);
    }

    getPets(): string {
        if (this.skills === null) {
            return '';
        }
        return this.skills.getPDiv();
    }

    getSkills(): {heal: string, utilities: string, elite: string} {
        if (this.skills === null) {
            return null;
        }
        return this.skills.getSDiv(mobile);
    }

    getProfessionSkills(): string {
        if (this.profSkills === null) {
            return '';
        }
        return this.profSkills.getSDiv(mobile);
    }

    getTrinket(): {BA: string, AR: string} {
        return this.trinket.getDiv(mobile);
    }

    getArmor(): {armor: string, rune: string} {
        return this.armor.getDiv(mobile);
    }

    getWeapon1(): {wep: string, sig: string} {
        if (this.wep1 === null) {
            return null;
        }
        return this.wep1.getDiv(mobile);
    }

    getWeapon2(): {wep: string, sig: string} {
        if (this.wep2 === null) {
            return null;
        }
        return this.wep2.getDiv(mobile);
    }

    getConsumable(): string {
        return this.consumable.getDiv(mobile);
    }

    getIcon(): string {
        return this.icon;
    }
}


