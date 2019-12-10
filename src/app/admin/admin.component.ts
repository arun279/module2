import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
  usernameinput: string = "";
  emailinput: string = "";
  phoneinput: number = 0;

  users: User[];
  user: User;

  constructor(private usersService: UsersService) { }
  
  getUsers(): void {
    this.usersService.getUsers().subscribe(users => this.users = users);
  }

  ngOnInit() {
    this.getUsers();
  }

  onClick(): void {    
    this.user = {username: this.usernameinput, email: this.emailinput, phone: this.phoneinput};
    this.usersService.add(this.user);
  }
}