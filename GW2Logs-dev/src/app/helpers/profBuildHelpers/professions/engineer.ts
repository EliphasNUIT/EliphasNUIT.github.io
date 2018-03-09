import { ProfBuild } from '../../profBuild';
import { Professions } from '../professionUtilities/professions';

class EngiBuild extends ProfBuild {
    constructor(id, name) {
        super(id, Professions.Engineer, name);
        this.wep2 = null;
    }
}


class CondiEngiBuild extends EngiBuild {
    constructor(id, name) {
        super(id, 'Engineer - Condition' + name);
        this.icon += 'engineer.png';
        this.armor.setSingleStat('Viper\'s');
        this.armor.setSingleRune('Superior Rune of the Renegade');
        this.consumable.setConsumable('Rare Veggie Pizza', 'Toxic Focusing Crystal');
        this.trinket.setSingleStat('Viper\'s');
        this.wep1.setMainHand('Pistol', 'Viper\'s', 'Superior Sigil of Geomancy');
        this.wep1.setOffHand('Pistol', 'Viper\'s', 'Superior Sigil of Malice');
        this.specialization.setSpec('spec1', 'Explosives', ['Glass Cannon', 'Big Boomer', 'Shrapnel']);
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
    constructor(id, name) {
        super(id, 'Holosmith - Power' + name);
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

        this.skills.setHealSkill('');
        this.skills.setEliteSkill('Prime Light Beam');
    }
}

class PowerHolosmithRifleBuild extends PowerHolosmithBuild {
    constructor(id, name) {
        super(id, ' - Rifle' + name);
        this.skills.setUtilitySkills(['Bomb Kit', 'Grenade Kit', 'Laser Disk']);
        this.wep1.setTwoHand('Rifle', 'Berserker\'s', 'Superior Sigil of Force', 'Superior Sigil of Air');
    }
}

class PowerHolosmithSwordBuild extends PowerHolosmithBuild {
    constructor(id, name) {
        super(id, ' - Sword' + name);
        this.skills.setUtilitySkills(['Rifle Turret', 'Grenade Kit', 'Laser Disk']);
        this.wep1.setMainHand('Sword', 'Berserker\'s', 'Superior Sigil of Force');
        this.wep1.setOffHand('Pistol', 'Berserker\'s', 'Superior Sigil of Air');
    }
}


export function engiBuildMaker() {
    let build: ProfBuild = null;
    // Condi
    {
        build = new CondiEngiBuild('engiCondi', '');

        build = new CondiEngiBuild('engiCondiMob', 'Mobility');
        build.skills.setUtilitySkills(['Bomb Kit', 'Grenade Kit', 'Rocket Boots']);

        build = new CondiEngiBuild('engiCondiCC', 'CC');
        build.skills.setHealSkill('A.E.D.');

        build = new CondiEngiBuild('engiCondiSB', 'Stun Break');
        build.specialization.setSpec('spec3', 'Tools', ['Reactive Lenses', 'Streamlined Kits', 'Kinetic Battery']);

    }

    // Power
    {
        build = new PowerHolosmithRifleBuild('holoPower', '');
    }

}

