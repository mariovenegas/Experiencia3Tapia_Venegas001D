import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Trabajador{
  nombre: string; 
  email: string; 
  labor: string;
  descripcion: string;
  clave: string;
}

const TRABAJADORES_KEY = 'trabajadores';

@Injectable({
  providedIn: 'root'
})
export class BasedatosService {
  private _storage : Storage;
  email: string = null;

  constructor( private storage: Storage ) {
    this.init();
   }
  async init(){
    const storage = await this.storage.create();
    this._storage = storage;
  }

  async validaSesion(){
    this.email = await this.storage.get('email')  || null;
    console.log(this.email);

    if (this.email){
      return Promise.resolve(true);
    }
    else {
      return Promise.resolve(false);
    }

  }

  login( email:string, password: string) {


    if( email == 'mario@gmail.com' && password == '1234')
    {
      this.guardarUsuario(email);
      return true;
    }
    else {
      this.email = null;
      this.storage.remove('email');
      return false;
    }
  }


  async guardarUsuario (email: string) {
    this.email = email;
    await this.storage.set('email', email);
  }
  async eliminarUsuario () {
    this.email = null;
    this.storage.remove('email');
  }

  logout() {
    this.storage.remove('email');

  }

  addTrabajador(dato: Trabajador):Promise<any>{
    return this.storage.get(TRABAJADORES_KEY).then((datos : Trabajador[])=>{
       if (datos) {
         datos.push(dato);
         return this.storage.set(TRABAJADORES_KEY, datos);
       }else {
         return this.storage.set(TRABAJADORES_KEY, [dato]);
       }
 
     })
   }


   getTrabajadores(): Promise<Trabajador[]>{
    return this.storage.get(TRABAJADORES_KEY);
  }

}
