import { DataBuild, DataRole } from './dataBuild';
import { ProfBuild } from './profBuild';

export class Character  {
    name: string;
    role: string;
    gw2Armory: string;
    builds: any[] = [];

    constructor(name: string, role: string, gw2Armory: string) {
        this.name = name;
        this.role = role;
        this.gw2Armory = gw2Armory;
    }

    getIcon(dataBuild: DataBuild): string {
        return dataBuild[this.role].getIcon();
    }

    getBuild(dataBuild: DataBuild): ProfBuild {
        return dataBuild[this.role];
    }

    getRole(dataRole: DataRole): string {
        return dataRole[this.role];
    }
}
