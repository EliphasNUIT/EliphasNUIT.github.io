export class Boss {
    raid: string;
    wing: string;
    name: string;
    displayName: string;
    shortName: string;
    style: object;
    logs: { id: string, date: string, url: string }[] = [];

    constructor(raid: string, wing: string, style: object, shortName: string,
            displayName: string) {
        this.raid = raid;
        this.wing = wing;
        this.style = style;
        this.shortName = shortName;
        this.displayName = displayName;
    }

    buildLogs(logsSrc: any[]) {
        this.logs = logsSrc[this.shortName].splice(0);
    }
}
