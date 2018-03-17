import { Component, OnInit } from '@angular/core';
import { buildDatabase, ProfBuild } from '../../helpers/profBuild';

/**
 * Profession handler
 */
class ProfessionHandler {
  /**
   * Name of the profession
   */
  name: string;
  /**
   * Array of builds with minimum data, id, name and overrides
   */
  builds: { id: string, name: string, overrides: string[] }[] = [];

  /**
   * Create a profession handler
   * @param name Name of the profession
   */
  constructor(name: string) {
    this.name = name;
  }

  /**
   * Get the background image of the handler
   */
  getStyle() {
    return {
      'background-image': 'url(assets/dbBuilds/' + this.name + '.png)'
    };
  }
  /**
   * The css class of the profession handler
   */
  getClass() {
    const res: any = {};
    res[this.name] = true;
    return res;
  }

  /**
   * Add a build to the handler
   * @param build The build to add
   */
  add(build: ProfBuild) {
    this.builds.push({ name: build.name, id: build.id, overrides: build.getOverrides() });
  }

  /**
   * Validate the handler and sorts the builds by alphabetical order
   */
  validate() {
    this.builds.sort((a, b) => a.name < b.name ? -1 : 1);
  }
}

/**
 * Build database component
 */
@Component({
  selector: 'app-db-build',
  templateUrl: './db-build.component.html',
  styleUrls: ['./db-build.component.css']
})
export class DbBuildComponent implements OnInit {

  /**
   * Profession handlers
   */
  professions: ProfessionHandler[];

  /**
   * Selected profession handler
   */
  selectedProfession: ProfessionHandler;

  /**
   * Create a build database component
   */
  constructor() {
    this.professions = [];
    const _this = this;
    const myprofessions: Map<string, ProfessionHandler> = new Map<string, ProfessionHandler>();
    buildDatabase.forEach(function (build, id, map) {
      const profName = build.profession.name;
      if (!myprofessions.has(profName)) {
        myprofessions.set(profName, new ProfessionHandler(profName));
      }
      myprofessions.get(profName).add(build);
    });
    myprofessions.forEach(function (profHand, name, map) {
      profHand.validate();
      _this.professions.push(profHand);
      if (localStorage.getItem('selectedProfession') && localStorage.getItem('selectedProfession') === profHand.name) {
        _this.selectedProfession = profHand;
      }
    });
    if (!localStorage.getItem('selectedProfession')) {
      this.selectedProfession = this.professions[0];
    }
  }

  /**
   * Todo on init
   */
  ngOnInit() {
  }

  /**
   * On select profession handler event
   * @param professionHandler Selected profession handler
   */
  onSelect(professionHandler: ProfessionHandler) {
    this.selectedProfession = professionHandler;
    localStorage.setItem('selectedProfession', professionHandler.name);
  }

}
