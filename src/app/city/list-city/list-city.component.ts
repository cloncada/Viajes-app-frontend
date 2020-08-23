import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService} from '../../Service/service.service';
export interface cityList {
  id: string;
  name: string; 
  bestHotel: string;
  population:number;
  touristicSite:string;
  
}
@Component({
  selector: 'app-list-city',
  templateUrl: './list-city.component.html',
  styleUrls: ['./list-city.component.css']
})
export class ListCityComponent implements OnInit {

  constructor(private service:ServiceService, private router:Router) { }
  cities:cityList[]= [];
  id:any;
  
  ngOnInit(): void {
    
    this.service.getCities('http://localhost:8080/cities').subscribe((res:any)=>{
    this.cities=JSON.parse(JSON.stringify(res));
    


console.log(this.cities);
},
error => {
  alert(JSON.stringify(JSON.parse(JSON.stringify(error)).error.message));
  // this.alertService.error(JSON.stringify(error));
 }
)
  }
}
