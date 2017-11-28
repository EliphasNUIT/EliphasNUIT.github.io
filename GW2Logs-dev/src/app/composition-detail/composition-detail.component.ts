import { Component, OnInit, Input } from '@angular/core';

import {team1, team2} from '../helpers/characters';
import { Character } from '../helpers/character';
import { Boss } from '../helpers/boss';
import { DataBuild, BossBuilds, BossRoles, DataRole } from '../helpers/dataBuild';

@Component({
  selector: 'app-composition-detail',
  templateUrl: './composition-detail.component.html',
  styleUrls: ['./composition-detail.component.css']
})
export class CompositionDetailComponent implements OnInit {
  t1: Character[] = team1;

  t2: Character[] = team2;

  selectedChar: Character;

  @Input() boss: Boss;

  constructor() { }

  ngOnInit() {
  }

  onSelect(char: Character): void {
    this.selectedChar = char;
  }

  getBossBuildData(): DataBuild {
    return BossBuilds[this.boss.shortName];
  }

  getBossRoleData(): DataRole {
    return BossRoles[this.boss.shortName];
  }

}
