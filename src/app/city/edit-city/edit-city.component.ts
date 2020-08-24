
export interface City {
  id: string;
  name: string; 
  bestHotel: string;
  population:number;
  touristicSite:string;
  
}


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-city',
  templateUrl: './edit-city.component.html',
  styleUrls: ['./edit-city.component.css']
})
export class EditCityComponent implements OnInit {
city:City;
  constructor(private router:Router,private service: ServiceService) { }
  cityForm:FormGroup;
  ngOnInit(): void {
    this.cityForm=new FormGroup({
      name: new FormControl(),
      id: new FormControl(),
      bestHotel: new FormControl(),
      touristicSite:new FormControl(),
      population: new FormControl(),
      

    })
    this.service.getCity('http://localhost:8080/city/' + localStorage.getItem('idCity')).subscribe((res: any) => {
      this.city = JSON.parse(JSON.stringify(res));
     
    },
      error => {
        alert(JSON.stringify(JSON.parse(JSON.stringify(error)).error.message));
        // this.alertService.error(JSON.stringify(error));
      }
    )
  }

  onSubmit(): void {
  
if(confirm('Quiere editar  este turista?')){
  this.service.deleteCity(this.city.id).subscribe(res=>{
  })      

  this.service.createTourist("http://localhost:8080/addCity",this.cityForm.value).subscribe(data=>{
  alert("se ha actualizado  con exito...!");
this.router.navigate(["listarCiudades"]);

});
}


}
  }

