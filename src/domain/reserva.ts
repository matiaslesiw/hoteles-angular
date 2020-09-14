import { Host } from './host'
import { Habitacion } from './habitacion'
import { Servicio } from './servicio'
import * as moment from 'moment';
import { Input } from '@angular/core';


export class Reserva {
 
  

    desde: any = {}
    hasta: any = {}
    host: Host
    total: number
    dias: number
    totalPagar:number


    constructor(_host: Host) {

        this.host = _host
    }

    cantidadDias() {

        return this.dias = (Date.parse(this.hasta) / 1000 / 60 / 60 / 24 - Date.parse(this.desde) / 1000 / 60 / 60 / 24)


    }

    totalServicio() {

        var totalServicio = this.host.servicios.reduce((acum, servicio) => {

            if (servicio.ok) { return acum + servicio.precio }
            else { return acum }
        }, 0)
        return totalServicio

    }

    habitacionDesignada() {

        var precioHabitacion = this.host.habitaciones.reduce((acum, habitacion) => {

            if (habitacion.ok) { return acum + habitacion.precio }
            else { return acum }
        }, 0)

        return precioHabitacion

    }

    get precioTotal() {

        if (isNaN(this.totalServicio() + this.cantidadDias() * this.habitacionDesignada())) {
            return 0
        } else {

            return  this.totalPagar=this.cantidadDias() *this.totalServicio() + this.cantidadDias() * this.habitacionDesignada()
        }


    }

    tiempoDeBaja() {
        var hoy = new Date().toISOString()
        
        var falta =(Date.parse(this.desde)/1000/60/60/24)-(Date.parse(hoy)/1000/60/60/24)
        
        if (falta>=7){return true }
        
        else {return false }

      }



    

}
