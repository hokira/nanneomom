import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserserviceProvider } from '../../providers/userservice/userservice'
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  gender: string = null;
  childAge: number = null;

  constructor(public alertCtrl: AlertController, public userServiceProvider: UserserviceProvider, public navCtrl: NavController, public navParams: NavParams) {
    let name = this.userServiceProvider.getName();

    let alert = this.alertCtrl.create({
      title: 'Welcome!',
      subTitle: 'Hi ' + name + ", let's begin with some basic information.",
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
    console.log('gender=' + this.gender)
  }

  inputValid() {
    if (this.gender == null || this.childAge == null) { return false; }
    return true;
  }

  doneClicked(event) {
    if(!this.inputValid()) {
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: "Some fields are missing, plesae provide all basic information.",
        buttons: ['OK']
      });
      alert.present();  
    } else {
      console.log("nice!");
    }
  }

}
