import { Component, OnInit, Input } from '@angular/core';
import { Boss } from '../../helpers/boss';

/**
 * Strat selector component
 */
@Component({
  selector: 'app-strat',
  templateUrl: './strat.component.html',
  styleUrls: ['./strat.component.css']
})
export class StratComponent implements OnInit {

  /**
   * Input boss data
   */
  @Input() boss: Boss;

  /**
   * Create a strat selector component
   */
  constructor() { }

  /**
   * Todo on init
   */
  ngOnInit() {
  }

}
