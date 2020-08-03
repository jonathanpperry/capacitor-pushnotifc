import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { AuthService } from "src/app/services/auth.service";

import * as firebase from "firebase";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  user = { displayName: null };

  constructor(public authService: AuthService, private navCtrl: NavController) {
    this.user = firebase.auth().currentUser;
  }
  ngOnInit() {
    this.authService.loggedIn.subscribe((status) => {
      if (!status) {
        this.navCtrl.navigateBack("/login");
      }
    });
  }
}
