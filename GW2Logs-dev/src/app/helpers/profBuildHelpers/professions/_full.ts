import { eleBuildMaker } from './elementalist';
import { engiBuildMaker } from './engineer';
import { guardBuildMaker } from './guardian';
import { mesBuildMaker } from './mesmer';
import { necroBuildMaker } from './necromancer';
import { rangerBuildMaker } from './ranger';
import { revBuildMaker } from './revenant';
import { thiefBuildMaker } from './thief';
import { warBuildMaker } from './warrior';



export function makeAllBuild() {
    eleBuildMaker();
    engiBuildMaker();
    guardBuildMaker();
    mesBuildMaker();
    necroBuildMaker();
    rangerBuildMaker();
    revBuildMaker();
    thiefBuildMaker();
    warBuildMaker();
}
