import {Injectable} from '@angular/core';
import {board} from '../boards/board';


const boards: board[] = [{
    id: 123,
    name: "board1",
    bgcolor: "green",
    isFavourite: false

},{
    id: 1232,
    name: "board2",
    bgcolor: "gray",
    isFavourite: false

},{
    id: 1233,
    name: "board3",
    bgcolor: "green",
    isFavourite: false

},{
    id: 1234,
    name: "board4",
    bgcolor: "red",
    isFavourite: false

},{
    id: 1235,
    name: "board5",
    bgcolor: "blue",
    isFavourite: false

}];

@Injectable()
export class BoardService{
    getBoards(): Promise<board[]>{
        return Promise.resolve(boards);
    }
}

