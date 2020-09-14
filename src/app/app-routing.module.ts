import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/componentes/home/home.component';
import { AppComponent } from './app.component';
import { AlquilerComponent } from 'src/componentes/alquiler/alquiler.component';
import { EstadiaComponent } from 'src/componentes/estadia/estadia.component';
import { ReservasUsuarioComponent } from 'src/componentes/reservasUsuario/reservasUsuario.component';


export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'hotel/:id', component: AlquilerComponent},
  {path: 'reserva', component: EstadiaComponent},
  {path: 'misReservas', component: ReservasUsuarioComponent},
  { path: '**', redirectTo: '/home', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  AppComponent,
  HomeComponent,
  AlquilerComponent ,
  EstadiaComponent,
  ReservasUsuarioComponent

]