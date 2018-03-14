import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Character } from '../helpers/character';
import { Boss } from '../helpers/boss';

@Component({
  selector: 'app-composition-detail',
  templateUrl: './composition-detail.component.html',
  styleUrls: ['./composition-detail.component.css']
})
export class CompositionDetailComponent implements OnInit, OnChanges {

  selectedChar: Character = null;

  @Input() boss: Boss;

  constructort() {
  }

  ngOnInit() {
  }

  getClasses(char: Character): any {
    const res: any = {};
    res.selectable = true;
    res[char.getProfessionName()] = true;
    return res;
  }

  ngOnChanges() {
    this.selectedChar = null;
    for (const key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        if (key.includes('GW2A') && key.includes('DATA')) {
          localStorage.removeItem(key);
        }
      }
    }
  }

  onSelect(char: Character): void {
    this.selectedChar = char;
  }

}
