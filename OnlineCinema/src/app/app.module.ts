import {NgModule} from '@angular/core';
import {routing} from './app.routes';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {DropdownModule} from 'ng2-bootstrap/dropdown';
import {FooterComponent} from './footer/footer.component';
import {ContactComponent} from './contact/contact.component';
import {MapComponent} from './map/map.component';
import {LoginComponent} from './login/login.component';
import {FilmComponent} from './film/film.component';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AboutComponent} from './about/about.component';
import {AgmCoreModule} from 'angular2-google-maps/core';
import {AngularFireModule, AuthProviders, AuthMethods} from "angularfire2";
import {ModalModule} from "ng2-modal";
import {FilmDetailComponent} from './film-detail/film-detail.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { FilmGalleryComponent } from './film-gallery/film-gallery.component';

const firebaseConfig = {
  apiKey: "AIzaSyDugX01C3UxUxXfe5FNAAFzynTYDYcansA",
  authDomain: "onlinecinema-48f19.firebaseapp.com",
  databaseURL: "https://onlinecinema-48f19.firebaseio.com",
  storageBucket: "onlinecinema-48f19.appspot.com",
  messagingSenderId: "520394171463"
};

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    ContactComponent,
    MapComponent,
    LoginComponent,
    FilmComponent,
    HomeComponent,
    PageNotFoundComponent,
    AboutComponent,
    FilmDetailComponent,
    ImageSliderComponent,
    FilmGalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ModalModule,
    DropdownModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBBGF2mwPuQAOXmsXSG7fxid6R9Rw4AOuI'
    }),
    AngularFireModule.initializeApp(firebaseConfig,{
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    })
  ],
  exports: [
    BrowserModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
