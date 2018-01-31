import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: User[]=[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().then((users) => {
      this.users = users.slice(0, 4);
      console.log(this.users);
    });
  }

  }
