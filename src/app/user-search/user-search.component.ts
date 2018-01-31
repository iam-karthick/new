import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { User } from './../model/user';
import { UserSearchService } from './../service/user-search/user-search.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css'],
  providers: [UserSearchService]

})
export class UserSearchComponent implements OnInit {

  users: Observable<User[]>;
  private searchTerms = new Subject<string>();

  constructor(private userSearchService: UserSearchService, private router: Router) { }

  ngOnInit(): void {
    this.users = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term ? this.userSearchService.search(term) : Observable.of<User[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<User[]>([]);
      });
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  gotoDetail(user: User): void {
    let link = ['/user', user.id];
    this.router.navigate(link);
  }

}
