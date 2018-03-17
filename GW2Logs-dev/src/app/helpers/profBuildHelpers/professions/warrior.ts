import { ProfBuild } from '../../profBuild';
import { Professions } from '../professionUtilities/professions';
import { Skills } from '../data/skills';
import { Specialization } from '../data/specialization';
import { Weapons } from '../data/weapons';

class WarriorBuild extends ProfBuild {
    constructor(id, name) {
        super(id, Professions.Warrior, name);
    }
}


class CondiWarriorBuild extends WarriorBuild {
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

class BerserkerBannerBuild extends CondiWarriorBuild {
    constructor(id, name) {
        super(id, 'Berserker - Banner' + name);
        this.icon += 'berserker.png';
        this.wep1.setOffHand('Torch', 'Viper\'s', 'Superior Sigil of Malice');
        this.specialization.setSpec('spec2', 'Tactics', ['Empowered', 'Empower Allies', 'Powerful Synergy']);
        this.specialization.setSpec('spec3', 'Berserker', ['Last Blaze', 'Heat the Soul', 'King of Fires']);
        this.skills.setUtilitySkills(['', 'Banner of Discipline', 'Banner of Strength']);
    }
}

class BerserkerDPSBuild extends CondiWarriorBuild {
    constructor(id, name) {
        super(id, 'Berserker - DPS' + name);
        this.icon += 'berserker.png';
        this.wep1.setOffHand('Torch', 'Viper\'s', 'Superior Sigil of Malice');
        this.specialization.setSpec('spec2', 'Discipline', ['Warrior\'s Sprint', 'Inspiring Battle Standard', 'Burst Mastery']);
        this.specialization.setSpec('spec3', 'Berserker', ['Smash Brawler', 'Heat the Soul', 'King of Fires']);
        this.skills.setUtilitySkills(['Shattering Blow', 'Signet of Fury', 'Signet of Might']);
    }
}

class PowerWarriorBuild extends WarriorBuild {
    constructor(id, name) {
        super(id, name);
        this.armor.setStats(['Berserker\'s', 'Berserker\'s', 'Berserker\'s', 'Berserker\'s', 'Assassin\'s', 'Berserker\'s']);
        this.armor.setSingleRune('Superior Rune of the Scholar');
        this.consumable.setConsumable('Bowl of Curry Butternut Squash Soup', 'Superior Sharpening Stone');
        this.trinket.setStats(['Berserker\'s', 'Berserker\'s', 'Berserker\'s', 'Berserker\'s', 'Assassin\'s', 'Assassin\'s']);
        this.wep1.setTwoHand('Greatsword', 'Berserker\'s', 'Superior Sigil of Force', 'Superior Sigil of Air');
        this.wep2.setMainHand('Axe', 'Berserker\'s', 'Superior Sigil of Force');
        this.wep2.setOffHand('Axe', 'Berserker\'s', 'Superior Sigil of Air');
    }
}

class SpellbreakerBannerBuild extends PowerWarriorBuild {
    constructor(id, name) {
        super(id, 'Spellbreaker - Banner' + name);
        this.icon += 'spellbreaker.png';
        this.specialization.setSpec('spec1', 'Strength', ['Peak Performance', 'Body Blow', 'Berserker\'s Power']);
        this.specialization.setSpec('spec2', 'Tactics', ['Empowered', 'Empower Allies', 'Powerful Synergy']);
        this.specialization.setSpec('spec3', 'Spellbreaker', ['Pure Strike', 'Loss Aversion', 'Magebane Tether']);
        this.wep1.setMainHand('Mace', 'Berserker\'s', 'Superior Sigil of Force');
        this.wep1.setOffHand('Axe', 'Berserker\'s', 'Superior Sigil of Air');
        this.wep2.setMainHand('Axe', 'Berserker\'s', 'Superior Sigil of Force');
        this.wep2.setOffHand('Dagger', 'Berserker\'s', 'Superior Sigil of Air');
        this.skills.setHealSkill('"To the Limit!"');
        this.skills.setUtilitySkills(['Kick', 'Banner of Discipline', 'Banner of Strength']);
        this.skills.setEliteSkill('Winds of Disenchantment');
    }
}

class WarriorBannerBuild extends PowerWarriorBuild {
    constructor(id, name) {
        super(id, 'Warrior - Banner' + name);
        this.icon += 'warrior.png';
        this.specialization.setSpec('spec1', 'Strength', ['Peak Performance', 'Forceful Greatsword', 'Berserker\'s Power']);
        this.specialization.setSpec('spec2', 'Tactics', ['Empowered', 'Empower Allies', 'Powerful Synergy']);
        this.specialization.setSpec('spec3', 'Discipline', ['Warrior\'s Sprint', 'Inspiring Battle Standard', 'Axe Mastery']);
        this.skills.setHealSkill('"To the Limit!"');
        this.skills.setUtilitySkills(['Throw Bolas', 'Banner of Discipline', 'Banner of Strength']);
        this.skills.setEliteSkill('Signet of Rage');
    }
}

class SpellbreakerDPSBuild extends PowerWarriorBuild {
    constructor(id, name) {
        super(id, 'Spellbreaker - DPS' + name);
        this.icon += 'spellbreaker.png';
        this.specialization.setSpec('spec1', 'Strength', ['Peak Performance', 'Forceful Greatsword', 'Berserker\'s Power']);
        this.specialization.setSpec('spec2', 'Discipline', ['Warrior\'s Sprint', 'Inspiring Battle Standard', 'Axe Mastery']);
        this.specialization.setSpec('spec3', 'Spellbreaker', ['Pure Strike', 'Loss Aversion', 'Magebane Tether']);
        this.skills.setHealSkill('"To the Limit!"');
        this.skills.setUtilitySkills(['Kick', 'Bull\'s Charge', 'Signet of Might']);
        this.skills.setEliteSkill('Signet of Rage');
    }
}

/**
 * Add warrior builds to the database
 */
export function warBuildMaker() {
    let build: ProfBuild = null;
    // Condi
    {
        build = new BerserkerBannerBuild('bers', '');
        let variant = build.addOverride('Fury', false);
        variant.skills = new Skills(build.profession);
        variant.skills.setHealSkill('Blood Reckoning');
        variant.skills.setEliteSkill('Head Butt');
        variant.skills.setUtilitySkills(['"For Great Justice!"', 'Banner of Discipline', 'Banner of Strength']);

        variant = build.addOverride('CC', false);
        variant.skills = new Skills(build.profession);
        variant.skills.setHealSkill('Blood Reckoning');
        variant.skills.setEliteSkill('Head Butt');
        variant.skills.setUtilitySkills(['Wild Blow', 'Banner of Discipline', 'Banner of Strength']);

        variant = build.addOverride('DPS', false);
        variant.skills = new Skills(build.profession);
        variant.skills.setHealSkill('Blood Reckoning');
        variant.skills.setEliteSkill('Head Butt');
        variant.skills.setUtilitySkills(['Shattering Blow', 'Banner of Discipline', 'Banner of Strength']);
        //
        build = new BerserkerDPSBuild('bersDPS', '');
    }
    // power
    {
        build = new WarriorBannerBuild('warBan', '');

        let variant = build.addOverride('Mace - Shield');
        variant.specialization = new Specialization(build.profession);
        variant.specialization.setSpec('spec1', 'Strength', ['Peak Performance', 'Body Blow', 'Berserker\'s Power']);
        variant.specialization.setSpec('spec2', 'Tactics', ['Empowered', 'Empower Allies', 'Powerful Synergy']);
        variant.specialization.setSpec('spec3', 'Discipline', ['Warrior\'s Sprint', 'Inspiring Battle Standard', 'Axe Mastery']);
        variant.wep1 = new Weapons(build.profession);
        variant.wep1.setMainHand('Mace', 'Berserker\'s', 'Superior Sigil of Force');
        variant.wep1.setOffHand('Shield', 'Berserker\'s', 'Superior Sigil of Paralyzation');
        //
        build = new SpellbreakerBannerBuild('spellbrk', '');
        //
        build = new SpellbreakerDPSBuild('spellbrkDPS', '');

        variant = build.addOverride('Mace/Axe + Axe/Dagger');
        variant.specialization = new Specialization(build.profession);
        variant.specialization.setSpec('spec1', 'Strength', ['Peak Performance', 'Body Blow', 'Berserker\'s Power']);
        variant.specialization.setSpec('spec2', 'Discipline', ['Warrior\'s Sprint', 'Inspiring Battle Standard', 'Axe Mastery']);
        variant.specialization.setSpec('spec3', 'Spellbreaker', ['Pure Strike', 'Loss Aversion', 'Magebane Tether']);
        variant.wep1 = new Weapons(build.profession);
        variant.wep1.setMainHand('Mace', 'Berserker\'s', 'Superior Sigil of Force');
        variant.wep1.setOffHand('Axe', 'Berserker\'s', 'Superior Sigil of Air');
        variant.wep2 = new Weapons(build.profession);
        variant.wep2.setMainHand('Axe', 'Berserker\'s', 'Superior Sigil of Force');
        variant.wep2.setOffHand('Dagger', 'Berserker\'s', 'Superior Sigil of Air');

        variant = build.addOverride('Dagger/Axe + Axe/Dagger');
        variant.specialization = new Specialization(build.profession);
        variant.specialization.setSpec('spec1', 'Strength', ['Peak Performance', 'Body Blow', 'Berserker\'s Power']);
        variant.specialization.setSpec('spec2', 'Discipline', ['Warrior\'s Sprint', 'Inspiring Battle Standard', 'Axe Mastery']);
        variant.specialization.setSpec('spec3', 'Spellbreaker', ['Pure Strike', 'Loss Aversion', 'Magebane Tether']);
        variant.wep1 = new Weapons(build.profession);
        variant.wep1.setMainHand('Dagger', 'Berserker\'s', 'Superior Sigil of Force');
        variant.wep1.setOffHand('Axe', 'Berserker\'s', 'Superior Sigil of Air');
        variant.wep2 = new Weapons(build.profession);
        variant.wep2.setMainHand('Axe', 'Berserker\'s', 'Superior Sigil of Force');
        variant.wep2.setOffHand('Dagger', 'Berserker\'s', 'Superior Sigil of Air');
    }
}

