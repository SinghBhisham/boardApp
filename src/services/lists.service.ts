import {Injectable} from '@angular/core';
import {list} from '../schemas/list';


const lists: list[] = [{
    parentid: "b-123",
    name: "board1",
    id: "l-123",
    cards: [{
        data: 'card1'
    }]
}];

@Injectable()
export class ListsService{
    getLists(id:string): Promise<list[]>{
        return Promise.resolve(lists);
    }
}

