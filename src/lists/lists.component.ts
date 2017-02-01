import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import 'rxjs/add/operator/switchMap';

import { board } from '../schemas/board';
import { list } from '../schemas/list';
import { card } from '../schemas/card';
import { BoardService } from '../services/boards.service';
import { ListsService } from '../services/lists.service';

declare var $: any;

@Component({
    moduleId: module.id,
    selector: "lists",
    templateUrl: "../../templates/lists.html",
    styleUrls: ["../../public/css/lists.css"]

})

export class ListsComponent implements OnInit{
    board: board ;
    lists: list[];
    public listForm = this.fb.group({
      name: ["", Validators.required]
    });
    public cardForm = this.fb.group({
      val: ["", Validators.required]
    });
    constructor(
        private router: Router,
        private boardService: BoardService,
        private listService: ListsService,
        private route: ActivatedRoute,
        private location: Location,
        public fb: FormBuilder,
        private el: ElementRef
    ){};
    ngOnInit(): void{
        this.route.params
            .switchMap((params: Params) => this.boardService.getBoard(params['id']))
            .subscribe(board => {
                this.board=board;
                this.listService.getLists(board.id).then(lists=>this.lists = lists);
            });
    }
    createList(data:any, valid:boolean): void{
      if(!valid)
        return;
      let l: list = {
        id: "l-"+new Date().getTime(),
        name: data.name,
        parentid: this.board.id,
        cards: []
      }
      this.lists.push(l);
      this.listService.saveLists("lists:"+this.board.id, this.lists).then(b=>{
          this.listForm.reset();
      });
    }

    createCard(l: list, data:any, valid:boolean): void{
      if(!valid)
        return;
      let c: card = {
        id: "c-"+new Date().getTime(),
        data: data.val
      }
      l.cards.push(c);
      this.listService.saveLists("lists:"+this.board.id, this.lists).then(b=>{
          this.cardForm.reset();
      });
    }
    public editCard(c: card, e: any): void{
      c.data = $(e.target).siblings('textarea').val();
      this.listService.saveLists("lists:"+this.board.id, this.lists).then(b=>{
          this.cardForm.reset();
      });
    }
}
