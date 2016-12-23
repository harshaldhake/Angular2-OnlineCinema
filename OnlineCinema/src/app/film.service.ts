import {Injectable} from '@angular/core';
import {Film} from "./film/film";
import {FILMS} from "./film/film.contacts";

@Injectable()
export class FilmService {

  films: Array<Film>;

  constructor() {

  }

  getFilms() {
    return Promise.resolve(FILMS);
  }
}
