import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css']
})
export class AddCityComponent implements OnInit {

  constructor(private router:Router,private service: ServiceService) { }
  cityForm:FormGroup;
  ngOnInit(): void {
    this.cityForm=new FormGroup({
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
    console.log(this.cityForm.value);
    this.service.createTourist("http://localhost:8080/addCity",this.cityForm.value).subscribe(data=>{
    alert("añadido con exito...!");
this.router.navigate(["listarTuristas"]);

});

  }
}
