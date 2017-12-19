import { Component, OnInit } from '@angular/core';
import { buildDatabase } from '../helpers/profBuild';


class ProfessionHandler {
  name: string;
  builds: string[] = [];

  constructor(name: string) {
    this.name = name;
  }

  getStyle() {
    return {
      'background-image': 'url(assets/dbBuilds/' + this.name + '.png)'
    };
  }
  getClass() {
    const res: any = {};
    res[this.name] = true;
    return res;
  }
}


@Component({
  selector: 'app-db-build',
  templateUrl: './db-build.component.html',
  styleUrls: ['./db-build.component.css']
})
export class DbBuildComponent implements OnInit {

  professions: ProfessionHandler[];

  constructor() {
    this.professions = [];
    // light
    this.professions.push(new ProfessionHandler('Mesmer'));
    this.professions.push(new ProfessionHandler('Necromancer'));
    this.professions.push(new ProfessionHandler('Elementalist'));
    // medium
    this.professions.push(new ProfessionHandler('Ranger'));
    this.professions.push(new ProfessionHandler('Engineer'));
    this.professions.push(new ProfessionHandler('Thief'));
    // heavy
    this.professions.push(new ProfessionHandler('Warrior'));
    this.professions.push(new ProfessionHandler('Revenant'));
    this.professions.push(new ProfessionHandler('Guardian'));
    buildDatabase.forEach(function (build, id, map) {

    });
  }

  ngOnInit() {
  }

}
