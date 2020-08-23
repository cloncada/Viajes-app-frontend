
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService} from '../../Service/service.service';

import {  MatTableDataSource } from "@angular/material/table/table-data-source";
export interface TouristList {
  id: string;
  name: string;
  creditCard: boolean;
  destiny: string;
  estimate: number;
  idType: number;
  travelFrequency:string;
  dob:Date;
}
@Component({
  selector: 'app-list-tourist',
  templateUrl: './list-tourist.component.html',
  styleUrls: ['./list-tourist.component.css']
})
export class ListTouristComponent implements OnInit {

  constructor(private service:ServiceService, private router:Router) { }
  tourists:TouristList[]= [];
  id:any;
  dataSource: MatTableDataSource<TouristList>;
  ngOnInit(): void {
    
    this.service.getTourists('http://localhost:8080/tourists').subscribe((res:any)=>{
    this.tourists=JSON.parse(JSON.stringify(res));
    


console.log(this.tourists);
},
error => {
  alert(JSON.stringify(JSON.parse(JSON.stringify(error)).error.message));
  // this.alertService.error(JSON.stringify(error));
 }
)
  }

}
