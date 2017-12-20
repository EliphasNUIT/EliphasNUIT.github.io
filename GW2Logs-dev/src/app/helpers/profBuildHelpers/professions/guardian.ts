import { ProfBuild } from '../../profBuild';
import { Professions } from '../professionUtilities/professions';


class GuardBuild extends ProfBuild {
    constructor(id, name) {
        super(id, Professions.Guardian, name);
    }
}

class PowerDHBuild extends GuardBuild {
    constructor(id, name) {
        super(id, name);
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
    constructor(id, name) {
        super(id, name);
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
        build = new PowerDHBuild('dhPowerZealRad', 'Dragonhunter - Power - Zeal/Radiance');
        build.skills.setUtilitySkills(['Procession of Blades', '"Stand Your Ground!"', 'Bane Signet']);
    }

    // Condi
    {
        build = new CondiFBBuild('fbDPS', 'Firebrand - UC Condition - Adds');

        build = new CondiFBBuild('fbDPSPurg', 'Firebrand - UC Condition - No Adds');
        build.skills.setUtilitySkills(['Mantra of Flame', 'Purging Flames', 'Signet of Wrath']);

        build = new CondiFBBuild('fbDPSCon', 'Firebrand - Consecration Condition - Adds');
        build.specialization.setSpec('spec1', 'Virtues', ['Master of Consecrations', 'Absolute Resolution', 'Permeating Wrath']);

        build = new CondiFBBuild('fbDPSConPurge', 'Firebrand - Consecration Condition - No Adds');
        build.specialization.setSpec('spec1', 'Virtues', ['Master of Consecrations', 'Absolute Resolution', 'Permeating Wrath']);
        build.skills.setUtilitySkills(['Mantra of Flame', 'Purging Flames', 'Signet of Wrath']);

        build = new CondiFBBuild('fbDPSCC', 'Firebrand - UC CC Condition');
        build.skills.setUtilitySkills(['Mantra of Flame', 'Hammer of Wisdom', 'Signet of Wrath']);
    }
}

