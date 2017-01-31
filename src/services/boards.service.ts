import {Injectable} from '@angular/core';
import {board} from '../schemas/board';
import {UserService} from './user.service';
import {StorageService} from './storage.service';

@Injectable()
export class BoardService{
    constructor(
        private userService:UserService,
        private store: StorageService
    ){}
    getBoards(): Promise<board[]>{
        return this.userService.getCurrentUser().then(user=>{
            return this.store.get("boards:"+user.id) || [];
        });
    }
    createBoard(b:board): Promise<void>{
        return this.userService.getCurrentUser().then(user=>{
            let boards: board[]  =<board[]> this.store.get("boards:"+user.id);
            boards.push(b);
            return this.store.set("boards:"+user.id, boards);
        })
    }
    getBoard(id: string): Promise<board> {
        return this.getBoards()
               .then(boards => boards.find(board => board.id === id));
    }
    saveBoards(boards: board[]): Promise<any>{
      return this.userService.getCurrentUser().then(user=>{
          return this.store.set("boards:"+user.id, boards);
      })
    }
    searchBoards(q: string): Promise<board[]>{
        return this.getBoards().then(boards=>{
          if(!q.length){
            return boards;
          }
          return boards.filter(b=>{
            return b.name.match(new RegExp("^.*"+q+".*$", 'gi'));
          });
        });
    }
}
