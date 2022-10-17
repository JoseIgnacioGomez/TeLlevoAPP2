import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-organizar',
  templateUrl: './organizar.page.html',
  styleUrls: ['./organizar.page.scss'],
})
export class OrganizarPage implements OnInit {

  constructor(private toastController: ToastController) {}
  async presentToast(position:'bottom') {
    const toast = await this.toastController.create({
      message: '¡Viaje Creado!',
      duration: 1500,
      position: position
    });

    await toast.present();
  }
  ngOnInit() {
  }

}
