import { Component, OnInit, Input } from '@angular/core';
import { Host } from 'src/domain/host';
import { Reserva } from 'src/domain/reserva';
import { Habitacion } from 'src/domain/habitacion';
import { Router } from '@angular/router';
import { Usuario } from 'src/domain/usuario';
import { HostServiceService } from 'src/services/HostService.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {
  
  @Input() host: Host 
  @Input() reserva: Reserva 
  desde: any
  hasta: any
  usuario: Usuario;
 
  constructor(private hostService: HostServiceService,private router: Router) {
    this.usuario = hostService.usuario
   }
  
  ngOnInit() {}
  
  get minimo(){ 
    var hoy = new Date().toISOString().slice(0,10);
    return hoy
 }

 get maximo(){ 
  var hoy = new Date('2020-12-31').toISOString().slice(0,10);
  return hoy
}

reservar(){

  this.usuario.nuevaReserva(this.reserva)
  this.host.reinicio()
  this.router.navigate(['home'])

}

validacion(){

  if (this.reserva.precioTotal>0){
    return true
  } else {return false}

}
  



 

}
