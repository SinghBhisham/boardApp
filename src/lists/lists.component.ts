import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import 'rxjs/add/operator/switchMap';

import { board } from '../schemas/board';
import { list } from '../schemas/list';
import { BoardService } from '../services/boards.service';
import { ListsService } from '../services/lists.service';

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
      console.log('came here', data);
      let l: list = {
        id: "b-"+new Date().getTime(),
        name: data.name,
        parentid: this.board.id
      }
      this.lists.push(l);
      this.listService.saveLists("lists:"+this.board.id, this.lists).then(b=>{
          this.listForm.reset();
      });

    }
}
