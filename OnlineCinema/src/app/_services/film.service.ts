import {Injectable} from '@angular/core';
import {Film} from "../_models/film";
import {Observable} from "rxjs";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Global} from "../_global/global";

@Injectable()
export class FilmService {

  constructor(private http: Http) {

  }

  getFilmsShowing(): Observable<Film[]> {
    return this.http.get(Global.API_FILMS_SHOWING)
      .map(response => response.json().films)
      .catch(this.handleError);
  }

  getFilmsCommingSoon(): Observable<Film[]> {
    return this.http.get(Global.API_FILMS_COMINGSOON)
      .map(response => response.json().films)
      .catch(this.handleError);
  }

  getFilmsByCinema(cinema: string): Observable<Film[]> {
    return this.http.get(Global.API_FILMS_BY_CINEMA + cinema)
      .map(response => response.json().films)
      .catch(this.handleError);
  }

  getFilmById(filmId: string): Observable<Film> {
    return this.http.get(Global.API_FILMS + filmId)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getShowTime(filmId: string, cinemaName: string) {
    return this.http.get(Global.API_FILMS + filmId + "/" + cinemaName)
      .map(res => res.json().showtimes)
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
