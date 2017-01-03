import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {SlideShow} from "../_models/slide-show";
import {Global} from "../_global/global";

@Injectable()
export class SlideShowService {

  constructor(private http: Http) {
  }


  getSlideByCinema(cinema: string): Observable<SlideShow[]> {
    return this.http.get(Global.API_SLIDE_SHOW + cinema)
      .map(response => response.json().slideShows)
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
