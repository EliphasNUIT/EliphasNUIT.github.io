import { Component, OnInit, Input} from '@angular/core';
import { Character } from '../../helpers/character';

@Component({
  selector: 'app-spec-detail',
  templateUrl: './spec-detail.component.html',
  styleUrls: ['./spec-detail.component.css']
})
export class SpecDetailComponent implements OnInit {

  @Input() character: Character;

  constructor() { }

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

  ngOnInit() {
  }

}
