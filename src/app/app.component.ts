import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from './user.types';
import { UserService } from './user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  users!: MatTableDataSource<User>;
  columnsToDisplay = ['id', 'fullName', 'email', 'website'];
  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.users = new MatTableDataSource();
    this.userService
    .getUsers()
    .subscribe(users => (this.users.data = users));
  }
}
