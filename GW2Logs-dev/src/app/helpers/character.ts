import { ProfBuild, buildDatabase } from './profBuild';

import { makeAllBuild } from './profBuildHelpers/professions/_full';

makeAllBuild();

/**
 * Warning messages limit
 */
let warningLimit = 0;

/**
 * Character data
 */
export class Character {
    /**
     * Character name
     */
    name: string;
    /**
     * Gw2 Armory link
     */
    gw2Armory: string;
    /**
     * Character build data
     */
    private build: ProfBuild;
    /**
     * Character role
     */
    private role: string;
    /**
     * Character build data override
     */
    private override: {
        armor: string,
        consumable: string,
        trinket: string,
        wep1: string,
        wep2: string,
        specialization: string,
        profSkills: string,
        skills: string
    };

    /**
     * Create a character data
     * @param params Parameters
     */
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

    /**
     * Get character's build icon path
     */
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

    /**
     * Get character's build data
     */
    getBuild(): ProfBuild {
        return this.build;
    }

    /**
     * Get character's profession name
     */
    getProfessionName(): string {
        if (this.build) {
            return this.build.profession.name;
        }
        return 'any';
    }

    /**
     * Get character's role
     */
    getRole(): string {
        return this.role;
    }

    /**
     * Get character's build data override
     */
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
