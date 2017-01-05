/**
 * Created by Phuc-Hau Nguyen on 12/28/2016.
 */

import {Routes, RouterModule} from "@angular/router";
import {ContactComponent} from "./contact/contact.component";
import {LoginComponent} from "./login/login.component";
import {FilmComponent} from "./film/film.component";
import {MapComponent} from "./map/map.component";
import {HomeComponent} from "./home/home.component";
import {ModuleWithProviders} from "@angular/core";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {AboutComponent} from "./about/about.component";
import {GalaxyCinemaComponent} from "./galaxy-cinema/galaxy-cinema.component";
import {CgvCinemaComponent} from "./cgv-cinema/cgv-cinema.component";
import {FilmDetailComponent} from "./film-detail/film-detail.component";

export const routes: Routes = [
  {path: '', component: HomeComponent,},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '#', redirectTo: '/home', pathMatch: 'full'},
  {path: '#', component: HomeComponent,},
  {path: 'home', component: HomeComponent,},
  {path: 'film', component: FilmComponent},
  {path: 'film/:id', component: FilmDetailComponent},
  {
    path: 'film/:id', component: FilmDetailComponent,
    children: [
      {path: 'galaxy', component: FilmDetailComponent},
      {path: 'cgv', component: FilmDetailComponent}
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'cinema', component: GalaxyCinemaComponent},
  {path: 'cinema/galaxy', component: GalaxyCinemaComponent},
  {path: 'cinema/cgv', component: CgvCinemaComponent},
  {path: 'map', component: MapComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent,},
  {path: '**', component: PageNotFoundComponent}

];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
