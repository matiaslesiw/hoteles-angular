import { Reserva } from './reserva';

export class Usuario {
 
 reservas: Reserva[]=[]
    nombre: string
 
    nuevaReserva(reserva: Reserva) {
    this.reservas.push(reserva)
  }
    
}
