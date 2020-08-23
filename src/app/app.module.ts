import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListCityComponent } from './city/list-city/list-city.component';
import { ListTouristComponent } from './tourist/list-tourist/list-tourist.component';
import { HttpClientModule } from '@angular/common/http';
import { AddTouristComponent } from './tourist/add-tourist/add-tourist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCityComponent } from './city/add-city/add-city.component';
import { DeleteTouristComponent } from './tourist/delete-tourist/delete-tourist.component';
import { TouristInfoComponent } from './tourist/tourist-info/tourist-info.component';
import { EditTouristComponent } from './tourist/edit-tourist/edit-tourist.component';
import { EditCityComponent } from './city/edit-city/edit-city.component';
import { CityInfoComponent } from './city/city-info/city-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCityComponent,
    ListTouristComponent,
    AddTouristComponent,
    AddCityComponent,
    DeleteTouristComponent,
    TouristInfoComponent,
    EditTouristComponent,
    EditCityComponent,
    CityInfoComponent,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
