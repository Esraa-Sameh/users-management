import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { BehaviorSubject, Subscription } from 'rxjs';
import { NavigationStart, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private loginURL = 'https://reqres.in/api/login';
  subscription: Subscription;
  private isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private http: HttpClient, private router: Router) {
    //Check if the user is logged in when the browser is refreshed
    this.subscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        localStorage.getItem('token') ? this.isLoggedIn.next(true) : this.isLoggedIn.next(false);
      }
    });
  }


  login(loginData: Object) {
    return this.http.post<any>(this.loginURL, loginData);
  }
  
  loggedIn (){
    return !!localStorage.getItem('token')
  }
  logOut () {
    localStorage.removeItem('token');
  }
  
}
