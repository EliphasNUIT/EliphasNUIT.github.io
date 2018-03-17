import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SpecDetailComponent } from './spec-detail/spec-detail.component';
import { CompositionDetailComponent } from './composition-detail/composition-detail.component';
import { BossesComponent } from './bosses.component';
import { DisplayBuildModule } from '../display-build/display-build.module';

@NgModule({
  imports: [
    CommonModule,
    DisplayBuildModule
  ],
  declarations: [
    SpecDetailComponent,
    CompositionDetailComponent,
    BossesComponent
  ],
  exports: [
    BossesComponent
  ]
})
export class BossesModule { }
