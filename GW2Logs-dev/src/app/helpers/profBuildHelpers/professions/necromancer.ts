import { ProfBuild } from '../../profBuild';
import { Professions } from '../professionUtilities/professions';
import { Specialization } from '../data/specialization';
import { Skills } from '../data/skills';

/**
 * Standard Necromancer build
 */
class NecroBuild extends ProfBuild {
    /**
     * Create a standard Necromancer build
     * @param id Id of the build
     * @param name Name of the build
     */
    constructor(id, name) {
        super(id, Professions.Necromancer, name);
    }
}

/**
 * Condition Scourge build
 */
class CondiScourgeBuild extends NecroBuild {
    /**
     * Create a Condition Scourge build
     * @param id Id of the build
     * @param name Name of the build
     */
    constructor(id, name) {
        super(id, 'Scourge - Condition' + name);
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
        this.skills.setUtilitySkills(['Summon Shadow Fiend', 'Trail of Anguish', 'Blood Is Power']);
        this.skills.setEliteSkill('Plaguelands');
    }
}

/**
 * Condition Reaper build
 */
class CondiReaperBuild extends NecroBuild {
    /**
     * Create a Condition Reaper build
     * @param id Id of the build
     * @param name Name of the build
     */
    constructor(id, name) {
        super(id, 'Reaper - Condition' + name);
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
        this.skills.setUtilitySkills(['Summon Shadow Fiend', '', 'Blood Is Power']);
        this.skills.setEliteSkill('Plaguelands');
    }
}

/**
 * Add necromancer builds to the database
 */
export function necroBuildMaker() {
    let build: ProfBuild = null;
    // Scourge - Condi
    {
        build = new CondiScourgeBuild('scourgeCondi', '');
        let variant = build.addOverride('Kite');
        variant.skills = new Skills(build.profession);
        variant.skills.setHealSkill('Summon Blood Fiend');
        variant.skills.setUtilitySkills(['Summon Shadow Fiend', 'Epidemic', 'Blood Is Power']);
        variant.skills.setEliteSkill('Plaguelands');
        variant.specialization = new Specialization(build.profession);
        variant.specialization.setSpec('spec1', 'Curses', [
            'Plague Sending',
            'Master of Corruption',
            'Parasitic Contagion'
        ]);
        variant.specialization.setSpec('spec2', 'Soul Reaping', ['Unyielding Blast', 'Vital Persistence', 'Dhuumfire']);
        variant.specialization.setSpec('spec3', 'Scourge', ['Fell Beacon', 'Desert Empowerment', 'Sand Savant']);

        variant = build.addOverride('Epidemic');
        variant.skills = new Skills(build.profession);
        variant.skills.setHealSkill('Sand Flare');
        variant.skills.setUtilitySkills(['Summon Shadow Fiend', 'Epidemic', 'Blood Is Power']);
        variant.skills.setEliteSkill('Plaguelands');

    }

    // Reaper - Condi
    {
        build = new CondiReaperBuild('reaperCondi', '');
    }
}

