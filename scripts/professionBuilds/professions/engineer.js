define(['professionBuilds/dataBuilds', 'professionBuilds/professionUtilities/professions'], function(
	buildData,
	professions
) {
	'use strict';
	var Build = buildData.build;
	var build = null;

	class EngiBuild extends Build {
		constructor(name) {
			super(name,professions.Engineer);
			this.wep2 = null;
		}
	}


	class CondiEngiBuild extends EngiBuild {
		constructor(name) {
			super(name);
			this.armor.setSingleStat('Viper\'s');
			this.armor.setSingleRune('Superior Rune of the Berserker');
			this.consumable.setConsumable('Rare Veggie Pizza', 'Furious Tuning Crystal');
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
		}
	}

	class PowerHolosmithBuild extends EngiBuild {
		constructor(name) {
			super(name);
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
		}
	}


	// Condi
	{
		build = new CondiEngiBuild('engiCondi');      
		build.skills.setHealSkill('Healing Turret');
		build.skills.setUtilitySkills(['Bomb Kit', 'Grenade Kit', 'Flamethrower']);
		build.skills.setEliteSkill('Elite Mortar Kit');
	}

	// Power
	{
		build = new PowerHolosmithBuild('holoPower');  
		build.skills.setHealSkill('Healing Turret');
		build.skills.setUtilitySkills(['Bomb Kit', 'Grenade Kit', 'Laser Disk']);
		build.skills.setEliteSkill('Prime Light Beam');
	}
});
