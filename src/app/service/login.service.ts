import { Inject, Injectable } from '@angular/core';
import { faUser, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public auth: AuthService,
    private api: ApiService,
    @Inject(DOCUMENT) private doc: Document,) { }

  login() {
    this.auth.loginWithRedirect();
    console.log('pippo');
  }

  logout() {
    this.auth.logout({ returnTo: this.doc.location.origin });
  }

  getToken() {
    this.api.token$().subscribe({
      next: (res) => {
        console.log(res);
      },
      error: () => (console.log('error')),
    });
  }
}
