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
export class ApiPlatformService {
  peopleFilm: [string];
  constructor(private http: HttpClient) { }
  filmUrl = 'https://ghibliapi.herokuapp.com/films';
  offeringUrl = 'https://native-dev-scrum-42-1535030459-wso2is-sit.cpaas-accenture.com/platform/enabler/crsmdomaincatalog/1.0.0/offerings?offset=1&limit=10&statuses=active'


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



  offerings$(): Observable<any> {
    const headers = {
      Authorization: "Bearer Bearer 08dce420-ff36-3289-9cfd-12f515d16ddf",
      "Content-Type": "application/json",
      "cpaas-transaction-id": "1010101010",
      "cpaas-tenant-id": "1535030459"
    }
    return this.http.get(this.offeringUrl, { 'headers': headers });
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
