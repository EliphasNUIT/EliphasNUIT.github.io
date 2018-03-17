import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { MainComponent } from './main/main.component';
import { BuildDetailComponent } from './build-detail/build-detail.component';
import { LogsDetailComponent } from './logs-detail/logs-detail.component';
import { CompositionDetailComponent } from './composition-detail/composition-detail.component';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { StratModule } from './strat/strat.module';
import { DatabaseModule } from './database/database.module';
import { DisplayBuildModule } from './display-build/display-build.module';


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    MainComponent,
    BuildDetailComponent,
    LogsDetailComponent,
    CompositionDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StratModule,
    DatabaseModule,
    DisplayBuildModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
