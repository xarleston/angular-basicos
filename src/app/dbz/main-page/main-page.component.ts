import { Component, OnInit } from '@angular/core';
import { provideRoutes } from '@angular/router';

import { Personaje } from '../Interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  //personajes: Personaje[] = [];
  
  nuevo: Personaje = {
    nombre: 'Freezer',
    poder: 5555
  }

  constructor() {
    
  }
  
}
