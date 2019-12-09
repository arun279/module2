import { Component } from '@angular/core';
import { User } from './user';
import { USERS } from './mock-users';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'module2';
  users: User[] = USERS;
  userAdded($event: User[]) {
    this.users = $event
    console.log("parent recieved users"+ this.users);
  }
}