import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Character } from '../../helpers/character';
import { Boss } from '../../helpers/boss';

/**
 * Composition detail component
 */
@Component({
  selector: 'app-composition-detail',
  templateUrl: './composition-detail.component.html',
  styleUrls: ['./composition-detail.component.css']
})
export class CompositionDetailComponent implements OnInit, OnChanges {
  /**
   * Selectect character
   */
  selectedChar: Character = null;

  /**
   * Input boss data
   */
  @Input() boss: Boss;

  /**
   * Create a composition detail component
   */
  constructor() {
  }

  /**
   * Todo on init
   */
  ngOnInit() {
  }

  /**
   * Get the css class for given character
   * @param char Character to get the css class for
   */
  getClasses(char: Character): any {
    const res: any = {};
    res.selectable = true;
    res[char.getProfessionName()] = true;
    return res;
  }

  /**
   * Todo on input change
   */
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

  /**
   * On select character event
   * @param char Selected character
   */
  onSelect(char: Character): void {
    this.selectedChar = char;
  }

}
