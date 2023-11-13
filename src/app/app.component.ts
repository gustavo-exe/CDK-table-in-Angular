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
export class AppComponent implements OnInit {
  @ViewChild(PaginatorComponent) paginator!: PaginatorComponent;
  users!: MatTableDataSource<User>;

  columnsToDisplay = ['id', 'fullName', 'email', 'website'];
  pageSize = 10;
  filterValues: any = {};

  ciudades = [
    { "id": 1, "value": "washington" },
    { "id": 3, "value": "atlanta" },
    { "id": 5, "value": "chicago" },
    { "id": 7, "value": "dallas" },
    { "id": 9, "value": "denver" },
    { "id": 11, "value": "houston" },
    { "id": 12, "value": "phoenix" },
    { "id": 13, "value": "los angeles" },
    { "id": 14, "value": "miami" },
    { "id": 15, "value": "seattle" },
  ]

  zipCodes = [
    { "id": 1, "value": "10001" },
    { "id": 3, "value": "20001" },
    { "id": 6, "value": "30001" },
    { "id": 7, "value": "40001" },
    { "id": 9, "value": "50001" },
    { "id": 12, "value": "60001" }
  ]

  selectedCodes:string[] = [];
  selectedCiudades:string[] = [];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = new MatTableDataSource();
    this.userService
      .getUsers()
      .subscribe(users => {
        this.activateFilterPredicate()
        this.users.data = users;
        this.users.paginator = this.paginator;
      });
  }

  searchByAll(value: string) {
    this.users.filter = value.trim().toLowerCase();
  }

  activateFilterPredicate(){
    this.users.filterPredicate = ((data: any, filter: string): boolean => {
      const filterValues = JSON.parse(filter);
      let conditions = true;

      for (let filterKey in filterValues) {

        if (filterValues[filterKey].length) {
          conditions = conditions && filterValues[filterKey].includes(data[filterKey].trim().toLowerCase());
        }
      }

      return conditions;
    });
  }

  applyFilter() {
    this.users.filter = JSON.stringify(this.filterValues);

    if (this.users.paginator) {
      this.users.paginator.firstPage();
    }
  }

  updateFilter(column: string, filter: string) {
    if (!this.filterValues.hasOwnProperty(column)) {
      this.filterValues[column] = [filter];
    } else {
      this.filterValues[column].includes(filter) ?
        this.filterValues[column] = this.filterValues[column].filter((filterValue:any) => filterValue !== filter) :
        this.filterValues[column].push(filter);
    }

    this.applyFilter();
  }
}
