import { Component } from '@angular/core';
import { AutosServices } from 'src/app/SERVICES/autos.services';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-auto',
    templateUrl: './app.auto.component.html'
})
export class AutoComponent {
    title = "Auto";

    autoX: any;

    constructor(private autos: AutosServices, private activatedRoute: ActivatedRoute) {
        this.activatedRoute.params.subscribe(params => this.autoX = autos.getAutos(params['id']))
    };

    ngOnInit() {
        //this.autoX = this.autos.getTodosAutos();
    }
}