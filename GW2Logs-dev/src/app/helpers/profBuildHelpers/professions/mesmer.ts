import { ProfBuild } from '../../profBuild';
import { Professions } from '../professionUtilities/professions';

/**
 * Standard Mesmer build
 */
class MesBuild extends ProfBuild {
    /**
     * Create a standard Mesmer build
     * @param id Id of the build
     * @param name Name of the build
     */
    constructor(id, name) {
        super(id, Professions.Mesmer, name);
    }
}

/**
 * Power Chronomancer build
 */
class ChronoPowerBuild extends MesBuild {
    /**
     * Create a Power Chronomancer build
     * @param id Id of the build
     * @param name Name of the build
     */
    constructor(id, name) {
        super(id, 'Chronomancer - Power' + name);
        this.icon += 'chronomancer.png';
        this.armor.setSingleStat('Assassin\'s');
        this.armor.setSingleRune('Superior Rune of the Scholar');
        this.consumable.setConsumable('Bowl of Sweet and Spicy Butternut Squash Soup', 'Superior Sharpening Stone');
        this.trinket.setStats(['Assassin\'s', 'Berserker\'s', 'Berserker\'s', 'Berserker\'s', 'Berserker\'s', 'Berserker\'s']);
        this.wep1.setMainHand('Sword', 'Berserker\'s', 'Superior Sigil of Force');
        this.wep1.setOffHand('Sword', 'Berserker\'s', 'Superior Sigil of Accuracy');
        this.wep2.setOffHand('Focus', 'Berserker\'s', 'Superior Sigil of Accuracy');
        this.specialization.setSpec('spec1', 'Dueling', [
            'Phantasmal Fury',
            'Fencer\'s Finesse',
            'Superiority Complex'
        ]);
        this.specialization.setSpec('spec2', 'Illusions', [
            'Shatter Storm',
            'Maim the Disillusioned',
            'Phantasmal Force'
        ]);
        this.specialization.setSpec('spec3', 'Chronomancer', [
            'Time Catches Up',
            'Improved Alacrity',
            'Chronophantasma'
        ]);
        this.skills.setHealSkill('Signet of the Ether');
        this.skills.setUtilitySkills(['Phantasmal Defender', 'Well of Calamity', 'Phantasmal Disenchanter']);
        this.skills.setEliteSkill('Gravity Well');
    }
}

/**
 * Minstrel Chronomancer build
 */
class MinstrelShareBuild extends MesBuild {
    /**
     * Create a Minstrel Chronomancer build
     * @param id Id of the build
     * @param name Name of the build
     */
    constructor(id, name) {
        super(id, 'Chronomancer - Minstrel' + name);
        this.icon += 'chronomancer.png';
        this.armor.setSingleStat('Minstrel\'s');
        this.armor.setSingleRune('Superior Rune of Durability');
        this.consumable.setConsumable('Bowl of Refugee\'s Beet Soup', 'Magnanimous Maintenance Oil');
        this.trinket.setSingleStat('Minstrel\'s');
        this.wep1.setMainHand('Sword', 'Minstrel\'s', 'Superior Sigil of Concentration');
        this.wep1.setOffHand('Shield', 'Minstrel\'s', 'Superior Sigil of Transference');
        this.wep2.setOffHand('Focus', 'Minstrel\'s', 'Superior Sigil of Transference');
        this.specialization.setSpec('spec1', 'Domination', [
            'Empowered Illusions',
            'Blurred Inscriptions',
            'Mental Anguish'
        ]);
        this.specialization.setSpec('spec2', 'Inspiration', [
            'Sympathetic Visage',
            'Restorative Illusions',
            'Illusionary Inspiration'
        ]);
        this.specialization.setSpec('spec3', 'Chronomancer', [
            'All\'s Well That Ends Well',
            'Improved Alacrity',
            'Seize the Moment'
        ]);
        this.skills.setHealSkill('Well of Eternity');
        this.skills.setUtilitySkills(['Well of Action', '', 'Signet of Inspiration']);
        this.skills.setEliteSkill('');
    }
}

/**
 * Boon Chronomancer build
 */
class BoonShareBuild extends MesBuild {
    /**
     * Create a Boon Chronomancer build
     * @param id Id of the build
     * @param name Name of the build
     */
    constructor(id, name) {
        super(id, 'Chronomancer - Boonshare' + name);
        this.icon += 'chronomancer.png';
        this.armor.setStats([
            'Berserker\'s',
            'Berserker\'s',
            'Commander\'s',
            'Berserker\'s',
            'Commander\'s',
            'Berserker\'s'
        ]);
        this.armor.setSingleRune('Superior Rune of Leadership');
        this.consumable.setConsumable('Bowl of Sweet and Spicy Butternut Squash Soup', 'Toxic Maintenance Oil');
        this.trinket.setSingleStat('Commander\'s');
        this.wep1.setMainHand('Sword', 'Commander\'s', 'Superior Sigil of Concentration');
        this.wep1.setOffHand('Shield', 'Berserker\'s', 'Superior Sigil of Force');
        this.wep2.setOffHand('Sword', 'Berserker\'s', 'Superior Sigil of Force');
        this.specialization.setSpec('spec1', 'Domination', [
            'Empowered Illusions',
            'Blurred Inscriptions',
            'Mental Anguish'
        ]);
        this.specialization.setSpec('spec2', 'Inspiration', [
            'Sympathetic Visage',
            'Restorative Illusions',
            'Illusionary Inspiration'
        ]);
        this.specialization.setSpec('spec3', 'Chronomancer', [
            'Time Catches Up',
            'Improved Alacrity',
            'Seize the Moment'
        ]);
        this.skills.setHealSkill('Signet of the Ether');
        this.skills.setUtilitySkills(['Well of Action', '', 'Signet of Inspiration']);
        this.skills.setEliteSkill('');
    }
}

/**
 * Condition Mirage build
 */
class CondiMirageCloneBuild extends MesBuild {
    /**
     * Create a Condition Mirage build
     * @param id Id of the build
     * @param name Name of the build
     */
    constructor(id, name) {
        super(id, 'Mirage - Clone' + name);
        this.icon += 'mirage.png';
        this.armor.setSingleStat('Viper\'s');
        this.armor.setSingleRune('Superior Rune of the Renegade');
        this.consumable.setConsumable('Bowl of Orrian Truffle and Meat Stew', 'Toxic Focusing Crystal');
        this.trinket.setSingleStat('Viper\'s');
        this.wep1.setMainHand('Axe', 'Viper\'s', 'Superior Sigil of Malice');
        this.wep1.setOffHand('Pistol', 'Viper\'s', 'Superior Sigil of Energy');
        this.wep2.setOffHand('Torch', 'Viper\'s', 'Superior Sigil of Energy');
        this.specialization.setSpec('spec1', 'Dueling', [
            'Duelist\'s Discipline',
            'Blinding Dissipation',
            'Superiority Complex'
        ]);
        this.specialization.setSpec('spec2', 'Chaos', [
            'Descent into Madness',
            'Chaotic Transference',
            'Bountiful Disillusionment'
        ]);
        this.specialization.setSpec('spec3', 'Mirage', ['Self-Deception', 'Mirrored Axes', 'Infinite Horizon']);
        this.skills.setHealSkill('False Oasis');
        this.skills.setUtilitySkills(['Crystal Sands', 'Signet of Domination', 'Signet of Midnight']);
        this.skills.setEliteSkill('Jaunt');
    }
}

/**
 * Add mesmer builds to the database
 */
export function mesBuildMaker() {
    let build: ProfBuild = null;
    // minstrel
    {
        build = new MinstrelShareBuild('chrMinstrel', '');

        //
        let variant = build.addOverride('Well/TW', false);
        variant.skills.setHealSkill('Well of Eternity');
        variant.skills.setUtilitySkills(['Well of Action', 'Well of Recall', 'Signet of Inspiration']);
        variant.skills.setEliteSkill('Time Warp');

        variant = build.addOverride('Well/CC', false);
        variant.skills.setHealSkill('Well of Eternity');
        variant.skills.setUtilitySkills(['Well of Action', 'Well of Recall', 'Signet of Inspiration']);
        variant.skills.setEliteSkill('Signet of Humility');

        variant = build.addOverride('Aegis/TW', false);
        variant.skills.setHealSkill('Well of Eternity');
        variant.skills.setUtilitySkills(['Well of Action', 'Well of Precognition', 'Signet of Inspiration']);
        variant.skills.setEliteSkill('Time Warp');
    }

    // power
    {
        build = new ChronoPowerBuild('chrPower', '');
        const variant = build.addOverride('Greatsword');
        variant.wep2.setTwoHand('Greatsword', 'Berserker\'s', 'Superior Sigil of Force', 'Superior Sigil of Accuracy');
        variant.specialization.setSpec('spec1', 'Dueling', [
            'Phantasmal Fury',
            'Fencer\'s Finesse',
            'Superiority Complex'
        ]);
        variant.specialization.setSpec('spec2', 'Domination', [
            'Empowered Illusions',
            'Blurred Inscriptions',
            'Imagined Burden'
        ]);
        variant.specialization.setSpec('spec3', 'Chronomancer', [
            'Time Catches Up',
            'Improved Alacrity',
            'Chronophantasma'
        ]);
    }

    // boon share
    {
        build = new BoonShareBuild('chrBoon', '');
        //
        let variant = build.addOverride('Chaos');
        variant.specialization.setSpec('spec1', 'Chaos', [
            'Descent into Madness',
            'Chaotic Dampening',
            'Bountiful Disillusionment'
        ]);
        variant.specialization.setSpec('spec2', 'Inspiration', [
            'Sympathetic Visage',
            'Restorative Illusions',
            'Illusionary Inspiration'
        ]);
        variant.specialization.setSpec('spec3', 'Chronomancer', [
            'Time Catches Up',
            'Improved Alacrity',
            'Seize the Moment'
        ]);
        //
        variant = build.addOverride('Duel/Illu');
        variant.specialization.setSpec('spec1', 'Dueling', [
            'Phantasmal Fury',
            'Fencer\'s Finesse',
            'Superiority Complex'
        ]);
        variant.specialization.setSpec('spec2', 'Illusions', [
            'Shatter Storm',
            'Phantasmal Haste',
            'Phantasmal Force'
        ]);
        variant.specialization.setSpec('spec3', 'Chronomancer', [
            'Time Catches Up',
            'Improved Alacrity',
            'Chronophantasma'
        ]);
        variant.wep1.setMainHand('Sword', 'Commander\'s', 'Superior Sigil of Concentration');
        variant.wep1.setOffHand('Focus', 'Berserker\'s', 'Superior Sigil of Force');
        variant.skills.setHealSkill('Signet of the Ether');
        variant.skills.setUtilitySkills(['Well of Action', 'Well of Recall', 'Signet of Inspiration']);
        variant.skills.setEliteSkill('Time Warp');
        //
        variant = build.addOverride('Duel/Illu2', false);
        variant.wep1.setMainHand('Sword', 'Commander\'s', 'Superior Sigil of Concentration');
        variant.wep1.setOffHand('Pistol', 'Berserker\'s', 'Superior Sigil of Force');
        //
        variant = build.addOverride('Tank', false);
        variant.consumable.setConsumable('Bowl of Refugee\'s Beet Soup', 'Toxic Maintenance Oil');
        //
        variant = build.addOverride('Focus', false);
        variant.wep2.setOffHand('Focus', 'Berserker\'s', 'Superior Sigil of Force');
        //
        variant = build.addOverride('Well/TW', false);
        variant.skills.setHealSkill('Signet of the Ether');
        variant.skills.setUtilitySkills(['Well of Action', 'Well of Recall', 'Signet of Inspiration']);
        variant.skills.setEliteSkill('Time Warp');
        //
        variant = build.addOverride('Well/CC', false);
        variant.skills.setHealSkill('Signet of the Ether');
        variant.skills.setUtilitySkills(['Well of Action', 'Well of Recall', 'Signet of Inspiration']);
        variant.skills.setEliteSkill('Signet of Humility');
        //
        variant = build.addOverride('Reflect/CC', false);
        variant.skills.setHealSkill('Signet of the Ether');
        variant.skills.setUtilitySkills(['Well of Action', 'Feedback', 'Signet of Inspiration']);
        variant.skills.setEliteSkill('Signet of Humility');
    }
    // condi clone
    {
        build = new CondiMirageCloneBuild('mirageCondi', '');

        const variant = build.addOverride('CC', false);
        variant.skills.setHealSkill('False Oasis');
        variant.skills.setUtilitySkills(['Crystal Sands', 'Signet of Domination', 'Signet of Midnight']);
        variant.skills.setEliteSkill('Signet of Humility');
    }

}

