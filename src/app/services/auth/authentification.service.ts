import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth"
import { rejects } from 'assert';
import { resolve } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private afAuth: AngularFireAuth) { }

  onSignUpWithEmailAndPassword(email: string, password: string) {
    return new Promise((resolve, rejects) => {
      this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((response) => {
        resolve(response);
      }).catch(err  => rejects(err));
    })
  }

  onSignInWithEmailAndPassword(email: string, password: string) {
    return new Promise((resolve, rejects) => {
      this.afAuth.signInWithEmailAndPassword(email, password)
      .then((response) => {
        resolve(response);
      }).catch(err  => rejects(err));
    })
  }

  onResetPassword(email:string){
    return new Promise((resolve, rejects) => {
      this.afAuth.sendPasswordResetEmail(email).then(response => {
        resolve(response);
      }).catch(err => rejects(err));
    })
  }
}
