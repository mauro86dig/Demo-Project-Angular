import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import * as config from '../../auth_config.json';
import * as apiManagerConfig from '../../api_manager_config.json'
import { Film } from './model/film';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  peopleFilm: [string];
  constructor(private http: HttpClient) { }
  filmUrl = 'https://ghibliapi.herokuapp.com/films';
  peopleUrl = 'https://ghibliapi.herokuapp.com/people';


  token$(): Observable<any> {

    const headers = {
      'content-type': 'application/x-www-form-urlencoded',
      'Authorization': apiManagerConfig.Authorization
    }
    const body = apiManagerConfig.body;
    // const body = apiManagerConfig.body;
    console.log(body)
    return this.http.post(apiManagerConfig.domain + '/platform/enabler/iam/token/generate/1.0.0', body, { 'headers': headers })
  }

  public setPeopleFilm(value: any) {
    this.peopleFilm = value;
  }
  public getPeopleFilm() {
    return this.peopleFilm;
  }
  ping$(): Observable<any> {
    //console.log(config.apiUri);
    return this.http.get(`${config.apiUri}/api/external`);
  }
  tasks$(): Observable<any> {
    return this.http.get('https://cat-fact.herokuapp.com/facts/');
  }
  films$(): Observable<any> {
    return this.http.get(this.filmUrl);
  }

  getFilmById$(id: string): Observable<Film> {
    const url = `${this.filmUrl}/${id}`;
    return this.http.get<Film>(url).pipe(
      tap((data) => console.log('getFilm: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getPeopleFilm$(url: string) {
    //const url = `${id}`;
    return this.http.get<Film>(url).pipe(
      // tap((data) => console.log('getPeople: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );

  }

  private handleError(err: any): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
