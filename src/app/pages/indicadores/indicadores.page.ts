import { Component, OnInit } from '@angular/core';
import { IndicadoresService } from '../../services/indicadores.service';

@Component({
  selector: 'app-indicadores',
  templateUrl: './indicadores.page.html',
  styleUrls: ['./indicadores.page.scss'],
})
export class IndicadoresPage implements OnInit {

  constructor(private indicadoresService: IndicadoresService) { }

  indicador = {}

  ngOnInit() {
    this.indicadoresService.getIndicadores()
      .subscribe( resp => {
        console.log('Indicador', resp  );

        this.indicador = { uf: resp.uf.valor, ipc:resp.ipc.valor, utm: resp.utm.valor };

        console.log('retorno', this.indicador  );
      });
  }

}
