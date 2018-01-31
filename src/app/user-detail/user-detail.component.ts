import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { User } from './../model/user';
import { UserService } from './../service/user.service';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input()
  user: User;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.switchMap((params: Params) =>
      this.userService.getUser(+params['id'])).subscribe(user => this.user = user);
  }

  save(): void {
    this.userService.update(this.user)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
