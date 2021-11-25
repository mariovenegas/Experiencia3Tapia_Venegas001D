import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BasedatosService } from '../services/basedatos.service';

@Injectable({
  providedIn: 'root'
})

export class GuardGuard  implements CanActivate{

  constructor(public baseDatos:BasedatosService){}

  async  canActivate(): Promise<boolean>
  {
    return await this.baseDatos.validaSesion();
  }
  
}
