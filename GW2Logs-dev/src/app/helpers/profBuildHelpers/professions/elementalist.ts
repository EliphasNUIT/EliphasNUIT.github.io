import { ProfBuild } from '../../profBuild';
import { Professions } from '../professionUtilities/professions';



class EleBuild extends ProfBuild {
    constructor(id, name) {
        super(id, Professions.Elementalist, name);
        this.wep2 = null;
    }
}

class CondiWeaverBuild extends EleBuild {
    constructor(id, name) {
        super(id, 'Weaver - Condition - ' + name);
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
        this.skills.setEliteSkill('Weave Self');
    }
}

class PowerWeaverBuild extends EleBuild {
    constructor(id, name) {
        super(id, 'Weaver - Staff Power - ' + name);
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
        this.skills.setEliteSkill('Conjure Fiery Greatsword');
    }
}

export function eleBuildMaker() {
    let build: ProfBuild = null;
    // Condi
    {
        build = new CondiWeaverBuild('weavCondi', 'Standart');
        build.skills.setUtilitySkills(['Signet of Fire', 'Signet of Earth', 'Primordial Stance']);
        build = new CondiWeaverBuild('weavCondiSab', 'Cannons');
        build.skills.setUtilitySkills(['Signet of Fire', 'Signet of Earth', 'Lightning Flash']);
    }

    // Power
    {
        build = new PowerWeaverBuild('weavPowerSHArc', 'Arcane - Small Hitbox');
        build.specialization.setSpec('spec2', 'Arcane', [
            'Renewing Stamina',
            'Elemental Contingency',
            'Bountiful Power'
        ]);
        build.skills.setUtilitySkills(['Conjure Lightning Hammer', 'Glyph of Storms', 'Primordial Stance']);

        build = new PowerWeaverBuild('weavPowerBHArc', 'Arcane - Big Hitbox');
        build.specialization.setSpec('spec2', 'Arcane', [
            'Renewing Stamina',
            'Elemental Contingency',
            'Bountiful Power'
        ]);
        build.skills.setUtilitySkills(['Conjure Frost Bow', 'Glyph of Storms', 'Primordial Stance']);

        build = new PowerWeaverBuild('weavPowerSHAir', 'Air - Small Hitbox');
        build.specialization.setSpec('spec2', 'Air', ['Ferocious Winds', 'Inscription', 'Bolt to the Heart']);
        build.skills.setUtilitySkills(['Conjure Lightning Hammer', 'Glyph of Storms', 'Primordial Stance']);

        build = new PowerWeaverBuild('weavPowerBHAir', 'Air - Big Hitbox');
        build.specialization.setSpec('spec2', 'Air', ['Ferocious Winds', 'Inscription', 'Bolt to the Heart']);
        build.skills.setUtilitySkills(['Conjure Frost Bow', 'Glyph of Storms', 'Primordial Stance']);

        build = new PowerWeaverBuild('weavPowerKC', 'Air - KC');
        build.wep1.setTwoHand('Staff', 'Berserker\'s', 'Superior Sigil of Force', 'Superior Sigil of Impact');
        build.specialization.setSpec('spec2', 'Air', ['Ferocious Winds', 'Tempest Defense', 'Bolt to the Heart']);
        build.skills.setUtilitySkills(['Conjure Frost Bow', 'Glyph of Storms', 'Primordial Stance']);
        build.skills.setEliteSkill('Weave Self');
    }

    // Special
    {
        build = new EleBuild('tempAura', 'Tempest - Auramancer');
        build.armor.setSingleStat('Magi\'s');
        build.armor.setSingleRune('Superior Rune of the Monk');
        build.consumable.setConsumable('Delicious Rice Ball', 'Bountiful Maintenance Oil');
        build.trinket.setSingleStat('Magi\'s');
        build.wep1.setTwoHand('Staff', 'Magi\'s', 'Superior Sigil of Transference', 'Superior Sigil of Water');

        build.specialization.setSpec('spec1', 'Water', ['Soothing Ice', 'Aquamancer\'s Training', 'Powerful Aura']);
        build.specialization.setSpec('spec2', 'Arcane', ['Renewing Stamina', 'Arcane Resurrection', 'Bountiful Power']);
        build.specialization.setSpec('spec3', 'Tempest', [
            'Unstable Conduit',
            'Invigorating Torrents',
            'Elemental Bastion'
        ]);
        build.skills.setHealSkill('"Wash the Pain Away!"');
        build.skills.setUtilitySkills(['"Feel the Burn!"', '"Flash-Freeze!"', 'Lightning Flash']);
        build.skills.setEliteSkill('"Rebound!"');
    }

}

