import {Component, OnInit} from '@angular/core';
import {FilmService} from "../_services/film.service";
import {ShowTime, TimesInDay} from "../_models/show-time";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css'],
  providers: [FilmService]
})
export class FilmDetailComponent implements OnInit {

  filmId: string;
  showtimes: ShowTime[] = [];
  private cinemaName: string = 'Galaxy';

  constructor(private _filmService: FilmService,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.filmId = params['id'];
      this.getShowTime(this.filmId, this.cinemaName);
    });
  }

  getShowTimeByCinema(cinemaIndex: number) {
    if (cinemaIndex === 1) { // Galaxy
      this.cinemaName = 'Galaxy';
    }
    if (cinemaIndex === 2) { // cgv
      this.cinemaName = 'CGV';
    }
    this.getShowTime(this.filmId, this.cinemaName);
  }

  getShowTime(filmId: string, cinemaName: string) {
    this._filmService.getShowTime(filmId, cinemaName)
      .subscribe(showTimes => {
          this.showtimes = [];
          for (let branchCinema in showTimes) {
            let days: TimesInDay[] = [];
            for (let day in showTimes[branchCinema]) {
              let hours: string[] = showTimes[branchCinema][day];
              let tmp = new TimesInDay(day, hours);
              days.push(tmp);
            }
            let showtime = new ShowTime(
              branchCinema,
              days
            );
            this.showtimes.push(showtime);
          }
        },
        err => {
          console.log(err);
        }
      );
  }

}
