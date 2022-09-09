import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { LoaderService } from './loading.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Auth0 Angular SDK Sample';

  constructor() {}
}
