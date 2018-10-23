import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AboutPage } from '../about/about';



/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
	
	myphoto:any;
  public form : FormGroup;
	

  constructor(public navCtrl: NavController, public navParams: NavParams) {


}

 
 
  	
 

 
  onGoToRegister(){
    this.navCtrl.push(AboutPage);
  }

  

}
