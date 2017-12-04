import { ProfBuild, buildDatabase } from './profBuild';

import * as $ from 'jquery';

import { makeAllBuild } from './profBuildHelpers/professions/_full';

makeAllBuild();

export class Character  {
    name: string;
    gw2Armory: string;
    builds: string[];
    roles: string[];

    constructor(params: {name: string, roles: string[], builds: string[], gw2Armory: string}) {
        this.name = params.name;
        this.roles = params.roles;
        this.builds = params.builds;
        this.gw2Armory = params.gw2Armory;
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
