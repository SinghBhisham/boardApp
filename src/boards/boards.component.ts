import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {board} from './board';
import {BoardService} from '../services/boards.service';

@Component({
    moduleId: module.id,
    selector: "boards",
    templateUrl: "../../templates/boards.html",
    styleUrls: ["../../public/css/boards.css"]
    
})

export class BoardsComponent implements OnInit{
    boards: board[];
    constructor(
        private router: Router,
        private boardService: BoardService
    ){};
    ngOnInit(): void{
        this.boardService.getBoards().then(boards=>this.boards=boards);
    }
}