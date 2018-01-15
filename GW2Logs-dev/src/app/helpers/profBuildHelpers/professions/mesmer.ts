import { ProfBuild } from '../../profBuild';
import { Professions } from '../professionUtilities/professions';

class MesBuild extends ProfBuild {
    constructor(id, name) {
        super(id, Professions.Mesmer, name);
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
            'Persisting Images',
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
            'Persisting Images',
            'Restorative Illusions',
            'Illusionary Inspiration'
        ]);
    }
}


class IlluInspi extends BoonShareBuild {
    constructor(id, name) {
        super(id, 'Illusions/Inspiration - ' + name);
        this.specialization.setSpec('spec2', 'Inspiration', [
            'Persisting Images',
            'Restorative Illusions',
            'Illusionary Inspiration'
        ]);
        this.specialization.setSpec('spec1', 'Illusions', [
            'Compounding Power',
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
            'Compounding Power',
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
            'Compounding Power',
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

class CondiMiragePhantasmBuild extends MesBuild {
    constructor(id, name) {
        super(id, 'Mirage - Phantasm - ' + name);
        this.icon += 'mirage.png';
        this.armor.setSingleStat('Viper\'s');
        this.armor.setSingleRune('Superior Rune of the Renegade');
        this.consumable.setConsumable('Rare Veggie Pizza', 'Toxic Focusing Crystal');
        this.trinket.setSingleStat('Viper\'s');
        this.wep1.setMainHand('Axe', 'Viper\'s', 'Superior Sigil of Malice');
        this.wep1.setOffHand('Pistol', 'Viper\'s', 'Superior Sigil of Geomancy');
        this.wep2.setOffHand('Torch', 'Viper\'s', 'Superior Sigil of Geomancy');
        this.specialization.setSpec('spec1', 'Dueling', [
            'Duelist\'s Discipline',
            'Blinding Dissipation',
            'Superiority Complex'
        ]);
        this.specialization.setSpec('spec2', 'Illusions', [
            'Compounding Power',
            'Phantasmal Haste',
            'Phantasmal Force'
        ]);
        this.specialization.setSpec('spec3', 'Mirage', ['Riddle of Sand', 'Mirrored Axes', 'Dune Cloak']);
        this.skills.setHealSkill('Signet of the Ether');
        this.skills.setUtilitySkills(['Crystal Sands', 'Signet of Domination', 'Signet of Midnight']);
        this.skills.setEliteSkill('Jaunt');
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
        this.wep2.setOffHand('Torch', 'Viper\'s', 'Superior Sigil of Energy');
        this.specialization.setSpec('spec1', 'Dueling', [
            'Duelist\'s Discipline',
            'Blinding Dissipation',
            'Superiority Complex'
        ]);
        this.specialization.setSpec('spec2', 'Chaos', [
            'Descent into Madness',
            'Chaotic Transference',
            'Prismatic Understanding'
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
        build = new MinstrelShareBuild('chrTankMinstrel', 'standard');
        build.specialization.setSpec('spec2', 'Inspiration', [
            'Persisting Images',
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
            'Persisting Images',
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

    // condi phantasme
    {
        build = new CondiMiragePhantasmBuild('mirageCondiMatt', 'Reflect CC');
        build.skills.setUtilitySkills(['Feedback', 'Signet of Domination', 'Signet of Midnight']);
        build.skills.setEliteSkill('Signet of Humility');

        build = new CondiMiragePhantasmBuild('mirageCondi', 'standard');

        build = new CondiMiragePhantasmBuild('mirageCondiVG', 'Long Range');
        build.wep1.setMainHand('Scepter', 'Viper\'s', 'Superior Sigil of Malice');
        build.specialization.setSpec('spec3', 'Mirage', ['Riddle of Sand', 'Mirage Mantle', 'Dune Cloak']);
        build.skills.setUtilitySkills(['Crystal Sands', 'Signet of Domination', 'Signet of Midnight']);
        build.skills.setEliteSkill('Signet of Humility');
    }

    // condi clone
    {
        build = new CondiMirageCloneBuild('mirageCondiCMatt', 'Reflect CC');
        build.skills.setUtilitySkills(['Feedback', 'Signet of Domination', 'Signet of Midnight']);
        build.skills.setEliteSkill('Signet of Humility');

        build = new CondiMirageCloneBuild('mirageCondiC', 'standard');
    }

}

