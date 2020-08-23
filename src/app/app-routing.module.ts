import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCityComponent } from './city/list-city/list-city.component';
import { ListTouristComponent } from './tourist/list-tourist/list-tourist.component';
import { AddTouristComponent } from './tourist/add-tourist/add-tourist.component';

const routes: Routes = [
{path:'listarCiudades',component:ListCityComponent},
{path:'listarTuristas',component:ListTouristComponent},
{path:'anadirTurista',component:AddTouristComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
