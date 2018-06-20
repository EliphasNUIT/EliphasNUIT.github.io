import { ProfBuild } from '../../profBuild';
import { Professions } from '../professionUtilities/professions';

/**
 * Standard Warrior build
 */
class WarriorBuild extends ProfBuild {
    /**
     * Create a standard Warrior build
     * @param id Id of the build
     * @param name Name of the build
     */
    constructor(id, name) {
        super(id, Professions.Warrior, name);
    }
}

/**
 * Condition Warrior build
 */
class CondiWarriorBuild extends WarriorBuild {
    /**
     * Create a Condition Warrior build
     * @param id Id of the build
     * @param name Name of the build
     */
    constructor(id, name) {
        super(id, name);
        this.armor.setSingleStat('Viper\'s');
        this.armor.setSingleRune('Superior Rune of the Renegade');
        this.consumable.setConsumable('Rare Veggie Pizza', 'Toxic Focusing Crystal');
        this.trinket.setSingleStat('Viper\'s');
        this.wep1.setMainHand('Sword', 'Viper\'s', 'Superior Sigil of Geomancy');
        this.wep2.setTwoHand('Longbow', 'Viper\'s', 'Superior Sigil of Geomancy', 'Superior Sigil of Malice');
        this.specialization.setSpec('spec1', 'Arms', ['Wounding Precision', 'Blademaster', 'Furious']);
        this.skills.setHealSkill('Blood Reckoning');
        this.skills.setEliteSkill('Head Butt');
    }
}

/**
 * Banner Berserker build
 */
class BannerBerserkerBuild extends CondiWarriorBuild {
    /**
    * Create a Banner Berserker build
    * @param id Id of the build
    * @param name Name of the build
    */
    constructor(id, name) {
        super(id, 'Berserker - Banner' + name);
        this.icon += 'berserker.png';
        this.wep1.setOffHand('Torch', 'Viper\'s', 'Superior Sigil of Malice');
        this.specialization.setSpec('spec2', 'Tactics', ['Empowered', 'Empower Allies', 'Powerful Synergy']);
        this.specialization.setSpec('spec3', 'Berserker', ['Last Blaze', 'Heat the Soul', 'King of Fires']);
        this.skills.setUtilitySkills(['', 'Banner of Discipline', 'Banner of Strength']);
    }
}

/**
 * Condition Berserker build
 */
class ConditionBerserkerBuild extends CondiWarriorBuild {
    /**
     * Create a Condition Berserker build
     * @param id Id of the build
     * @param name Name of the build
     */
    constructor(id, name) {
        super(id, 'Berserker - Condition' + name);
        this.icon += 'berserker.png';
        this.wep1.setOffHand('Torch', 'Viper\'s', 'Superior Sigil of Malice');
        this.specialization.setSpec('spec2', 'Discipline', ['Warrior\'s Sprint', 'Inspiring Battle Standard', 'Burst Mastery']);
        this.specialization.setSpec('spec3', 'Berserker', ['Smash Brawler', 'Heat the Soul', 'King of Fires']);
        this.skills.setUtilitySkills(['Shattering Blow', 'Signet of Fury', 'Signet of Might']);
    }
}

/**
 * Power Warrior build
 */
class PowerWarriorBuild extends WarriorBuild {
    /**
     * Create a Power Warrior build
     * @param id Id of the build
     * @param name Name of the build
     */
    constructor(id, name) {
        super(id, name);
        this.armor.setStats(['Assassin\'s', 'Assassin\'s', 'Berserker\'s', 'Assassin\'s', 'Assassin\'s', 'Berserker\'s']);
        this.armor.setSingleRune('Superior Rune of the Scholar');
        this.consumable.setConsumable('Bowl of Curry Butternut Squash Soup', 'Superior Sharpening Stone');
        this.trinket.setStats(['Berserker\'s', 'Berserker\'s', 'Berserker\'s', 'Berserker\'s', 'Berserker\'s', 'Assassin\'s']);
    }
}

/**
 * Banner Spellbreaker build
 */
class BannerSpellbreakerBuild extends PowerWarriorBuild {
    /**
     * Create a Banner Spellbreaker build
     * @param id Id of the build
     * @param name Name of the build
     */
    constructor(id, name) {
        super(id, 'Spellbreaker - Banner' + name);
        this.icon += 'spellbreaker.png';
        this.specialization.setSpec('spec1', 'Strength', ['Peak Performance', 'Forceful Greatsword', 'Berserker\'s Power']);
        this.specialization.setSpec('spec2', 'Tactics', ['Empowered', 'Empower Allies', 'Powerful Synergy']);
        this.specialization.setSpec('spec3', 'Spellbreaker', ['Pure Strike', 'Loss Aversion', 'Magebane Tether']);
        this.wep1.setTwoHand('Greatsword', 'Berserker\'s', 'Superior Sigil of Force', 'Superior Sigil of Accuracy');
        this.wep2.setMainHand('Axe', 'Berserker\'s', 'Superior Sigil of Force');
        this.wep2.setOffHand('Axe', 'Berserker\'s', 'Superior Sigil of Accuracy');
        this.skills.setHealSkill('"To the Limit!"');
        this.skills.setUtilitySkills(['Kick', 'Banner of Discipline', 'Banner of Strength']);
        this.skills.setEliteSkill('Winds of Disenchantment');
    }
}

/**
 * Banner Warrior build
 */
class BannerWarriorBuild extends PowerWarriorBuild {
    /**
     * Create a Banner Warrior build
     * @param id Id of the build
     * @param name Name of the build
     */
    constructor(id, name) {
        super(id, 'Warrior - Banner' + name);
        this.icon += 'warrior.png';
        this.specialization.setSpec('spec1', 'Strength', ['Peak Performance', 'Forceful Greatsword', 'Berserker\'s Power']);
        this.specialization.setSpec('spec2', 'Tactics', ['Empowered', 'Empower Allies', 'Powerful Synergy']);
        this.specialization.setSpec('spec3', 'Discipline', ['Warrior\'s Sprint', 'Inspiring Battle Standard', 'Axe Mastery']);
        this.skills.setHealSkill('"To the Limit!"');
        this.skills.setUtilitySkills(['Throw Bolas', 'Banner of Discipline', 'Banner of Strength']);
        this.skills.setEliteSkill('Rampage');
        this.wep1.setMainHand('Mace', 'Berserker\'s', 'Superior Sigil of Force');
        this.wep1.setOffHand('Mace', 'Berserker\'s', 'Superior Sigil of Paralyzation');
        this.wep2.setMainHand('Axe', 'Berserker\'s', 'Superior Sigil of Force');
        this.wep2.setOffHand('Axe', 'Berserker\'s', 'Superior Sigil of Accuracy');
    }
}

/**
 * Power Spellbreaker build
 */
class PowerSpellbreakerBuild extends PowerWarriorBuild {
    /**
     * Create a Power Spellbreaker build
     * @param id Id of the build
     * @param name Name of the build
     */
    constructor(id, name) {
        super(id, 'Spellbreaker - Power' + name);
        this.icon += 'spellbreaker.png';
        this.skills.setHealSkill('"To the Limit!"');
        this.skills.setUtilitySkills(['Kick', 'Bull\'s Charge', 'Signet of Might']);
        this.skills.setEliteSkill('Signet of Rage');
        this.specialization.setSpec('spec1', 'Strength', ['Peak Performance', 'Body Blow', 'Berserker\'s Power']);
        this.specialization.setSpec('spec2', 'Discipline', ['Warrior\'s Sprint', 'Inspiring Battle Standard', 'Axe Mastery']);
        this.specialization.setSpec('spec3', 'Spellbreaker', ['Pure Strike', 'Loss Aversion', 'Magebane Tether']);
        this.wep1.setMainHand('Mace', 'Berserker\'s', 'Superior Sigil of Force');
        this.wep1.setOffHand('Axe', 'Berserker\'s', 'Superior Sigil of Accuracy');
        this.wep2.setMainHand('Axe', 'Berserker\'s', 'Superior Sigil of Force');
        this.wep2.setOffHand('Dagger', 'Berserker\'s', 'Superior Sigil of Accuracy');
    }
}

/**
 * Add warrior builds to the database
 */
export function warBuildMaker() {
    let build: ProfBuild = null;
    // Condi
    {
        build = new BannerBerserkerBuild('bers', '');
        let variant = build.addOverride('Fury', false);
        variant.skills.setHealSkill('Blood Reckoning');
        variant.skills.setEliteSkill('Head Butt');
        variant.skills.setUtilitySkills(['"For Great Justice!"', 'Banner of Discipline', 'Banner of Strength']);

        variant = build.addOverride('CC', false);
        variant.skills.setHealSkill('Blood Reckoning');
        variant.skills.setEliteSkill('Head Butt');
        variant.skills.setUtilitySkills(['Wild Blow', 'Banner of Discipline', 'Banner of Strength']);

        variant = build.addOverride('DPS', false);
        variant.skills.setHealSkill('Blood Reckoning');
        variant.skills.setEliteSkill('Head Butt');
        variant.skills.setUtilitySkills(['Shattering Blow', 'Banner of Discipline', 'Banner of Strength']);
        //
        build = new ConditionBerserkerBuild('bersDPS', '');
    }
    // power
    {
        build = new BannerWarriorBuild('warBan', '');
        //
        build = new BannerSpellbreakerBuild('spellbrk', '');
        //
        build = new PowerSpellbreakerBuild('spellbrkDPS', '');

        const variant = build.addOverride('Dagger/Axe + Axe/Dagger');
        variant.wep1.setMainHand('Dagger', 'Berserker\'s', 'Superior Sigil of Force');
        variant.wep1.setOffHand('Axe', 'Berserker\'s', 'Superior Sigil of Accuracy');
        variant.wep2.setMainHand('Axe', 'Berserker\'s', 'Superior Sigil of Force');
        variant.wep2.setOffHand('Dagger', 'Berserker\'s', 'Superior Sigil of Accuracy');
    }
}

