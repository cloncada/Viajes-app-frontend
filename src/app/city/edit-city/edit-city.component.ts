import { Component, OnInit } from '@angular/core';
export interface City {
  id: string;
  name: string; 
  bestHotel: string;
  population:number;
  touristicSite:string;
  
}
@Component({
  selector: 'app-edit-city',
  templateUrl: './edit-city.component.html',
  styleUrls: ['./edit-city.component.css']
})
export class EditCityComponent implements OnInit {
city:City;
  constructor() { }

  ngOnInit(): void {
    
  }

}
