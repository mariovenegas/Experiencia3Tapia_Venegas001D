import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';


interface Componente {
  icon: string;
  name: string;
  redirectTo: string; 
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  componentes: Componente[] = [

    {
      icon: 'arrow-undo-sharp',
      name: 'Salir',
      redirectTo: '/salir'
    },
    {
      icon: 'reader-outline',
      name: 'Mural',
      redirectTo: '/mural'
    },
    {
      icon: 'home-outline',
      name: 'Inicio',
      redirectTo: '/inicio'
    },
    {
      icon: 'newspaper-outline',
      name: 'Indicadores',
      redirectTo: '/indicadores'
    },
   ];
  constructor() {}
  
}
