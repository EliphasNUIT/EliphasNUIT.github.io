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


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    MainComponent,
    BuildDetailComponent,
    LogsDetailComponent,
    CompositionDetailComponent,
    DisplayBuildComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
