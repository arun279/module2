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
//  users: User[] = this.importedUsers;
  constructor() { }
  selectedUser = new User;
  displayDetails(username: string) {
    console.log("inside displayDetails");
    this.users.forEach(element => {
      if (element.username == username) {
        console.log("found" + element.email);
        this.selectedUser = element;
      }
    });
  }

  ngOnInit() {
  }

}
