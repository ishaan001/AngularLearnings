import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }
  
  signUp(email: string, password: string){
    //return observable which we can subscribe with rxJS
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  signIn(email: string, password: string){
    //return observable which we can subscribe with rxJS
    return this.auth.signInWithEmailAndPassword(email, password);

  }

  getUser(){
    // returned by firebase if there is the successfull sigIn.
    return this.auth.authState;
  }

  signOut(){
    return this.auth.signOut();
  }
}
