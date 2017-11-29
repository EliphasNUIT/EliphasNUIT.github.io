import { ProfBuild, buildDatabase } from './profBuild';

import * as $ from 'jquery';

import { makeAllBuild } from './profBuildHelpers/professions/_full';

makeAllBuild();

export class Character  {
    name: string;
    gw2Armory: string;
    builds: any;
    roles: any;

    constructor(name: string, roles: any, builds: any, gw2Armory: string) {
        this.name = name;
        this.roles = roles;
        this.builds = builds;
        this.gw2Armory = gw2Armory;
    }

    getIcon(bossName: string): string {
        return buildDatabase.get(this.builds[bossName]).getIcon();
    }

    getBuild(bossName: string): ProfBuild {
        return buildDatabase.get(this.builds[bossName]);
    }

    getRole(bossName: string): string {
        return this.roles[bossName];
    }
}
