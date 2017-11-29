import { ProfBuild } from '../../profBuild';
import { Professions } from '../professionUtilities/professions';

class EngiBuild extends ProfBuild {
    constructor(name) {
        super(name, Professions.Engineer);
        this.wep2 = null;
    }
}


class CondiEngiBuild extends EngiBuild {
    constructor(name) {
        super(name);
        this.icon += 'engineer.png';
        this.armor.setSingleStat('Viper\'s');
        this.armor.setSingleRune('Superior Rune of the Renegade');
        this.consumable.setConsumable('Rare Veggie Pizza', 'Toxic Focusing Crystal');
        this.trinket.setSingleStat('Viper\'s');
        this.wep1.setMainHand('Pistol', 'Viper\'s', 'Superior Sigil of Geomancy');
        this.wep1.setOffHand('Pistol', 'Viper\'s', 'Superior Sigil of Malice');
        this.specialization.setSpec('spec1', 'Explosives', ['Glass Cannon', 'Aim-Assisted Rocket', 'Shrapnel']);
        this.specialization.setSpec('spec2', 'Firearms', [
            'Chemical Rounds',
            'Pinpoint Distribution',
            'Incendiary Powder'
        ]);
        this.specialization.setSpec('spec3', 'Tools', ['Static Discharge', 'Streamlined Kits', 'Kinetic Battery']);
        this.skills.setHealSkill('Healing Turret');
        this.skills.setUtilitySkills(['Bomb Kit', 'Grenade Kit', 'Flamethrower']);
        this.skills.setEliteSkill('Elite Mortar Kit');
    }
}

class PowerHolosmithBuild extends EngiBuild {
    constructor(name) {
        super(name);
        this.icon += 'holosmith.png';
        this.armor.setSingleStat('Berserker\'s');
        this.armor.setSingleRune('Superior Rune of the Scholar');
        this.consumable.setConsumable('Bowl of Sweet and Spicy Butternut Squash Soup', 'Superior Sharpening Stone');
        this.trinket.setSingleStat('Berserker\'s');
        this.wep1.setTwoHand('Rifle', 'Berserker\'s', 'Superior Sigil of Force', 'Superior Sigil of Air');
        this.specialization.setSpec('spec1', 'Explosives', ['Glass Cannon', 'Big Boomer', 'Shrapnel']);
        this.specialization.setSpec('spec2', 'Firearms', [
            'High Caliber',
            'Pinpoint Distribution',
            'Modified Ammunition'
        ]);
        this.specialization.setSpec('spec3', 'Holosmith', [
            'Solar Focusing Lens',
            'Crystal Configuration: Eclipse',
            'Photonic Blasting Module'
        ]);

        this.skills.setHealSkill('Healing Turret');
        this.skills.setUtilitySkills(['Bomb Kit', 'Grenade Kit', 'Laser Disk']);
        this.skills.setEliteSkill('Prime Light Beam');
    }
}

export function engiBuildMaker() {
    let build: ProfBuild = null;
    // Condi
    {
        build = new CondiEngiBuild('engiCondi');

    }

    // Power
    {
        build = new PowerHolosmithBuild('holoPower');
    }
}

