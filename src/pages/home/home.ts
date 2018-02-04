import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UserserviceProvider } from '../../providers/userservice/userservice'
import { WelcomePage } from '../../pages/welcome/welcome'
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {


  constructor(public alertCtrl: AlertController,
    public userServiceProvider: UserserviceProvider,
    public navCtrl: NavController) {
  }

  loginFacebook() {
    this.userServiceProvider.loginFacebook(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
        let alert = this.alertCtrl.create({
          title: 'Login failed!',
          buttons: ['OK']
        });
        alert.present();
      }
    )
  }

  loginGoogle() {
    this.userServiceProvider.loginGoogle(
      res => {
        console.log(res);
        this.navCtrl.push(WelcomePage)
      },
      err => {
        console.log(err);
        let alert = this.alertCtrl.create({
          title: 'Login failed!',
          buttons: ['OK']
        });
        alert.present();
      }
    )
  }

  logout() {
    this.userServiceProvider.logout()
      .then(res => {
        console.log('---log out result---')
        console.log(res)
      })
  }


}
