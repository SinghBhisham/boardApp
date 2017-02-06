/*
StorageService 
exports functions to use localStorage
*/
export class StorageService {
    /*
    set : set value at key
    */
    set(key: string, value: any) {
        if (value) {
            value = JSON.stringify(value);
        }
        localStorage.setItem(key, value);
    }

    /*
    get: return the value at key
    */
    get<T>(key: string): T {
        let value: string = localStorage.getItem(key);

        if (value && value != "undefined" && value != "null") {
            return <T>JSON.parse(value);
        }

        return null;
    }
}