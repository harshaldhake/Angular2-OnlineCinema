import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cinema-galaxy',
  templateUrl: './galaxy-cinema.component.html',
  styleUrls: ['./galaxy-cinema.component.css']
})

export class GalaxyCinemaComponent implements OnInit {

  title: string;

  constructor() {
    this.title = "Galaxy Cinema";
  }

  ngOnInit(): void {
  }

}
