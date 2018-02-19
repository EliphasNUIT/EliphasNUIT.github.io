import { ProfBuild } from '../../profBuild';
import { Professions } from '../professionUtilities/professions';

class NecroBuild extends ProfBuild {
    constructor(id, name) {
        super(id, Professions.Necromancer, name);
    }
}

class CondiScourgeBuild extends NecroBuild {
    constructor(id, name) {
        super(id, 'Scourge - Condition - ' + name);
        this.icon += 'scourge.png';
        this.armor.setSingleStat('Viper\'s');
        this.armor.setSingleRune('Superior Rune of the Renegade');
        this.consumable.setConsumable('Rare Veggie Pizza', 'Furious Tuning Crystal');
        this.trinket.setSingleStat('Viper\'s');
        this.wep1.setMainHand('Scepter', 'Viper\'s', 'Superior Sigil of Geomancy');
        this.wep2.setOffHand('Torch', 'Viper\'s', 'Superior Sigil of Malice');
        this.specialization.setSpec('spec1', 'Curses', [
            'Plague Sending',
            'Master of Corruption',
            'Lingering Curse'
        ]);
        this.specialization.setSpec('spec2', 'Soul Reaping', ['Unyielding Blast', 'Vital Persistence', 'Dhuumfire']);
        this.specialization.setSpec('spec3', 'Scourge', ['Fell Beacon', 'Sadistic Searing', 'Demonic Lore']);
        this.skills.setHealSkill('Sand Flare');
        this.skills.setEliteSkill('Plaguelands');
    }
}

class CondiReaperBuild extends NecroBuild {
    constructor(id, name) {
        super(id, 'Reaper - Condition - ' + name);
        this.icon += 'reaper.png';
        this.armor.setSingleStat('Viper\'s');
        this.armor.setSingleRune('Superior Rune of the Renegade');
        this.consumable.setConsumable('Rare Veggie Pizza', 'Toxic Focusing Crystal');
        this.trinket.setSingleStat('Viper\'s');
        this.wep1.setMainHand('Scepter', 'Viper\'s', 'Superior Sigil of Geomancy');
        this.wep1.setOffHand('Dagger', 'Viper\'s', 'Superior Sigil of Agony');
        this.wep2.setTwoHand('Greatsword', 'Viper\'s', 'Superior Sigil of Agony', 'Superior Sigil of Geomancy');
        this.specialization.setSpec('spec1', 'Curses', [
            'Chilling Darkness',
            'Master of Corruption',
            'Lingering Curse'
        ]);
        this.specialization.setSpec('spec2', 'Soul Reaping', ['Unyielding Blast', 'Vital Persistence', 'Dhuumfire']);
        this.specialization.setSpec('spec3', 'Reaper', ['Chilling Nova', 'Decimate Defenses', 'Deathly Chill']);
        this.skills.setHealSkill('Summon Blood Fiend');
        this.skills.setEliteSkill('Plaguelands');
    }
}

export function necroBuildMaker() {
    let build: ProfBuild = null;
    // Scourge - Condi
    {
        build = new CondiScourgeBuild('scourgeCondi', 'Standard');
        build.skills.setUtilitySkills(['Summon Shadow Fiend', 'Trail of Anguish', 'Blood Is Power']);

        build = new CondiScourgeBuild('scourgeCondiEpi', 'Epidemic');
        build.skills.setUtilitySkills(['Epidemic', 'Summon Shadow Fiend', 'Blood Is Power']);

        build = new CondiScourgeBuild('scourgeCondiKite', 'Sabetha - Kite');
        build.skills.setHealSkill('Summon Blood Fiend');
        build.skills.setUtilitySkills(['Blood Is Power', 'Sand Swell', 'Epidemic']);

        build = new CondiScourgeBuild('scourgeCondiPortal', 'Portal');
        build.skills.setUtilitySkills(['Blood Is Power', 'Sand Swell', 'Epidemic']);
    }

    // Reaper - Condi
    {
        build = new CondiReaperBuild('reaperCondi', 'Standard');
        build.skills.setUtilitySkills(['Summon Shadow Fiend', 'Summon Bone Fiend', 'Blood Is Power']);

        build = new CondiReaperBuild('reaperCondiEpi', 'Epidemic');
        build.skills.setUtilitySkills(['Epidemic', 'Summon Shadow Fiend', 'Blood Is Power']);
    }
}

