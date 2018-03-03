import { ProfBuild } from '../../profBuild';
import { Professions } from '../professionUtilities/professions';
import { Consumable } from '../data/consumable';
import { Specialization } from '../data/specialization';
import { Weapons } from '../data/weapons';
import { Skills } from '../data/skills';

class MesBuild extends ProfBuild {
    constructor(id, name) {
        super(id, Professions.Mesmer, name);
    }
}


class ChronoPowerBuild extends MesBuild {
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

        const variant = this.addOverride('Greatsword');
        variant.specialization = new Specialization(this.profession);
        variant.wep2 = new Weapons(this.profession);
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
}

class MinstrelShareBuild extends MesBuild {
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

class BoonShareBuild extends MesBuild {
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
        //
        let variant = this.addOverride('Chaos');
        variant.specialization = new Specialization(this.profession);
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
        variant = this.addOverride('Duel/Illu');
        variant.specialization = new Specialization(this.profession);
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
        variant.wep1 = new Weapons(this.profession);
        variant.wep1.setMainHand('Sword', 'Commander\'s', 'Superior Sigil of Concentration');
        variant.wep1.setOffHand('Focus', 'Berserker\'s', 'Superior Sigil of Force');
        variant.skills = new Skills(this.profession);
        variant.skills.setUtilitySkills(['Well of Action', 'Well of Recall', 'Signet of Inspiration']);
        variant.skills.setEliteSkill('Time Warp');
        //
        variant = this.addOverride('Tank');
        variant.consumable = new Consumable();
        variant.consumable.setConsumable('Bowl of Refugee\'s Beet Soup', 'Toxic Maintenance Oil');
    }
}

class CondiMirageCloneBuild extends MesBuild {
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
        this.skills.setUtilitySkills(['', 'Signet of Domination', 'Signet of Midnight']);
        this.skills.setEliteSkill('');
    }
}


export function mesBuildMaker() {
    let build: ProfBuild = null;
    // minstrel
    {
        build = new MinstrelShareBuild('chrTankMinstrel', '');
    }

    // power
    {
        build = new ChronoPowerBuild('chrPower', '');
    }

    // boon share
    {
        build = new BoonShareBuild('chrBoon', '');
    }
    // condi clone
    {
        build = new CondiMirageCloneBuild('mirageCondi', '');
    }

}

