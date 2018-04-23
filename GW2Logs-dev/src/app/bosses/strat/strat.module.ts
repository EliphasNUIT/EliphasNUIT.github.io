import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StratComponent } from './strat.component';
import { StratVgComponent } from './strat-vg/strat-vg.component';
import { StratGorseComponent } from './strat-gorse/strat-gorse.component';
import { StratSabComponent } from './strat-sab/strat-sab.component';
import { StratSlothComponent } from './strat-sloth/strat-sloth.component';
import { StratMatComponent } from './strat-mat/strat-mat.component';
import { StratKcComponent } from './strat-kc/strat-kc.component';
import { StratXeraComponent } from './strat-xera/strat-xera.component';
import { StratCairnComponent } from './strat-cairn/strat-cairn.component';
import { StratMoComponent } from './strat-mo/strat-mo.component';
import { StratSamComponent } from './strat-sam/strat-sam.component';
import { StratDeiComponent } from './strat-dei/strat-dei.component';
import { StratSsComponent } from './strat-ss/strat-ss.component';
import { StratDhuumComponent } from './strat-dhuum/strat-dhuum.component';
import { StratRiverComponent } from './strat-river/strat-river.component';
import { StratKingComponent } from './strat-king/strat-king.component';
import { StratEaterComponent } from './strat-eater/strat-eater.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    StratComponent
  ],
  declarations: [
    StratComponent,
    StratVgComponent,
    StratGorseComponent,
    StratSabComponent,
    StratSlothComponent,
    StratMatComponent,
    StratKcComponent,
    StratXeraComponent,
    StratCairnComponent,
    StratMoComponent,
    StratSamComponent,
    StratDeiComponent,
    StratSsComponent,
    StratDhuumComponent,
    StratRiverComponent,
    StratKingComponent,
    StratEaterComponent],
  bootstrap: []
})
export class StratModule { }
