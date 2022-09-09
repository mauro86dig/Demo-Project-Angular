import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import json from 'highlight.js/lib/languages/json';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ErrorComponent } from './pages/error/error.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ExternalApiComponent } from './pages/external-api/external-api.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { LoaderInterceptor } from './network.interceptor';

import { environment as env } from '../environments/environment';
import { FilmsComponent } from './pages/films/films.component';
import { FilmsListComponent } from './pages/films/films-list/films-list.component';
import { FilmsPeopleComponent } from './pages/films/films-people/films-people.component';
import { SharedModule } from './shared/shared.module';
import { FilmDetailsComponent } from './pages/films/film-details/film-details.component';
//import { HttpRequestInterceptor } from './http-request-interceptor';
const config = {
  domain: 'digiaccount.eu.auth0.com',
  clientId: 'VvZcO0WpffDA49uOIZ15IWPhDVogZmZf',
  redirectUri: window.location.origin + '/home',
  audience: 'http://localhost:7080/api/getTaskTypes',
  apiUri: 'http://localhost:3001',
  appUri: 'http://localhost:4200',
  errorPath: '/error',
  httpInterceptor: {
    allowedList: ['/api/*'],
  },
};
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    NavBarComponent,
    FooterComponent,
    HeroComponent,
    HomeContentComponent,
    LoadingComponent,
    ExternalApiComponent,
    ErrorComponent,
    FilmsComponent,
    FilmsListComponent,
    FilmsPeopleComponent,
    FilmDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    HighlightModule,
    FontAwesomeModule,
    SharedModule,
    AuthModule.forRoot({
      ...env.auth,
      httpInterceptor: {
        ...env.httpInterceptor,
      },
    }),
    NgbModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
    {
      provide: Window,
      useValue: window,
    },
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          json: () => import('highlight.js/lib/languages/json'),
        },
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
