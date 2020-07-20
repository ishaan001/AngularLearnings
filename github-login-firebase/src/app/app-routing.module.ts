import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';

import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['signin']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['']);

const routes: Routes = [
  { 
    path: 'signin',
    component: SigninComponent,     
    canActivate: [AngularFireAuthGuard], 
    //if user is able to signin  the authGaurdPip will redirect it to home page 
    data: { authGuardPipe: redirectLoggedInToHome }
  },
  { 
    path: 'signup', 
    component: SignupComponent
  },
  {
    //empty path is form the base or home component
    path: '',
    component: HomeComponent,
    canActivate: [AngularFireAuthGuard], 
      //if user is able to signin  the authGaurdPip will redirect it to login 
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    //**  '**' means rest of all the thing will fall under this palce   */
    path: '**',
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
