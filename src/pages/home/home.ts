import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { CameraPage } from '../camera/camera';
import { WelcomePage } from '../welcome/welcome';





@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  

  constructor(public navCtrl: NavController) {

  }
  onGoToLogin(){
   this.navCtrl.push(LoginPage);     
  }
  onGoToRegister(){
    this.navCtrl.push(RegisterPage);
  }
  openPage2(camera){
    this.navCtrl.push(CameraPage);
  }

  onGoTologout(){
    this.navCtrl.push(WelcomePage);
  }

  
}
