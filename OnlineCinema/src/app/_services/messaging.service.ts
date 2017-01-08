import {Injectable, Inject} from '@angular/core';
import * as firebase from 'firebase';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Global} from "../_global/global";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {FirebaseApp} from "angularfire2";

@Injectable()
export class MessagingService {

  private currentToken: string = "";
  private _messaging: firebase.messaging.Messaging;

  constructor(private http: Http,
              @Inject(FirebaseApp)
              private _firebaseApp: firebase.app.App) {

    this.currentToken = JSON.parse(localStorage.getItem('firebase_token'));
    this._messaging = firebase.messaging(this._firebaseApp);
/*
    this._messaging.setBackgroundMessageHandler(() => {
      let notificationTitle = 'Background Message Title';
      let notificationOptions = {
        body: 'Background Message body.',
        icon: '/firebase-logo.png'
      };
      // self.registration.showNotification(notificationTitle, notificationOptions);
    });*/
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
              this.currentToken = refreshedToken;
            }
          ).catch(err => {
            console.error('Msg Token error:', err);
          });
        });
      }
      else {
        this.currentToken = token;
      }
      this.saveToken(token);
      this.sendTokenToServer(token).subscribe(
        (res: string) => {
          console.log("Register:" + res);
        }
      );
    })
  }

  private saveToken(token: string) {
    this.currentToken = token;
    localStorage.setItem('firebase_token', JSON.stringify(this.currentToken));
  }

  private sendTokenToServer(token: string): Observable<string> {
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({headers: headers});
    let body = "token:" + token;
    return this.http
      .post(Global.API_REGISTER_NOTI, body, options)
      .map((res: Response) => {
        res.json();
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
