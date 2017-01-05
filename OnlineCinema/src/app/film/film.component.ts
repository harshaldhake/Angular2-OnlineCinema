import {Component, OnInit} from '@angular/core';
import {Film} from "../_models/film";
import {FilmService} from "../_services/film.service";
import {TabMenu} from "../_interfaces/tab-menu.interface";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css'],
  providers: [FilmService]
})
export class FilmComponent implements OnInit {

  films: Film[];
  trailerUrl: SafeResourceUrl;

  constructor(private _filmService: FilmService,
              private sanitizer: DomSanitizer) {

  }

  ngOnInit() {
    this.getFilmsShowing();
  }

  getFilmsShowing() {
    this._filmService.getFilmsShowing()
      .subscribe(films => {
          this.films = films
        },
        err => {
          console.log(err);
        }
      );
  }

  getFilmsCommingSoon() {
    this._filmService.getFilmsCommingSoon()
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
    if (index === 0) {
      this.getFilmsShowing();
    }
    if (index === 1) {
      this.getFilmsCommingSoon();
    }
  }

  getTrailer(trailer: string) {
    this.trailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(trailer);
  }
}
