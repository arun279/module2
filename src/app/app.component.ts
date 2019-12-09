import { Component } from '@angular/core';
import { User } from './user';
import { USERS } from './mock-users';
@Component({
  selector: 'app-root',
  // template: `
  //   <h1>Module 2</h1>
  //   <app-admin (eventClicked)="userAdded($event)"></app-admin>
  //   <app-user></app-user>
  // `,
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
