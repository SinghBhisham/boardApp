import { Component, OnInit } from '@angular/core';
import { board } from './schemas/board';
import { Router } from '@angular/router';


import { BoardService } from './services/boards.service';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: "../templates/app.html",
  styleUrls: ["../public/css/app.css"]
})
export class AppComponent implements OnInit  {
  boardResults: board [];
  searchInFocus: boolean;
  constructor(
    private router: Router,
    private boardService: BoardService
  ){}
  ngOnInit(): void{
      this.boardService.searchBoards("").then(boardResults => this.boardResults=boardResults  );
  }
  public search(e: any):void{
    this.boardService.searchBoards(e.target.value).then(boardResults => this.boardResults=boardResults  );
  }
  public onClickBoard(b: board, e:any): void {
    e.preventDefault();
    this.router.navigate(['/boards', b.id]);
    this.searchInFocus=false;
  }
  public onSearchFocus(e:any): void {
    this.searchInFocus=true;
  }
  public onSearchBlur(e:any): void {
    if(e.relatedTarget == null){
      this.searchInFocus = false;
    }
  }
}
