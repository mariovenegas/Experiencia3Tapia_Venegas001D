import { Component, OnInit } from '@angular/core';
import { BasedatosService } from '../../services/basedatos.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-salir',
  templateUrl: './salir.page.html',
  styleUrls: ['./salir.page.scss'],
})
export class SalirPage implements OnInit {

  constructor(private usuarioService: BasedatosService,
              private navCtrl: NavController, ) { }

  ngOnInit() {
    this.usuarioService.logout(); 
    this.navCtrl.navigateRoot( 'ingreso',{animated: true } );
  }



}
