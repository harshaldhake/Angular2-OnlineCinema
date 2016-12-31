import {Component, OnInit} from '@angular/core';
import {NavigationMenu} from "../_interfaces/navigation-menu.interface";

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

  constructor() {

  }

  ngOnInit() {
  }

  clicked(index) {
    for (let i in this.navMenus) {
      this.navMenus[i].active = false;
    }
    this.navMenus[index].active = true;
  }
}
