import { ProfBuild } from '../../profBuild';
import { Professions } from '../professionUtilities/professions';


class GuardBuild extends ProfBuild {
    constructor(id) {
        super(id, Professions.Guardian);
    }
}

class PowerDHBuild extends GuardBuild {
    constructor(id) {
        super(id);
        this.icon += 'dragonhunter.png';
        this.armor.setSingleStat('Berserker\'s');
        this.armor.setSingleRune('Superior Rune of the Scholar');
        this.consumable.setConsumable('Bowl of Sweet and Spicy Butternut Squash Soup', 'Superior Sharpening Stone');
        this.trinket.setSingleStat('Berserker\'s');
        this.wep1.setMainHand('Scepter', 'Berserker\'s', 'Superior Sigil of Force');
        this.wep1.setOffHand('Torch', 'Berserker\'s', 'Superior Sigil of Air');
        this.wep2.setTwoHand('Greatsword', 'Berserker\'s', 'Superior Sigil of Force', 'Superior Sigil of Air');
        this.specialization.setSpec('spec1', 'Zeal', ['Fiery Wrath', 'Zealous Blade', 'Symbolic Avenger']);
        this.specialization.setSpec('spec2', 'Radiance', [
            'Healer\'s Retribution',
            'Retribution',
            'Righteous Instincts'
        ]);
        this.specialization.setSpec('spec3', 'Dragonhunter', [
            'Piercing Light',
            'Zealot\'s Aggression',
            'Big Game Hunter'
        ]);
        this.skills.setHealSkill('Litany of Wrath');
        this.skills.setEliteSkill('Dragon\'s Maw');
    }
}

class CondiFBBuild extends GuardBuild {
    constructor(id) {
        super(id);
        this.icon += 'firebrand.png';
        this.armor.setStats(['Sinister', 'Sinister', 'Viper\'s', 'Sinister', 'Sinister', 'Sinister']);
        this.armor.setSingleRune('Superior Rune of Balthazar');
        this.consumable.setConsumable('Rare Veggie Pizza', 'Toxic Focusing Crystal');
        this.trinket.setSingleStat('Sinister');
        this.wep1.setMainHand('Scepter', 'Viper\'s', 'Superior Sigil of Bursting');
        this.wep1.setOffHand('Torch', 'Sinister', 'Superior Sigil of Smoldering');
        this.wep2.setMainHand('Axe', 'Viper\'s', 'Superior Sigil of Bursting');
        this.specialization.setSpec('spec1', 'Virtues', ['Unscathed Contender', 'Absolute Resolution', 'Permeating Wrath']);
        this.specialization.setSpec('spec2', 'Radiance', ['Right-Hand Strength', 'Radiant Fire', 'Amplified Wrath']);
        this.specialization.setSpec('spec3', 'Firebrand', ['Archivist of Whispers', 'Legendary Lore', 'Loremaster']);
        this.skills.setHealSkill('Mantra of Solace');
        this.skills.setUtilitySkills(['Mantra of Flame', 'Sword of Justice', 'Signet of Wrath']);
        this.skills.setEliteSkill('Renewed Focus');
    }
}

export function guardBuildMaker() {
    let build: ProfBuild = null;
    // Power
    {
        build = new PowerDHBuild('dhPowerZealRad');
        build.skills.setUtilitySkills(['Procession of Blades', '"Stand Your Ground!"', 'Bane Signet']);

        build = new PowerDHBuild('dhPowerZealRadKC');
        build.wep1.setMainHand('Scepter', 'Berserker\'s', 'Superior Sigil of Force');
        build.wep1.setOffHand('Torch', 'Berserker\'s', 'Superior Sigil of Impact');
        build.wep2.setTwoHand('Greatsword', 'Berserker\'s', 'Superior Sigil of Force', 'Superior Sigil of Impact');
        build.skills.setUtilitySkills(['Procession of Blades', 'Hallowed Ground', 'Bane Signet']);

    }

    // Condi
    {
        build = new CondiFBBuild('fbDPS');

        build = new CondiFBBuild('fbDPSSword');
        build.wep2.setMainHand('Sword', 'Viper\'s', 'Superior Sigil of Bursting');

        build = new CondiFBBuild('fbDPSCC');
        build.skills.setUtilitySkills(['Mantra of Flame', 'Hammer of Wisdom', 'Signet of Wrath']);
    }
}

