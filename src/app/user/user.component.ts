import { Component, OnInit, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[];
  constructor(private usersService: UsersService) { }
  selectedUser = new User;

  getUsers(): void {
    this.usersService.getUsers().subscribe(users => this.users = users);
  }

  displayDetails(username: string) {
    this.getUsers();
    this.users.forEach(element => {
      if (element.username == username) {
        this.selectedUser = element;
      }
    });
  }

  ngOnInit() {
    this.getUsers();
  }
}
