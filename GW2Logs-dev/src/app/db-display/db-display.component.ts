import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { buildDatabase, ProfBuild } from '../helpers/profBuild';

@Component({
  selector: 'app-db-display',
  templateUrl: './db-display.component.html',
  styleUrls: ['./db-display.component.css']
})
export class DbDisplayComponent implements OnInit, OnChanges {

  @Input() profName: string;
  @Input() builds: { name: string, id: string, overrides: string[] }[];
  selectedBuild: { name: string, id: string, overrides: string[], override: string };

  constructor() { }

  ngOnInit() {
  }

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


  selectBuild(selectedBuild: { name: string, id: string, overrides: string[], override: string }) {
    this.selectedBuild = selectedBuild;
  }

  getBuild(): ProfBuild {
    if (this.selectedBuild) {
      return buildDatabase.get(this.selectedBuild.id);
    }
    return null;
  }

  getOverride(): string {
    if (this.selectedBuild) {
      return this.selectedBuild.override;
    }
    return 'Main';
  }

}
