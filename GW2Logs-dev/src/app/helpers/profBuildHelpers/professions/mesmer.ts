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
        this.armor.setStats(['Berserker\'s', 'Berserker\'s', 'Assassin\'s', 'Berserker\'s', 'Assassin\'s', 'Berserker\'s']);
        this.armor.setSingleRune('Superior Rune of the Scholar');
        this.consumable.setConsumable('Bowl of Sweet and Spicy Butternut Squash Soup', 'Superior Sharpening Stone');
        this.trinket.setSingleStat('Berserker\'s');
        this.wep1.setMainHand('Sword', 'Assassin\'s', 'Superior Sigil of Force');
        this.wep1.setOffHand('Sword', 'Assassin\'s', 'Superior Sigil of Accuracy');
        this.wep2.setOffHand('Focus', 'Assassin\'s', 'Superior Sigil of Accuracy');
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
        this.consumable.setConsumable('Fried Golden Dumpling', 'Toxic Maintenance Oil');
        this.trinket.setSingleStat('Commander\'s');
        this.wep1.setMainHand('Sword', 'Berserker\'s', 'Superior Sigil of Concentration');
        this.wep1.setOffHand('Shield', 'Berserker\'s', 'Superior Sigil of Paralyzation');
        this.wep2.setOffHand('Focus', 'Berserker\'s', 'Superior Sigil of Paralyzation');
        this.specialization.setSpec('spec3', 'Chronomancer', [
            'All\'s Well That Ends Well',
            'Improved Alacrity',
            'Chronophantasma'
        ]);
        this.skills.setHealSkill('Well of Eternity');
        this.skills.setUtilitySkills(['Well of Action', 'Well of Recall', 'Signet of Inspiration']);
        this.skills.setEliteSkill('Gravity Well');
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
        this.specialization.setSpec('spec2', 'Inspiration', [
            'Sympathetic Visage',
            'Restorative Illusions',
            'Illusionary Inspiration'
        ]);
    }
}


class IlluInspi extends BoonShareBuild {
    constructor(id, name) {
        super(id, 'Illusions/Inspiration - ' + name);
        this.specialization.setSpec('spec2', 'Inspiration', [
            'Sympathetic Visage',
            'Restorative Illusions',
            'Illusionary Inspiration'
        ]);
        this.specialization.setSpec('spec1', 'Illusions', [
            'Persistence of Memory',
            'Phantasmal Haste',
            'Phantasmal Force'
        ]);
    }
}

class DomiIllu extends BoonShareBuild {
    constructor(id, name) {
        super(id, 'Domination/Illusions - ' + name);
        this.specialization.setSpec('spec1', 'Domination', [
            'Empowered Illusions',
            'Blurred Inscriptions',
            'Mental Anguish'
        ]);
        this.specialization.setSpec('spec2', 'Illusions', [
            'Persistence of Memory',
            'Phantasmal Haste',
            'Phantasmal Force'
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
            'Persistence of Memory',
            'Phantasmal Haste',
            'Phantasmal Force'
        ]);
    }
}


class DomiInspiTank extends DomiInspi {
    constructor(id, name) {
        super(id, 'Tank - ' + name);
        this.wep1.setOffHand('Shield', 'Commander\'s', 'Superior Sigil of Paralyzation');
        this.wep2.setOffHand('Focus', 'Commander\'s', 'Superior Sigil of Paralyzation');
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
            'Phantasmal Haste',
            'Phantasmal Force'
        ]);

        build = new ChronoPowerBuild('chrPowerG', 'Sword/Sword + GS');
        build.specialization.setSpec('spec2', 'Domination', [
            'Empowered Illusions',
            'Blurred Inscriptions',
            'Imagined Burden'
        ]);
    }

    // boon share
    {


        build = new IlluInspi('chrVG', 'VG');
        build.skills.setEliteSkill('Signet of Humility');
        build = new DomiInspiTank('chrVGTank', 'VG');
        build.skills.setEliteSkill('Signet of Humility');

        build = new DomiInspi('chrGorse', 'Gorseval');
        build.skills.setEliteSkill('Signet of Humility');
        build = new DomiInspiTank('chrGorseTank', 'Gorseval');
        build.skills.setEliteSkill('Signet of Humility');

        build = new DomiIllu('chrSab', 'Sabetha');
        build.skills.setEliteSkill('Time Warp');

        build = new IlluInspi('chrSloth', 'Slothasor');
        build.specialization.setSpec('spec2', 'Inspiration', [
            'Sympathetic Visage',
            'Warden\'s Feedback',
            'Illusionary Inspiration'
        ]);
        build.skills.setEliteSkill('Signet of Humility');

        build = new IlluInspi('chrMatt', 'Matthias');
        build.skills.setUtilitySkills(['Well of Action', 'Feedback', 'Signet of Inspiration']);
        build.skills.setEliteSkill('Signet of Humility');

        build = new DomiInspi('chrKC', 'KC');
        build.skills.setEliteSkill('Signet of Humility');
        build = new DomiInspiTank('chrKCTank', 'KC');
        build.skills.setEliteSkill('Signet of Humility');

        build = new DomiInspi('chrXera', 'Xera');
        build = new DomiInspiTank('chrXeraTank', 'Xera');

        build = new DomiIllu('chrCairn', 'Cairn');
        build.skills.setEliteSkill('Time Warp');

        build = new DuelIllu('chrMO', 'Mursaat');

        build = new DomiIllu('chrSam', 'Samarog');
        build.skills.setEliteSkill('Signet of Humility');

        build = new DomiInspi('chrDei', 'Deimos');
        build.skills.setEliteSkill('Time Warp');

        build = new DomiInspi('chrSS', 'Soulless Horror');
        build = new DomiInspiTank('chrSSTank', 'Soulless Horror');

        build = new IlluInspi('chrDhuum', 'Dhuum');

    }
    // condi clone
    {
        build = new CondiMirageCloneBuild('mirageCondiMatt', 'Reflect CC');
        build.skills.setUtilitySkills(['Feedback', 'Signet of Domination', 'Signet of Midnight']);
        build.skills.setEliteSkill('Signet of Humility');

        build = new CondiMirageCloneBuild('mirageCondi', 'Standard');
    }

}

