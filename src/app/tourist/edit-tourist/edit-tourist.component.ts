import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { FormGroup, FormControl } from '@angular/forms';
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
  selector: 'app-edit-tourist',
  templateUrl: './edit-tourist.component.html',
  styleUrls: ['./edit-tourist.component.css']
})
export class EditTouristComponent implements OnInit {
  tourist: Tourist;
  constructor(private router:Router,private service: ServiceService) { }
  touristForm:FormGroup;
  ngOnInit(): void {
    this.touristForm=new FormGroup({
      name: new FormControl(),
      id: new FormControl(),
      creditCard: new FormControl(),
      destiny:new FormControl(),
      estimate: new FormControl(),
      travelFrequency: new FormControl(),
      idType: new FormControl(),
      dob: new FormControl() 

    })
    this.service.getTourists('http://localhost:8080/tourists/' + localStorage.getItem('idTourist')).subscribe((res: any) => {
      this.tourist = JSON.parse(JSON.stringify(res));
     
    },
      error => {
        alert(JSON.stringify(JSON.parse(JSON.stringify(error)).error.message));
        // this.alertService.error(JSON.stringify(error));
      }
    )
  }
 
  onSubmit(): void {
    if(confirm('Quiere editar  este turista?')){
      this.service.deleteTourist(this.tourist.id).subscribe(res=>{
      })      
      console.log(this.touristForm.value);
      this.service.createTourist("http://localhost:8080/addTourist",this.touristForm.value).subscribe(data=>{
      alert("se ha actualizado  con exito...!");
  this.router.navigate(["listarTuristas"]);
  
  });
    }
    

  }
}
