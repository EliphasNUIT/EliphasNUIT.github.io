import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LogsDetailComponent } from './logs-detail/logs-detail.component';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { DatabaseModule } from './database/database.module';
import { BossesModule } from './bosses/bosses.module';


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    LogsDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    DatabaseModule,
    BossesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
