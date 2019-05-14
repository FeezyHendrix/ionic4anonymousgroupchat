import { Component } from '@angular/core';
import { CometchatService } from '../services/cometchat.service';
import { Router } from '@angular/router';
import { NavController, LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    constructor(private cometChat: CometchatService, private router: NavController, private loadCtrl: LoadingController,
                private toastCtrl: ToastController) {

    }

  async login(username) {
    const loader = await this.loadCtrl.create({
      message: 'Loading..'
    });
    loader.present();
    this.cometChat.login(username).then(() => {
      loader.dismiss();
      this.router.navigateForward('/chat');
    }).catch(async (err) => {
      const toast = await this.toastCtrl.create({
        message: 'Username does not exist',
        duration: 3000
      });
      toast.present();
    });
  }
}
