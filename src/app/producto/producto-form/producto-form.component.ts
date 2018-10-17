import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Producto } from '../producto';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {

  // Iniciamos nuestro modelo de clase Producto
  model: Producto = { nombre: '', precio: 0, cantidad: 0, feCreacion: new Date(), imagen: '' };

  // Definimos parametros de salida de nuestro componente
  @Output() guardar = new EventEmitter<Producto>();
  @Output() cancelar = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  _guardar() {
    // _guardar() se ejecuta desde nuestra vista, en este caso enviamos de vuelta nuestro modelo
    // para que el componente contenedor realice la operacion respectiva
    this.guardar.next(this.model);
  }

  _cancelar() {
    // De la misma manera al presionar cancelar vamos a enviar una senal de vuelta
    // para que el componente contenedor haga su logica
    this.cancelar.next();
  }

}
