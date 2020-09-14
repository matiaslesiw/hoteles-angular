import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Host } from 'src/domain/host';
import { HostServiceService } from 'src/services/HostService.service';
import { Habitacion } from 'src/domain/habitacion';
import { Reserva } from 'src/domain/reserva';
import { Servicio } from 'src/domain/servicio';

@Component({
  selector: 'app-alquiler',
  templateUrl: './alquiler.component.html',
  styleUrls: ['./alquiler.component.css']
})
export class AlquilerComponent implements OnInit {
  
   hosts: Host[]
   host: Host
   reserva: Reserva 
   
  constructor(private hostService: HostServiceService, private rutaActiva: ActivatedRoute) {
  
    
   
 }

  async ngOnInit() {
    
    this.hosts = this.hostService.hosts
    const idRuta= await this.rutaActiva.snapshot.params.id
    this.host = this.hosts.find(host => {
      return host.id === parseInt(idRuta)
    })
    
    this.reserva = new Reserva (this.host)
    
 
  }



}
