import {Injectable} from '@angular/core';
import {Film, FILMS} from "./film-list";

@Injectable()
export class FilmService {

  constructor() {
  }


  getFilms(): Promise<Film[]> {
    return Promise.resolve(FILMS);
  }
}
