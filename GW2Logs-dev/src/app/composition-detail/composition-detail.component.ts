import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Character } from '../helpers/character';
import { Boss } from '../helpers/boss';
import { HttpClient } from '@angular/common/http';

let team: Character[];

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
  t3: Character[] = [];
  selectedChar: Character = null;

  @Input() boss: Boss;

  constructor(private http: HttpClient) {
    const _this = this;
    this.http.get('assets/characters.json')
      .subscribe(function (data: { team: any[] }) {
        console.log('characters.json loaded');
        team = data.team.map(charData => new Character(charData));
        _this.buildTeams();
        console.log('characters done');
      });
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


  buildTeams() {
    if (!this.boss || !team) {
      return;
    }
    this.t1 = [];
    this.t2 = [];
    this.t3 = [];
    const bossID = this.boss.shortName;
    for (let i = 0; i < team.length; i++) {
      const chara = team[i];
      const slotID = chara.slotID[bossID];
      switch (chara.teamID[bossID]) {
        case 0:
          this.t1[slotID] = chara;
          break;
        case 1:
          this.t2[slotID] = chara;
          break;
        case 2:
          this.t3[slotID] = chara;
          break;
        default:
          console.warn('invalid number of team of character ' + chara.name);
          break;
      }
    }
  }

  ngOnInit() {
  }

  getClasses(char: Character): any {
    const res: any = {};
    res.selectable = true;
    res[char.getBuild(this.boss.shortName).profession.name] = true;
    return res;
  }

  ngOnChanges() {
    this.selectedChar = null;
    this.buildTeams();
  }

  onSelect(char: Character): void {
    this.selectedChar = char;
  }

}
