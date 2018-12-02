import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController , ToastController} from 'ionic-angular';

import { HomePage } from '../home/home';
//import { FormBuilder, FormGroup } from '@angular/forms';
import { AboutPage } from '../about/about';

import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';




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
  public hideForm : boolean = false;
  public biodataHobi1: boolean;
  public biodataHobi2: boolean;
  public biodataHobi3: boolean;
	

  constructor(
    public navCtrl: NavController, 
    public toastCtrl: ToastController,
    public navParams: NavParams,
    public http: HttpClient,
    public fb: FormBuilder
  ) {
    this.form = fb.group({
      "username"          : ["", Validators.compose([Validators.required])],
      "mobile"         : ["", Validators.compose([Validators.required])],
      "email"           : ["", Validators.required],
      "password"        : ["", Validators.required],
      "confirmpassword"        : ["", Validators.required],
      
   });
  }

 onGoToRegister(){
    this.navCtrl.push(HomePage);
  }



  

  insertData(username: string, mobile : string, email : string, password : string, confirmpassword : string) : void
  {
      let headers  : any    = new HttpHeaders({ 'Content-Type': 'application/json' }),
          body     : any    = JSON.stringify({ "key" : "tambah", "username" : username, "mobile" : mobile, "email": email, "password": password, "confirmpassword": confirmpassword}),
          url      : any   = "http://localhost/ionic-crud/user-manage.php";

      this.http.post(url, body,headers)
      .subscribe((data) =>{
          this.hideForm = true;
          this.kirimNotif('Data anda telah disimpan');
        },(err : any) => {
          this.kirimNotif("Terjadi kesalahan saat menyimpan data");
      });
  }

  updateHobi1(){
    this.biodataHobi1;
  }

  updateHobi2(){
    this.biodataHobi2;
  }

  updateHobi3(){
    this.biodataHobi3;
  }
  
  register() : void{
    let username   : string = this.form.controls["username"].value,
        mobile  : string = this.form.controls["mobile"].value,
        email    : string = this.form.controls["email"].value,
        password    : string = this.form.controls["password"].value,
        confirmpassword    : string = this.form.controls["confirmpassword"].value

           
    this.insertData(username,mobile,email,password,confirmpassword);
  }

  kirimNotif(pesan : string): void {
    let notifikasi = this.toastCtrl.create({
      message       : pesan,
      position      : 'top',
      duration      : 3000
    });
    notifikasi.present();
  }


  

}
