import { Component, OnInit } from '@angular/core';
import { USERS } from '../mock-users';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = USERS;
  constructor() { }
  selectedUser = new User;
  displayDetails(username: string) {
    this.users.forEach(element => {
      if (element.username == username) {
        this.selectedUser = element;
      }
    });
  }

  ngOnInit() {
  }

}
