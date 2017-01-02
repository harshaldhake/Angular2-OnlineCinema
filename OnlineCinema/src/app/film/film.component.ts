import {Component, OnInit, Input, Output, ViewChild} from '@angular/core';
import {Film} from "../_interfaces/film.interface";
import {FilmService} from "../_services/film.service";
import {TabMenu} from "../_interfaces/tab-menu";
import {ModalModule} from "ng2-bootstrap";

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css'],
  providers: [FilmService]
})
export class FilmComponent implements OnInit {

  // Film
  filmDetail: Film;
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

  getFilmById(id: string) {
    this._filmService.getFilmById(id)
      .subscribe(film => {
          this.filmDetail = film
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

  @Input() filmId: string = "";
  @Output() trailer: string = "";
  /*
   showTrailer(filmId) {
   this.filmId = filmId;
   /!*Promise.resolve(this.films.find(this.isAccepted).trailer).then(
   trailer => this.trailer = trailer
   );*!/
   this.trailer = this.films.find(this.isAccepted).trailer;
   }*/
  /*
   private isAccepted(film) {
   return film.id === this.filmId;
   }*/

  modalOpen() {

  }
}
