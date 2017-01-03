import {Component, OnInit} from '@angular/core';
import {Film} from "../_models/film";
import {FilmService} from "../_services/film.service";

@Component({
  selector: 'app-cinema-galaxy',
  templateUrl: './galaxy-cinema.component.html',
  styleUrls: ['./galaxy-cinema.component.css'],
  providers: [FilmService]
})

export class GalaxyCinemaComponent implements OnInit {

  title: string;
  films: Film[];

  constructor(private _filmService: FilmService) {
    this.title = "Galaxy";
  }

  ngOnInit() {
    this.getFilms();
  }

  getFilms() {
    this._filmService.getFilmsByCinema(this.title)
      .subscribe(films => {
          this.films = films
        },
        err => {
          console.log(err);
        }
      );
  }

}
