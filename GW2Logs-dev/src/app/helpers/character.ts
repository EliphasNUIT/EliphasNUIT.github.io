import { ProfBuild, buildDatabase } from './profBuild';

import { makeAllBuild } from './profBuildHelpers/professions/_full';

makeAllBuild();

let warningLimit = 0;

export class Character {
    name: string;
    gw2Armory: string;
    build: ProfBuild;
    role: string;
    override: {
        armor: string,
        consumable: string,
        trinket: string,
        wep1: string,
        wep2: string,
        specialization: string,
        profSkills: string,
        skills: string
    };

    constructor(params: {
        name: string, build: string, gw2Armory: string, role: string, override: {
            armor: string,
            consumable: string,
            trinket: string,
            wep1: string,
            wep2: string,
            specialization: string,
            profSkills: string,
            skills: string
        }
    }) {
        this.name = params.name;
        this.build = buildDatabase.get(params.build);
        this.gw2Armory = params.gw2Armory ? params.gw2Armory : '';
        this.role = params.role ? params.role : '' ;
        this.override = params.override;
    }

    getIcon(): string {
        if (!this.build) {
            if (warningLimit < 10) {
                console.warn('Warning: data for ' + this.name + ' does not exist');
                warningLimit++;
            } else if (warningLimit === 10) {
                console.warn('Stopping warning messages for characters');
                warningLimit++;
            }
            return 'assets/profIcons/any.png';
        }
        return this.build.getIcon();
    }

    getBuild(): ProfBuild {
        return this.build;
    }

    getProfessionName(): string {
        if (this.build) {
            return this.build.profession.name;
        }
        return 'any';
    }

    getRole(): string {
        return this.role;
    }

    getOverride(): {
        armor: string,
        consumable: string,
        trinket: string,
        wep1: string,
        wep2: string,
        specialization: string,
        profSkills: string,
        skills: string
    } {
        return this.override;
    }
}
