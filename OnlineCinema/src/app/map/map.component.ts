import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  zoom: number = 17;
  lat: number = 10.773226;
  lng: number = 106.692945;

  cinemaMarkers: CinemaMarker[] = [
    {
      name: "Galaxy Nguyễn Du",
      lat: 10.773226,
      lng: 106.692945,
      draggable: true,
      iconUrl: "http://hkd.com.vn/ckfinder/userfiles/images/DU%20AN/26-3.png"
    },
    {
      name: "Galaxy Tân Bình",
      lat: 10.790238,
      lng: 106.640733,
      draggable: true,
      iconUrl: "http://hkd.com.vn/ckfinder/userfiles/images/DU%20AN/26-3.png"
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
export interface CinemaMarker {
  name: string;
  lat: number;
  lng: number;
  draggable: boolean;
  iconUrl: string;
}
