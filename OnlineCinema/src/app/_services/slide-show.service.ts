import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {SlideShow} from "../_models/slide-show";
import {Global} from "../_global/global";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Injectable()
export class SlideShowService {

  constructor(private http: Http) {
  }


  getSlideByCinema(cinema: string): Observable<SlideShow[]> {
    return this.http.get(Global.API_SLIDE_SHOW + cinema)
      .map(response => response.json().slideShows)
      .catch(error => Observable.throw(error.json().error || 'Server error'));
  }
}
