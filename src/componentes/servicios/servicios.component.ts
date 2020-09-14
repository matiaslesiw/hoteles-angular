import { Component, OnInit, Input } from '@angular/core';
import { Servicio } from 'src/domain/servicio';
import { Reserva } from 'src/domain/reserva';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  
  @Input() servicios: Servicio[]
  @Input() reserva: Reserva 
 
  constructor() { }

  ngOnInit() {
    
  }

  

 
}
