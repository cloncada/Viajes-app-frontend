import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCityComponent } from './city/list-city/list-city.component';
import { ListTouristComponent } from './tourist/list-tourist/list-tourist.component';
import { AddTouristComponent } from './tourist/add-tourist/add-tourist.component';
import { AddCityComponent } from './city/add-city/add-city.component';
import { TouristInfoComponent } from './tourist/tourist-info/tourist-info.component';
import { EditTouristComponent } from './tourist/edit-tourist/edit-tourist.component';
import { CityInfoComponent } from './city/city-info/city-info.component';
import { EditCityComponent } from './city/edit-city/edit-city.component';
import { AddReservationComponent } from './reservation/add-reservation/add-reservation.component';

const routes: Routes = [
{path:'listarCiudades',component:ListCityComponent},
{path:'listarTuristas',component:ListTouristComponent},
{path:'anadirTurista',component:AddTouristComponent},
{path:'anadirCiudad',component:AddCityComponent},
{path:'turista',component:TouristInfoComponent},
{path:'editarTurista',component:EditTouristComponent},
{path:'ciudad',component: CityInfoComponent},
{path:'editarCiudad',component:EditCityComponent},
{path:'anadirReservacion',component:AddReservationComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
