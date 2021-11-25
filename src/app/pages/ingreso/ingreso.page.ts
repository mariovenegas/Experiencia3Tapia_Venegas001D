import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BasedatosService, Trabajador } from '../../services/basedatos.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})
export class IngresoPage implements OnInit {
  datos: Trabajador[] = [];
  exito: Boolean; 
  usuario:any={
    email: '',
    password:''
  }



  constructor(private baseDatos: BasedatosService,
    private navCtrl: NavController, 
    private storage: Storage,
    public alertController: AlertController,
    public toastController: ToastController,
     ) { }

  ngOnInit() {} 



  login( fLogin: NgForm ){
    console.log('aqui');
    this.baseDatos.getTrabajadores().then(datos=>{
      this.datos=datos;
      console.log(this.datos);
      this.exito= false;
      for ( var i=0; i<this.datos.length;i++){
        console.log(this.datos[i].email + ' ' + this.datos[i].clave);
        if (this.usuario.email== this.datos[i].email && this.usuario.password== this.datos[i].clave)
        {
          this.exito=true;

        } 
      }
      if( this.exito==true)
      {
        
        this.presentToast("Bienvenido " + this.usuario.email);
        this.baseDatos.guardarUsuario(this.usuario.email);
        this.navCtrl.navigateRoot( 'inicio',{animated: true } );
      }
      else{
          this.presentToast("Error de ingreso.");
          this.baseDatos.eliminarUsuario();
          this.navCtrl.navigateRoot( 'ingreso',{animated: true } );
        
      }


    });




    
  }


  registrar( ){
      this.navCtrl.navigateRoot( 'registro',{animated: true } );
  }

 
  async presentToast(message:string, duration?:number){
    const toast = await this.toastController.create(
      {
        message:message,
        duration:duration?duration:2000
      }
    );
    toast.present();
  }
}
