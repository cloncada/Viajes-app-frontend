import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent implements OnInit {
  reservationForm: FormGroup;
  constructor(private router: Router, private service: ServiceService) { }
  reservation: any;
  foundReservations: any[]=[];
  cant:number;

  ngOnInit(): void {
    this.reservationForm = new FormGroup({
      city: new FormControl(),
      touristId: new FormControl(),
      date: new FormControl(),

    })
  }
  onSubmit(): void {
    this.reservation = this.reservationForm.value;
    console.log(this.reservation.date);
    this.service.getReservations("http://localhost:8080/reservations/" + this.reservation.city + "/" + this.reservation.date).subscribe(data => {
      this.foundReservations = JSON.parse(JSON.stringify(data));
      this.cant=this.foundReservations.length;
      console.log(this.cant);
      if(this.cant<5){
        this.service.createTourist("http://localhost:8080/addReservation", this.reservationForm.value).subscribe(data => {
          alert("añadido con exito...!");
          this.router.navigate(["listarTuristas"]);
    
        });}
    else{
      alert("cantidad de reservaciones para esa ciudad y fecha agotadas...!");
    
    }
    });
    
   

/**/
  }

}
