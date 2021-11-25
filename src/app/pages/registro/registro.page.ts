import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BasedatosService, Trabajador } from '../../services/basedatos.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ToastController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  datos: Trabajador[] = [];
  newDato: Trabajador = <Trabajador>{};

  constructor(
    private baseDatosService: BasedatosService,
    private toastController: ToastController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  registro( fRegistro: NgForm ){      
    this.baseDatosService.addTrabajador(this.newDato).then(dato=>{
      this.newDato = <Trabajador>{};

    });
    this.showToast("Usuario registrado.");
    this.navCtrl.navigateRoot( 'ingreso',{animated: true } );

    
  }
  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg, 
      duration: 2000
    });
    toast.present();
  }
  cancelar(){
    this.navCtrl.navigateRoot( 'ingreso',{animated: true } );

  }

}
