import { Component, OnInit } from '@angular/core';
import { HostServiceService } from 'src/services/HostService.service';
import { Usuario } from 'src/domain/usuario';
import { Reserva } from 'src/domain/reserva';

@Component({
  selector: 'app-reservasUsuario',
  templateUrl: './reservasUsuario.component.html',
  styleUrls: ['./reservasUsuario.component.css']
})
export class ReservasUsuarioComponent implements OnInit {

  usuario: Usuario
 

  constructor(private hostService: HostServiceService) { 
    


  }

  async ngOnInit() {
    this.usuario=this.hostService.usuario
    


  }

}
