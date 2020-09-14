import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from 'src/componentes/home/home.component';
import { HotelComponent } from 'src/componentes/hotel/hotel.component';
import { AlquilerComponent } from 'src/componentes/alquiler/alquiler.component';
import { HabitacionesComponent } from 'src/componentes/habitaciones/habitaciones.component';
import { ServiciosComponent } from 'src/componentes/servicios/servicios.component';
import { ReservaComponent } from 'src/componentes/reserva/reserva.component';
import { EstadiaComponent } from 'src/componentes/estadia/estadia.component';
import { ReservasUsuarioComponent } from 'src/componentes/reservasUsuario/reservasUsuario.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HotelComponent,
    AlquilerComponent,
    HabitacionesComponent,
    ReservaComponent,
    ServiciosComponent,
    EstadiaComponent,
    ReservasUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    FormsModule, 
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    
    ReactiveFormsModule
   
   
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
