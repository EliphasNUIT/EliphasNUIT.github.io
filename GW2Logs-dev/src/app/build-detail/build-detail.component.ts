import { Component, OnInit, Input} from '@angular/core';
import { Character } from '../helpers/character';
import { DataBuild, DataRole } from '../helpers/dataBuild';

@Component({
  selector: 'app-build-detail',
  templateUrl: './build-detail.component.html',
  styleUrls: ['./build-detail.component.css']
})
export class BuildDetailComponent implements OnInit {

  @Input() character: Character;
  @Input() bossData: DataBuild;
  @Input() bossRole: DataRole;

  constructor() { }

  ngOnInit() {
  }

}
