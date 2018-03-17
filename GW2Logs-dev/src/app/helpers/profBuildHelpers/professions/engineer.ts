import { ProfBuild } from '../../profBuild';
import { Professions } from '../professionUtilities/professions';

/**
 * Standard Engineer build
 */
class EngiBuild extends ProfBuild {
    /**
     * Create a standard Engineer build
     * @param id Id of the build
     * @param name Name of the build
     */
    constructor(id, name) {
        super(id, Professions.Engineer, name);
        this.wep2 = null;
    }
}

/**
 * Condition Engineer build
 */
class CondiEngiBuild extends EngiBuild {
    /**
     * Create a Condition Engineer build
     * @param id Id of the build
     * @param name Name of the build
     */
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

/**
 * Power Holosmith build
 */
class PowerHolosmithBuild extends EngiBuild {
    /**
     * Create a Power Holosmith build
     * @param id Id of the build
     * @param name Name of the build
     */
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
        this.skills.setUtilitySkills(['Bomb Kit', 'Grenade Kit', 'Laser Disk']);
        this.skills.setEliteSkill('Prime Light Beam');
    }
}

/**
 * Add engineer builds to the database
 */
export function engiBuildMaker() {
    let build: ProfBuild = null;
    // Condi
    {
        build = new CondiEngiBuild('engiCondi', '');
        // Variants
        let variant = build.addOverride('Mobility');
        variant.skills.setHealSkill('Healing Turret');
        variant.skills.setUtilitySkills(['Bomb Kit', 'Grenade Kit', 'Rocket Boots']);
        variant.skills.setEliteSkill('Elite Mortar Kit');

        variant = build.addOverride('CC');
        variant.skills.setHealSkill('A.E.D.');
        variant.skills.setUtilitySkills(['Bomb Kit', 'Grenade Kit', 'Flamethrower']);
        variant.skills.setEliteSkill('Elite Mortar Kit');
    }

    // Power
    {
        build = new PowerHolosmithBuild('holoPower', '');
        // Variants
        let variant = build.addOverride('Orbital');
        variant.specialization.setSpec('spec1', 'Explosives', ['Glass Cannon', 'Big Boomer', 'Orbital Command']);
        variant.specialization.setSpec('spec2', 'Firearms', [
            'High Caliber',
            'Pinpoint Distribution',
            'Modified Ammunition'
        ]);
        variant.specialization.setSpec('spec3', 'Holosmith', [
            'Solar Focusing Lens',
            'Crystal Configuration: Eclipse',
            'Photonic Blasting Module'
        ]);
        //
        variant = build.addOverride('Thermal');
        variant.specialization.setSpec('spec1', 'Explosives', ['Glass Cannon', 'Big Boomer', 'Shrapnel']);
        variant.specialization.setSpec('spec2', 'Firearms', [
            'High Caliber',
            'Thermal Vision',
            'Modified Ammunition'
        ]);
        variant.specialization.setSpec('spec3', 'Holosmith', [
            'Solar Focusing Lens',
            'Crystal Configuration: Eclipse',
            'Photonic Blasting Module'
        ]);
        //
        variant = build.addOverride('Thermal/Orbital');
        variant.specialization.setSpec('spec1', 'Explosives', ['Glass Cannon', 'Big Boomer', 'Orbital Command']);
        variant.specialization.setSpec('spec2', 'Firearms', [
            'High Caliber',
            'Thermal Vision',
            'Modified Ammunition'
        ]);
        variant.specialization.setSpec('spec3', 'Holosmith', [
            'Solar Focusing Lens',
            'Crystal Configuration: Eclipse',
            'Photonic Blasting Module'
        ]);
        //
        variant = build.addOverride('Sword');
        variant.skills.setHealSkill('A.E.D.');
        variant.skills.setUtilitySkills(['Rifle Turret', 'Grenade Kit', 'Laser Disk']);
        variant.skills.setEliteSkill('Prime Light Beam');
        variant.wep1.setMainHand('Sword', 'Berserker\'s', 'Superior Sigil of Force');
        variant.wep1.setOffHand('Pistol', 'Berserker\'s', 'Superior Sigil of Air');
        //
        variant = build.addOverride('CC', false);
        variant.skills.setHealSkill('A.E.D.');
        variant.skills.setUtilitySkills(['Bomb Kit', 'Grenade Kit', 'Laser Disk']);
        variant.skills.setEliteSkill('Prime Light Beam');
    }
}
