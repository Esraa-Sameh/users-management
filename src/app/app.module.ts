import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UsersService } from './services/users.service'
import { FormsModule } from '@angular/forms'
import { AuthenticationService } from './services/authentication.service';
import { UserComponent } from './user/user.component';
import { ErrorComponent } from './error/error.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuardService } from './auth-guard.service';
import { CanDeactivateGuard } from './user/can-deactivate-guard.service'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoginComponent,
    HomeComponent,
    UserComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule,
    NgbModule
  ],
  providers: [UsersService, AuthenticationService,AuthGuardService,CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
