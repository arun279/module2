import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'module2';
  users: User[];

  constructor(private usersService: UsersService) { }
  
  getUsers(): void {
    this.usersService.getUsers().subscribe(users => this.users = users);
  }
  
  ngOnInit() {
    this.getUsers();
  }
}