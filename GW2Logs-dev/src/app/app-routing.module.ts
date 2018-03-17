import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BossesComponent } from './bosses/bosses.component';
import { DbBuildComponent } from './database/db-build/db-build.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'db', component: DbBuildComponent },
  { path: 'main', component: BossesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
