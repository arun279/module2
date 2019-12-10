import { Injectable } from '@angular/core';
import { User } from './user';
import { USERS } from './mock-users';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  users: User[] = [];

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  add(user: User) {
    console.log("added " + user.username);
    this.users.push(user);
  }

  constructor() { }
}