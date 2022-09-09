import { Component } from '@angular/core';
import { AuthClientConfig } from '@auth0/auth0-angular';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-external-api',
  templateUrl: './external-api.component.html',
  styleUrls: ['./external-api.component.css'],
})
export class ExternalApiComponent {
  responseJson: string;
  audience = this.configFactory.get()?.audience;
  hasApiError = false;

  constructor(
    private api: ApiService,
    private configFactory: AuthClientConfig
  ) {}

  pingApi() {
    this.api.ping$().subscribe({
      next: (res) => {
        this.hasApiError = false;
        this.responseJson = JSON.stringify(res, null, 2).trim();
      },
      error: () => (this.hasApiError = true),
    });
  }

  tasksApi() {
    this.api.tasks$().subscribe({
      next: (res) => {
        this.hasApiError = false;
        console.log(res);
        //this.responseJson = JSON.stringify(res, null, 2).trim();
      },
      error: () => (this.hasApiError = true),
    });
  }

  filmsApi() {
    this.api.films$().subscribe({
      next: (res) => {
        this.hasApiError = false;
        console.log(res);
        //this.responseJson = JSON.stringify(res, null, 2).trim();
      },
      error: () => (this.hasApiError = true),
    });
  }
}
