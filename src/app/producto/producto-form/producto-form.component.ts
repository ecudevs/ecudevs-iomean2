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

  @Output() guardar = new EventEmitter<Producto>();
  @Output() cancelar = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  _guardar() {
    this.guardar.next(this.model);
  }

  _cancelar() {
    this.cancelar.next();
  }

}
