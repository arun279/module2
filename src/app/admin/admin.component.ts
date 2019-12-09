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

  // onClick(username1: string, email1: string, phone1: number): void {
  //   console.log("caught: " + username1);
  //   this.user = {username: username1, email: email1, phone: phone1};
  //   this.users.push(this.user);
  //   this.eventClicked.emit(this.users);
  // }
  onClick(): void {
    // var allDivs = document.getElementsByClassName('form-group')[0];
    // console.log(allDivs);
    // const username1 = document.getElementById("usernameinput")[0].value;
    // console.log(username1);
    // const email1 = document.getElementById("emailinput")[0].value;
    // const phone1 = document.getElementById("phoneinput")[0].value;
    
    console.log("caught: " + this.usernameinput);
    this.user = {username: this.usernameinput, email: this.emailinput, phone: this.phoneinput};
    this.users.push(this.user);
    this.eventClicked.emit(this.users);
  }
}