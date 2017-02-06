import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoardsComponent }      from './boards/boards.component';
import { ListsComponent } from './lists/lists.component';

const routes: Routes = [
  { path: '', redirectTo: '/boards', pathMatch: 'full' },
  { path: 'boards',  component: BoardsComponent },
  { path: 'boards/:id', component: ListsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
