import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule}    from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { BoardsComponent } from './boards/boards.component';
import { ListsComponent } from './lists/lists.component';
import { BoardService } from './services/boards.service';
import { ListsService } from './services/lists.service';
import { StorageService } from  './services/storage.service';
import { UserService } from './services/user.service';
import { ColorService } from './services/color.service';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    BoardsComponent,
    ListsComponent
  ],
  providers: [
    BoardService,
    ListsService,
    StorageService,
    UserService,
    ColorService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
