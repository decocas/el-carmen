import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
 import { auth } from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { LoginService } from '../login.service';
import { Router}  from '@angular/router';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public afAuth: AngularFireAuth,
               private r:Router ,
               private l: LoginService) { }
m:any={};
 muestra:boolean=true;
log:boolean=true;
   login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
     this.r.navigate(['/usuario']);
     this.muestra=false;
  }
  

onLogin(){

this.afAuth.auth.signInWithEmailAndPassword(this.m.email, this.m.pass).then((res) => {
      this.onLoginRedirect();
      }).catch(err => console.log('err', err.message));

if(this.m.email!='mateo@frito.com'|| this.m.pass!='123456'){
  this.log=false;
}else{
  this.l.flag=false;
}

}

close():void{
  this.log=true;
}

onLoginRedirect(): void {
    this.r.navigate(['/usuario']);
  }
  ngOnInit() {
  }

   
}
