import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Rutas

import { APP_ROUTING } from './app.routes';

//Services

import { AutosServices } from './SERVICES/autos.services';

// Componentes
import { AppComponent } from './app.component';
import { AppHolaComponent } from './componentes/HOLA/app.Hola.component';
import { AdiosComponent } from './componentes/ADIOS/app.Adios.component';
import { AutoComponent } from './componentes/AUTO/app.auto.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHolaComponent,
    AdiosComponent,
    AutoComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    AutosServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
