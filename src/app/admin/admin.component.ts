import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { USERS } from '../mock-users';
import { User } from '../user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  usernameinput: string = "";
  emailinput: string = "";
  phoneinput: number = 0;

  constructor() { }

  ngOnInit() {
  }
  users: User[] = USERS;
  user: User;
  @Output() eventClicked = new EventEmitter<User[]>();

  onClick(): void {    
    this.user = {username: this.usernameinput, email: this.emailinput, phone: this.phoneinput};
    this.users.push(this.user);
    this.eventClicked.emit(this.users);
  }
}