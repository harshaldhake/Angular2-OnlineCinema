import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  AngularFireModule,
  AuthMethods,
  AuthProviders
} from "angularfire2";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";

const firebaseConfig = {
  apiKey: "AIzaSyDugX01C3UxUxXfe5FNAAFzynTYDYcansA",
  authDomain: "onlinecinema-48f19.firebaseapp.com",
  databaseURL: "https://onlinecinema-48f19.firebaseio.com",
  storageBucket: "onlinecinema-48f19.appspot.com",
  messagingSenderId: "520394171463"
};
const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  exports: [
    BrowserModule,
  ]
})
export class FirebaseLoginModule {

}
