
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-delete-tourist',
  templateUrl: './delete-tourist.component.html',
  styleUrls: ['./delete-tourist.component.css']
})
export class DeleteTouristComponent implements OnInit {

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
  }
 
  onSubmit(): void {
    
    console.log(this.touristForm.value);
    this.service.createTourist("http://localhost:8080/addTourist",this.touristForm.value).subscribe(data=>{
    alert("añadido con exito...!");
this.router.navigate(["listarTuristas"]);

});

  }
}
