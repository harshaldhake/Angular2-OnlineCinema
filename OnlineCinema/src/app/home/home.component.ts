import {Component, OnInit} from '@angular/core';
import {SlideShowService} from "../_services/slide-show.service";
import {SlideShow} from "../_models/slide-show";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [SlideShowService]
})
export class HomeComponent implements OnInit {

  galaxySlideShows: SlideShow[];
  cgvSlideShows: SlideShow[];
  constructor(private _slideShowService: SlideShowService) {
  }

  ngOnInit() {
    this.getSlideShowsOfGalaxy();
    this.getSlideShowsOfCGV();
  }

  getSlideShowsOfGalaxy() {
    this._slideShowService.getSlideByCinema("Galaxy")
      .subscribe(slideShows => {
          this.galaxySlideShows = slideShows
        },
        err => {
          console.log(err);
        }
      );
  }
  getSlideShowsOfCGV() {
    this._slideShowService.getSlideByCinema("CGV")
      .subscribe(slideShows => {
          this.cgvSlideShows = slideShows
        },
        err => {
          console.log(err);
        }
      );
  }
}
