import { ProfBuild } from '../../profBuild';
import { Professions } from '../professionUtilities/professions';

/**
 * Standard Ranger build
 */
class RangerBuild extends ProfBuild {
    /**
     * Create a standard Ranger build
     * @param id Id of the build
     * @param name Name of the build
     */
    constructor(id, name) {
        super(id, Professions.Ranger, name);
    }
}

/**
 * Condition Ranger build
 */
class CondiRangerBuild extends RangerBuild {
    /**
     * Create a Condition Ranger build
     * @param id Id of the build
     * @param name Name of the build
     */
    constructor(id, name) {
        super(id, name);
        this.armor.setSingleStat('Viper\'s');
        this.trinket.setSingleStat('Viper\'s');
    }
}

/**
 * Condition Druid build
 */
class CondiDruidBuild extends CondiRangerBuild {
    /**
     * Create a Condition Druid build
     * @param id Id of the build
     * @param name Name of the build
     */
    constructor(id, name) {
        super(id, 'Druide - Condition' + name);
        this.icon += 'druid.png';
        this.armor.set42Rune('Superior Rune of the Traveler', 'Superior Rune of the Trapper');
        this.wep1.setTwoHand('Shortbow', 'Viper\'s', 'Superior Sigil of Agony', 'Superior Sigil of Geomancy');
        this.wep2.setMainHand('Dagger', 'Viper\'s', 'Superior Sigil of Agony');
        this.wep2.setOffHand('Torch', 'Viper\'s', 'Superior Sigil of Geomancy');
        this.consumable.setConsumable('Prickly Pear Pie', 'Toxic Maintenance Oil');
        this.skills.setPets(['Juvenile Rock Gazelle', 'Juvenile Lynx', 'Juvenile Electric Wyvern']);
        this.specialization.setSpec('spec1', 'Skirmishing', ['Sharpened Edges', 'Spotter', 'Light on your Feet']);
        this.specialization.setSpec('spec2', 'Wilderness Survival', ['Taste for Danger', 'Ambidexterity', 'Poison Master']);
        this.specialization.setSpec('spec3', 'Druid', ['Cultivated Synergy', 'Verdant Etching', 'Grace of the Land']);
        this.skills.setHealSkill('Glyph of Rejuvenation');
        this.skills.setUtilitySkills(['Sharpening Stone', 'Viper\'s Nest', '']);
        this.skills.setEliteSkill('Entangle');
    }
}

/**
 * Condition Soulbeast build
 */
class CondiSoulbeastBuild extends CondiRangerBuild {
    /**
     * Create a Condition Soulbeast build
     * @param id Id of the build
     * @param name Name of the build
     */
    constructor(id, name) {
        super(id, 'Soulbeast - Condition' + name);
        this.icon += 'soulbeast.png';
        this.armor.set42Rune('Superior Rune of the Nightmare', 'Superior Rune of the Trapper');
        this.consumable.setConsumable('Rare Veggie Pizza', 'Toxic Focusing Crystal');
        this.wep1.setTwoHand('Shortbow', 'Viper\'s', 'Superior Sigil of Agony', 'Superior Sigil of Geomancy');
        this.wep2.setMainHand('Dagger', 'Viper\'s', 'Superior Sigil of Agony');
        this.wep2.setOffHand('Torch', 'Viper\'s', 'Superior Sigil of Geomancy');
        this.specialization.setSpec('spec1', 'Skirmishing', ['Sharpened Edges', 'Hidden Barbs', 'Quick Draw']);
        this.specialization.setSpec('spec2', 'Wilderness Survival', ['Taste for Danger', 'Ambidexterity', 'Poison Master']);
        this.specialization.setSpec('spec3', 'Soulbeast', ['Live Fast', 'Predator\'s Cunning', 'Leader of the Pack']);
        this.skills.setPets(['Juvenile Lynx', 'Juvenile Warthog', 'Juvenile Fanged Iboga']);
        this.skills.setHealSkill('"We Heal As One!"');
        this.skills.setUtilitySkills(['Viper\'s Nest', 'Vulture Stance', 'Sharpening Stone']);
        this.skills.setEliteSkill('One Wolf Pack');
    }
}

/**
 * Boon Druid build
 */
class BoonDruidBuild extends RangerBuild {
    /**
    * Create a Boon Druid build
    * @param id Id of the build
    * @param name Name of the build
    */
    constructor(id, name) {
        super(id, 'Druide - Boons' + name);
        this.icon += 'druid.png';
        this.armor.setSingleStat('Harrier\'s');
        this.armor.setSingleRune('Superior Rune of the Monk');
        this.consumable.setConsumable('Delicious Rice Ball', 'Bountiful Maintenance Oil');
        this.trinket.setSingleStat('Harrier\'s');
        this.wep1.setTwoHand('Staff', 'Harrier\'s', 'Superior Sigil of Transference', 'Superior Sigil of Water');
        this.wep2.setMainHand('Axe', 'Harrier\'s', 'Superior Sigil of Transference');
        this.wep2.setOffHand('Warhorn', 'Harrier\'s', 'Superior Sigil of Water');
        this.specialization.setSpec('spec1', 'Skirmishing', ['Sharpened Edges', 'Spotter', 'Quick Draw']);
        this.specialization.setSpec('spec2', 'Nature Magic', ['Instinctive Reaction', 'Windborne Notes', 'Nature\'s Vengeance']);
        this.specialization.setSpec('spec3', 'Druid', ['Primal Echoes', 'Verdant Etching', 'Grace of the Land']);
        this.skills.setPets(['Juvenile Rock Gazelle', 'Juvenile Electric Wyvern', 'Juvenile Tiger']);
        this.skills.setHealSkill('Glyph of Rejuvenation');
        this.skills.setUtilitySkills(['Glyph of Empowerment', '', '']);
        this.skills.setEliteSkill('Spirit of Nature');
    }
}

/**
 * Minstrel Druid build
 */
class MinstrelDruidBuild extends RangerBuild {
    /**
     * Create a Minstrel Druid build
     * @param id Id of the build
     * @param name Name of the build
     */
    constructor(id, name) {
        super(id, 'Druide - Minstrel' + name);
        this.icon += 'druid.png';
        this.armor.setSingleStat('Minstrel\'s');
        this.armor.setSingleRune('Superior Rune of the Monk');
        this.consumable.setConsumable('Delicious Rice Ball', 'Bountiful Maintenance Oil');
        this.trinket.setSingleStat('Minstrel\'s');
        this.wep1.setTwoHand('Staff', 'Minstrel\'s', 'Superior Sigil of Transference', 'Superior Sigil of Water');
        this.wep2.setMainHand('Axe', 'Minstrel\'s', 'Superior Sigil of Transference');
        this.wep2.setOffHand('Warhorn', 'Minstrel\'s', 'Superior Sigil of Water');
        this.specialization.setSpec('spec1', 'Skirmishing', ['Sharpened Edges', 'Spotter', 'Quick Draw']);
        this.specialization.setSpec('spec2', 'Nature Magic', ['Instinctive Reaction', 'Windborne Notes', 'Nature\'s Vengeance']);
        this.specialization.setSpec('spec3', 'Druid', ['Primal Echoes', 'Verdant Etching', 'Grace of the Land']);
        this.skills.setPets(['Juvenile Rock Gazelle', 'Juvenile Electric Wyvern', 'Juvenile Tiger']);
        this.skills.setHealSkill('Water Spirit');
        this.skills.setUtilitySkills(['Glyph of Empowerment', '', '']);
        this.skills.setEliteSkill('Spirit of Nature');
    }
}

/**
 * Power Ranger Build
 */
class PowerRangerBuild extends RangerBuild {
    /**
     * Create a Power Ranger build
     * @param id Id of the build
     * @param name Name of the build
     */
    constructor(id, name) {
        super(id, name);
        this.armor.setSingleStat('Berserker\'s');
        this.trinket.setSingleStat('Berserker\'s');
        this.wep2.setMainHand('Sword', 'Berserker\'s', 'Superior Sigil of Force');
        this.specialization.setSpec('spec1', 'Skirmishing', ['Sharpened Edges', 'Spotter', 'Quick Draw']);
        this.skills.setPets(['Juvenile Rock Gazelle', 'Juvenile Electric Wyvern', 'Juvenile Tiger']);
    }
}

/**
 * Power Druid Build
 */
class PowerDruidBuild extends PowerRangerBuild {
    /**
     * Create a Power Druid build
     * @param id Id of the build
     * @param name Name of the build
     */
    constructor(id, name) {
        super(id, 'Druide - Power' + name);
        this.icon += 'druid.png';
        this.armor.setSingleRune('Superior Rune of Strength');
        this.wep1.setOffHand('Warhorn', 'Berserker\'s', 'Superior Sigil of Water');
        this.consumable.setConsumable('Slice of Allspice Cake', 'Superior Sharpening Stone');
        this.wep2.setOffHand('Axe', 'Berserker\'s', 'Superior Sigil of Air');
        this.specialization.setSpec('spec2', 'Marksmanship', ['Clarion Bond', 'Moment of Clarity', 'Predator\'s Onslaught']);
        this.specialization.setSpec('spec3', 'Druid', ['Cultivated Synergy', 'Verdant Etching', 'Grace of the Land']);
        this.skills.setHealSkill('Glyph of Rejuvenation');
        this.skills.setUtilitySkills(['Signet of the Wild', '"Sic \'Em!"', '']);
        this.skills.setEliteSkill('Spirit of Nature');
    }
}

/**
 * Power Soulbeast Build
 */
class PowerSoulbeastBuild extends PowerRangerBuild {
    /**
     * Create a Power Soulbeast build
     * @param id Id of the build
     * @param name Name of the build
     */
    constructor(id, name) {
        super(id, 'Soulbeast - Power' + name);
        this.icon += 'soulbeast.png';
        this.armor.setSingleRune('Superior Rune of the Scholar');
        this.wep1.setTwoHand('Longbow', 'Berserker\'s', 'Superior Sigil of Force', 'Superior Sigil of Air');
        this.consumable.setConsumable('Bowl of Sweet and Spicy Butternut Squash Soup', 'Superior Sharpening Stone');
        this.wep2.setOffHand('Axe', 'Berserker\'s', 'Superior Sigil of Air');
        this.specialization.setSpec('spec2', 'Marksmanship', ['Clarion Bond', 'Farsighted', 'Predator\'s Onslaught']);
        this.specialization.setSpec('spec3', 'Soulbeast', ['Live Fast', 'Predator\'s Cunning', 'Oppressive Superiority']);
        this.skills.setHealSkill('"We Heal As One!"');
        this.skills.setUtilitySkills(['Signet of the Wild', '"Sic \'Em!"', 'Sharpening Stone']);
        this.skills.setEliteSkill('One Wolf Pack');
    }
}

/**
 * Add ranger builds to the database
 */
export function rangerBuildMaker() {
    let build: ProfBuild = null;
    // Condi
    {
        /*build = new CondiDruidBuild('druidCondiVg', 'VG');
        build.skills.setUtilitySkills(['Glyph of the Tides', 'Sun Spirit', 'Frost Spirit']);

        build = new CondiDruidBuild('druidCondi', 'Standard');*/

        build = new CondiSoulbeastBuild('soulbeastCondi', '');
        let variant = build.addOverride('Trap', false);
        variant.skills.setHealSkill('Healing Spring');
        variant.skills.setUtilitySkills(['Viper\'s Nest', 'Vulture Stance', 'Sharpening Stone']);
        variant.skills.setEliteSkill('One Wolf Pack');

        variant = build.addOverride('Spotter');
        variant.specialization.setSpec('spec1', 'Skirmishing', ['Sharpened Edges', 'Spotter', 'Vicious Quarry']);
        variant.specialization.setSpec('spec2', 'Wilderness Survival', ['Taste for Danger', 'Ambidexterity', 'Poison Master']);
        variant.specialization.setSpec('spec3', 'Soulbeast', ['Live Fast', 'Predator\'s Cunning', 'Leader of the Pack']);
    }

    // Condi heal
    {
        build = new CondiDruidBuild('druidCondi', '');

        let variant = build.addOverride('Nature');
        variant.specialization.setSpec('spec1', 'Skirmishing', ['Sharpened Edges', 'Spotter', 'Light on your Feet']);
        variant.specialization.setSpec('spec2', 'Nature Magic', ['Bountiful Hunter', 'Spirited Arrival', 'Nature\'s Vengeance']);
        variant.specialization.setSpec('spec3', 'Druid', ['Cultivated Synergy', 'Verdant Etching', 'Grace of the Land']);

        variant = build.addOverride('Offensive');
        variant.armor.setSingleStat('Viper\'s');
        variant.armor.set42Rune('Superior Rune of the Nightmare', 'Superior Rune of the Trapper');
    }

    // Power heal
    {
        build = new PowerDruidBuild('druidPower', '');

        let variant = build.addOverride('Nature');
        variant.specialization.setSpec('spec1', 'Skirmishing', ['Sharpened Edges', 'Spotter', 'Quick Draw']);
        variant.specialization.setSpec('spec2', 'Nature Magic', ['Instinctive Reaction', 'Spirited Arrival', 'Nature\'s Vengeance']);
        variant.specialization.setSpec('spec3', 'Druid', ['Cultivated Synergy', 'Verdant Etching', 'Grace of the Land']);

        variant = build.addOverride('Offensive');
        variant.armor.setSingleStat('Berserker\'s');
        variant.armor.setSingleRune('Superior Rune of the Scholar');
        variant.wep1.setTwoHand('Longbow', 'Berserker\'s', 'Superior Sigil of Force', 'Superior Sigil of Air');

        variant = build.addOverride('Vale Guardian');
        variant.skills.setHealSkill('Glyph of Rejuvenation');
        variant.skills.setUtilitySkills(['Signet of the Wild', 'Glyph of the Tides', '']);
        variant.skills.setEliteSkill('Entangle');

        variant = build.addOverride('Slothasor');
        variant.skills.setHealSkill('Glyph of Rejuvenation');
        variant.skills.setUtilitySkills(['Signet of the Wild', '"Protect Me!"', '']);
        variant.skills.setEliteSkill('Spirit of Nature');

        variant = build.addOverride('Samarog');
        variant.skills.setHealSkill('Glyph of Rejuvenation');
        variant.skills.setUtilitySkills(['Signet of the Wild', 'Glyph of the Tides', '']);
        variant.skills.setEliteSkill('Entangle');
    }

    // Heal
    {
        build = new BoonDruidBuild('druidBoon', '');

        let variant = build.addOverride('Vale Guardian');
        variant.skills.setHealSkill('Water Spirit');
        variant.skills.setUtilitySkills(['Glyph of the Tides', '', '']);
        variant.skills.setEliteSkill('Entangle');

        variant = build.addOverride('Gorseval');
        variant.skills.setHealSkill('Water Spirit');
        variant.skills.setUtilitySkills(['Glyph of Empowerment', '', '']);
        variant.skills.setEliteSkill('Entangle');

        variant = build.addOverride('Slothasor');
        variant.skills.setHealSkill('Glyph of Rejuvenation');
        variant.skills.setUtilitySkills(['"Protect Me!"', '', '']);
        variant.skills.setEliteSkill('Spirit of Nature');

        variant = build.addOverride('Samarog');
        variant.skills.setHealSkill('Glyph of Rejuvenation');
        variant.skills.setUtilitySkills(['Glyph of the Tides', '', '']);
        variant.skills.setEliteSkill('Entangle');

        variant = build.addOverride('Solo');
        variant.skills.setHealSkill('Water Spirit');
        variant.skills.setUtilitySkills(['Glyph of Empowerment', 'Sun Spirit', 'Frost Spirit']);
        variant.skills.setEliteSkill('Spirit of Nature');

        variant = build.addOverride('Matthias');
        variant.specialization.setSpec('spec1', 'Skirmishing', ['Trapper\'s Expertise', 'Spotter', 'Quick Draw']);
        variant.specialization.setSpec('spec2', 'Nature Magic', ['Instinctive Reaction', 'Windborne Notes', 'Nature\'s Vengeance']);
        variant.specialization.setSpec('spec3', 'Druid', ['Primal Echoes', 'Verdant Etching', 'Grace of the Land']);
        variant.skills.setHealSkill('Healing Spring');
        variant.skills.setUtilitySkills(['Glyph of the Tides', 'Sun Spirit', 'Stone Spirit']);
        variant.skills.setEliteSkill('Spirit of Nature');

        variant = build.addOverride('Desmina Pusher');
        variant.specialization.setSpec('spec1', 'Marksmanship', ['Clarion Bond', 'Moment of Clarity', 'Lead the Wind']);
        variant.specialization.setSpec('spec2', 'Nature Magic', ['Instinctive Reaction', 'Windborne Notes', 'Nature\'s Vengeance']);
        variant.specialization.setSpec('spec3', 'Druid', ['Primal Echoes', 'Verdant Etching', 'Grace of the Land']);
        variant.skills.setHealSkill('Water Spirit');
        variant.skills.setUtilitySkills(['Glyph of the Tides', '', '']);
        variant.skills.setEliteSkill('Spirit of Nature');
        variant.wep2.setTwoHand('Longbow', 'Harrier\'s', 'Superior Sigil of Transference', 'Superior Sigil of Water');
    }

    // Minstrel
    {
        ////
        build = new MinstrelDruidBuild('druidKite', '');
        const variant = build.addOverride('Black Kite');
        variant.wep2.setTwoHand('Greatsword', 'Minstrel\'s', 'Superior Sigil of Transference', 'Superior Sigil of Agility');
    }
    // Power DPS
    {
        ////
        build = new PowerSoulbeastBuild('soulbeastPower', '');
    }
}

