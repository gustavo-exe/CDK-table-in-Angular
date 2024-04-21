import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";
import { User } from "./user.types";
import { Injectable } from "@angular/core";
import USERS from "../../../assets/users.json";

@Injectable({ providedIn: "root" })
export class UserService {
  getUsers(): Observable<User[]> {
    // https://next.json-generator.com/4JbHJjvAF
    return of(USERS).pipe(delay(2000));
  }
}
