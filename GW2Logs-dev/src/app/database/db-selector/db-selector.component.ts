import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { ProfBuild } from '../../helpers/profBuild';

/**
 * Build selector component
 */
@Component({
  selector: 'app-db-selector',
  templateUrl: './db-selector.component.html',
  styleUrls: ['./db-selector.component.css']
})
export class DbSelectorComponent implements OnInit, OnChanges {

  /**
   * Input builds data
   */
  @Input() builds: { name: string, id: string, overrides: string[] }[];
  /**
   * Input profession name
   */
  @Input() profName: string;
  /**
   * Output selected build and override
   */
  @Output() selectedBuildEmit = new EventEmitter<{ name: string, id: string, override: string }>();
  /**
   * Selected build
   */
  private selectedBuild: { name: string, id: string, override: string };
  /**
   * Selected build overrides
   */
  private selectedBuildOverrides: string[];
  /**
   * Selected build
   */
  private selectedOverride: string;
  /**
   * Search bar filter
   */
  private filter = '';

  /**
   * Create a build selector component
   */
  constructor() { }

  /**
   * Todo on init
   */
  ngOnInit() {
    this.selectedOverride = 'Main';
  }

  /**
   * Todo on input change
   */
  ngOnChanges() {
    this.selectedBuild = null;
    this.selectedOverride = 'Main';
  }

  /**
   * On select build event
   * @param selectedBuild Selected build
   */
  onSelect(selectedBuild: { name: string, id: string, overrides: string[] }) {
    if (this.selectedBuild && selectedBuild && this.selectedBuild.id === selectedBuild.id) {
      return;
    }
    this.selectedOverride = 'Main';
    this.selectedBuild = selectedBuild !== null ?
          { name: selectedBuild.name, id: selectedBuild.id, override: this.selectedOverride } : null;
    this.selectedBuildOverrides = selectedBuild !== null ? selectedBuild.overrides : null;
    this.selectedBuildEmit.emit(this.selectedBuild);
  }

  /**
   * On select override event
   * @param selectedOverride Selected override
   */
  onSelectOverride(selectedOverride: string) {
    this.selectedOverride = selectedOverride;
    this.selectedBuild.override = selectedOverride;
    this.selectedBuildEmit.emit(this.selectedBuild);
  }

  /**
   * Get css class associated to the build
   */
  getClass() {
    const res: any = {};
    res[this.profName] = true;
    res['my-prof-build'] = true;
    res['uk-text-center'] = true;
    return res;
  }

}
