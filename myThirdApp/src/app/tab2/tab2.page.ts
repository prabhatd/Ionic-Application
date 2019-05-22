import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(public loadingController: LoadingController){}

  async presentLoading(){
 const loading = await this.loadingController.create({
   message:'Hello From Prabhat',
   duration :2000
 });
 await loading.present();

 const {role,data}=await loading.onDidDismiss();

 console.log("loading dismissed!");
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 5000,
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }
}
