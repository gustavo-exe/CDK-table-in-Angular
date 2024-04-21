import { MatTableDataSource } from '@angular/material/table';
import { Component, ViewChild } from '@angular/core';
import { PaginatorComponent } from './paginator/paginator.component';
import { User } from './user.types';
import { UserService } from './user.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @ViewChild(PaginatorComponent) paginator!: PaginatorComponent;
  users!: MatTableDataSource<User>;

  columnsToDisplay = ['id', 'fullName', 'email', 'website'];
  pageSize = 10;
  filterValues: any = {};

  selectedCodes:string[] = [];
  selectedCiudades:string[] = [];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = new MatTableDataSource();
    this.userService
      .getUsers()
      .subscribe(users => {

        this.users.data = users;
        this.users.paginator = this.paginator;
      });
  }

  searchByAll(value: string) {
    this.users.filter = value.trim().toLowerCase();
  }

}
