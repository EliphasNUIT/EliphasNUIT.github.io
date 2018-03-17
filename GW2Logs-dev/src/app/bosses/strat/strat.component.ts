import { Component, OnInit, Input } from '@angular/core';
import { Boss } from '../../helpers/boss';

@Component({
  selector: 'app-strat',
  templateUrl: './strat.component.html',
  styleUrls: ['./strat.component.css']
})
export class StratComponent implements OnInit {

  @Input() boss: Boss;

  constructor() { }

  ngOnInit() {
  }

}
