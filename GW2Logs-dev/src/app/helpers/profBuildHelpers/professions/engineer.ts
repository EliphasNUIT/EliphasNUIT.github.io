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
        super(id, 'Engineer - Condition - ' + name);
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
    constructor(id, name) {
        super(id, 'Holosmith - Power - ' + name);
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

        this.skills.setHealSkill('Coolant Blast');
        this.skills.setUtilitySkills(['Bomb Kit', 'Grenade Kit', 'Laser Disk']);
        this.skills.setEliteSkill('Prime Light Beam');
    }
}


export function engiBuildMaker() {
    let build: ProfBuild = null;
    // Condi
    {
        build = new CondiEngiBuild('engiCondi', 'standard');

        build = new CondiEngiBuild('engiCondiMob', 'Mobility');
        build.skills.setUtilitySkills(['Bomb Kit', 'Grenade Kit', 'Rocket Boots']);

        build = new CondiEngiBuild('engiCondiCC', 'CC');
        build.skills.setHealSkill('A.E.D.');

        build = new CondiEngiBuild('engiCondiSB', 'Stun Break');
        build.specialization.setSpec('spec3', 'Tools', ['Reactive Lenses', 'Streamlined Kits', 'Kinetic Battery']);

    }

    // Power
    {
        build = new PowerHolosmithBuild('holoPower', 'standard');

        build = new PowerHolosmithBuild('holoPowerCC', 'CC');
        build.skills.setHealSkill('A.E.D.');

        build = new PowerHolosmithBuild('holoPowerDPS', 'Full DPS');
        build.specialization.setSpec('spec2', 'Firearms', [
            'High Caliber',
            'No Scope',
            'Modified Ammunition'
        ]);

        build = new PowerHolosmithBuild('holoPowerDPSCC', 'Full DPS - CC');
        build.skills.setHealSkill('A.E.D.');
        build.specialization.setSpec('spec2', 'Firearms', [
            'High Caliber',
            'No Scope',
            'Modified Ammunition'
        ]);

        build = new PowerHolosmithBuild('holoPowerTurret', 'Turret');
        build.skills.setHealSkill('Healing Turret');

        build = new PowerHolosmithBuild('holoPowerDPSTurret', 'Full DPS - Turret');
        build.specialization.setSpec('spec2', 'Firearms', [
            'High Caliber',
            'No Scope',
            'Modified Ammunition'
        ]);
        build.skills.setHealSkill('Healing Turret');

        build = new PowerHolosmithBuild('holoPowerStormTurret', 'Storm - Turret');
        build.skills.setHealSkill('Healing Turret');
        build.specialization.setSpec('spec3', 'Holosmith', [
            'Solar Focusing Lens',
            'Crystal Configuration: Storm',
            'Photonic Blasting Module'
        ]);

        build = new PowerHolosmithBuild('holoPowerOrbital', 'Orbital');
        build.specialization.setSpec('spec1', 'Explosives', ['Glass Cannon', 'Big Boomer', 'Orbital Command']);

        build = new PowerHolosmithBuild('holoPowerStorm', 'Storm');
        build.specialization.setSpec('spec3', 'Holosmith', [
            'Solar Focusing Lens',
            'Crystal Configuration: Storm',
            'Photonic Blasting Module'
        ]);
    }
}

