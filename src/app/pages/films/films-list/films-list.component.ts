import { ConstantPool } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Film } from 'src/app/model/film';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css'],
})
export class FilmsListComponent implements OnInit {
  @Input() films: Film[];
  @Output() detailsPeople: EventEmitter<Film> = new EventEmitter<Film>();

  film: any;
  hasApiError = false;
  responseJson: string = null;
  imageWidth = 50;
  imageMargin = 2;
  showImage = true;
  constructor(private api: ApiService, private route: Router) { }

  ngOnInit() { }

  showsDetails(film) {
    // console.log('LIST FILM DETAILS');
    // console.log(film);
    this.route.navigate(['films'], {
      queryParams: {
        id: '123', //pass whatever here
      },
    });
  }
  // showsDetailsPeople(film) {
  //   this.detailsPeople.emit(film);

  // }
  showsDetailsPeople(film) {
    this.api.setPeopleFilm(film.people);
    this.route.navigate(['films/' + film.id + '/people'], {

    });
  }
}
