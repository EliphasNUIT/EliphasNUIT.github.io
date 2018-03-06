import { ProfBuild } from '../../profBuild';
import { Professions } from '../professionUtilities/professions';
import { Weapons } from '../data/weapons';
import { Skills } from '../data/skills';
import { Specialization } from '../data/specialization';



class EleBuild extends ProfBuild {
    constructor(id, name) {
        super(id, Professions.Elementalist, name);
        this.wep2 = null;
    }
}

class CondiWeaverBuild extends EleBuild {
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

class PowerWeaverBuild extends EleBuild {
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

class PowerWeaverAirBuild extends PowerWeaverBuild {
    constructor(id, name) {
        super(id, ' - Air' + name);
        this.specialization.setSpec('spec2', 'Air', ['Ferocious Winds', 'Inscription', 'Bolt to the Heart']);
    }
}

class PowerWeaverArcBuild extends PowerWeaverBuild {
    constructor(id, name) {
        super(id, ' - Arcane' + name);
        this.specialization.setSpec('spec2', 'Arcane', [
            'Renewing Stamina',
            'Elemental Contingency',
            'Bountiful Power'
        ]);
    }
}

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
        variant.wep1 = new Weapons(build.profession);
        variant.wep1.setMainHand('Sword', 'Berserker\'s', 'Superior Sigil of Force');
        variant.wep1.setOffHand('Dagger', 'Berserker\'s', 'Superior Sigil of Air');
        variant.skills = new Skills(build.profession);
        variant.skills.setHealSkill('Arcane Brilliance');
        variant.skills.setUtilitySkills(['Arcane Blast', 'Glyph of Storms', 'Primordial Stance']);
        variant.skills.setEliteSkill('Conjure Fiery Greatsword');


        build = new PowerWeaverAirBuild('weavPowerAir', '');
        variant = build.addOverride('Tempest Defense');
        variant.wep1 = new Weapons(build.profession);
        variant.wep1.setTwoHand('Staff', 'Berserker\'s', 'Superior Sigil of Force', 'Superior Sigil of Impact');
        variant.specialization = new Specialization(build.profession);
        variant.specialization.setSpec('spec1', 'Fire', [
            'Burning Precision',
            'Pyromancer\'s Training',
            'Persisting Flames'
        ]);
        variant.specialization.setSpec('spec2', 'Air', ['Ferocious Winds', 'Tempest Defense', 'Bolt to the Heart']);
        variant.specialization.setSpec('spec3', 'Weaver', ['Superior Elements', 'Swift Revenge', 'Elements of Rage']);

        variant = build.addOverride('Keep Construct');
        variant.skills = new Skills(build.profession);
        variant.skills.setHealSkill('Aquatic Stance');
        variant.skills.setUtilitySkills(['Conjure Frost Bow', 'Glyph of Storms', 'Primordial Stance']);
        variant.skills.setEliteSkill('Weave Self');
    }

    // Special
    {
        build = new EleBuild('tempAura', 'Tempest - Auramancer');
        build.icon += 'tempest.png';
        build.armor.setSingleStat('Magi\'s');
        build.armor.setSingleRune('Superior Rune of the Monk');
        build.consumable.setConsumable('Delicious Rice Ball', 'Bountiful Maintenance Oil');
        build.trinket.setSingleStat('Magi\'s');
        build.wep1.setTwoHand('Staff', 'Magi\'s', 'Superior Sigil of Transference', 'Superior Sigil of Water');

        build.specialization.setSpec('spec1', 'Water', ['Soothing Ice', 'Aquamancer\'s Training', 'Soothing Power']);
        build.specialization.setSpec('spec2', 'Arcane', ['Renewing Stamina', 'Arcane Resurrection', 'Bountiful Power']);
        build.specialization.setSpec('spec3', 'Tempest', [
            'Gale Song',
            'Invigorating Torrents',
            'Elemental Bastion'
        ]);
        build.skills.setHealSkill('"Wash the Pain Away!"');
        build.skills.setUtilitySkills(['"Feel the Burn!"', '"Flash-Freeze!"', 'Lightning Flash']);
        build.skills.setEliteSkill('"Rebound!"');
    }

}

