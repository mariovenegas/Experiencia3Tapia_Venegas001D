import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GuardGuard } from './services/guard.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ingreso',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate: [GuardGuard]
  },
  {
    path: 'ingreso',
    loadChildren: () => import('./pages/ingreso/ingreso.module').then( m => m.IngresoPageModule)
  },
  {
    path: 'mural',
    loadChildren: () => import('./pages/mural/mural.module').then( m => m.MuralPageModule),
    canActivate: [GuardGuard]
  },
  {
    path: 'salir',
    loadChildren: () => import('./pages/salir/salir.module').then( m => m.SalirPageModule)
  },
  {
    path: 'indicadores',
    loadChildren: () => import('./pages/indicadores/indicadores.module').then( m => m.IndicadoresPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
