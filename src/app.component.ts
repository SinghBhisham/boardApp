import { Component, OnInit } from '@angular/core';
import { board } from './schemas/board';

import { BoardService } from './services/boards.service';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: "../templates/app.html",
  styleUrls: ["../public/css/app.css"]
})  
export class AppComponent implements OnInit  {
  boardResults: board [];
  constructor(
    private boardService: BoardService
  ){}
  ngOnInit(): void{
    console.log("fsadadsfasdf00");
      this.boardService.searchBoards("").then(boardResults => this.boardResults=boardResults  );
  }
  public search(e: any):void{
    console.log(e.target.value);
    this.boardService.searchBoards(e.target.value).then(boardResults => this.boardResults=boardResults  );
  }
}
