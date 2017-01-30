import {Injectable} from '@angular/core';
import {list} from '../schemas/list';
import {StorageService} from './storage.service';

@Injectable()
export class ListsService{
    constructor(
      private store: StorageService
    ){}
    getLists(id:string): Promise<list[]>{
        return Promise.resolve(this.store.get("lists:"+id)||[]);
    }
    saveLists(id:string, lists: list[]): Promise<void>{
        return Promise.resolve(this.store.set(id, lists));
    }
}
