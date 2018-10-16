import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { NgForm } from '@angular/forms';

// Designamos el selector para nuestro componente, y a su vez se refrencian la vista y los archivos de CSS
// para este controlador
// Para este componente la forma de invocarlo en html seria
// <app-producto-page></app-producto-page>
@Component({
  selector: 'app-producto-page',
  templateUrl: './producto-page.component.html',
  styleUrls: ['./producto-page.component.css']
})
export class ProductoPageComponent implements OnInit {

  // Iniciamos nuestro modelo de clase Producto
  model: Producto = { nombre: '', precio: 0, cantidad: 0, feCreacion: new Date(), imagen: '' };

  // Para probar la nuestro *ngFor en nuestra vista, hemos creado un pequeno arreglo con 3 items
  productos: any = [{ nombre: 'Televisor', precio: 10.50, cantidad: 10, feCreacion: new Date(), imagen: 'https://picsum.photos/286/180' },
  { nombre: 'Televisor', precio: 10.50, cantidad: 10, feCreacion: new Date(), imagen: 'https://picsum.photos/286/180' },
  { nombre: 'Televisor', precio: 10.50, cantidad: 10, feCreacion: new Date(), imagen: 'https://picsum.photos/286/180' }];

  // La bandera mostrar va a determinar el formulario que tenemos en la vista
  // se va a mostrar o no
  mostrar = false;

  constructor() { }

  ngOnInit() {
  }

  // Funcion mostrar que va a ser ejecutada desde
  // el evento (click) de nuestra vista, para mostrar nuestro formulario
  mostrarFormulario() {
    this.mostrar = true;
  }

  // Funcion mostrar que va a ser ejecutada desde
  // el evento (click) de nuestra vista, para hacer un push de nuestro modelo en el arreglo
  // de Productos
  guardar(f: NgForm) {
    // Con Object.assign, vamos a copiar los valores de nuestro modelo
    this.productos.push(Object.assign({feCreacion: new Date()}, this.model));
    // Ocultamos nuestro formulario
    this.mostrar = false;
    // Limpiamos nuestro modelo
    this.model =  { nombre: '', precio: 0, cantidad: 0, feCreacion: new Date(), imagen: '' };
  }

}
