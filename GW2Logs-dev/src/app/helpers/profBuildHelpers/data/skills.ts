import { pets } from '../professionUtilities/pets';

export class Skills {
    profession: any;
    pets: string[];
    healSkill: number;
    utilitySkill0: number;
    utilitySkill1: number;
    utilitySkill2: number;
    eliteSkill: number;

    constructor(profession) {
        this.profession = profession;
        this.pets = [];
        this.healSkill = -1;
        this.utilitySkill0 = -1;
        this.utilitySkill1 = -1;
        this.utilitySkill2 = -1;
        this.eliteSkill = -1;
    }

    _setSkill(slot: string, slotType: string, skillName: string) {
        const skill = this.profession.skills[skillName];
        if (skill) {
            if (skill.slot === slotType) {
                this[slot] = skill.id;
            } else {
                console.warn('Warning: ' + skillName + ' is not a/an ' + slotType + ' skill');
            }
        } else if (skillName.length > 0) {
            console.warn('Warning: ' + skillName + ' is not a ' + this.profession.name + ' skill');
        }
    }

    setHealSkill(skillName: string) {
        this._setSkill('healSkill', 'Heal', skillName);
    }

    setUtilitySkills(skillNameArray: string[]) {
        for (let i = 0; i < 3; i++) {
            const skillName = skillNameArray[i];
            this._setSkill('utilitySkill' + i, 'Utility', skillName);
        }
    }

    setEliteSkill(skillName: string) {
        this._setSkill('eliteSkill', 'Elite', skillName);
    }

    _getHealDiv(mobile: boolean): string {
        let divToAdd = '<div data-armory-embed="skills" ';
        let skillIDS = 'data-armory-ids="';
        skillIDS += this.healSkill;
        skillIDS += '" ';
        divToAdd += skillIDS;
        if (mobile) {
            divToAdd += 'data-armory-size="130" ';
        } else {
            divToAdd += 'data-armory-size="70" ';
        }
        divToAdd += 'data-armory-blank-text="Au choix ou voir avec l\'autre classe jouant le même build" ';
        divToAdd += '></div>';
        return divToAdd;
    }

    _getEliteDiv(mobile): string {
        let divToAdd = '<div class="uk-margin-small-left uk-margin-small-right" data-armory-embed="skills" ';
        let skillIDS = 'data-armory-ids="';
        skillIDS += this.eliteSkill;
        skillIDS += '" ';
        divToAdd += skillIDS;
        if (mobile) {
            divToAdd += 'data-armory-size="130" ';
        } else {
            divToAdd += 'data-armory-size="70" ';
        }
        divToAdd += 'data-armory-blank-text="Au choix ou voir avec l\'autre classe jouant le même build" ';
        divToAdd += '></div>';
        return divToAdd;
    }

    _getUtilitiesDiv(mobile): string {
        const skills = [this.utilitySkill0, this.utilitySkill1, this.utilitySkill2];
        let divToAdd = '<div class="uk-margin-small-left uk-margin-small-right" data-armory-embed="skills" ';
        let skillIDS = 'data-armory-ids="';
        for (let i = 0; i < skills.length; i++) {
            const skillID = skills[i];
            skillIDS += skillID + ',';
        }
        skillIDS = skillIDS.slice(0, -1) + '" ';
        divToAdd += skillIDS;
        if (mobile) {
            divToAdd += 'data-armory-size="130" ';
        } else {
            divToAdd += 'data-armory-size="70" ';
        }
        divToAdd += 'data-armory-blank-text="Au choix ou voir avec l\'autre classe jouant le même build" ';
        divToAdd += '></div>';
        return divToAdd;
    }

    getSDiv(mobile: boolean): {heal: string, utilities: string, elite: string} {
        return {
            heal: this._getHealDiv(mobile),
            utilities: this._getUtilitiesDiv(mobile),
            elite: this._getEliteDiv(mobile)
        };
    }

    getPDiv(): string {
        let divToAdd = '<div center> ';
        for (let i = 0; i < this.pets.length; i++) {
            const petData = pets[this.pets[i]] ? pets[this.pets[i]] : null;
            if (petData) {
                let img = '<img style="zoom: 0.8" src="';
                img += petData.icon + '" ';
                img += 'title="' + this.pets[i] + '">';
                divToAdd += img;
            }
        }
        divToAdd += ' </div>';
        return divToAdd;
    }
}
