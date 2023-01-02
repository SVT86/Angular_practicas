import { RouterModule, Routes } from '@angular/router';
import { AppHolaComponent } from './componentes/HOLA/app.Hola.component';
import { AdiosComponent } from './componentes/ADIOS/app.Adios.component';
import { AutoComponent } from './componentes/AUTO/app.auto.component';

const MIS_RUTAS: Routes = [
    { path: 'hola', component: AppHolaComponent },
    { path: 'adios', component: AdiosComponent },
    { path: 'auto/:id', component: AutoComponent },
    { path: '**', pathMatch: 'full', redirectTo: '#' }

]

export const APP_ROUTING = RouterModule.forRoot(MIS_RUTAS);