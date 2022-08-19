import { Component, OnInit } from '@angular/core';
import { Auth as FirebaseAuth } from 'firebase/auth';
import { AuthModule } from 'ngx-auth';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth } from 'firebase/auth';
import firebase from 'firebase/compat/app';
export * from 'firebase/auth';
import { environment } from 'src/environments/environment';
import { GoogleAuthProvider } from "firebase/auth";

firebase.initializeApp(environment.firebase);


@Component({ 
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent{

  constructor() {
    
  }

  login(){
    console.log('firebase',  firebase.auth().currentUser)
    if(!firebase.auth().currentUser)
    {
      var provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('https://www.googleapis.com/auth/plus.login');
      firebase.auth().signInWithRedirect(provider);
    }
    else
    {
      firebase.auth().signOut();
    }
  }
}
