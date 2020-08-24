import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service';
import { Router } from '@angular/router';
export interface City {
  id: string;
  name: string; 
  bestHotel: string;
  population:number;
  touristicSite:string;
  
}
@Component({
  selector: 'app-city-info',
  templateUrl: './city-info.component.html',
  styleUrls: ['./city-info.component.css']
})
export class CityInfoComponent implements OnInit {
city:City;
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getCity('http://localhost:8080/city/' + localStorage.getItem('idCity')).subscribe((res: any) => {
      this.city = JSON.parse(JSON.stringify(res));
      console.log(this.city);
    },
      error => {
        alert(JSON.stringify(JSON.parse(JSON.stringify(error)).error.message));
        // this.alertService.error(JSON.stringify(error));
      }
    )
  }
  deleteTourist(){
    if(confirm('Quiere borrar esta ciudad?')){
      this.service.deleteCity(this.city.id).subscribe(res=>{
      })
      this.router.navigate(["listarCiudades"]);

    }

  }
  editTourist(){

    this.router.navigate(["editarCiudad"]);
  }
}
