import {Component, OnInit} from '@angular/core';
import {FilmService} from "../film/film.service";
import {Film} from "../film/film-list";

@Component({
  selector: 'app-cinema-cgv',
  templateUrl: './cgv-cinema.component.html',
  styleUrls: ['./cgv-cinema.component.css'],
  providers: [FilmService]
})

export class CgvCinemaComponent implements OnInit {

  title: string;
  films: Film[]; // Films

  constructor(private filmService: FilmService) {
    this.title = "Cgv Cinema";
  }

  ngOnInit(): void {
    this.getFilms();

  }

  getFilms(): void {
    this.filmService.getFilms().then(films => this.films = films);
  }

  tabMenus: TabMenu[] = [
    {
      title: "Phim đang chiếu",
      active: true
    },
    {
      title: "Phim sắp chiếu",
      active: false
    }
  ];

  clicked(index) {
    for (let i in this.tabMenus) {
      this.tabMenus[i].active = false;
    }
    this.tabMenus[index].active = true;
  }
}
interface TabMenu {
  title: string;
  active: boolean;
}
/*

 export const CINEMAS: Cinema[] = [
 {
 title: "GALAXY",
 link: ,
 route: "cinema/galaxy"
 },
 {
 title: "CGV CINEMA",
 link: "https://www.cgv.vn",
 route: "cinema/cgv"
 },
 {
 title: "BHD STAR CINEPLEX",
 link: "http://bhdstar.vn/",
 route: "cinema/bhd"
 }
 ];
 */
