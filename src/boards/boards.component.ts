import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


import { board } from '../schemas/board';
import { BoardService } from '../services/boards.service';
import { ColorService } from '../services/color.service';

declare var $: any;
@Component({
    moduleId: module.id,
    selector: "boards",
    templateUrl: "../../templates/boards.html",
    styleUrls: ["../../public/css/boards.css"]

})

export class BoardsComponent implements OnInit{
    boards: board[];
    public boardForm = this.fb.group({
      name: ["", Validators.required]
    });
    constructor(
        private router: Router,
        private boardService: BoardService,
        public fb: FormBuilder,
        private colorService: ColorService,
        private el: ElementRef
    ){};
    ngOnInit(): void{
        this.boardService.getBoards().then(boards=>this.boards=boards);
        this.boardForm = new FormGroup({
          name: new FormControl('', [<any>Validators.required, <any>Validators.maxLength(25)]),
        })
    }
    createBoard(data:any, valid:boolean): void{
      if(!valid)
        return;
      let b: board = {
        id: "b-"+new Date().getTime(),
        name: data.name,
        isFavourite: false,
        bgcolor: this.colorService.getRandomColor()
      }
      this.boards.push(b);
      this.boardService.saveBoards(this.boards).then(b=>{
        $(this.el.nativeElement).find(".dropdown").removeClass('open');
        this.boardForm.reset()
      });

    }
}
