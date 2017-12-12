import { ProfBuild, buildDatabase } from './profBuild';

import * as $ from 'jquery';

import { makeAllBuild } from './profBuildHelpers/professions/_full';

makeAllBuild();

export class Character  {
    name: string;
    gw2Armory: string;
    builds: any;
    roles: any;
    teamID: any;
    slotID: any;

    constructor(params: {name: string, roles: any, builds: any, gw2Armory: string, teamID: any, slotID: any}) {
        this.name = params.name;
        this.roles = params.roles;
        this.builds = params.builds;
        this.gw2Armory = params.gw2Armory;
        this.teamID = params.teamID;
        this.slotID = params.slotID;
    }

    getIcon(bossName: string): string {
        if  (!buildDatabase.has(this.builds[bossName])) {
            console.warn('Warning: the build ' + this.builds[bossName] + ' does not exist.');
            return 'assets/profIcons/any.png';
        }
        return buildDatabase.get(this.builds[bossName]).getIcon();
    }

    getBuild(bossName: string): ProfBuild {
        if  (!buildDatabase.has(this.builds[bossName])) {
            console.warn('Warning: the build ' + this.builds[bossName] + ' does not exist.');
            return null;
        }
        return buildDatabase.get(this.builds[bossName]);
    }

    getRole(bossName: string): string {
        return this.roles[bossName];
    }
}
