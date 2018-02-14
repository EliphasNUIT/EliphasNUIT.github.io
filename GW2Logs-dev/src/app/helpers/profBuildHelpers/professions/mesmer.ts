import { ProfBuild } from '../../profBuild';
import { Professions } from '../professionUtilities/professions';

class MesBuild extends ProfBuild {
    constructor(id, name) {
        super(id, Professions.Mesmer, name);
    }
}


class ChronoPowerBuild extends MesBuild {
    constructor(id, name) {
        super(id, 'Chronomancer - Power - ' + name);
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

class MinstrelShareBuild extends MesBuild {
    constructor(id, name) {
        super(id, 'Chronomancer - Minstrel - ' + name);
        this.icon += 'chronomancer.png';
        this.armor.setSingleStat('Minstrel\'s');
        this.armor.setSingleRune('Superior Rune of Durability');
        this.consumable.setConsumable('Bowl of Nopalitos Sauté', 'Magnanimous Maintenance Oil');
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
            'Chronophantasma'
        ]);
    }
}

class BoonShareBuild extends MesBuild {
    constructor(id, name) {
        super(id, 'Chronomancer - ' + name);
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

class DomiInspi extends BoonShareBuild {
    constructor(id, name) {
        super(id, 'Domination/Inspiration - ' + name);
        this.specialization.setSpec('spec1', 'Domination', [
            'Empowered Illusions',
            'Blurred Inscriptions',
            'Mental Anguish'
        ]);
    }
}

class IlluInspi extends BoonShareBuild {
    constructor(id, name) {
        super(id, 'Illusions/Inspiration - ' + name);
        this.specialization.setSpec('spec1', 'Illusions', [
            'Shatter Storm',
            'Phantasmal Haste',
            'Phantasmal Force'
        ]);
        this.specialization.setSpec('spec3', 'Chronomancer', [
            'Time Catches Up',
            'Improved Alacrity',
            'Chronophantasma'
        ]);
    }
}

class ChaosInspi extends BoonShareBuild {
    constructor(id, name) {
        super(id, 'Chaos/Inspiration - ' + name);
        this.specialization.setSpec('spec1', 'Chaos', [
            'Descent into Madness',
            'Chaotic Dampening',
            'Bountiful Disillusionment'
        ]);
    }
}

class DuelIllu extends BoonShareBuild {
    constructor(id, name) {
        super(id, 'Dueling/Illusions - ' + name);
        this.specialization.setSpec('spec1', 'Dueling', [
            'Phantasmal Fury',
            'Fencer\'s Finesse',
            'Superiority Complex'
        ]);
        this.specialization.setSpec('spec2', 'Illusions', [
            'Shatter Storm',
            'Phantasmal Haste',
            'Phantasmal Force'
        ]);
        this.specialization.setSpec('spec3', 'Chronomancer', [
            'Time Catches Up',
            'Improved Alacrity',
            'Chronophantasma'
        ]);
        this.wep1.setOffHand('Focus', 'Berserker\'s', 'Superior Sigil of Force');
        this.skills.setUtilitySkills(['Well of Action', 'Well of Recall', 'Signet of Inspiration']);
        this.skills.setEliteSkill('Time Warp');
    }
}

class DomiInspiTank extends DomiInspi {
    constructor(id, name) {
        super(id, 'Tank - ' + name);
        this.consumable.setConsumable('Bowl of Refugee\'s Beet Soup', 'Toxic Maintenance Oil');
    }
}

class ChaosInspiTank extends ChaosInspi {
    constructor(id, name) {
        super(id, 'Tank - ' + name);
        this.consumable.setConsumable('Bowl of Refugee\'s Beet Soup', 'Toxic Maintenance Oil');
    }
}

class IlluInspiTank extends IlluInspi {
    constructor(id, name) {
        super(id, 'Tank - ' + name);
        this.consumable.setConsumable('Bowl of Refugee\'s Beet Soup', 'Toxic Maintenance Oil');
    }
}


class CondiMirageCloneBuild extends MesBuild {
    constructor(id, name) {
        super(id, 'Mirage - Clone - ' + name);
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


export function mesBuildMaker() {
    let build: ProfBuild = null;
    // minstrel
    {
        build = new MinstrelShareBuild('chrTankMinstrel', 'Standard');
        build.specialization.setSpec('spec2', 'Inspiration', [
            'Sympathetic Visage',
            'Restorative Illusions',
            'Illusionary Inspiration'
        ]);
        build.skills.setHealSkill('Well of Eternity');
        build.skills.setUtilitySkills(['Well of Action', 'Well of Recall', 'Signet of Inspiration']);
        build.skills.setEliteSkill('Signet of Humility');

        build = new MinstrelShareBuild('chrTankDei', 'Deimos');
        build.skills.setHealSkill('Mantra of Recovery');
        build.skills.setUtilitySkills(['Well of Action', 'Well of Precognition', 'Signet of Inspiration']);
        build.skills.setEliteSkill('Gravity Well');
    }

    // power
    {
        build = new ChronoPowerBuild('chrPowerSword', 'Sword/Sword + Focus');
        build.specialization.setSpec('spec2', 'Illusions', [
            'Shatter Storm',
            'Maim the Disillusioned',
            'Phantasmal Force'
        ]);

        build = new ChronoPowerBuild('chrPowerG', 'Sword/Sword + GS');
        build.wep2.setTwoHand('Greatsword', 'Berserker\'s', 'Superior Sigil of Force', 'Superior Sigil of Accuracy');
        build.specialization.setSpec('spec2', 'Domination', [
            'Empowered Illusions',
            'Blurred Inscriptions',
            'Imagined Burden'
        ]);
    }

    // boon share domi inspi
    {
        build = new DomiInspi('chrDomiInspi', 'Standard');

        build = new DomiInspiTank('chrDomiInspiTank', 'Standard');

        build = new DomiInspi('chrDomiInspiFocus', 'Focus');
        build.wep2.setOffHand('Focus', 'Berserker\'s', 'Superior Sigil of Force');

        build = new DomiInspiTank('chrDomiInspiTankFocus', 'Focus');
        build.wep2.setOffHand('Focus', 'Berserker\'s', 'Superior Sigil of Force');
    }
    // boon share illu inspi
    {
        build = new IlluInspi('chrIlluInspi', 'Standard');

        build = new IlluInspiTank('chrIlluInspiTank', 'Standard');

        build = new IlluInspi('chrIlluInspiFocus', 'Focus');
        build.wep2.setOffHand('Focus', 'Berserker\'s', 'Superior Sigil of Force');

        build = new IlluInspiTank('chrIlluInspiTankFocus', 'Focus');
        build.wep2.setOffHand('Focus', 'Berserker\'s', 'Superior Sigil of Force');
    }
    // boon share chaos inspi
    {
        build = new ChaosInspi('chrChaosInspi', 'Standard');

        build = new ChaosInspiTank('chrChaosInspiTank', 'Standard');

        build = new ChaosInspi('chrChaosInspiFocus', 'Focus');
        build.wep2.setOffHand('Focus', 'Berserker\'s', 'Superior Sigil of Force');

        build = new ChaosInspiTank('chrChaosInspiTankFocus', 'Focus');
        build.wep2.setOffHand('Focus', 'Berserker\'s', 'Superior Sigil of Force');
    }
    // boon share duel illu
    {
        build = new DuelIllu('chrDuelIllu', 'Standard');
    }
    // condi clone
    {
        build = new CondiMirageCloneBuild('mirageCondiMatt', 'Reflect CC');
        build.skills.setUtilitySkills(['Feedback', 'Signet of Domination', 'Signet of Midnight']);
        build.skills.setEliteSkill('Signet of Humility');

        build = new CondiMirageCloneBuild('mirageCondi', 'Standard');
    }

}

