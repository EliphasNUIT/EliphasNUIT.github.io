import { Component, OnInit, Input} from '@angular/core';
import { Character } from '../../helpers/character';

/**
 * Spec detail component
 */
@Component({
  selector: 'app-spec-detail',
  templateUrl: './spec-detail.component.html',
  styleUrls: ['./spec-detail.component.css']
})
export class SpecDetailComponent implements OnInit {
  /**
   * Input character data
   */
  @Input() character: Character;

  /**
   * Create a spec detail component
   */
  constructor() { }

  /**
   * Get css class of the spec
   * @param big Big text or not
   */
  getClasses(big: boolean): any {
    const res: any = {};
    res['charHeader'] = true;
    res['uk-text-center'] = true;
    res['uk-margin-small-bottom'] = true;
    res['uk-text-bold'] = true;
    res['uk-text-small'] = !big;
    res['uk-text-large'] = big;
    res[this.character.getProfessionName()] = true;
    return res;
  }

  /**
   * Todo on init
   */
  ngOnInit() {
  }

}
