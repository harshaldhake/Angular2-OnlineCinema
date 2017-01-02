import {Injectable} from '@angular/core';
import {Film} from "../_interfaces/film.interface";
import {Observable} from "rxjs";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FilmService {

  private baseUrl: string = "http://cinematest.njs.jelastic.vps-host.net/cinema/api/films";
  private filmByCinemaUrl = this.baseUrl + "/cinema/";

  constructor(private http: Http) {

  }

  getFilms(): Observable<Film[]> {
    return this.http.get(this.baseUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getFilmsByCinema(cinema: string): Observable<Film[]> {
    return this.http.get(this.filmByCinemaUrl + cinema)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getFilmById(id: string): Observable<Film> {
    return this.http.get(this.filmByCinemaUrl + id)
      .map(this.extractData)
      .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json().films;
    return body || {};
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
