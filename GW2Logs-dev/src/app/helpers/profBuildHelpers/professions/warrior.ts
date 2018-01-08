import { ProfBuild } from '../../profBuild';
import { Professions } from '../professionUtilities/professions';

class WarriorBuild extends ProfBuild {
    constructor(id, name) {
        super(id, Professions.Warrior, name);
    }
}

class BerserkerBannerBuild extends WarriorBuild {
    constructor(id, name) {
        super(id, 'Berserker - Banner - ' + name);
        this.icon += 'berserker.png';
        this.armor.setSingleStat('Viper\'s');
        this.armor.setSingleRune('Superior Rune of the Renegade');
        this.consumable.setConsumable('Rare Veggie Pizza', 'Toxic Focusing Crystal');
        this.trinket.setSingleStat('Viper\'s');
        this.wep1.setMainHand('Sword', 'Viper\'s', 'Superior Sigil of Geomancy');
        this.wep1.setOffHand('Torch', 'Viper\'s', 'Superior Sigil of Malice');
        this.wep2.setTwoHand('Longbow', 'Viper\'s', 'Superior Sigil of Geomancy', 'Superior Sigil of Malice');
        this.specialization.setSpec('spec1', 'Arms', ['Wounding Precision', 'Blademaster', 'Furious']);
        this.specialization.setSpec('spec2', 'Tactics', ['Empowered', 'Empower Allies', 'Powerful Synergy']);
        this.specialization.setSpec('spec3', 'Berserker', ['Last Blaze', 'Heat the Soul', 'King of Fires']);
        this.skills.setHealSkill('Blood Reckoning');
        this.skills.setUtilitySkills(['Shattering Blow', 'Banner of Discipline', 'Banner of Strength']);
        this.skills.setEliteSkill('Head Butt');
    }
}

class SpellbreakerBannerBuild extends WarriorBuild {
    constructor(id, name) {
        super(id, 'Spellbreaker - Banner - ' + name);
        this.icon += 'spellbreaker.png';
        this.armor.setStats(['Assassin\'s', 'Berserker\'s', 'Berserker\'s', 'Berserker\'s', 'Assassin\'s', 'Berserker\'s']);
        this.armor.setSingleRune('Superior Rune of the Scholar');
        this.consumable.setConsumable('Bowl of Sweet and Spicy Butternut Squash Soup', 'Superior Sharpening Stone');
        this.trinket.setSingleStat('Berserker\'s');
        this.wep1.setMainHand('Dagger', 'Berserker\'s', 'Superior Sigil of Force');
        this.wep1.setOffHand('Dagger', 'Berserker\'s', 'Superior Sigil of Air');
        this.wep2.setMainHand('Axe', 'Berserker\'s', 'Superior Sigil of Force');
        this.wep2.setOffHand('Axe', 'Berserker\'s', 'Superior Sigil of Air');
        this.specialization.setSpec('spec1', 'Strength', ['Peak Performance', 'Body Blow', 'Berserker\'s Power']);
        this.specialization.setSpec('spec2', 'Tactics', ['Empowered', 'Empower Allies', 'Powerful Synergy']);
        this.specialization.setSpec('spec3', 'Spellbreaker', ['Pure Strike', 'Loss Aversion', 'Revenge Counter']);
        this.skills.setHealSkill('"To the Limit!"');
        this.skills.setUtilitySkills(['Kick', 'Banner of Discipline', 'Banner of Strength']);
        this.skills.setEliteSkill('Rampage');
    }
}

export function warBuildMaker() {
    let build: ProfBuild = null;
    // Condi
    {
        build = new BerserkerBannerBuild('bers', 'Standart');

        build = new BerserkerBannerBuild('bersCC', 'CC');
        build.skills.setUtilitySkills(['Wild Blow', 'Banner of Discipline', 'Banner of Strength']);

        build = new BerserkerBannerBuild('bersFury', 'Fury');
        build.skills.setUtilitySkills(['"For Great Justice!"', 'Banner of Discipline', 'Banner of Strength']);

        build = new BerserkerBannerBuild('bersSplit', 'Split');
        build.skills.setUtilitySkills(['Shattering Blow', 'Outrage', '']);

        build = new BerserkerBannerBuild('bersDPS', 'DPS');
        build.specialization.setSpec('spec2', 'Tactics', ['Empowered', 'Burning Arrows', 'Powerful Synergy']);
        build.skills.setUtilitySkills(['Shattering Blow', 'Outrage', 'Signet of Fury']);
    }
    // power
    {
        build = new SpellbreakerBannerBuild('spellbrk', 'Standart');

        build = new SpellbreakerBannerBuild('spellbrkFury', 'Fury');
        build.skills.setUtilitySkills(['"For Great Justice!"', 'Banner of Discipline', 'Banner of Strength']);
    }
}

