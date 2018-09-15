import { Component,ViewChild } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import {RegisterPage} from '../register/register';
import {HomePage} from '../homepage/homepage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  @ViewChild('username') uname;
  @ViewChild('password') password;

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }
  signIn(){
  	if(this.uname.value=="admin" && this.password.value=="admin"){
  		const alert = this.alertCtrl.create({
	      title: 'Login!',
	      subTitle: 'Successful!',
	      buttons: ['OK']
	    });
	    alert.present();
      }
      this.navCtrl.push(HomePage);
  }
  register(){
  	this.navCtrl.push(RegisterPage);
  }

}
