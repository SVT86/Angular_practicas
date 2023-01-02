import { Component, OnInit } from '@angular/core';
import { AutosServices } from 'src/app/SERVICES/autos.services';

@Component({
    selector: 'app-hola',
    templateUrl: './app.Hola.component.html'
})

export class AppHolaComponent {
    title = 'HOLA';

    auto: any;

    constructor(private _autosServices: AutosServices) { }

    ngOnInit() {
        this.auto = this._autosServices.getAutos(0);

    }
}