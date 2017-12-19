import { ProfBuild } from '../../profBuild';
import { Professions } from '../professionUtilities/professions';

class RevenantBuild extends ProfBuild {
    constructor(id) {
        super(id, Professions.Revenant, '');
        this.skills = null;
    }
}

class CondiRenegadeBuild extends RevenantBuild {
    constructor(id) {
        super(id);
        this.icon += 'renegade.png';
        this.armor.setSingleStat('Viper\'s');
        this.armor.set42Rune('Superior Rune of the Nightmare', 'Superior Rune of the Trapper');
        this.consumable.setConsumable('Rare Veggie Pizza', 'Toxic Focusing Crystal');
        this.trinket.setSingleStat('Viper\'s');
        this.wep1.setMainHand('Mace', 'Viper\'s', 'Superior Sigil of Smoldering');
        this.wep2.setOffHand('Axe', 'Viper\'s', 'Superior Sigil of Geomancy');
        this.specialization.setSpec('spec1', 'Corruption', ['Venom Enhancement', 'Abyssal Chill', 'Diabolic Inferno']);
        this.specialization.setSpec('spec2', 'Devastation', [
            'Ferocious Strikes',
            'Assassin\'s Presence',
            'Swift Termination'
        ]);
        this.specialization.setSpec('spec3', 'Renegade', ['Blood Fury', 'Heartpiercer', 'Lasting Legacy']);
        this.profSkills.setSkills(['Legendary Renegade Stance', 'Legendary Demon Stance']);
    }
}

class KiteHeraldBuild extends RevenantBuild {
    constructor(id) {
        super(id);
        this.icon += 'herald.png';
        this.armor.setSingleStat('Minstrel\'s');
        this.armor.setSingleRune('Superior Rune of Water');
        this.consumable.setConsumable('Delicious Rice Ball', 'Bountiful Maintenance Oil');
        this.trinket.setSingleStat('Magi\'s');
        this.specialization.setSpec('spec1', 'Retribution', [
            'Close Quarters',
            'Eye for an Eye',
            'Steadfast Rejuvenation'
        ]);
        this.specialization.setSpec('spec2', 'Salvation', [
            'Nourishing Roots',
            'Invoking Harmony',
            'Natural Abundance'
        ]);
        this.specialization.setSpec('spec3', 'Herald', [
            'Radiant Revival',
            'Bolster Fortifications',
            'Soothing Bastion'
        ]);
        this.profSkills.setSkills(['Legendary Centaur Stance', 'Legendary Dragon Stance']);

        this.wep2.setTwoHand('Staff', 'Magi\'s', 'Superior Sigil of Transference', 'Superior Sigil of Water');
    }
}

export function revBuildMaker() {
    let build: ProfBuild = null;
    // Condi
    {
        build = new CondiRenegadeBuild('renCondi');

        build = new CondiRenegadeBuild('renCondiBH');
        build.specialization.setSpec('spec3', 'Renegade', ['Blood Fury', 'Heartpiercer', 'Vindication']);

        build = new CondiRenegadeBuild('renCondiInvo');
        build.specialization.setSpec('spec2', 'Invocation', [
            'Forceful Persistence',
            'Spirit Boon',
            'Charged Mists'
        ]);

        build = new CondiRenegadeBuild('renCondiInvoBH');
        build.specialization.setSpec('spec2', 'Invocation', [
            'Forceful Persistence',
            'Spirit Boon',
            'Charged Mists'
        ]);
        build.specialization.setSpec('spec3', 'Renegade', ['Blood Fury', 'Heartpiercer', 'Vindication']);

        build = new CondiRenegadeBuild('renCondiSupp');
        build.specialization.setSpec('spec2', 'Salvation', [
            'Tranquil Balance',
            'Invoking Harmony',
            'Selfless Amplification'
        ]);
    }

    // Special
    {
        build = new KiteHeraldBuild('herDeiVentari');

        build.wep1.setMainHand('Sword', 'Minstrel\'s', 'Superior Sigil of Transference');
        build.wep1.setOffHand('Shield', 'Magi\'s', 'Superior Sigil of Water');

        build = new KiteHeraldBuild('herCairnVentari');

        build.wep1.setTwoHand('Hammer', 'Magi\'s', 'Superior Sigil of Transference', 'Superior Sigil of Water');

    }
}

