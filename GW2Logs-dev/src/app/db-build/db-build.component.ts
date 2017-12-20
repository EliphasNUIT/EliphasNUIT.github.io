import { Component, OnInit } from '@angular/core';
import { buildDatabase, ProfBuild } from '../helpers/profBuild';


class ProfessionHandler {
  name: string;
  builds: { id: string, name: string }[] = [];

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

  add(build: ProfBuild) {
    this.builds.push({ name: build.name, id: build.id });
  }
}

const professions: Map<string, ProfessionHandler> = new Map<string, ProfessionHandler>();
buildDatabase.forEach(function (build, id, map) {
  const profName = build.profession.name;
  if (!professions.has(profName)) {
    professions.set(profName, new ProfessionHandler(profName));
  }
  professions.get(profName).add(build);
});



@Component({
  selector: 'app-db-build',
  templateUrl: './db-build.component.html',
  styleUrls: ['./db-build.component.css']
})
export class DbBuildComponent implements OnInit {

  professions: ProfessionHandler[];

  selectedProfession: ProfessionHandler;

  constructor() {
    this.professions = [];
    const _this = this;
    professions.forEach(function (profHand, name, map) {
      _this.professions.push(profHand);
      if (localStorage.getItem('selectedProfession') && localStorage.getItem('selectedProfession') === profHand.name) {
        _this.selectedProfession = profHand;
      }
    });
    if (!localStorage.getItem('selectedProfession')) {
      this.selectedProfession = this.professions[0];
    }
  }

  ngOnInit() {
  }

  onSelect(professionHandler: ProfessionHandler) {
    this.selectedProfession = professionHandler;
    localStorage.setItem('selectedProfession', professionHandler.name);
  }

}
