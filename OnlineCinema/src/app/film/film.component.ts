import {Component, OnInit} from '@angular/core';
import {Film} from "../_models/film";
import {FilmService} from "../_services/film.service";
import {TabMenu} from "../_interfaces/tab-menu.interface";

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css'],
  providers: [FilmService]
})
export class FilmComponent implements OnInit {

  films: Film[];

  constructor(private _filmService: FilmService) {

  }

  ngOnInit() {
    this.getFilms();
  }

  getFilms() {
    this._filmService.getFilms()
      .subscribe(films => {
          this.films = films
        },
        err => {
          console.log(err);
        }
      );
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
