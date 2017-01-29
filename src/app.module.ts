import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { BoardsComponent } from './boards/boards.component';
import { BoardService } from './services/boards.service';

import { AppRoutingModule }     from './app-routing.module';


@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  declarations: [ 
    AppComponent,
    BoardsComponent
  ],
  providers: [
    BoardService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
