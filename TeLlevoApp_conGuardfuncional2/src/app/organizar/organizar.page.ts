import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@capacitor/storage';
import { Router } from '@angular/router';


@Component({
  selector: 'app-organizar',
  templateUrl: './organizar.page.html',
  styleUrls: ['./organizar.page.scss'],
})
export class OrganizarPage implements OnInit {

  usuario: any ={
    asientos: "",
    destino:"",
    hora_salida:"",
    patente:"",
    numero:""
  }

  constructor(private toastController: ToastController, public router:Router) { }


  ingresar(){

    var infoJson = JSON.stringify(this.usuario);

    Storage.set({key: 'usuario', value:infoJson});
    Storage.set({key: 'logeado', value: 'ok'})
    console.log('se guardaron datos del usuario');

    this.router.navigate(['/buscar-viaje']);
  }

  ngOnInit() {
  }

 

}
