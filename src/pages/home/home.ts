import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';




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
  
}
