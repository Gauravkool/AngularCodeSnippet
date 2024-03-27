import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private uid?: string;
  constructor(private router: Router) {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.uid = user.uid;
        console.log('User Logged in', user.email);
      } else {
        console.log('User Logged out');
        this.uid = undefined;
      }
    });
  }

  registerUser(email: string, password: string) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user, 'User');
        this.router.navigate(['/']);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('errorMessage', errorMessage);
        console.log('errorCode', errorCode);
        alert('Something went wrong while signup please try again');
      });
  }

  loginUser(email: string, password: string) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User', { user });
        this.router.navigate(['/']);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('errorMessage', errorMessage);
        console.log('errorCode', errorCode);
        alert('Something went wrong while login please try again');
      });
  }

  logOut() {
    const auth = getAuth();
    signOut(auth).catch((error) => {
      alert('Something went wrong while logout');
    });
  }

  isAuthenticated() {
    return this.uid ? true : false;
  }

  getUid() {
    return this.uid;
  }
}
