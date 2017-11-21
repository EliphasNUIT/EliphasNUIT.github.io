define(["professionBuilds/dataBuilds", "professionBuilds/professionUtilities/professions"], function(
    buildData,
    professions
) {
    "use strict";
    var Build = buildData.build;

    class GuardBuild extends Build {
        constructor(name) {
            super(name,professions.Guardian);
        }
    }

    class PowerDHBuild extends GuardBuild {
        constructor(name) {
            super(name);
            this.armor.setSingleStat("Berserker's");
            this.armor.setSingleRune("Superior Rune of the Scholar");
            this.consumable.setConsumable("Bowl of Sweet and Spicy Butternut Squash Soup", "Superior Sharpening Stone");
            this.trinket.setSingleStat("Berserker's");
            this.wep1.setMainHand("Scepter", "Berserker's", "Superior Sigil of Force");
            this.wep1.setOffHand("Torch", "Berserker's", "Superior Sigil of Air");
            this.wep2.setTwoHand("Greatsword", "Berserker's", "Superior Sigil of Force", "Superior Sigil of Air");
            this.specialization.setSpec("spec1", "Zeal", ["Fiery Wrath", "Zealous Blade", "Symbolic Avenger"]);
            this.specialization.setSpec("spec2", "Radiance", [
                "Healer's Retribution",
                "Retribution",
                "Righteous Instincts"
            ]);
            this.specialization.setSpec("spec3", "Dragonhunter", [
                "Piercing Light",
                "Zealot's Aggression",
                "Big Game Hunter"
            ]);
            this.skills.setHealSkill("Litany of Wrath");
            this.skills.setEliteSkill("Dragon's Maw");
        }
    }

    class CondiFBBuild extends GuardBuild {
        constructor(name) {
            super(name);
            this.armor.setStats(["Sinister", "Sinister", "Grieving", "Grieving", "Grieving", "Grieving"]);
            this.armor.setSingleRune("Superior Rune of Balthazar");
            this.consumable.setConsumable("Bowl of Fire Meat Chili", "Toxic Focusing Crystal");
            this.trinket.setSingleStat("Grieving");
            this.wep1.setMainHand("Scepter", "Grieving", "Superior Sigil of Bursting");
            this.wep1.setOffHand("Torch", "Grieving", "Superior Sigil of Smoldering");
            this.wep2.setMainHand("Sword", "Grieving", "Superior Sigil of Bursting");
            this.specialization.setSpec("spec1", "Zeal", ["Fiery Wrath", "Kindled Zeal", "Symbolic Avenger"]);           
            this.specialization.setSpec("spec2", "Radiance", ["Right-Hand Strength", "Radiant Fire", "Amplified Wrath"]);
            this.specialization.setSpec("spec3", "Firebrand", ["Archivist of Whispers", "Legendary Lore", "Loremaster"]); 
            this.skills.setHealSkill("Mantra of Solace");
            this.skills.setUtilitySkills(["Mantra of Potence", "Mantra of Flame", "Signet of Wrath"]);
        }
    }


    var build = null;
    // Power
    {
        build = new PowerDHBuild("dhPowerZealRad");    
        build.skills.setUtilitySkills(["Procession of Blades", "\"Stand Your Ground!\"", "Bane Signet"]);

        build = new PowerDHBuild("dhPowerZealRadKC");          
        build.wep1.setMainHand("Scepter", "Berserker's", "Superior Sigil of Force");
        build.wep1.setOffHand("Torch", "Berserker's", "Superior Sigil of Impact");
        build.wep2.setTwoHand("Greatsword", "Berserker's", "Superior Sigil of Force", "Superior Sigil of Impact");
        build.skills.setUtilitySkills(["Procession of Blades", "Hallowed Ground", "Bane Signet"]);
        
    }

    // Condi
    {
        build = new CondiFBBuild("fbDPS");                      
        build.skills.setEliteSkill("Renewed Focus");

        build = new CondiFBBuild("fbDPSAxe");     
        build.wep2.setMainHand("Axe", "Grieving", "Superior Sigil of Bursting");                 
        build.skills.setEliteSkill("Renewed Focus");
    }
});
