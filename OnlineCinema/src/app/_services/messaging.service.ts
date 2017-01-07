import {Injectable, Inject} from '@angular/core';
import * as firebase from 'firebase';
import {FirebaseApp} from "angularfire2";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Global} from "../_global/global";
import {Observable} from "rxjs";

@Injectable()
export class MessagingService {

  private currentToken: string = "";
  private _messaging: firebase.messaging.Messaging;

  constructor(private http: Http,
              @Inject(FirebaseApp)
              private _firebaseApp: firebase.app.App) {

    this.currentToken = JSON.parse(localStorage.getItem('firebase_token'));
    this._messaging = firebase.messaging(this._firebaseApp);
  }

  getNewToken() {
    this.requestPermission();
  }

  private requestPermission() {
    this._messaging.requestPermission()
      .then(() => {
        this.getToken();
      })
      .catch(err => {
        console.log('Unable to get permission to notify.', err);
      });
  }

  private getToken() {
    this._messaging.getToken().then(token => {
      if (this.currentToken === token) {
        this._messaging.deleteToken(token).then(() => {
          this._messaging.getToken().then(
            refreshedToken => {
              this.saveToken(refreshedToken);
              this.registerToken(refreshedToken);
            }
          ).catch(err => {
            console.error('Msg Token error:', err);
          });
        });
      }
      else {
        this.saveToken(token);
        this.registerToken(token);
      }
    })
  }

  private saveToken(token: string) {
    this.currentToken = token;
    localStorage.setItem('firebase_token', JSON.stringify(this.currentToken));
  }

  private registerToken(token: string): Observable<string> {

    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'}); // ... Set content type to JSON
    let options = new RequestOptions({headers: headers}); // Create a request option

    let body = 'token:' + token;
    return this.http.post(Global.API_REGISTER_NOTI, body, options) // ...using post request
      .map((res: Response) => {
        console.log("Register:" + res.json());
      }) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }
}
