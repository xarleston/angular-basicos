import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

  heroes: string[] = ['SpiderMan','IronMan','Hulk','Thor', 'Capitan America'];
  heroeBorrado:string = '';
  numberHeroes = this.heroes.length;  

  borrarElemento():void {
    
    this.heroeBorrado = this.heroes.shift() || '';

  } 

}
