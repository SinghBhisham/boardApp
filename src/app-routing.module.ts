import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoardsComponent }      from './boards/boards.component';

const routes: Routes = [
  { path: '', redirectTo: '/boards', pathMatch: 'full' },
  { path: 'boards',  component: BoardsComponent }/*,
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent }*/
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
