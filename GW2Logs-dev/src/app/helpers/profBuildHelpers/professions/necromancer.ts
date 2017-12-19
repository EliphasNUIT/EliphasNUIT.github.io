import { ProfBuild } from '../../profBuild';
import { Professions } from '../professionUtilities/professions';

class NecroBuild extends ProfBuild {
    constructor(id) {
        super(id, Professions.Necromancer, '');
    }
}

class CondiScourgeBuild extends NecroBuild {
    constructor(id) {
        super(id);
        this.icon += 'scourge.png';
        this.armor.setSingleStat('Viper\'s');
        this.armor.setSingleRune('Superior Rune of the Renegade');
        this.consumable.setConsumable('Rare Veggie Pizza', 'Furious Tuning Crystal');
        this.trinket.setSingleStat('Viper\'s');
        this.wep1.setMainHand('Scepter', 'Viper\'s', 'Superior Sigil of Geomancy');
        this.wep2.setOffHand('Torch', 'Viper\'s', 'Superior Sigil of Malice');
        this.specialization.setSpec('spec1', 'Curses', [
            'Terrifying Descent',
            'Master of Corruption',
            'Lingering Curse'
        ]);
        this.specialization.setSpec('spec2', 'Soul Reaping', ['Unyielding Blast', 'Vital Persistence', 'Dhuumfire']);
        this.specialization.setSpec('spec3', 'Scourge', ['Fell Beacon', 'Sadistic Searing', 'Demonic Lore']);
        this.skills.setHealSkill('Sand Flare');
        this.skills.setEliteSkill('Plaguelands');
    }
}

export function necroBuildMaker() {
    let build: ProfBuild = null;
    // Scourge - Condi
    {
        build = new CondiScourgeBuild('scourgeCondiMO');
        build.skills.setUtilitySkills(['Summon Shadow Fiend', 'Trail of Anguish', 'Epidemic']);

        build = new CondiScourgeBuild('scourgeCondiGorse');
        build.skills.setUtilitySkills(['Summon Shadow Fiend', 'Trail of Anguish', 'Blood Is Power']);

        build = new CondiScourgeBuild('scourgeCondiSab');
        build.skills.setUtilitySkills(['Blood Is Power', 'Trail of Anguish', 'Epidemic']);

        build = new CondiScourgeBuild('scourgeCondiDes');
        build.skills.setUtilitySkills(['Blood Is Power', 'Sand Swell', 'Epidemic']);
    }
}

