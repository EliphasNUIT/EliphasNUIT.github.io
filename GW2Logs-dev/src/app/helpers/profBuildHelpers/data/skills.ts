import { pets } from '../professionUtilities/pets';

/**
 * Skills data
 */
export class Skills {
    /**
     * Profession
     */
    private profession: any;
    /**
     * Pets data
     */
    private pets: string[];
    /**
     * Healing skill
     */
    private healSkill: number;
    /**
     * Utility skill
     */
    private utilitySkill0: number;
    /**
     * Utility skill
     */
    private utilitySkill1: number;
    /**
     * Utility skill
     */
    private utilitySkill2: number;
    /**
     * Elite skill
     */
    private eliteSkill: number;

    /**
     * Create a skills data
     * @param profession Profession
     */
    constructor(profession) {
        this.profession = profession;
        this.pets = [];
        this.healSkill = -1;
        this.utilitySkill0 = -1;
        this.utilitySkill1 = -1;
        this.utilitySkill2 = -1;
        this.eliteSkill = -1;
    }

    /**
     * Private method to set a skill on the given slot
     * @param slot Skills data slot
     * @param slotType Skill slot type
     * @param skillName Name of the skill
     */
    private _setSkill(slot: string, slotType: string, skillName: string) {
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

    /**
     * Set the heal skill
     * @param skillName Name of the skill
     */
    setHealSkill(skillName: string) {
        this._setSkill('healSkill', 'Heal', skillName);
    }

    /**
     * Set the utility skills
     * @param skillNameArray Array of skill name, length === 3
     */
    setUtilitySkills(skillNameArray: string[]) {
        if (skillNameArray.length !== 3) {
            console.warn('Warning: invalid parameters in setUtilitySkills');
            return;
        }
        for (let i = 0; i < 3; i++) {
            const skillName = skillNameArray[i];
            this._setSkill('utilitySkill' + i, 'Utility', skillName);
        }
    }

    /**
     * Set elite skill
     * @param skillName Name of the skill
     */
    setEliteSkill(skillName: string) {
        this._setSkill('eliteSkill', 'Elite', skillName);
    }

    /**
     * Set pets
     * @param petNames Pets to set
     */
    setPets(petNames: string[]) {
        this.pets = petNames ? petNames.slice(0) : [];
    }

    /**
     * Private method to get the div of the healing skill
     * @param mobile Mobile device or not
     */
    private _getHealDiv(mobile: boolean): string {
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
        divToAdd += 'data-armory-blank-text="Compétence utilitaire (reflect, cc, buff) ou DPS"';
        divToAdd += '></div>';
        return divToAdd;
    }

    /**
     * Private method to get the elite skill div
     * @param mobile Mobile device or not
     */
    private _getEliteDiv(mobile): string {
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
        divToAdd += 'data-armory-blank-text="Compétence utilitaire (reflect, cc, buff) ou DPS"';
        divToAdd += '></div>';
        return divToAdd;
    }

    /**
     * Private method to get the utility skills div
     * @param mobile Mobile device or not
     */
    private _getUtilitiesDiv(mobile): string {
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
        divToAdd += 'data-armory-blank-text="Compétence utilitaire (reflect, cc, buff) ou DPS"';
        divToAdd += '></div>';
        return divToAdd;
    }

    /**
     * Get the skills div
     * @param mobile Mobile device or not
     */
    getSDiv(mobile: boolean): {heal: string, utilities: string, elite: string} {
        return {
            heal: this._getHealDiv(mobile),
            utilities: this._getUtilitiesDiv(mobile),
            elite: this._getEliteDiv(mobile)
        };
    }

    /**
     * Get pets div
     */
    getPDiv(): string {
        if (this.pets.length === 0) {
            return '';
        }
        let divToAdd = '<div center> ';
        for (let i = 0; i < this.pets.length; i++) {
            const petData = pets[this.pets[i]] ? pets[this.pets[i]] : null;
            if (petData) {
                let img = '<img style="width: 196px; heigth: 196px" src="';
                img += petData.icon + '" ';
                img += 'title="' + this.pets[i] + '">';
                divToAdd += img;
            }
        }
        divToAdd += ' </div>';
        return divToAdd;
    }

    /**
     * Updates class using a json
     * @param data JSON data
     */
    fromJSON(data: {
        heal: string,
        utility: string[],
        elite: string,
        pets: string[]
    }): void {
        if (!data) {
            return;
        }
        this.setHealSkill(data.heal);
        this.setUtilitySkills(data.utility);
        this.setEliteSkill(data.elite);
        this.setPets(data.pets);
    }
}
