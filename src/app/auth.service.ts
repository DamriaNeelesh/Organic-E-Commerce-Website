import { Injectable } from '@angular/core';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  user$: any;
  constructor() { }
}
