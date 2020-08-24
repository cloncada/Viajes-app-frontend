import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service';
import { Router } from '@angular/router';
export interface Tourist {
  id: string;
  name: string;
  creditCard: boolean;
  destiny: string;
  estimate: number;
  idType: number;
  travelFrequency: string;
  dob: Date;
}
export interface Reservation {
  id: number;
  city: string;
  touristId: string;
  date: string;
  cityName: number;
 
}
@Component({
  selector: 'app-tourist-info',
  templateUrl: './tourist-info.component.html',
  styleUrls: ['./tourist-info.component.css']
})
export class TouristInfoComponent implements OnInit {
  tourist: Tourist;
  reservations: Reservation[] = [];
  
  
id=localStorage.getItem('idTourist');
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
     
    this.service.getTourists('http://localhost:8080/tourists/' + localStorage.getItem('idTourist')).subscribe((res: any) => {
      this.tourist = JSON.parse(JSON.stringify(res));
      
    },
      error => {
        alert(JSON.stringify(JSON.parse(JSON.stringify(error)).error.message));
        // this.alertService.error(JSON.stringify(error));
      }
    )
    this.service.getReservations('http://localhost:8080/reservationsTourist/'+localStorage.getItem('idTourist')).subscribe((data: any) => {
      this.reservations = JSON.parse(JSON.stringify(data));
      console.log(this.reservations);
    },
      error => {
        alert(JSON.stringify(JSON.parse(JSON.stringify(error)).error.message));
        // this.alertService.error(JSON.stringify(error));
      }
    )
  }
  deleteTourist(){
    if(confirm('Quiere borrar este turista?')){
      this.service.deleteTourist(this.tourist.id).subscribe(res=>{
      })
      this.router.navigate(["listarTuristas"]);

    }
    
  }
  editTourist(){

    this.router.navigate(["editarTurista"]);

  }
  addReservation(){

    this.router.navigate(["anadirReservacion"]);
  }

}
