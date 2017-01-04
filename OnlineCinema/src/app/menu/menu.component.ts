import {Component, OnInit} from '@angular/core';
import {NavigationMenu} from "../_interfaces/navigation-menu.interface";
import {User} from "../_models/user";
import { AngularFire, AuthProviders } from 'angularfire2';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  navMenus: NavigationMenu[] = [
    {
      title: "KHUYẾN MÃI",
      active: true,
      link: ""
    },
    {
      title: "DANH SÁCH PHIM",
      active: false,
      link: "/film"
    },
    {
      title: "BẢN ĐỒ",
      active: false,
      link: "/map"
    },
    {
      title: "CHÚNG TÔI",
      active: false,
      link: "/about"
    },
    {
      title: "LIÊN HỆ",
      active: false,
      link: "/contact"
    }
  ];

  user: User;

  constructor(public af: AngularFire) {
    this.af.auth.subscribe(user => {
      if (user) {
        // user logged in
        this.user.uid = user.facebook.uid;
        this.user.displayName = user.facebook.displayName;
        this.user.email = user.facebook.email;
        this.user.photoURL = user.facebook.photoURL;
      }
      else {
        // user not logged in
      }
      console.log(this.user);
    });
  }

  ngOnInit() {
  }

  loginFacebook() {
    this.af.auth.login({
      provider: AuthProviders.Facebook
    });
  }

  /*

   logout() {
   this.af.auth.logout();
   }
   */

  clicked(index) {
    for (let i in this.navMenus) {
      this.navMenus[i].active = false;
    }
    this.navMenus[index].active = true;
  }
}
