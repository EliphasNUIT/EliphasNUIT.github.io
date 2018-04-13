import { ProfBuild } from '../../profBuild';
import { Professions } from '../professionUtilities/professions';

/**
 * Standard Elementalist
 */
class EleBuild extends ProfBuild {
    /**
     * Create a standard Elementalist build
     * @param id Id of the build
     * @param name Name of the build
     */
    constructor(id, name) {
        super(id, Professions.Elementalist, name);
        this.wep2 = null;
    }
}

/**
 * Condition Weaver
 */
class CondiWeaverBuild extends EleBuild {
    /**
     * Create a Condition Weaver build
     * @param id Id of the build
     * @param name Name of the build
     */
    constructor(id, name) {
        super(id, 'Weaver - Condition' + name);
        this.icon += 'weaver.png';
        this.armor.setSingleStat('Viper\'s');
        this.armor.setSingleRune('Superior Rune of the Renegade');
        this.consumable.setConsumable('Rare Veggie Pizza', 'Toxic Focusing Crystal');
        this.trinket.setSingleStat('Viper\'s');
        this.wep1.setMainHand('Sword', 'Viper\'s', 'Superior Sigil of Malice');
        this.wep1.setOffHand('Dagger', 'Viper\'s', 'Superior Sigil of Geomancy');
        this.specialization.setSpec('spec1', 'Fire', [
            'Burning Precision',
            'Power Overwhelming',
            'Persisting Flames'
        ]);
        this.specialization.setSpec('spec2', 'Earth', ['Serrated Stones', 'Strength of Stone', 'Written in Stone']);
        this.specialization.setSpec('spec3', 'Weaver', ['Superior Elements', 'Weaver\'s Prowess', 'Elements of Rage']);
        this.skills.setHealSkill('Glyph of Elemental Harmony');
        this.skills.setUtilitySkills(['Signet of Fire', 'Glyph of Storms', 'Primordial Stance']);
        this.skills.setEliteSkill('Weave Self');
    }
}

/**
 * Power Weaver
 */
class PowerWeaverBuild extends EleBuild {
    /**
     * Create a standard Power Weaver Build
     * @param id Id of the build
     * @param name Name of the build
     */
    constructor(id, name) {
        super(id, 'Weaver - Power' + name);
        this.icon += 'weaver.png';
        this.armor.setSingleStat('Berserker\'s');
        this.wep1.setTwoHand('Staff', 'Berserker\'s', 'Superior Sigil of Force', 'Superior Sigil of Air');
        this.armor.setSingleRune('Superior Rune of the Scholar');
        this.consumable.setConsumable('Bowl of Sweet and Spicy Butternut Squash Soup', 'Superior Sharpening Stone');
        this.trinket.setSingleStat('Berserker\'s');
        this.specialization.setSpec('spec1', 'Fire', [
            'Burning Precision',
            'Pyromancer\'s Training',
            'Persisting Flames'
        ]);
        this.specialization.setSpec('spec3', 'Weaver', ['Superior Elements', 'Swift Revenge', 'Elements of Rage']);
        this.skills.setHealSkill('Aquatic Stance');
        this.skills.setUtilitySkills(['Conjure Lightning Hammer', 'Glyph of Storms', 'Primordial Stance']);
        this.skills.setEliteSkill('Conjure Fiery Greatsword');
    }
}

/**
 * Air Power Weaver
 */
class PowerWeaverAirBuild extends PowerWeaverBuild {
    /**
     * Create a Power Weaver in Air build
     * @param id Id of the build
     * @param name Name of the build
     */
    constructor(id, name) {
        super(id, ' - Air' + name);
        this.specialization.setSpec('spec2', 'Air', ['Ferocious Winds', 'Inscription', 'Bolt to the Heart']);
    }
}


/**
 * Arcane Power Weaver
 */
class PowerWeaverArcBuild extends PowerWeaverBuild {
    /**
     * Create a Power Weaver build in Arcane
     * @param id Id of the build
     * @param name Name of the build
     */
    constructor(id, name) {
        super(id, ' - Arcane' + name);
        this.specialization.setSpec('spec2', 'Arcane', [
            'Renewing Stamina',
            'Elemental Contingency',
            'Bountiful Power'
        ]);
    }
}

/**
 * Healing Tempest
 */
class HealTempestBuild extends EleBuild {
    /**
     * Create a Healing Tempest build
     * @param id Id of the build
     * @param name Name of the build
     */
    constructor(id, name) {
        super(id, 'Tempest - Auramancer' + name);
        this.icon += 'tempest.png';
        this.armor.setSingleStat('Magi\'s');
        this.armor.setSingleRune('Superior Rune of the Monk');
        this.consumable.setConsumable('Delicious Rice Ball', 'Bountiful Maintenance Oil');
        this.trinket.setSingleStat('Magi\'s');
        this.wep1.setTwoHand('Staff', 'Magi\'s', 'Superior Sigil of Transference', 'Superior Sigil of Water');

        this.specialization.setSpec('spec1', 'Water', ['Soothing Ice', 'Aquamancer\'s Training', 'Soothing Power']);
        this.specialization.setSpec('spec2', 'Arcane', ['Renewing Stamina', 'Arcane Resurrection', 'Bountiful Power']);
        this.specialization.setSpec('spec3', 'Tempest', [
            'Gale Song',
            'Invigorating Torrents',
            'Elemental Bastion'
        ]);
        this.skills.setHealSkill('"Wash the Pain Away!"');
        this.skills.setUtilitySkills(['"Feel the Burn!"', '"Flash-Freeze!"', 'Lightning Flash']);
        this.skills.setEliteSkill('"Rebound!"');
    }
}

/**
 * Add elementalist builds to the database
 */
export function eleBuildMaker() {
    let build: ProfBuild = null;
    // Condi
    {
        build = new CondiWeaverBuild('weavCondi', '');
    }

    // Power
    {
        build = new PowerWeaverArcBuild('weavPowerArc', '');
        let variant = build.addOverride('Sword');
        variant.wep1.setMainHand('Sword', 'Berserker\'s', 'Superior Sigil of Force');
        variant.wep1.setOffHand('Dagger', 'Berserker\'s', 'Superior Sigil of Air');
        variant.skills.setHealSkill('Arcane Brilliance');
        variant.skills.setUtilitySkills(['Arcane Blast', 'Glyph of Storms', 'Primordial Stance']);
        variant.skills.setEliteSkill('Conjure Fiery Greatsword');


        build = new PowerWeaverAirBuild('weavPowerAir', '');
        variant = build.addOverride('Tempest Defense');
        variant.wep1.setTwoHand('Staff', 'Berserker\'s', 'Superior Sigil of Force', 'Superior Sigil of Impact');
        variant.specialization.setSpec('spec1', 'Fire', [
            'Burning Precision',
            'Pyromancer\'s Training',
            'Persisting Flames'
        ]);
        variant.specialization.setSpec('spec2', 'Air', ['Ferocious Winds', 'Tempest Defense', 'Bolt to the Heart']);
        variant.specialization.setSpec('spec3', 'Weaver', ['Superior Elements', 'Swift Revenge', 'Elements of Rage']);

        variant = build.addOverride('Keep Construct');
        variant.wep1.setTwoHand('Staff', 'Berserker\'s', 'Superior Sigil of Force', 'Superior Sigil of Impact');
        variant.specialization.setSpec('spec1', 'Fire', [
            'Burning Precision',
            'Pyromancer\'s Training',
            'Persisting Flames'
        ]);
        variant.specialization.setSpec('spec2', 'Air', ['Ferocious Winds', 'Tempest Defense', 'Bolt to the Heart']);
        variant.specialization.setSpec('spec3', 'Weaver', ['Superior Elements', 'Swift Revenge', 'Elements of Rage']);
        variant.skills.setHealSkill('Aquatic Stance');
        variant.skills.setUtilitySkills(['Conjure Frost Bow', 'Glyph of Storms', 'Primordial Stance']);
        variant.skills.setEliteSkill('Weave Self');
    }

    // Special
    {
        build = new HealTempestBuild('tempAura', '');
    }

}

