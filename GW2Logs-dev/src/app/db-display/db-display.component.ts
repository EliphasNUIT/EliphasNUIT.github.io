import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { buildDatabase, ProfBuild } from '../helpers/profBuild';

@Component({
  selector: 'app-db-display',
  templateUrl: './db-display.component.html',
  styleUrls: ['./db-display.component.css']
})
export class DbDisplayComponent implements OnInit, OnChanges {

  @Input() profName: string;
  @Input() builds: { name: string, id: string }[];
  selectedBuild: { name: string, id: string };

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.selectedBuild = null;
  }

  onSelect(selectedBuild: { name: string, id: string }) {
    this.selectedBuild = selectedBuild;
  }

  getBuild(): ProfBuild {
    if (this.selectedBuild) {
      return buildDatabase.get(this.selectedBuild.id);
    }
    return null;
  }

  getClass() {
    const res: any = {};
    res[this.profName] = true;
    res['my-prof-build'] = true;
    res['uk-text-center'] = true;
    return res;
  }

}
