import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WelcomePage } from './welcome';
import { UserserviceProvider } from '../../providers/userservice/userservice'


@NgModule({
  declarations: [
    WelcomePage,
  ],
  imports: [
    IonicPageModule.forChild(WelcomePage),
  ],
  providers: [
    //UserserviceProvider,
  ]

})
export class WelcomePageModule { }
