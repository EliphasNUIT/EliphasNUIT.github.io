import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProfBuild } from '../helpers/profBuild';

@Component({
  selector: 'app-db-selector',
  templateUrl: './db-selector.component.html',
  styleUrls: ['./db-selector.component.css']
})
export class DbSelectorComponent implements OnInit {

  @Input() builds: { name: string, id: string }[];
  @Input() profName: string;
  @Output() selectedBuildEmit = new EventEmitter<{ name: string, id: string }>();
  selectedBuild: { name: string, id: string };
  filter = '';

  constructor() { }

  ngOnInit() {
  }

  onSelect(selectedBuild: { name: string, id: string }) {
    this.selectedBuild = selectedBuild;
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
