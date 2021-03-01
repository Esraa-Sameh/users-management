import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { CanComponentDeactivate } from './can-deactivate-guard.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  editUser: boolean = false;
  statusMessage: string = '';
  user;
  userID;
  constructor(
    private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (queryParams) => (this.editUser = queryParams.allowEdit)
    );
    this.route.data.subscribe((res) => (this.user = res['userData']['data']));
  }
  onEditSubmit(form: NgForm) {
    this.usersService.editSingleUser().subscribe(
      () => {
        this.statusMessage = 'User edited successfully';
        setTimeout(() => this.router.navigate(['/users']), 2000);
      },
      (error) => (this.statusMessage = `Error occurred ${error.message}`)
    );
  }
}
