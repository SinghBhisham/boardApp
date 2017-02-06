import {Injectable} from '@angular/core';
import {list} from '../schemas/list';
import {StorageService} from './storage.service';
/*
ListsService
exports functions to list related operations
*/
@Injectable()
export class ListsService{
    //constructor
    constructor(
      private store: StorageService
    ){}
    /*
    getLists: returns the Promise to list array
    */
    getLists(id:string): Promise<list[]>{
        return Promise.resolve(this.store.get("lists:"+id)||[]);
    }

    /*
    saveLists
    create a list and return the promise 
    */
    saveLists(id:string, lists: list[]): Promise<void>{
        return Promise.resolve(this.store.set(id, lists));
    }
}
