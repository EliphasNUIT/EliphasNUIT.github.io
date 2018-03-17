import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Boss } from '../helpers/boss';

import { HttpClient } from '@angular/common/http';

/*$.getJSON('assets/logs.json', function (data) {
  if (!data) {
    return;
  }
  console.log('logs json loaded');
  for (let i = 0; i < BOSSES.length; i++) {
    BOSSES[i].buildLogs(data);
  }
  console.log('logs done');
});*/

@Component({
  selector: 'app-bosses',
  templateUrl: './bosses.component.html',
  styleUrls: ['./bosses.component.css']
})
export class BossesComponent implements OnInit {
  bosses: Boss[] = [];
  selectedBoss: Boss;
  selectedDisplay: string;
  logsStyle = { 'background-image': 'url(assets/logs.png)', 'width': '250px', 'heigth' : '100px',
       'background-repeat' : 'no-repeat', 'background-size' : 'cover' };
  compoStyle = { 'background-image': 'url(assets/compo.png)', 'width': '250px', 'heigth' : '100px',
        'background-repeat' : 'no-repeat', 'background-size' : 'cover' };
  stratStyle = { 'background-image': 'url(assets/raid.jpg)', 'width': '250px', 'heigth' : '100px',
        'background-repeat' : 'no-repeat', 'background-size' : 'cover' };

  constructor(private http: HttpClient) {
    const _this = this;
    const localBoss = localStorage.getItem('selectedBoss') ? localStorage.getItem('selectedBoss') : null;
    this.http.get('assets/bosses.json')
      .subscribe(function (data: { bosses: any[] }) {
        console.log('bosses.json loaded');
        _this.bosses = data.bosses.map(bossData => new Boss(bossData));
        console.log('bosses done');
        _this.http.get('assets/logs.json')
          .subscribe(function (logs: any) {
            console.log('logs json loaded');
            for (let i = 0; i < _this.bosses.length; i++) {
              _this.bosses[i].buildLogs(logs);
              if (_this.bosses[i].shortName === localBoss) {
                _this.selectedBoss = _this.bosses[i];
              }
            }
            console.log('logs done');
            if (!localBoss) {
              _this.selectedBoss = _this.bosses[0];
            }
          });
      });
      this.selectedDisplay = localStorage.getItem('selectedDisplay') ? localStorage.getItem('selectedDisplay') : 'compo';
  }

  ngOnInit() {
  }

  onSelect(boss: Boss): void {
    this.selectedBoss = boss;
    localStorage.setItem('selectedBoss', this.selectedBoss.shortName);
  }

  onSelectDisplay(display: string): void {
    this.selectedDisplay = display;
    localStorage.setItem('selectedDisplay', this.selectedDisplay);
  }

}
