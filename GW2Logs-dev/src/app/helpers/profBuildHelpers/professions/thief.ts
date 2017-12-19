import { ProfBuild } from '../../profBuild';
import { Professions } from '../professionUtilities/professions';

class ThiefBuild extends ProfBuild {
    constructor(id) {
        super(id, Professions.Thief, '');
    }
}

class PowerDaredevilBuild extends ThiefBuild {
    constructor(id) {
        super(id);
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

class CondiDaredevilBuild extends ThiefBuild {
    constructor(id) {
        super(id);
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

export function thiefBuildMaker() {
    let build: ProfBuild = null;
    // Power
    {
        build = new PowerDaredevilBuild('drdPower');

        build = new PowerDaredevilBuild('drdPowerSab');
        build.skills.setUtilitySkills(['Assassin\'s Signet', 'Shadowstep', 'Fist Flurry']);
    }

    // Condi
    {
        build = new CondiDaredevilBuild('drdCondi');

        build = new CondiDaredevilBuild('drdCondiSab');
        build.skills.setUtilitySkills(['Spider Venom', 'Shadowstep', 'Caltrops']);
    }
}

