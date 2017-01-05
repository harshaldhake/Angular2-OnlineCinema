import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cinemas: string[] = ['Galaxy', 'CGV'];

  constructor() { }

  ngOnInit() {
    // window.open('http://www.stackoverflow.com', '_blank', 'width=500, height=400')
  }

}
