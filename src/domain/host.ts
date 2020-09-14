import { Habitacion } from './habitacion'
import { promise } from 'protractor'
import { Servicio } from './servicio'

export class Host {

    id: number
    nombre: string
    clasificacion: number
    provincia: string
    imagen: string
    habitaciones: Habitacion[]
    servicios: Servicio[]



    constructor(_id: number, _nombre: string, _clasificacion: number, _provincia: string, _imagen: string, _habitaciones: Habitacion[], _servicios: Servicio[]) {
        this.id = _id
        this.nombre = _nombre
        this.clasificacion = _clasificacion
        this.provincia = _provincia
        this.imagen = _imagen
        this.habitaciones = _habitaciones
        this.servicios = _servicios
    }



    get precioMinimo() {

        const precioMinimo = this.habitaciones.reduce((minimo, habitacion) => {
            if (minimo > habitacion.precio || minimo === 0) {
                minimo = habitacion.precio
            }
            return minimo

        }, 0)




        return precioMinimo

    }

    reinicio() {
        this.habitaciones.forEach(function(habitacion) {
            
            if (habitacion.ok === true) {
              habitacion.ok=false
            }
          })


          this.servicios.forEach(function(servicio) {
            
            if (servicio.ok === true) {
                servicio.ok=false
            }
          })
    }



}



