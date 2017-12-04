import { Component, OnInit, Input } from '@angular/core';

import { Character } from '../helpers/character';
import { Boss } from '../helpers/boss';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-composition-detail',
  templateUrl: './composition-detail.component.html',
  styleUrls: ['./composition-detail.component.css']
})
export class CompositionDetailComponent implements OnInit {
  t1: Character[] = [];

  t2: Character[] = [];

  selectedChar: Character = null;

  @Input() boss: Boss;

  constructor(private http: HttpClient) {
    const _this = this;
    this.http.get('assets/characters.json')
      .subscribe(function (data: {team1: any[], team2: any[]}) {
        console.log('characters.json loaded');
        const buildTeam = teamData => teamData.map(charData => new Character(charData));
        [_this.t1, _this.t2] = [data.team1, data.team2].map(buildTeam);
        console.log('characters done');
      });
  }

  ngOnInit() {
  }

  onSelect(char: Character): void {
    this.selectedChar = char;
  }

}
