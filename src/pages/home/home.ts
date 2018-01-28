import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  facebook = {
    signedin: false,
    name: '',
    email: ''
  }

  google = {
    signedin: false,
    name: '',
    email: ''
  }

  constructor(private fireAuth: AngularFireAuth, public navCtrl: NavController) {

  }

  loginFacebook() {
    console.log('signin')
    this.fireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then(res => {
      console.log('---from facebook---')
      console.log(res);
    })
  }

  loginGoogle() {
    this.fireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(res => {
      console.log('---from google---')
      console.log(res)
    })
  }

  logout() {
    this.fireAuth.auth.signOut()
    .then(res => {
      console.log('---log out result---')
      console.log(res)
    })
  }


}
