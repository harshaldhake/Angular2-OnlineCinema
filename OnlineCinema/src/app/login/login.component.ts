import {Component, OnInit} from '@angular/core';
import {User} from "../_models/user";
import {AngularFire, AuthProviders} from 'angularfire2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  isLogin: boolean;

  constructor(public af: AngularFire) {
    this.user = new User();
  }

  ngOnInit() {
    this.af.auth.subscribe(user => {
      console.log(user);
      if (user) {
        this.user.uid = user.facebook.uid;
        this.user.displayName = user.facebook.displayName;
        this.user.email = user.facebook.email;
        this.user.photoURL = user.facebook.photoURL;
        this.user.refreshToken = user.auth.refreshToken;
        this.isLogin = true;
      }
      else {
        this.isLogin = false;
      }
    });
  }

  loginFacebook() {
    this.af.auth.login({
      provider: AuthProviders.Facebook
    });
  }

  logout() {
    this.af.auth.logout();
  }
}
