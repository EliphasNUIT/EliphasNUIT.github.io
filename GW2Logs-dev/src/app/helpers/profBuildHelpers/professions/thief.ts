import { ProfBuild } from '../../profBuild';
import { Professions } from '../professionUtilities/professions';

/**
 * Standard Thief build
 */
class ThiefBuild extends ProfBuild {
    /**
     * Create a standard Thief build
     * @param id Id of the build
     * @param name Name of the build
     */
    constructor(id, name) {
        super(id, Professions.Thief, name);
    }
}

/**
 * Power Daredevil build
 */
class PowerDaredevilBuild extends ThiefBuild {
    /**
     * Create a Power Daredevil build
     * @param id Id of the build
     * @param name Name of the build
     */
    constructor(id, name) {
        super(id, 'Daredevil - Power' + name);
        this.icon += 'daredevil.png';
        this.wep2 = null;
        this.armor.setSingleStat('Berserker\'s');
        this.armor.setSingleRune('Superior Rune of the Scholar');
        this.consumable.setConsumable('Bowl of Sweet and Spicy Butternut Squash Soup', 'Superior Sharpening Stone');
        this.trinket.setSingleStat('Berserker\'s');
        this.wep1.setTwoHand('Staff', 'Berserker\'s', 'Superior Sigil of Force', 'Superior Sigil of Air');
        this.specialization.setSpec('spec1', 'Deadly Arts', ['Mug', 'Revealed Training', 'Executioner']);
        this.specialization.setSpec('spec2', 'Critical Strikes', ['Twin Fangs', 'Practiced Tolerance', 'No Quarter']);
        this.specialization.setSpec('spec3', 'Daredevil', ['Havoc Mastery', 'Staff Master', 'Bounding Dodger']);
        this.skills.setHealSkill('Signet of Malice');
        this.skills.setUtilitySkills(['Assassin\'s Signet', 'Spider Venom', 'Fist Flurry']);
        this.skills.setEliteSkill('Basilisk Venom');
    }
}

/**
 * Power Deadeye build
 */
class PowerDeadeyeBuild extends ThiefBuild {
    /**
     * Create a Power Deadeye build
     * @param id Id of the build
     * @param name Name of the build
     */
    constructor(id, name) {
        super(id, 'Deadeye - Power' + name);
        this.icon += 'deadeye.png';
        this.wep2 = null;
        this.armor.setSingleStat('Berserker\'s');
        this.armor.setSingleRune('Superior Rune of the Scholar');
        this.consumable.setConsumable('Bowl of Sweet and Spicy Butternut Squash Soup', 'Superior Sharpening Stone');
        this.trinket.setSingleStat('Berserker\'s');
        this.wep1.setTwoHand('Rifle', 'Berserker\'s', 'Superior Sigil of Force', 'Superior Sigil of Air');
        this.specialization.setSpec('spec1', 'Deadly Arts', ['Mug', 'Revealed Training', 'Executioner']);
        this.specialization.setSpec('spec2', 'Critical Strikes', ['Twin Fangs', 'Practiced Tolerance', 'No Quarter']);
        this.specialization.setSpec('spec3', 'Deadeye', ['One in the Chamber', 'Silent Scope', 'Maleficent Seven']);
        this.skills.setHealSkill('Signet of Malice');
        this.skills.setUtilitySkills(['Assassin\'s Signet', 'Spider Venom', 'Shadow Flare']);
        this.skills.setEliteSkill('Basilisk Venom');
    }
}

/**
 * Condition Daredevil build
 */
class CondiDaredevilBuild extends ThiefBuild {
    /**
     * Create a Condition Daredevil build
     * @param id Id of the build
     * @param name Name of the build
     */
    constructor(id, name) {
        super(id, 'Daredevil - Condition' + name);
        this.icon += 'daredevil.png';
        this.armor.setSingleStat('Viper\'s');
        this.armor.setSingleRune('Superior Rune of the Krait');
        this.consumable.setConsumable('Rare Veggie Pizza', 'Toxic Focusing Crystal');
        this.trinket.setSingleStat('Viper\'s');
        this.wep1.setMainHand('Dagger', 'Viper\'s', 'Superior Sigil of Geomancy');
        this.wep2.setOffHand('Dagger', 'Viper\'s', 'Superior Sigil of Malice');
        this.specialization.setSpec('spec1', 'Deadly Arts', ['Dagger Training', 'Panic Strike', 'Potent Poison']);
        this.specialization.setSpec('spec2', 'Trickery', ['Uncatchable', 'Trickster', 'Sleight of Hand']);
        this.specialization.setSpec('spec3', 'Daredevil', [
            'Havoc Mastery',
            'Escapist\'s Absolution',
            'Lotus Training'
        ]);
        this.skills.setHealSkill('Channeled Vigor');
        this.skills.setUtilitySkills(['Spider Venom', 'Devourer Venom', 'Caltrops']);
        this.skills.setEliteSkill('Basilisk Venom');
    }
}

/**
 * Add thief builds to the database
 */
export function thiefBuildMaker() {
    let build: ProfBuild = null;
    // Power
    {
        build = new PowerDaredevilBuild('drdPower', '');

        let variant = build.addOverride('Mobility', false);
        variant.skills.setHealSkill('Signet of Malice');
        variant.skills.setUtilitySkills(['Assassin\'s Signet', 'Shadowstep', 'Fist Flurry']);
        variant.skills.setEliteSkill('Basilisk Venom');

        variant = build.addOverride('Fast CC', false);
        variant.skills.setHealSkill('Signet of Malice');
        variant.skills.setUtilitySkills(['Assassin\'s Signet', 'Spider Venom', 'Fist Flurry']);
        variant.skills.setEliteSkill('Impact Strike');

        variant = build.addOverride('No CC', false);
        variant.skills.setHealSkill('Signet of Malice');
        variant.skills.setUtilitySkills(['Assassin\'s Signet', 'Spider Venom', 'Fist Flurry']);
        variant.skills.setEliteSkill('Thieves Guild');

        build = new PowerDeadeyeBuild('deadeyePower', '');
        variant = build.addOverride('Mobility', false);
        variant.skills.setHealSkill('Signet of Malice');
        variant.skills.setUtilitySkills(['Assassin\'s Signet', 'Shadowstep', 'Fist Flurry']);
        variant.skills.setEliteSkill('Basilisk Venom');

        variant = build.addOverride('No CC', false);
        variant.skills.setHealSkill('Signet of Malice');
        variant.skills.setUtilitySkills(['Assassin\'s Signet', 'Shadowstep', 'Fist Flurry']);
        variant.skills.setEliteSkill('Thieves Guild');
    }

    // Condi
    {
        build = new CondiDaredevilBuild('drdCondi', '');
        let variant = build.addOverride('Mobility', false);
        variant.skills.setHealSkill('Channeled Vigor');
        variant.skills.setUtilitySkills(['Spider Venom', 'Shadowstep', 'Caltrops']);
        variant.skills.setEliteSkill('Basilisk Venom');

        variant = build.addOverride('Add', false);
        variant.skills.setHealSkill('Channeled Vigor');
        variant.skills.setUtilitySkills(['Spider Venom', 'Needle Trap', 'Caltrops']);
        variant.skills.setEliteSkill('Basilisk Venom');

        variant = build.addOverride('Mobile Target', false);
        variant.skills.setHealSkill('Channeled Vigor');
        variant.skills.setUtilitySkills(['Spider Venom', 'Skale Venom', 'Caltrops']);
        variant.skills.setEliteSkill('Basilisk Venom');

        variant = build.addOverride('Fast CC', false);
        variant.skills.setHealSkill('Channeled Vigor');
        variant.skills.setUtilitySkills(['Spider Venom', 'Devourer Venom', 'Caltrops']);
        variant.skills.setEliteSkill('Impact Strike');

        variant = build.addOverride('No CC', false);
        variant.skills.setHealSkill('Channeled Vigor');
        variant.skills.setUtilitySkills(['Spider Venom', 'Devourer Venom', 'Caltrops']);
        variant.skills.setEliteSkill('Thieves Guild');
    }
}

