import { Routes, RouterModule } from '@angular/router';
import { ProductoPageComponent } from '../producto/producto-page/producto-page.component';
import { DetalleComponent } from '../producto/detalle/detalle.component';
import { ActivadorGuard } from './../common/guards/activador.guard';

// Configuracion de rutas para nuestro aplicativo
const appRoutes: Routes = [
    { path: '', component: ProductoPageComponent },
    // canActivate determina si un usuario puede acceder o no a la ruta segun el valor del guard
    { path: 'producto/:idProducto', component: DetalleComponent, canActivate: [ActivadorGuard] },
    // canDeactivate determina si un usuario puede salir o no de una ruta segun el valor del guard
    { path: 'producto2/:idProducto', component: DetalleComponent, canDeactivate: [ActivadorGuard] },
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
