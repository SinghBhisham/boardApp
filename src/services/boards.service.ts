import {Injectable} from '@angular/core';
import {board} from '../schemas/board';
import {UserService} from './user.service';
import {StorageService} from './storage.service';

const boards: board[] = [{
    id: "b-123",
    name: "board1",
    bgcolor: "green",
    isFavourite: false

},{
    id: "b-1232",
    name: "board2",
    bgcolor: "gray",
    isFavourite: false

},{
    id: "b-1233",
    name: "board3",
    bgcolor: "green",
    isFavourite: false

},{
    id: "b-1234",
    name: "board4",
    bgcolor: "red",
    isFavourite: false

},{
    id: "b-1235",
    name: "board5",
    bgcolor: "blue",
    isFavourite: false

}];

@Injectable()
export class BoardService{
    constructor(
        private userService:UserService,
        private store: StorageService
    ){}
    getBoards(): Promise<board[]>{
        return this.userService.getCurrentUser().then(user=>{
            return this.store.get("boards:"+user.id);
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
}

