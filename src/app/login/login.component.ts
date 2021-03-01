import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}
  error = false;

  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    this.authenticationService.login(form.value).subscribe(
      (response) => {
        this.error = false;
        localStorage.setItem('token', response.token);
        this.router.navigate(['/users']);
      },
      (error) => (this.error = error)
    );
  }
}
