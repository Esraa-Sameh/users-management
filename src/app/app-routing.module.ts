import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ErrorComponent } from './error/error.component';
import { AuthGuardService } from './auth-guard.service';
import { ResolverService } from './resolver.service';
const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuardService],
    resolve: { usersData: ResolverService },
  },
  {
    path: 'users/:id',
    component: UserComponent,
    canActivate: [AuthGuardService],
    resolve: { userData: ResolverService },
  },
  { path: 'login', component: LoginComponent },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
