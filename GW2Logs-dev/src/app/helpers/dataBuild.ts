import { ProfBuild, buildDatabase } from './profBuild';
import { makeAllBuild } from './profBuildHelpers/professions/_full';


export class DataBuild {
    supp11: ProfBuild;
    supp12: ProfBuild;
    bs: ProfBuild;
    dps11: ProfBuild;
    dps12: ProfBuild;
    supp21: ProfBuild;
    supp22: ProfBuild;
    dps21: ProfBuild;
    dps22: ProfBuild;
    dps23: ProfBuild;

    constructor(supp11: string, supp12: string, bs: string, dps11: string, dps12: string,
        supp21: string, supp22: string, dps21: string, dps22: string, dps23: string) {
        this.supp11 = buildDatabase.get(supp11);
        this.supp12 = buildDatabase.get(supp12);
        this.bs = buildDatabase.get(bs);
        this.dps11 = buildDatabase.get(dps11);
        this.dps12 = buildDatabase.get(dps12);

        this.supp21 = buildDatabase.get(supp21);
        this.supp22 = buildDatabase.get(supp22);
        this.dps21 = buildDatabase.get(dps21);
        this.dps22 = buildDatabase.get(dps22);
        this.dps23 = buildDatabase.get(dps23);
    }
}

export class DataRole {
    supp11: string;
    supp12: string;
    bs: string;
    dps11: string;
    dps12: string;
    supp21: string;
    supp22: string;
    dps21: string;
    dps22: string;
    dps23: string;

    constructor(supp11: string, supp12: string, bs: string, dps11: string, dps12: string,
        supp21: string, supp22: string, dps21: string, dps22: string, dps23: string) {
        this.supp11 = supp11;
        this.supp12 = supp12;
        this.bs = bs;
        this.dps11 = dps11;
        this.dps12 = dps12;

        this.supp21 = supp21;
        this.supp22 = supp22;
        this.dps21 = dps21;
        this.dps22 = dps22;
        this.dps23 = dps23;
    }
}

makeAllBuild();

export const BossRoles = {
    // RAID1
    //// WING1
    vg: new DataRole('tank', 'backup zone verte', 'rouge', 'zone verte + rouge', 'zone verte + rouge',
        '', 'zone verte', 'zone verte', '', ''),

    gorse: new DataRole('tank', '', '', '', '',
        '', '', '', '', ''),

    sab: new DataRole('', 'kite', 'cannon 2-4', '', 'cannon 1-3',
        '', '', '', 'backup cannon', ''),

    //// WING2
    sloth: new DataRole('', '', '', 'champignon 3', 'champignon 1',
        '', '', '', 'champignon 2', 'champignon 4'),

    matt: new DataRole('', '', '', '', '',
        '', '', '', '', ''),

    //// WING3
    kc: new DataRole('tank', '', 'orb pusher', '', '',
        '', '', '', '', ''),

    xera: new DataRole('tank', '', '', '', '',
        '', '', '', '', ''),

    // RAID2
    //// WING1
    cairn: new DataRole('', 'kite', '', '', '',
        '', '', '', '', ''),

    mo: new DataRole('', 'protect', '', '', '',
        'claim', 'dispel', '', '', ''),

    sam: new DataRole('', '', '', '', '',
        '', '', '', '', ''),

    dei: new DataRole('tank', 'black kite', '', 'hand kite', '',
        '', '', '', '', '')
};

export const BossBuilds = {
    // RAID1
    //// WING1
    vg: new DataBuild('chrTankMinstrel', 'druidVg', 'bers', 'mirageCondiVG', 'mirageCondiVG',
        'chrDPS', 'druidVg', 'mirageCondiVG', 'weavPower1', 'weavPower1'),

    gorse: new DataBuild('chrTank', 'druidSab', 'bers', 'fbDPS', 'mirageCondiC',
        'chrDPS', 'druidSab', 'fbDPS', 'mirageCondiC', 'soulbeastCondi'),

    sab: new DataBuild('chrDPS', 'druidSab', 'bers', 'fbDPSAxe', 'mirageCondiC',
        'chrDPS', 'druidSab', 'fbDPSAxe', 'mirageCondiC', 'soulbeastCondi'),

    //// WING2
    sloth: new DataBuild('chrDPS', 'druidSloth', 'bers', 'weavPower2SH', 'weavPower2SH',
        'chrDPS', 'druidSloth', 'weavPower2SH', 'weavPower2SH', 'weavPower2SH'),

    matt: new DataBuild('chrDPSMatt', 'druidMatt', 'bers', 'mirageCondiCMatt', 'mirageCondiCMatt',
        'chrDPSMatt', 'druidMatt', 'mirageCondiCMatt', 'mirageCondiCMatt', 'mirageCondiCMatt'),

    //// WING3
    kc: new DataBuild('chrTankKC', 'druidSab', 'bers', 'weavPowerKC', 'weavPowerKC',
        'chrDPSKC', 'druidSab', 'weavPowerKC', 'weavPowerKC', 'weavPowerKC'),

    xera: new DataBuild('chrTank', 'druidXera', 'bers', 'weavPower1', 'weavPower1',
        'chrDPS', 'druidXera', 'weavPower1', 'weavPower1', 'weavPower1'),

    // RAID2
    //// WING1
    cairn: new DataBuild('chrDPSCairn', 'druidCairnKite', 'bers', 'mirageCondiC', 'mirageCondiC',
        'chrDPSCairn', 'druidSpirit', 'mirageCondiC', 'mirageCondiC', 'mirageCondiC'),

    mo: new DataBuild('chrDPS', 'druidSab', 'bers', 'mirageCondiC', 'mirageCondiC',
        'chrDPS', 'druidSab', 'weavPower2SH', 'weavPower2SH', 'soulbeastCondi'),

    sam: new DataBuild('chrDPS', 'druidSam', 'bersCC', 'mirageCondiCCC', 'mirageCondiCCC',
        'chrDPS', 'druidSam', 'mirageCondiCCC', 'mirageCondiCCC', 'soulbeastCondi'),

    dei: new DataBuild('chrTankDei', 'druidKite', 'bers', 'herDeiVentari', 'weavPower2SH',
        'chrDPSDeimos', 'druidSpirit', 'weavPower2SH', 'weavPower2SH', 'weavPower2SH')
};



