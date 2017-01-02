import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cinema-cgv',
  templateUrl: './cgv-cinema.component.html',
  styleUrls: ['./cgv-cinema.component.css']
})

export class CgvCinemaComponent implements OnInit {

  title: string;

  constructor() {
    this.title = "Cgv Cinema";
  }

  ngOnInit() {
  }
}
