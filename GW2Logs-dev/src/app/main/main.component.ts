import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BOSSES } from '../helpers/bosses';
import { Boss } from '../helpers/boss';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  bosses = BOSSES;
  selectedBoss: Boss;
  selectedDisplay: string;
  constructor() { }

  ngOnInit() {
  }

  onSelect(boss: Boss): void {
    this.selectedBoss = boss;
    this.selectedDisplay = '';
  }

  onSelectDisplay(display: string): void {
    this.selectedDisplay = display;
  }

}
