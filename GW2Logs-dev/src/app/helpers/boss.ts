import { Logs } from './logs';

import * as $ from 'jquery';

export class Boss {
    raid: string;
    wing: string;
    name: string;
    displayName: string;
    shortName: string;
    style: object;
    logs: Logs[] = [];

    constructor(raid: string, wing: string, name: string, style: object, shortName: string, displayName: string) {
        this.raid = raid;
        this.wing = wing;
        this.name = name;
        this.style = style;
        this.shortName = shortName;
        this.displayName = displayName;
        this.buildLogs();
    }

    buildLogs(): void {
        let json;
        const _this = this;
        $.getJSON('assets/logs/logs.json', function (data) {
            json = data;
            console.log('json loaded');
            const bossLogs = json[_this.shortName];
            if (!bossLogs) {
                return;
            }
            for (let i = 0; i < bossLogs.length; i++) {
                const log = bossLogs[i];
                _this.logs.push(new Logs(log.id, log.date, log.url));
            }
        });
    }


}
