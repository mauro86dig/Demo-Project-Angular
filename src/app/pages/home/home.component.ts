import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { ApiService } from 'src/app/api.service';
import { ApiPlatformService } from 'src/app/api.plaftorm.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(public auth: AuthService, private api: ApiService, private apiPlatform: ApiPlatformService) {
    this.getToken();
  }

  ngOnInit() {
    this.getOffering();
  }

  getToken() {
    this.api.token$().subscribe({
      next: (res) => {
        console.log(res);
      },
      error: () => (console.log('error')),
    });
  }

  getOffering() {
    this.apiPlatform.offerings$().subscribe({
      next: (res) => {
        console.log(res);
      },
      error: () => (console.log('error')),
    });
  }
}
