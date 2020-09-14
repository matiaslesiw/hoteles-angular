import { Component, OnInit, Input } from '@angular/core';
import { Habitacion } from 'src/domain/habitacion';
import { Reserva } from 'src/domain/reserva';
import { HostServiceService } from 'src/services/HostService.service';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css']
})
export class HabitacionesComponent implements OnInit {
  
  @Input() habitaciones: Habitacion[] 
  @Input() reserva: Reserva
  min: Date = new Date()
  
  
  
  constructor() { 
    
  }

  ngOnInit() {
  }
   
  nuevaHabitacion(event){
    var target = event.target



  }
   


  

}
