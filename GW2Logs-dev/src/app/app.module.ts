import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { MainComponent } from './main/main.component';
import { BuildDetailComponent } from './build-detail/build-detail.component';
import { LogsDetailComponent } from './logs-detail/logs-detail.component';
import { CompositionDetailComponent } from './composition-detail/composition-detail.component';
import { DisplayBuildComponent } from './display-build/display-build.component';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { DbBuildComponent } from './db-build/db-build.component';
import { DbDisplayComponent } from './db-display/db-display.component';
import { DbSearchPipe } from './db-search.pipe';
import { FormsModule } from '@angular/forms';
import { DbSelectorComponent } from './db-selector/db-selector.component';
import { StratComponent } from './strat/strat.component';
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
import { StratDhuumComponent } from './strat-dhuum/strat-dhuum.component'; // <-- NgModel lives here


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    MainComponent,
    BuildDetailComponent,
    LogsDetailComponent,
    CompositionDetailComponent,
    DisplayBuildComponent,
    DbBuildComponent,
    DbDisplayComponent,
    DbSearchPipe,
    DbSelectorComponent,
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
    StratDhuumComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
