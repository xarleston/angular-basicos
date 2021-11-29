import { Injectable } from "@angular/core";
import { Personaje } from '../Interfaces/dbz.interface';

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
          nombre: 'Yamcha',
          poder: 5
        },
        {
          nombre: 'Son Goku',
          poder: 7000
        }
    ];
    
    get personajes(): Personaje[] {
        return [...this._personajes];
    }

    constructor(){}

    agregarPersonaje ( personaje: Personaje ) {
        this._personajes.push( personaje );
    }

}