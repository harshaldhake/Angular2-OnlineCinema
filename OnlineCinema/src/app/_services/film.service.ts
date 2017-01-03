import {Injectable} from '@angular/core';
import {Film} from "../_interfaces/film.interface";
import {Observable} from "rxjs";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {ShowTime} from "../_interfaces/show-time";

@Injectable()
export class FilmService {

  private baseUrl: string = "http://cinematest.njs.jelastic.vps-host.net/cinema/api/films";
  private filmByCinemaUrl = this.baseUrl + "/cinema/";
  private showTimeUrl = this.baseUrl + "/1/Galaxy";

  constructor(private http: Http) {

  }

  getFilms(): Observable<Film[]> {
    return this.http.get(this.baseUrl)
      .map(response => response.json().films)
      .catch(this.handleError);
  }

  getFilmsByCinema(cinema: string): Observable<Film[]> {
    return this.http.get(this.filmByCinemaUrl + cinema)
      .map(response => response.json().films)
      .catch(this.handleError);
  }

  getFilmById(id: string): Observable<Film> {
    return this.http.get(this.filmByCinemaUrl + id)
      .map(response => response.json().films)
      .catch(this.handleError);
  }

  getShowTime(filmId: string, cinemaName: string) {
    return this.http.get(this.baseUrl + "/" + filmId + "/" + cinemaName)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let showTimes = res.json().showtimes;
    /*for (let key in showTimes) {
      console.log("Key tào lao:" + key);
      for (let day in showTimes[key]) {
        console.log("Day tào lao:" + day);
        for (let i = 0; i < showTimes[key][day].length; i ++){
          console.log("Hour tào lao:" + showTimes[key][day][i]);
        }
      }
    }*/
    return showTimes || {};
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
