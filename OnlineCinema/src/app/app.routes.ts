/**
 * Created by Phuc-Hau Nguyen on 12/23/2016.
 */
import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FilmComponent} from "./film/film.component";
import {LoginComponent} from "./login/login.component";
import {DirectionComponent} from "./direction/direction.component";
import {PagenotfoundComponent} from "./pagenotfound/pagenotfound.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'films',
    component: FilmComponent,
    data: {title: 'DANH SÁCH PHIM'}
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {title: 'ĐĂNG NHẬP'}
  },
  {
    path: 'help',
    component: DirectionComponent,
    data: {title: 'TÌM ĐƯỜNG'}
  },
  {path: '**', component: PagenotfoundComponent}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
