import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const users = [
            {id: 1 , age: 21 , name: 'jack'},
            {id: 2 , age: 23 , name: 'john'},
            {id: 3 , age: 23 , name: 'zack'},
            {id: 4 , age: 22 , name: 'karthick'},
            {id: 5 , age: 23 , name: 'anthony'},
            {id: 6 , age: 23 , name: 'abc'},
            {id: 7 , age: 21 , name: 'def'},
            {id: 8 , age: 23 , name: 'ghi'},
            {id: 9 , age: 22 , name: 'jkl'}

        ];
        return { users };
    }
}
