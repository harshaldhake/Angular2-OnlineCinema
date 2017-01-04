import {Component, OnInit} from '@angular/core';
import {MarkerService} from '../_services/marker.service'
import {Marker} from "../_models/maker-storage";
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [MarkerService]
})
export class MapComponent implements OnInit {

  zoom: number = 17; // Zoom level

  // Start position
  lat: number = 10.773226;
  lng: number = 106.692945;

  markers: Marker[];

  constructor(private _markerService: MarkerService) {
    this.markers = this._markerService.getMarkers();
    console.log(this.markers);
  }

  ngOnInit() {
  }

  getMarker(id: number) {
    console.log(id);

  }

  mapClick($event: any) {

  }

  clickedMarker(marker: Marker, index: number) {
    console.log(marker.name + " " + index);
  }

  markerDragEnd(marker: Marker, $event) {

  }
}
