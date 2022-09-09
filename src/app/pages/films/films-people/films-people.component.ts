import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Film } from 'src/app/model/film';

@Component({
  selector: 'app-films-people',
  templateUrl: './films-people.component.html',
  styleUrls: ['./films-people.component.css'],
})
export class FilmsPeopleComponent implements OnInit {
  // @Input() people;
  hasApiError: boolean;
  responseJson: string;
  people: any;
  peopleFilms: [string]


  constructor(private api: ApiService) {
    //console.log(this.api.getPeopleFilm());


  }
  ngOnInit() {
    const test = [];
    this.peopleFilms = this.api.getPeopleFilm();
    this.api.getPeopleFilm()?.forEach(element => {
      //this.getPersonDetails(element)
      this.api.getPeopleFilm$(element).subscribe({
        next: (res) => {
          this.hasApiError = false;
          // console.log('------------------------------');
          // console.log(res);
          // this.person = res
          test.push(res);
          this.people = test;
          //Object.assign(this.person, res)

        },
        error: () => (this.hasApiError = true),
        // complete() { this.person = test; console.log(this.person) }
      });

    });
    // console.log('------------------------------');
    // console.log(test);

  }

}
