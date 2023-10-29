import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from './user.types';
import { UserService } from './user.service';
import { PaginatorComponent } from './shared/paginator/paginator.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  @ViewChild(PaginatorComponent)  paginator!: PaginatorComponent;
  users!: MatTableDataSource<User>;

  columnsToDisplay = ['id', 'fullName', 'email', 'website'];
  pageSize = 10;
  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.users = new MatTableDataSource();
    this.userService
    .getUsers()
    .subscribe(users => {
      this.users.data = users;
      this.users.paginator = this.paginator;
    });
  }

  searchByAll(value:string){
    console.log(value.trim().toLowerCase())
    this.users.filter = value.trim().toLowerCase();
  }
}
