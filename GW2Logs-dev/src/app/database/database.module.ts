import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DbSelectorComponent } from './db-selector/db-selector.component';
import { DbBuildComponent } from './db-build/db-build.component';
import { DbDisplayComponent } from './db-display/db-display.component';
import { DbSearchPipe } from './db-search.pipe';
import { DisplayBuildModule } from '../display-build/display-build.module';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

@NgModule({
  imports: [
    CommonModule,
    DisplayBuildModule,
    FormsModule
  ],
  exports: [
    DbBuildComponent
  ],
  declarations: [
    DbBuildComponent,
    DbDisplayComponent,
    DbSearchPipe,
    DbSelectorComponent
  ]
})
export class DatabaseModule { }
