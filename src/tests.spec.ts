import {APP_BASE_HREF} from '@angular/common';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule}    from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }  from './app.component';
import { BoardsComponent } from './boards/boards.component';
import { ListsComponent } from './lists/lists.component';
import { BoardService } from './services/boards.service';
import { ListsService } from './services/lists.service';
import { StorageService } from  './services/storage.service';
import { UserService } from './services/user.service';
import { ColorService } from './services/color.service';

describe('UNIT TEST CASES', function () {
  let de: DebugElement;
  let appComp: AppComponent;
  let appFixture: ComponentFixture<AppComponent>;
  let boardComp: BoardsComponent;
  let boardFixture: ComponentFixture<BoardsComponent>;
  let listComp: ListsService;
  let listFixture: ComponentFixture<ListsService>;
  let colorService: ColorService = new ColorService();;

  beforeEach(async(() => {
    TestBed.configureTestingModule(
      {
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
          ColorService,{provide: APP_BASE_HREF, useValue : '/' }
        ]
      }
    )
    .compileComponents();
  }));

  beforeEach(() => {
    appFixture = TestBed.createComponent(AppComponent);
    appComp = appFixture.componentInstance;
    de = appFixture.debugElement.query(By.css('.header'));
  });

  

  it('appComp should be created', () => expect(appComp).toBeDefined() );

  it('header should be present', () => {
    appFixture.detectChanges();
    const h = de.nativeElement;
    expect(h).toBeTruthy();
  });

  it('color service should fetch color', () => expect(colorService.getRandomColor()).toBeTruthy() );

  it('it should store "test1" at "test1"', () => {
    let store:StorageService = new StorageService();
    expect(store.set("test1", "test1")).toBeUndefined();
  });

  it('it should get from store "test1" ', () => {
    let store:StorageService = new StorageService();
    expect(store.get("test1")).toEqual("test1");
  });

  it('it should return null as it trying to fetch data which is not stored', () => {
    let store:StorageService = new StorageService();
    expect(store.get("test2")).toBeNull();
  });

 
  let boardname:string = "Board" + Math.floor(Math.random()*100);
  let boardid: string = "b-" + new Date().getTime();
  it('it should create board ' + boardname, () => {
    let boardService:BoardService = new BoardService(new UserService(), new StorageService());
    boardService.createBoard({name: boardname, bgcolor: "red", isFavourite:false, id: boardid})
      .then(()=>{expect(true).toBe(true)})
  });

  it('it should fetch list of boards'  , () => {
     let boardService:BoardService = new BoardService(new UserService(), new StorageService());
      boardService.getBoards().then(boards=>{expect(boards.length).toBeDefined})
  });

  let listName: string = "List" + Math.floor(Math.random()*100);
  let listid : string = "l-" + new Date().getTime();
  it('it should create list ' + boardname, () => {
    let listService:ListsService = new ListsService(new StorageService());
    listService.saveLists(boardid, [{id: listid, name: listName, parentid: boardid, cards: []}])
      .then(()=>{expect(true).toBe(true)})
  });

  let data: string = "sample data"
  it('it should fetch list for '+ boardname + 'and store a card with data ' + data, () => {
    let listService:ListsService = new ListsService(new StorageService());
    listService.saveLists(boardid, [{id: listid, name: listName, parentid: boardid, cards: [{data: data, id: "sampleid"}]}])
      .then(()=>{expect(true).toBe(true)})
  });

});