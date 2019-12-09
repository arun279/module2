import { Component, OnInit, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { USERS } from '../mock-users';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() importedUsers: User[];
  @Output() importedUsersChange = new EventEmitter<User[]>();

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
