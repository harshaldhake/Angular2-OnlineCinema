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
import {GalaxyCinemaComponent} from './galaxy-cinema/galaxy-cinema.component';
import {CgvCinemaComponent} from './cgv-cinema/cgv-cinema.component';
import {FirebaseLoginModule} from "./_modules/firebase-login/firebase-login.module";
import {AngularFire} from "angularfire2";
import {ModalModule} from "ng2-modal";
import { FilmDetailComponent } from './film-detail/film-detail.component';

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
    GalaxyCinemaComponent,
    CgvCinemaComponent,
    FilmDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    FirebaseLoginModule,
    ModalModule,
    DropdownModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDugX01C3UxUxXfe5FNAAFzynTYDYcansA'
    })
  ],
  providers: [AngularFire],
  bootstrap: [AppComponent]
})
export class AppModule {
}
