import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { USERS } from '../mock-users';
import { User } from '../user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  users: User[] = USERS;
  user: User;
  @Output() eventClicked = new EventEmitter<User[]>();

  onClick(username1: string, email1: string, phone1: number): void {
    console.log("caught: " + username1);
    this.user = {username: username1, email: email1, phone: phone1};
    this.users.push(this.user);
    this.eventClicked.emit(this.users);
  }
}