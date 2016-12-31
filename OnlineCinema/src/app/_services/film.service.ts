import {Injectable} from '@angular/core';
import {Film} from "../_interfaces/film.interface";
import {FILMS} from "../_interfaces/film-list";

@Injectable()
export class FilmService {

  constructor() {
  }


  getFilms(): Promise<Film[]> {
    return Promise.resolve(FILMS);
  }
}
