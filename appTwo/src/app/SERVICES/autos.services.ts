import { Injectable } from '@angular/core';

@Injectable()
export class AutosServices {

    private autos: any = [
        {
            marca: 'Mercedes',
            modelo: 'E class',
            img: '../../assets/mercedes.png'
        },
        {
            marca: 'BMW',
            modelo: '470',
            img: '../../assets/bmw.png'
        },
        {
            marca: 'Honda',
            modelo: 'Civic Type-R'
        }

    ]

    constructor() { };

    public getAutos(auto: number): any {
        return this.autos[auto];
    }

    public getTodosAutos(): any {
        return this.autos;
    }

}
