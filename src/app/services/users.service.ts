import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user/user.model';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
BASE_URL='https://jsonplaceholder.typicode.com';
entity='/users'
  constructor(private http: HttpClient) { 
  }
  getAllRecords(): Observable<UserModel[]> {
console.log(`${this.BASE_URL}${this.entity}`);

    return this.http.get<UserModel[]>(
      `${this.BASE_URL}${this.entity}`
    );
  }
}
