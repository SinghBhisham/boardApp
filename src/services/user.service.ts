import {Injectable} from '@angular/core';
import {user} from '../schemas/user';
/*
This service can be used later to implement users api
*/
const u1: user = {
    id: "u-123",
    name: "Demo"
}
@Injectable()
export class UserService{
    /*
    getCurrentUser: returns the Promise for the loggedIn user
    */
    getCurrentUser(): Promise<user>{
        return Promise.resolve(u1);//currently returning hard-coded user
    } 
}