import { Component, OnInit, Input } from '@angular/core';

import { Character } from '../helpers/character';
import { Boss } from '../helpers/boss';

import * as $ from 'jquery';

const team1: Character[] = [];

const team2: Character[] = [];

$.getJSON('assets/characters.json', function (data) {
  if (!data) {
    return;
  }
  console.log('characters.json loaded');
  const t1 = data.team1;
  for (let i = 0; i < t1.length; i++) {
    const char = t1[i];
    team1.push(new Character(char.name, char.roles, char.builds, char.armoryLink));
  }
  const t2 = data.team2;
  for (let i = 0; i < t2.length; i++) {
    const char = t2[i];
    team2.push(new Character(char.name, char.roles, char.builds, char.armoryLink));
  }
  console.log('characters done');
});

@Component({
  selector: 'app-composition-detail',
  templateUrl: './composition-detail.component.html',
  styleUrls: ['./composition-detail.component.css']
})
export class CompositionDetailComponent implements OnInit  {
  t1: Character[] = team1;

  t2: Character[] = team2;

  selectedChar: Character = null;

  @Input() boss: Boss;

  constructor() {
  }

  ngOnInit() {
  }

  onSelect(char: Character): void {
    this.selectedChar = char;
  }

}
