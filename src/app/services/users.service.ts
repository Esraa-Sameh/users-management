import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private getAllUsersURL = 'https://reqres.in/api/users?page=2';
  private getSingleUserURL = 'https://reqres.in/api/users/';
  private editSingleUserURL = 'https://reqres.in/api/users/2';
  private deleteSingleUserURL = 'https://reqres.in/api/users/2';

  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get<any>(this.getAllUsersURL);
  }

  getSingleUser(id: number) {
    return this.http.get<any>(this.getSingleUserURL + String(id));
  }

  editSingleUser(): Observable<any> {
    return this.http.post(this.editSingleUserURL,{});
  }

  deleteSingleUser(): Observable<any> {
    return this.http.delete(this.deleteSingleUserURL);
  }
}
