import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

@Injectable()
export class LoginService {
  token: string;

  constructor(private router: Router) {}

  getIdToken(): string {
    return this.token;
  }

  login(email: string, password: string): void {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      auth.currentUser?.getIdToken().then((token) => {
        this.token = token;
        this.router.navigate(['/']);
      });
    });
  }

  logout(): void {
    getAuth().signOut()
      .then(() => {
        this.token = "";
        this.router.navigate(['login']);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  isAuthenticated(): boolean {
    return this.token != "" && this.token != undefined;
  }
}
