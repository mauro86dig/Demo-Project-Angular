import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Film } from 'src/app/model/film';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css'],
})
export class FilmDetailsComponent implements OnInit {
  film?: Film;
  errorMessage?: string;

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) {
    //console.log('----------------------PARAMS-----------------------');
    //console.log(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    // // console.log('----------------------PARAMS-----------------------');
    // // console.log(id);
    // // console.log('------------------------------------------------');
    this.getFilm(id);
  }

  getFilm(id: string): void {
    this.api.getFilmById$(id).subscribe({
      next: (film) => {
        this.film = film;
      },
      error: (err) => (this.errorMessage = err),
    });
  }
}
