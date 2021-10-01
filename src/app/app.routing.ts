import { RouterModule, Routes } from '@angular/router';
import { CuadradoMedioComponent } from './views/cuadrado-medio/cuadrado-medio.component';
import { LinealAditivoComponent } from './views/lineal-aditivo/lineal-aditivo.component';
import { LinealCuadraticoComponent } from './views/lineal-cuadratico/lineal-cuadratico.component';
import { LinealLinealComponent } from './views/lineal-lineal/lineal-lineal.component';
import { LinealMultiplicativoComponent } from './views/lineal-multiplicativo/lineal-multiplicativo.component';
import { MultiplicadorConstanteComponent } from './views/multiplicador-constante/multiplicador-constante.component';
import { ProductosMediosComponent } from './views/productos-medios/productos-medios.component';

const appRoutes = [
    { path: '', component: CuadradoMedioComponent, pathMatch: 'full' },
    { path: 'cuadrado-medio', component: CuadradoMedioComponent, pathMatch: 'full' },
    { path: 'productos-medios', component: ProductosMediosComponent, pathMatch: 'full' },
    { path: 'multiplicador-constante', component: MultiplicadorConstanteComponent, pathMatch: 'full' },
    { path: 'congruencial-lineal', component: LinealLinealComponent, pathMatch: 'full' },
    { path: 'congruencial-multiplicativo', component: LinealMultiplicativoComponent, pathMatch: 'full' },
    { path: 'congruencial-aditivo', component: LinealAditivoComponent, pathMatch: 'full' },
    { path: 'no-lineal-cuadratico', component: LinealCuadraticoComponent, pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(appRoutes);