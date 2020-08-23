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
@Component({
  selector: 'app-tourist-info',
  templateUrl: './tourist-info.component.html',
  styleUrls: ['./tourist-info.component.css']
})
export class TouristInfoComponent implements OnInit {
  tourist: Tourist;
  
id=localStorage.getItem('idTourist');
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
     
    this.service.getTourists('http://localhost:8080/tourists/' + localStorage.getItem('idTourist')).subscribe((res: any) => {
      this.tourist = JSON.parse(JSON.stringify(res));
      console.log(this.tourist);
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

}
