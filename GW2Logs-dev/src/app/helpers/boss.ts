import { Character } from './character';

/**
 * Boss data
 */
export class Boss {
    /**
     * Raid name
     */
    raid: string;
    /**
     * Wing name
     */
    wing: string;
    /**
     * Boss name
     */
    name: string;
    /**
     * Boss name to display html pages
     */
    displayName: string;
    /**
     * Boss id
     */
    shortName: string;
    /**
     * Boss name to display on buttons
     */
    buttonName: string;
    /**
     * Boss style
     */
    style: any;
    /**
     * Composition detail
     */
    composition: { t1: Character[], t2: Character[], t3: Character[] };
    /**
     * Logs - DEPRECATED
     */
    logs: { id: string, date: string, url: string }[] = [];

    /**
     * Create a Boss data
     * @param params Parameters
     */
    constructor(params: {
        raid: string, wing: string, style: any, shortName: string,
        displayName: string, buttonName: string, composition: { t1: any[], t2: any[], t3: any[] }
    }) {
        this.raid = params.raid;
        this.wing = params.wing;
        this.style = params.style;
        this.buttonName = params.buttonName;
        this.shortName = params.shortName;
        this.displayName = params.displayName;
        this.buildComposition(params.composition);
    }

    /**
     * Build Boss logs data
     * @param logsSrc Logs data
     */
    buildLogs(logsSrc: any[]) {
        if (logsSrc[this.shortName]) {
            this.logs = logsSrc[this.shortName].splice(0);
        }
    }

    /**
     * Build boss composition data
     * @param compoSrc Composition data
     */
    buildComposition(compoSrc: { t1: any[], t2: any[], t3: any[] }) {
        this.composition = {
            t1: [],
            t2: [],
            t3: []
        };
        if (compoSrc.t1) {
            this.composition.t1 = compoSrc.t1.map(charData => new Character(charData));
        }

        if (compoSrc.t2) {
            this.composition.t2 = compoSrc.t2.map(charData => new Character(charData));
        }

        if (compoSrc.t3) {
            this.composition.t3 = compoSrc.t3.map(charData => new Character(charData));
        }
    }
}
