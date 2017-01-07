import {Component, OnInit} from '@angular/core';
import {AngularFire} from "angularfire2";
import {MessagingService} from "./_services/messaging.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessagingService]
})
export class AppComponent {

  constructor(private af: AngularFire,
              private _msgService: MessagingService) {
    this._msgService.getToken();
  }
}
