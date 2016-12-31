import {Component, OnInit} from '@angular/core';
import {FilmService} from "../_services/film.service";
import {Film} from "../_interfaces/film.interface";
import {TabMenu} from "../_interfaces/tab-menu";

@Component({
  selector: 'app-cinema-galaxy',
  templateUrl: './galaxy-cinema.component.html',
  styleUrls: ['./galaxy-cinema.component.css'],
  providers: [FilmService]
})

export class GalaxyCinemaComponent implements OnInit {

  title: string;
  films: Film[]; // Films

  constructor(private filmService: FilmService) {
    this.title = "Galaxy Cinema";
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
