import { Component, OnInit, Input } from '@angular/core';
import { Reserva } from 'src/domain/reserva';
import { Usuario } from 'src/domain/usuario';

@Component({
  selector: 'app-estadia',
  templateUrl: './estadia.component.html',
  styleUrls: ['./estadia.component.css']
})
export class EstadiaComponent implements OnInit {

  @Input() reserva: Reserva
  @Input() usuario: Usuario

  constructor() { }

  ngOnInit() {
  }

  dorado(val: number) {
    if (val <= this.reserva.host.clasificacion) {
      return 'dorado'
    }

  }

  darBaja() {

    return this.reserva.tiempoDeBaja()

  }
  baja() {

    for( var i = 0; i < this.usuario.reservas.length; i++){ 
      if ( this.usuario.reservas[i] === this.reserva) {
        this.usuario.reservas.splice(i,1); 
      }
   
  
 }


   }

}
