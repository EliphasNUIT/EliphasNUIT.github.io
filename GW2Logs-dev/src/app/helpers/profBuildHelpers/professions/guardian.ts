import { ProfBuild } from '../../profBuild';
import { Professions } from '../professionUtilities/professions';
import { Specialization } from '../data/specialization';
import { Skills } from '../data/skills';


class GuardBuild extends ProfBuild {
    constructor(id, name) {
        super(id, Professions.Guardian, name);
    }
}

class PowerDHBuild extends GuardBuild {
    constructor(id, name) {
        super(id, 'Dragonhunter - Power' + name);
        this.icon += 'dragonhunter.png';
        this.armor.setSingleStat('Berserker\'s');
        this.armor.setSingleRune('Superior Rune of the Scholar');
        this.consumable.setConsumable('Bowl of Sweet and Spicy Butternut Squash Soup', 'Superior Sharpening Stone');
        this.trinket.setSingleStat('Berserker\'s');
        this.wep1.setMainHand('Scepter', 'Berserker\'s', 'Superior Sigil of Force');
        this.wep1.setOffHand('Torch', 'Berserker\'s', 'Superior Sigil of Air');
        this.wep2.setTwoHand('Greatsword', 'Berserker\'s', 'Superior Sigil of Force', 'Superior Sigil of Air');
        this.specialization.setSpec('spec1', 'Zeal', ['Fiery Wrath', 'Zealous Blade', 'Symbolic Avenger']);
        this.specialization.setSpec('spec2', 'Radiance', [
            'Healer\'s Retribution',
            'Retribution',
            'Righteous Instincts'
        ]);
        this.specialization.setSpec('spec3', 'Dragonhunter', [
            'Piercing Light',
            'Zealot\'s Aggression',
            'Big Game Hunter'
        ]);
        this.skills.setHealSkill('Litany of Wrath');
        this.skills.setUtilitySkills(['Procession of Blades', '', 'Bane Signet']);
        this.skills.setEliteSkill('');
    }
}

class CondiFBBuild extends GuardBuild {
    constructor(id, name) {
        super(id, 'Firebrand - Condition' + name);
        this.icon += 'firebrand.png';
        this.armor.setStats(['Grieving', 'Sinister', 'Viper\'s', 'Sinister', 'Grieving', 'Sinister']);
        this.armor.setSingleRune('Superior Rune of Balthazar');
        this.consumable.setConsumable('Rare Veggie Pizza', 'Toxic Focusing Crystal');
        this.trinket.setSingleStat('Sinister');
        this.wep1.setMainHand('Scepter', 'Viper\'s', 'Superior Sigil of Smoldering');
        this.wep1.setOffHand('Torch', 'Grieving', 'Superior Sigil of Bursting');
        this.wep2.setMainHand('Axe', 'Viper\'s', 'Superior Sigil of Smoldering');
        this.specialization.setSpec('spec1', 'Virtues', ['Unscathed Contender', 'Absolute Resolution', 'Permeating Wrath']);
        this.specialization.setSpec('spec2', 'Radiance', ['Right-Hand Strength', 'Radiant Fire', 'Amplified Wrath']);
        this.specialization.setSpec('spec3', 'Firebrand', ['Archivist of Whispers', 'Legendary Lore', 'Loremaster']);
        this.skills.setHealSkill('Mantra of Solace');
        this.skills.setUtilitySkills(['Mantra of Flame', 'Sword of Justice', 'Signet of Wrath']);
        this.skills.setEliteSkill('Renewed Focus');
    }
}

class SuppFBBuild extends GuardBuild {
    constructor(id, name) {
        super(id, 'Firebrand - Support' + name);
        this.icon += 'firebrand.png';
        this.armor.setSingleStat('Viper\'s');
        this.armor.setSingleRune('Superior Rune of the Firebrand');
        this.consumable.setConsumable('Bowl of Fire Meat Chili', 'Toxic Maintenance Oil');
        this.trinket.setSingleStat('Viper\'s');
        this.wep1.setMainHand('Sword', 'Viper\'s', 'Superior Sigil of Smoldering');
        this.wep1.setOffHand('Torch', 'Viper\'s', 'Superior Sigil of Concentration');
        this.wep2.setMainHand('Axe', 'Viper\'s', 'Superior Sigil of Smoldering');
        this.specialization.setSpec('spec1', 'Virtues', ['Unscathed Contender', 'Absolute Resolution', 'Permeating Wrath']);
        this.specialization.setSpec('spec2', 'Radiance', ['Right-Hand Strength', 'Radiant Fire', 'Amplified Wrath']);
        this.specialization.setSpec('spec3', 'Firebrand', ['Liberator\'s Vow', 'Stalwart Speed', 'Loremaster']);
        this.skills.setHealSkill('Mantra of Solace');
        this.skills.setUtilitySkills(['Mantra of Flame', 'Mantra of Potence', 'Signet of Wrath']);
        this.skills.setEliteSkill('"Feel My Wrath!"');
    }
}

class MinstrelFBBuild extends GuardBuild {
    constructor(id, name) {
        super(id, 'Firebrand - Minstrel' + name);
        this.icon += 'firebrand.png';
        this.armor.setSingleStat('Minstrel\'s');
        this.armor.setSingleRune('Superior Rune of Durability');
        this.consumable.setConsumable('Delicious Rice Ball', 'Bountiful Maintenance Oil');
        this.trinket.setSingleStat('Minstrel\'s');
        this.wep1.setMainHand('Mace', 'Minstrel\'s', 'Superior Sigil of Transference');
        this.wep2.setOffHand('Shield', 'Minstrel\'s', 'Superior Sigil of Concentration');
        this.specialization.setSpec('spec1', 'Virtues', ['Retaliatory Subconscious', 'Absolute Resolution', 'Battle Presence']);
        this.specialization.setSpec('spec2', 'Honor', ['Invigorated Bulwark', 'Pure of Heart', 'Force of Will']);
        this.specialization.setSpec('spec3', 'Firebrand', ['Liberator\'s Vow', 'Stalwart Speed', 'Loremaster']);
        this.skills.setHealSkill('Mantra of Solace');
        this.skills.setUtilitySkills(['Mantra of Potence', 'Mantra of Lore', 'Signet of Mercy']);
        this.skills.setEliteSkill('"Feel My Wrath!"');
    }
}

export function guardBuildMaker() {
    let build: ProfBuild = null;
    // Power
    {
        build = new PowerDHBuild('dhPower', '');

        let variant = build.addOverride('Virtue');
        variant.specialization = new Specialization(build.profession);
        variant.specialization.setSpec('spec1', 'Virtues', ['Unscathed Contender', 'Absolute Resolution', 'Permeating Wrath']);
        variant.specialization.setSpec('spec2', 'Radiance', [
            'Healer\'s Retribution',
            'Retribution',
            'Righteous Instincts'
        ]);
        variant.specialization.setSpec('spec3', 'Dragonhunter', [
            'Piercing Light',
            'Zealot\'s Aggression',
            'Big Game Hunter'
        ]);

        variant = build.addOverride('Zeal Signet Share');
        variant.specialization = new Specialization(build.profession);
        variant.specialization.setSpec('spec1', 'Zeal', ['Fiery Wrath', 'Zealous Blade', 'Symbolic Avenger']);
        variant.specialization.setSpec('spec2', 'Radiance', [
            'Healer\'s Retribution',
            'Retribution',
            'Perfect Inscriptions'
        ]);
        variant.specialization.setSpec('spec3', 'Dragonhunter', [
            'Piercing Light',
            'Zealot\'s Aggression',
            'Big Game Hunter'
        ]);

        variant = build.addOverride('Virtue Signet Share');
        variant.specialization = new Specialization(build.profession);
        variant.specialization.setSpec('spec1', 'Virtues', ['Unscathed Contender', 'Absolute Resolution', 'Permeating Wrath']);
        variant.specialization.setSpec('spec2', 'Radiance', [
            'Healer\'s Retribution',
            'Retribution',
            'Perfect Inscriptions'
        ]);
        variant.specialization.setSpec('spec3', 'Dragonhunter', [
            'Piercing Light',
            'Zealot\'s Aggression',
            'Big Game Hunter'
        ]);

        variant = build.addOverride('Shout/Trap', false);
        variant.skills = new Skills(build.profession);
        variant.skills.setHealSkill('Litany of Wrath');
        variant.skills.setUtilitySkills(['Procession of Blades', '"Stand Your Ground!"', 'Bane Signet']);
        variant.skills.setEliteSkill('Dragon\'s Maw');

        variant = build.addOverride('Shout/Shout', false);
        variant.skills = new Skills(build.profession);
        variant.skills.setHealSkill('Litany of Wrath');
        variant.skills.setUtilitySkills(['Procession of Blades', '"Stand Your Ground!"', 'Bane Signet']);
        variant.skills.setEliteSkill('"Feel My Wrath!"');

        variant = build.addOverride('Trap/Shout', false);
        variant.skills = new Skills(build.profession);
        variant.skills.setHealSkill('Litany of Wrath');
        variant.skills.setUtilitySkills(['Procession of Blades', 'Test of Faith', 'Bane Signet']);
        variant.skills.setEliteSkill('"Feel My Wrath!"');

        variant = build.addOverride('Trap/Trap', false);
        variant.skills = new Skills(build.profession);
        variant.skills.setHealSkill('Litany of Wrath');
        variant.skills.setUtilitySkills(['Procession of Blades', 'Test of Faith', 'Bane Signet']);
        variant.skills.setEliteSkill('Dragon\'s Maw');

    }

    // Condi
    {
        build = new CondiFBBuild('fbDPS', '');

        const variant = build.addOverride('Consecration');
        variant.skills = new Skills(build.profession);
        variant.skills.setHealSkill('Mantra of Solace');
        variant.skills.setUtilitySkills(['Mantra of Flame', 'Purging Flames', 'Signet of Wrath']);
        variant.skills.setEliteSkill('Renewed Focus');
        variant.specialization = new Specialization(build.profession);
        variant.specialization.setSpec('spec1', 'Virtues', ['Master of Consecrations', 'Absolute Resolution', 'Permeating Wrath']);
        variant.specialization.setSpec('spec2', 'Radiance', ['Right-Hand Strength', 'Radiant Fire', 'Amplified Wrath']);
        variant.specialization.setSpec('spec3', 'Firebrand', ['Archivist of Whispers', 'Legendary Lore', 'Loremaster']);
    }

    // Support
    {
        build = new MinstrelFBBuild('fbMins', '');

        build = new SuppFBBuild('fbSupp', '');
    }
}

