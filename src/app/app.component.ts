import { Component } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Viajes';

  constructor(private router:Router){}
  listarTuristas(){
this.router.navigate(["listarTuristas"]);


  }
  listarCiudades(){

    this.router.navigate(["listarCiudades"]);

  }
  addTourist(){

    this.router.navigate(["anadirTurista"]);

  }
}
