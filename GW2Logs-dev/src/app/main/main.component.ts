import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Boss } from '../helpers/boss';
import * as $ from 'jquery';

const BOSSES: Boss[] = [
  new Boss('Forsaken Thicket', 'Spirit Vale',
    { 'background-image': 'url(assets/bosses/vg.png)' }, 'vg', 'Vale Guardian'),
  new Boss('Forsaken Thicket', 'Spirit Vale',
    { 'background-image': 'url(assets/bosses/gorse.png)' }, 'gorse', 'Gorseval the Multifarious'),
  new Boss('Forsaken Thicket', 'Spirit Vale',
    { 'background-image': 'url(assets/bosses/sab.png)' }, 'sab', 'Sabetha the Saboteur'),
  new Boss('Forsaken Thicket', 'Salvation Pass',
    { 'background-image': 'url(assets/bosses/sloth.png)' }, 'sloth', 'Slothasor'),
  new Boss('Forsaken Thicket', 'Salvation Pass',
    { 'background-image': 'url(assets/bosses/matt.png)' }, 'matt', 'Matthias Gabrel'),
  new Boss('Forsaken Thicket', 'Fortress of the Faithful',
    { 'background-image': 'url(assets/bosses/kc.png)' }, 'kc', 'Keep Construct'),
  new Boss('Forsaken Thicket', 'Fortress of the Faithful',
    { 'background-image': 'url(assets/bosses/xera.png)' }, 'xera', 'Xera'),
  new Boss('Bastion of the Penitent', 'Bastion of the Penitent',
    { 'background-image': 'url(assets/bosses/cairn.png)' }, 'cairn', 'Cairn the Indomitable'),
  new Boss('Bastion of the Penitent', 'Bastion of the Penitent',
    { 'background-image': 'url(assets/bosses/mo.png)' }, 'mo', 'Mursaat Overseer'),
  new Boss('Bastion of the Penitent', 'Bastion of the Penitent',
    { 'background-image': 'url(assets/bosses/sam.png)' }, 'sam', 'Samarog'),
  new Boss('Bastion of the Penitent', 'Bastion of the Penitent',
    { 'background-image': 'url(assets/bosses/dei.png)' }, 'dei', 'Deimos')
];

$.getJSON('logs/logs.json', function (data) {
  if (!data) {
    return;
  }
  console.log('logs json loaded');
  for (let i = 0; i < BOSSES.length; i++) {
    BOSSES[i].buildLogs(data);
  }
  console.log('logs done');
});

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  bosses = BOSSES;
  selectedBoss: Boss;
  selectedDisplay: string;

  constructor() {
  }

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
