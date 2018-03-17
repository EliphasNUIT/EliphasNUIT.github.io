import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { ProfBuild } from '../../helpers/profBuild';

@Component({
  selector: 'app-db-selector',
  templateUrl: './db-selector.component.html',
  styleUrls: ['./db-selector.component.css']
})
export class DbSelectorComponent implements OnInit, OnChanges {

  @Input() builds: { name: string, id: string, overrides: string[] }[];
  @Input() profName: string;
  @Output() selectedBuildEmit = new EventEmitter<{ name: string, id: string, override: string }>();
  selectedBuild: { name: string, id: string, overrides: string[], override: string };
  selectedOverride: string;
  filter = '';

  constructor() { }

  ngOnInit() {
    this.selectedOverride = 'Main';
  }

  ngOnChanges() {
    this.selectedBuild = null;
    this.selectedOverride = 'Main';
  }

  onSelect(selectedBuild: { name: string, id: string, overrides: string[] }) {
    if (this.selectedBuild && selectedBuild && this.selectedBuild.id === selectedBuild.id) {
      return;
    }
    this.selectedOverride = 'Main';
    this.selectedBuild = selectedBuild !== null ?
          { name: selectedBuild.name, id: selectedBuild.id, overrides: selectedBuild.overrides, override: this.selectedOverride } : null;
    this.selectedBuildEmit.emit(this.selectedBuild);
  }

  onSelectOverride(selectedOverride: string) {
    this.selectedOverride = selectedOverride;
    this.selectedBuild.override = selectedOverride;
    this.selectedBuildEmit.emit(this.selectedBuild);
  }

  getClass() {
    const res: any = {};
    res[this.profName] = true;
    res['my-prof-build'] = true;
    res['uk-text-center'] = true;
    return res;
  }

}
