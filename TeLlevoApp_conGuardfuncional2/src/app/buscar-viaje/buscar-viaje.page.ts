import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-buscar-viaje',
  templateUrl: './buscar-viaje.page.html',
  styleUrls: ['./buscar-viaje.page.scss'],
})
export class BuscarViajePage implements OnInit {

  constructor(private toastController: ToastController) { }

  ngOnInit() {
  }

  verDatos(){

    Storage.get({key: 'usuario'}).then((valor)=> {

      var objeto = JSON.parse(valor.value);
      console.log(objeto);

    });
     
  }
    
}
