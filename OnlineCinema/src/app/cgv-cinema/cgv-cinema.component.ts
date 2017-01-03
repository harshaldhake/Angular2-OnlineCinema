import {Component, OnInit} from '@angular/core';
import {Film} from "../_interfaces/film.interface";
import {FilmService} from "../_services/film.service";

@Component({
  selector: 'app-cinema-cgv',
  templateUrl: './cgv-cinema.component.html',
  styleUrls: ['./cgv-cinema.component.css'],
  providers: [FilmService]
})

export class CgvCinemaComponent implements OnInit {

  title: string;
  films: Film[];

  constructor(private _filmService: FilmService) {
    this.title = "CGV";
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
