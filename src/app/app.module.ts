import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductoPageComponent } from './producto/producto-page/producto-page.component';
import { NumeroDirective } from './common/Directives/numero.directive';
import { UpperDirective } from './common/directives/upper.directive';
import { ProductoCardComponent } from './producto/producto-card/producto-card.component';
import { ProductoFormComponent } from './producto/producto-form/producto-form.component';
// En nuestro modulo principal vamos a declarar todos los submodulos o librerias externas que
// vamos a usar en nustro proyecto, asi tambien, todaas las herramientas de Angular que usamos
// como componentes, directivas, services, etc
@NgModule({
  declarations: [
    AppComponent,
    ProductoPageComponent,
    NumeroDirective,
    UpperDirective,
    ProductoCardComponent,
    ProductoFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
