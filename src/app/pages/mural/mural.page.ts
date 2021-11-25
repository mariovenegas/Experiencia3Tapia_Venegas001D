import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BasedatosService, Trabajador } from '../../services/basedatos.service';
import { Platform, ToastController, IonList} from '@ionic/angular';


@Component({
  selector: 'app-mural',
  templateUrl: './mural.page.html',
  styleUrls: ['./mural.page.scss'],
})
export class MuralPage implements OnInit {
  datos: Trabajador[] = [];
  newDato: Trabajador = <Trabajador>{};

  @ViewChild('myList')myList :IonList; 

  constructor(private modalCtrl: ModalController, 
              private baseDatosService: BasedatosService, 
              private plt: Platform, 
              private toastController: ToastController) { 
    this.plt.ready().then(()=>{
      this.loadDatos();
    });
  }

  ngOnInit() { 
  }


  loadDatos(){
    this.baseDatosService.getTrabajadores().then(datos=>{
      this.datos=datos;
    });
  }

  addTrabajador(){
    this.baseDatosService.addTrabajador(this.newDato).then(dato=>{
      this.newDato = <Trabajador>{};
      this.showToast('!Datos Agregados');
      this.loadDatos();
    });
  }
  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg, 
      duration: 2000
    });
    toast.present();
  }

}
