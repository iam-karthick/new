import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from './../../model/user';

@Injectable()
export class UserSearchService {

  constructor(private http: Http) { }

  search(term: string): Observable<User[]> {
    return this.http
      .get('api/users/?name=${term}')
      .map((r: Response) => r.json() as User[]);
  }

}
