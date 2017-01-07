import {Injectable, Inject} from '@angular/core';
import * as firebase from 'firebase';
import {FirebaseApp} from "angularfire2";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Global} from "../_global/global";
import {Observable} from "rxjs";

@Injectable()
export class MessagingService {

  private _messaging: firebase.messaging.Messaging;

  constructor(private http: Http,
              @Inject(FirebaseApp)
              private _firebaseApp: firebase.app.App) {
    this._messaging = firebase.messaging(this._firebaseApp);

  }

  getToken() {
    this._messaging.requestPermission()
      .then(() => {
        this._messaging.getToken().then(
          refreshedToken => {
            this.registerToken(refreshedToken);
            console.log('Msg Token.', refreshedToken);
          }
        ).catch(err => {
          console.log('Msg Token.', err);
        });
      })
      .catch(err => {
        console.log('Unable to get permission to notify.', err);
      });
  }

  registerToken(token: string): Observable<string> {
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'}); // ... Set content type to JSON
    let options = new RequestOptions({headers: headers}); // Create a request option

    return this.http.post(Global.API_REGISTER_NOTI, token, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }
}
