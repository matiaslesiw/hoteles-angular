import { Injectable } from '@angular/core';
import { Host } from 'src/domain/host';
import { stringify } from 'querystring';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Habitacion } from 'src/domain/habitacion';
import { Servicio } from 'src/domain/servicio';
import { Reserva } from 'src/domain/reserva';
import { Usuario } from 'src/domain/usuario';
import { TouchSequence } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class HostServiceService {

hosts: Host[]=[]
usuario = new Usuario

constructor() {
  const Ecox2 = new Habitacion(1,'Económica para dos',2000)
  const Ecox3=  new Habitacion(2,'Económica para tres',3000)
  const Esx2=new Habitacion(3,'Estándar para dos',3500)
  const Esx4=new Habitacion(4,'Estándar para cuatro',5000)
  const Lux2=new Habitacion(5,'Lujo para dos',4000)
  const Lux4= new Habitacion(6,'Lujo para cuatro',6000)
  const Px2 =new Habitacion(7,'Paraiso para dos',8000)

  const serv1 = new Servicio(1,'Desayuno',500)
  const serv2=  new Servicio(2,'Masajes diurnos',700)
  const serv3=new Servicio(3,'Sorpresas',1500)
  const serv4=new Servicio(4,'Cochera',300)
  
  const habs1: Habitacion[]=[Ecox2,Esx2,Lux2,Lux4]
  const habs2: Habitacion[]=[Esx2,Esx4,Lux4,Px2]
  const habs3: Habitacion[]=[Esx2,Esx4,Lux2,Px2]
  const habs4: Habitacion[]=[Ecox2,Ecox3,Esx2,Esx4]
  const habs5: Habitacion[]=[Ecox2,Ecox3]
  const servicios: Servicio[]=[serv1,serv2,serv3,serv4]

  const hotel1 = new Host(1,'Huemul',3,'Santa Cruz','https://q-cf.bstatic.com/images/hotel/max1024x768/190/19079296.jpg',habs1,servicios)
  const hotel2 = new Host(2,'Alvear Palace Hotel',5,'CABA','https://d1rioy1v9s51jr.cloudfront.net/pics/4729/900x540/alvear-palace-hotel-2_2676.jpg',habs2,servicios)
  const hotel3 = new Host(3,'Iguazú Grand Resort',4,'Misiones','https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/itemimages/11/85/1185474_v3.jpeg',habs3,servicios)
  const hotel4 = new Host(4,'Cabañita',2,'Tucumán','https://sopaderelatos.com/wp-content/uploads/2014/02/Hotel-de-mala-muerte.jpg',habs4,servicios)
  const hotel5 = new Host(5,'The vale hotel',1,'Neuquén','https://media.biobiochile.cl/wp-content/uploads/2018/09/hotel4-750x400.jpg',habs5,servicios)
  this.hosts.push(hotel1,hotel2,hotel3,hotel4,hotel5)

  const reserva1 = new Reserva (hotel1)
  reserva1.dias=7
  reserva1.totalPagar=50000
  reserva1.desde='2019-12-24'
  reserva1.hasta='2019-12-31'
  const reserva2 = new Reserva (hotel2)
  reserva2.dias=4
  reserva2.totalPagar=35000
  reserva2.desde='2019-11-24'
  reserva2.hasta='2019-11-28'
  this.usuario.reservas.push(reserva1,reserva2)

}



 }




