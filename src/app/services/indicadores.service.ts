import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaIndicador } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class IndicadoresService {

  constructor(private http: HttpClient) { }

  getIndicadores() {
   return this.http.get<RespuestaIndicador>('https://mindicador.cl/api')
  }
}
