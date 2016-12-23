import {Component, OnInit, Inject} from '@angular/core';
import {FilmService} from "../film.service";
import {Film} from "./film";

@Component({
  selector: 'app-film',
  templateUrl: 'app/film/film.component.html',
  styleUrls: ['app/film/film.component.css'],
  providers: [FilmService]
})

export class FilmComponent implements OnInit {

  public films: Film[];

  constructor(private film: FilmService) {
  }

  getFilms() {
    this.film.getFilms().then((films: Film[]) => this.films = films);
  }

  ngOnInit(): any {
    this.getFilms();
  }

}
