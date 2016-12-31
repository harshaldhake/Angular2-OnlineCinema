import {Component, OnInit} from '@angular/core';
import {NavigationMenu} from "../_interfaces/navigation-menu.interface";
import {AngularFire, AuthProviders} from "angularfire2";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  navMenus: NavigationMenu[] = [
    {
      title: "Home",
      active: true,
      link: "/home"
    },
    {
      title: "Films",
      active: false,
      link: "/film"
    },
    {
      title: "Map",
      active: false,
      link: "/map"
    },
    {
      title: "About Us",
      active: false,
      link: "/about"
    },
    {
      title: "Contact Us",
      active: false,
      link: "/contact"
    }
  ];

  user = {};

  constructor(public af: AngularFire) {
    this.af.auth.subscribe(user => {
      if (user) {
        this.user = user;
      }
      else {
        this.user = {};
      }
    });
  }

  ngOnInit() {
  }

  loginFacebook() {
    this.af.auth.login({
      provider: AuthProviders.Facebook
    });
  }

  logout() {
    this.af.auth.logout();
  }
  clicked(index) {
    for (let i in this.navMenus) {
      this.navMenus[i].active = false;
    }
    this.navMenus[index].active = true;
  }
}
