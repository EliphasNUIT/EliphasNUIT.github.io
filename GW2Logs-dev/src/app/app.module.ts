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
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


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
    DbSearchPipe
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
