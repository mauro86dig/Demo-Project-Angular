import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Film } from 'src/app/model/film';
@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
})
export class FilmsComponent implements OnInit {
  hasApiError = false;
  responseJson: string = null;
  films: Film[];
  people: String[];
  imageWidth = 50;
  imageMargin = 2;
  showImage = true;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.filmsApi();
  }

  filmsApi() {
    this.api.films$().subscribe({
      next: (res) => {
        this.hasApiError = false;
        // console.log(res);
        this.films = res;
        this.responseJson = JSON.stringify(res, null, 2).trim();
      },
      error: () => (this.hasApiError = true),
    });
  }

  viewPeople(film: Film) {
    console.log('VIEW PEOPLE');
    console.log(film.people);
    this.people = film.people;
    this.api.setPeopleFilm(film.people);

  }
}
