export interface RespuestaIndicador {
  version: string;
  autor: string;
  fecha: string;
  uf: Uf;
  ivp: Uf;
  dolar: Uf;
  dolar_intercambio: Uf;
  euro: Uf;
  ipc: Uf;
  utm: Uf;
  imacec: Uf;
  tpm: Uf;
  libra_cobre: Uf;
  tasa_desempleo: Uf;
  bitcoin: Uf;
}

export interface Uf {
  codigo: string;
  nombre: string;
  unidad_medida: string;
  fecha: string;
  valor: number;
}