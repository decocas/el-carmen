import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
 import { auth } from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private afsAuth: AngularFireAuth) { }

flag:boolean=true;

   loginEmailUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afsAuth.auth.signInWithEmailAndPassword(email, pass)
        .then(userData => resolve(userData),
        err => reject(err));
    });
  }

  logoutUser() {
    this.flag=true;
    return this.afsAuth.auth.signOut();
  }
}
