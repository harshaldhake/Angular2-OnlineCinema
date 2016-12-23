import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MaterialModule} from '@angular/material'
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {FilmService} from "./film.service";
import {FilmComponent} from './film/film.component';
import {FooterComponent} from './footer/footer.component';
import {MenuComponent} from './menu/menu.component';
import {DirectionComponent} from './direction/direction.component';
import {LoginComponent} from './login/login.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import 'hammerjs';
import {routing} from './app.routes';
import {HomeComponent} from './home/home.component';
import {AgmCoreModule} from "angular2-google-maps/core";


@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    FooterComponent,
    MenuComponent,
    DirectionComponent,
    LoginComponent,
    PagenotfoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAQ_gSI5arqxa8TBUzVgn-6DqZUfcDED4c'
    })
  ],
  providers: [
    {provide: 'film', useClass: FilmService},
    {provide: 'api', useValue: 'http://google.com'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
