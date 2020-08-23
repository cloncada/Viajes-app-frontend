import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  

  constructor(private http:HttpClient) { }

  getTourists(url: string){
   
 return this.http.get(url);

  }
  getCities(url: string){
   
    return this.http.get(url);
   
     }
  createTourist(url: string, tourist:any){

return this.http.post(url,tourist);

  }
}