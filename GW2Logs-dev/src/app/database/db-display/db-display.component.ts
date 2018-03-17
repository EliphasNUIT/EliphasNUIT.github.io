import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { buildDatabase, ProfBuild } from '../../helpers/profBuild';

/**
 * Database display component
 */
@Component({
  selector: 'app-db-display',
  templateUrl: './db-display.component.html',
  styleUrls: ['./db-display.component.css']
})
export class DbDisplayComponent implements OnInit, OnChanges {

  /**
   * Input profession name
   */
  @Input() profName: string;
  /**
   * Input profession builds
   */
  @Input() builds: { name: string, id: string, overrides: string[] }[];
  /**
   * Selected build
   */
  private selectedBuild: { name: string, id: string, overrides: string[], override: string };

  /**
   * Create a database display component
   */
  constructor() { }

  /**
   * Todo on init
   */
  ngOnInit() {
  }

  /**
   * Todo on input change
   */
  ngOnChanges() {
    this.selectedBuild = null;
    for (const key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        if (key.includes('GW2A') && key.includes('DATA')) {
          localStorage.removeItem(key);
        }
      }
    }
  }

  /**
   * On select build event
   * @param selectedBuild selected build
   */
  selectBuild(selectedBuild: { name: string, id: string, overrides: string[], override: string }) {
    this.selectedBuild = selectedBuild;
  }

  /**
   * Get build data associated to the selected build
   */
  getBuild(): ProfBuild {
    if (this.selectedBuild) {
      return buildDatabase.get(this.selectedBuild.id);
    }
    return null;
  }

  /**
   * Get override of the selected build
   */
  getOverride(): string {
    if (this.selectedBuild) {
      return this.selectedBuild.override;
    }
    return 'Main';
  }

}
