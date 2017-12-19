import { ProfBuild } from '../../profBuild';
import { Professions } from '../professionUtilities/professions';

class WarriorBuild extends ProfBuild {
    constructor(id) {
        super(id, Professions.Warrior, '');
    }
}

class BerserkerBuild extends WarriorBuild {
    constructor(id) {
        super(id);
        this.icon += 'berserker.png';
        this.armor.setSingleStat('Viper\'s');
        this.armor.setSingleRune('Superior Rune of the Renegade');
        this.consumable.setConsumable('Rare Veggie Pizza', 'Toxic Focusing Crystal');
        this.trinket.setSingleStat('Viper\'s');
        this.wep1.setMainHand('Sword', 'Viper\'s', 'Superior Sigil of Geomancy');
        this.wep1.setOffHand('Torch', 'Viper\'s', 'Superior Sigil of Malice');
        this.wep2.setTwoHand('Longbow', 'Viper\'s', 'Superior Sigil of Geomancy', 'Superior Sigil of Malice');
        this.specialization.setSpec('spec1', 'Arms', ['Wounding Precision', 'Blademaster', 'Furious']);
        this.specialization.setSpec('spec2', 'Tactics', ['Empowered', 'Empower Allies', 'Powerful Synergy']);
        this.specialization.setSpec('spec3', 'Berserker', ['Last Blaze', 'Heat the Soul', 'King of Fires']);
        this.skills.setHealSkill('Blood Reckoning');
        this.skills.setUtilitySkills(['Shattering Blow', 'Banner of Discipline', 'Banner of Strength']);
        this.skills.setEliteSkill('Head Butt');
    }
}

export function warBuildMaker() {
    let build: ProfBuild = null;
    // Condi
    {
        build = new BerserkerBuild('bers');

        build = new BerserkerBuild('bersCC');
        build.skills.setUtilitySkills(['Wild Blow', 'Banner of Discipline', 'Banner of Strength']);
    }
}

