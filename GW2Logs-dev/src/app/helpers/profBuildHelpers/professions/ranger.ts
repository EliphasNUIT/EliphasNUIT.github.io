import { ProfBuild } from '../../profBuild';
import { Professions } from '../professionUtilities/professions';

class RangerBuild extends ProfBuild {
    constructor(id, name) {
        super(id, Professions.Ranger, name);
    }
}

class CondiRangerBuild extends RangerBuild {
    constructor(id, name) {
        super(id, name);
        this.armor.setSingleStat('Viper\'s');
        this.trinket.setSingleStat('Viper\'s');
    }
}

class CondiDruidBuild extends CondiRangerBuild {
    constructor(id, name) {
        super(id, 'Druide - Condition - ' + name);
        this.icon += 'druid.png';
        this.armor.set42Rune('Superior Rune of the Traveler', 'Superior Rune of the Trapper');
        this.wep1.setTwoHand('Shortbow', 'Viper\'s', 'Superior Sigil of Concentration', 'Superior Sigil of Malice');
        this.wep2.setMainHand('Dagger', 'Viper\'s', 'Superior Sigil of Concentration');
        this.wep2.setOffHand('Torch', 'Viper\'s', 'Superior Sigil of Malice');
        this.consumable.setConsumable('Prickly Pear Pie', 'Toxic Maintenance Oil');
        this.skills.pets = ['Juvenile Lynx', 'Juvenile Electric Wyvern'];
        this.specialization.setSpec('spec1', 'Skirmishing', ['Sharpened Edges', 'Spotter', 'Light on your Feet']);
        this.specialization.setSpec('spec2', 'Nature Magic', ['Bountiful Hunter', 'Spirited Arrival', 'Nature\'s Vengeance']);
        this.specialization.setSpec('spec3', 'Druid', ['Cultivated Synergy', 'Verdant Etching', 'Grace of the Land']);
        this.skills.setHealSkill('Glyph of Rejuvenation');
        this.skills.setUtilitySkills(['Glyph of Empowerment', 'Sun Spirit', 'Frost Spirit']);
        this.skills.setEliteSkill('Glyph of Unity');
    }
}

class CondiSoulbeastBuild extends CondiRangerBuild {
    constructor(id, name) {
        super(id, 'Soulbeast - Condition - ' + name);
        this.icon += 'soulbeast.png';
        this.armor.set42Rune('Superior Rune of the Nightmare', 'Superior Rune of the Trapper');
        this.consumable.setConsumable('Rare Veggie Pizza', 'Toxic Focusing Crystal');
        this.wep1.setTwoHand('Shortbow', 'Viper\'s', 'Superior Sigil of Agony', 'Superior Sigil of Geomancy');
        this.wep2.setMainHand('Dagger', 'Viper\'s', 'Superior Sigil of Agony');
        this.wep2.setOffHand('Torch', 'Viper\'s', 'Superior Sigil of Geomancy');
        this.specialization.setSpec('spec1', 'Skirmishing', ['Sharpened Edges', 'Hidden Barbs', 'Quick Draw']);
        this.specialization.setSpec('spec2', 'Wilderness Survival', ['Taste for Danger', 'Ambidexterity', 'Poison Master']);
        this.specialization.setSpec('spec3', 'Soulbeast', ['Live Fast', 'Predator\'s Cunning', 'Leader of the Pack']);
        this.skills.pets = ['Juvenile Lynx', 'Juvenile Warthog', 'Juvenile Fanged Iboga'];
        this.skills.setHealSkill('"We Heal As One!"');
        this.skills.setUtilitySkills(['Viper\'s Nest', 'Vulture Stance', 'Sharpening Stone']);
        this.skills.setEliteSkill('One Wolf Pack');
    }
}


class BoonDruidBuild extends RangerBuild {
    constructor(id, name) {
        super(id, 'Druide - Boons - ' + name);
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
        this.skills.pets = ['Juvenile Rock Gazelle', 'Juvenile Electric Wyvern'];
        this.skills.setHealSkill('Water Spirit');
        this.skills.setUtilitySkills(['Glyph of Empowerment', '', '']);
        this.skills.setEliteSkill('Glyph of Unity');
    }
}

class TrapperBoonDruidBuild extends BoonDruidBuild {
    constructor(id, name) {
        super(id, name);
        this.specialization.setSpec('spec1', 'Skirmishing', ['Trapper\'s Expertise', 'Spotter', 'Quick Draw']);
        this.skills.setHealSkill('Healing Spring');
    }
}

export function rangerBuildMaker() {
    let build: ProfBuild = null;
    // Condi
    {
        build = new CondiDruidBuild('druidCondiVg', 'VG');
        build.skills.setUtilitySkills(['Glyph of the Tides', 'Sun Spirit', 'Frost Spirit']);

        build = new CondiDruidBuild('druidCondi', 'Standart');

        build = new CondiSoulbeastBuild('soulbeastCondi', 'Standart');


        build = new CondiSoulbeastBuild('soulbeastCondiTrap', 'Trap');
        build.skills.setHealSkill('Healing Spring');

    }

    // Heal
    {
        build = new BoonDruidBuild('druidVg', 'VG');
        build.skills.setUtilitySkills(['Glyph of the Tides', '', '']);
        build.skills.setEliteSkill('Entangle');

        build = new BoonDruidBuild('druidGorse', 'Gorse');
        build.skills.setEliteSkill('Entangle');

        build = new BoonDruidBuild('druidSab', 'Sabetha');

        build = new BoonDruidBuild('druidSloth', 'Slothasor');
        build.skills.setUtilitySkills(['"Protect Me!"', '', '']);

        build = new TrapperBoonDruidBuild('druidMatt', 'Matthias');
        build.skills.setUtilitySkills(['Glyph of the Tides', '', '']);
        build.skills.setEliteSkill('Spirit of Nature');

        build = new TrapperBoonDruidBuild('druidXera', 'Xera');

        build = new BoonDruidBuild('druidSpirit', 'Spirit');
        build.skills.setEliteSkill('Spirit of Nature');

        build = new BoonDruidBuild('druidCairnKite', 'Cairn Kite');
        build.armor.setSingleStat('Minstrel\'s');
        build.armor.setSingleRune('Superior Rune of Water');
        build.trinket.setSingleStat('Minstrel\'s');
        build.skills.setEliteSkill('Spirit of Nature');

        build = new BoonDruidBuild('druidKite', 'Black Kite');
        build.wep2.setTwoHand('Greatsword', 'Magi\'s', 'Superior Sigil of Transference', 'Superior Sigil of Agility');
        build.skills.setEliteSkill('Spirit of Nature');

        build = new BoonDruidBuild('druidSam', 'Samarog');
        build.skills.pets = ['Juvenile Jacaranda', 'Juvenile Electric Wyvern'];
        build.skills.setUtilitySkills(['Glyph of the Tides', '', '']);

    }
}

