export class ProfessionSkills {
    profession: any;
    skills: number[];

    constructor(profession) {
        this.profession = profession;
        this.skills = [];
    }

    _setSkill(slotType: string, skillName: string) {
        const skill = this.profession.skills[skillName];
        if (skill) {
            if (skill.slot.includes(slotType)) {
                this.skills.push(skill.id);
            } else {
                console.warn('Warning: ' + skillName + ' is not a/an ' + slotType + ' skill');
            }
        } else if (skillName.length > 0) {
            console.warn('Warning: ' + skillName + ' is not a ' + this.profession.name + ' skill');
        }
    }

    setSkills(skills: string[]) {
        this.skills = [];
        for (let i = 0; i < skills.length; i++) {
            this._setSkill('Profession', skills[i]);
        }
    }

    getSDiv(mobile: boolean): string {
        const skills = this.skills;
        if (skills.length === 0) {
            return '';
        }
        let divToAdd = '<div data-armory-embed="skills" ';
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
}
