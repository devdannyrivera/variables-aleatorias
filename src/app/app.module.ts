import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CuadradoMedioComponent } from './views/cuadrado-medio/cuadrado-medio.component';
import { ProductosMediosComponent } from './views/productos-medios/productos-medios.component';
import { MultiplicadorConstanteComponent } from './views/multiplicador-constante/multiplicador-constante.component';
import { LinealLinealComponent } from './views/lineal-lineal/lineal-lineal.component';
import { LinealMultiplicativoComponent } from './views/lineal-multiplicativo/lineal-multiplicativo.component';
import { LinealAditivoComponent } from './views/lineal-aditivo/lineal-aditivo.component';
import { LinealCuadraticoComponent } from './views/lineal-cuadratico/lineal-cuadratico.component';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CuadradoMedioComponent,
    ProductosMediosComponent,
    MultiplicadorConstanteComponent,
    LinealLinealComponent,
    LinealMultiplicativoComponent,
    LinealAditivoComponent,
    LinealCuadraticoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
