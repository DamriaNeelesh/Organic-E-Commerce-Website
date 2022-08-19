import { Component, OnInit } from '@angular/core';
import { AuthModule } from 'ngx-auth';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { User, onAuthStateChanged } from "firebase/auth";



@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  user: firebase.User | undefined;

 

  logout() {
    firebase.auth().signOut();
  }

}
