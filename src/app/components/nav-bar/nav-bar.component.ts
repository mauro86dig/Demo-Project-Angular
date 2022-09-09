import { Component, Inject, OnInit } from '@angular/core';
import { faUser, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '@auth0/auth0-angular';
import { LoginService } from 'src/app/service/login.service';

import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  isCollapsed = true;
  faUser = faUser;
  faPowerOff = faPowerOff;

  constructor(
    public auth: AuthService,
    private loginsService: LoginService,
    private router: Router
  ) { }

  ngOnInit() { }

  loginWithRedirect() {
    this.loginsService.login();
  }

  logout() {
    this.loginsService.logout()
  }
  filmsRedirect() {
    this.router.navigateByUrl('/films');
  }
}
