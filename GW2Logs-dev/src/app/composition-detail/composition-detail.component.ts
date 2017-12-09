import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Character } from '../helpers/character';
import { Boss } from '../helpers/boss';
import { HttpClient } from '@angular/common/http';

let team1: Character[], team2: Character[];

/*(<any>window).myBuildCache = {};
let needDLCache = true;

(<any>window).downloadMyCache = function () {
  const str = JSON.stringify((<any>window).myBuildCache);
  const b = new Blob([str], { type: 'application/json' });
  const url = URL.createObjectURL(b);
  const a = document.createElement('a');
  a.download = 'cache.js';
  a.href = url;
  a.textContent = 'Download ' + a.download;
  document.querySelector('body').appendChild(a);
};

(<any>window).emptyMyCache = function () {
  console.warn('cache empty');
  (<any>window).myBuildCache = {};
};*/

@Component({
  selector: 'app-composition-detail',
  templateUrl: './composition-detail.component.html',
  styleUrls: ['./composition-detail.component.css']
})
export class CompositionDetailComponent implements OnInit, OnChanges {
  t1: Character[] = [];

  t2: Character[] = [];

  selectedChar: Character = null;

  @Input() boss: Boss;

  constructor(private http: HttpClient) {
    if (team1 && team2) {
      this.t1 = team1;
      this.t2 = team2;
    } else {
      const _this = this;
      this.http.get('assets/characters.json')
        .subscribe(function (data: { team1: any[], team2: any[] }) {
          console.log('characters.json loaded');
          const buildTeam = teamData => teamData.map(charData => new Character(charData));
          [team1, team2] = [data.team1, data.team2].map(buildTeam);
          console.log('characters done');
          _this.t1 = team1;
          _this.t2 = team2;
        });
    }
    /*if (needDLCache) {
      const _this = this;
      this.http.get('assets/cache.json')
        .subscribe(function (data: any) {
          console.log('cache loaded');
          (<any>window).myBuildCache = data;
          console.log('cache done');
        });
      needDLCache = false;
    }*/
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.selectedChar = null;
  }

  onSelect(char: Character): void {
    this.selectedChar = char;
  }

}
