import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router'
import { Observable } from 'rxjs';
import { UsersService } from './services/users.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve <any> {

  constructor(private usersService : UsersService, private router : Router) { }
  resolve (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) :Observable<any> {
    let userID = +route.paramMap.get('id');
    if (!userID) {
      return this.usersService.getAllUsers().pipe(map(
        res => {
          if (res) {
            return res;
          } else {
            this.router.navigate(['']);
          }
        }
      ));
    }
    else {
      return this.usersService.getSingleUser(userID).pipe(map(
        res => {
          if (res) {
            return res;
          } else {
            this.router.navigate(['']);
          }
        }
      ));
    }
  }
}
