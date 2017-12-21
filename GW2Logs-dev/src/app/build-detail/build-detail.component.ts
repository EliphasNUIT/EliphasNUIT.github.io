import { Component, OnInit, Input} from '@angular/core';
import { Character } from '../helpers/character';

@Component({
  selector: 'app-build-detail',
  templateUrl: './build-detail.component.html',
  styleUrls: ['./build-detail.component.css']
})
export class BuildDetailComponent implements OnInit {

  @Input() character: Character;
  @Input() bossName: string;

  constructor() { }

  getClasses(big: boolean): any {
    const res: any = {};
    res['charHeader'] = true;
    res['uk-text-center'] = true;
    res['uk-margin-small-bottom'] = true;
    res['uk-text-bold'] = true;
    res['uk-text-small'] = !big;
    res['uk-text-large'] = big;
    res[this.character.getProfessionName(this.bossName)] = true;
    return res;
  }

  ngOnInit() {
  }

}
