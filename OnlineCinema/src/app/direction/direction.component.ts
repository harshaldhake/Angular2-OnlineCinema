import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-direction',
  templateUrl: 'app/direction/direction.component.html',
  styleUrls: ['app/direction/direction.component.css']
})
export class DirectionComponent implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor() {
  }

  ngOnInit() {
  }

}
