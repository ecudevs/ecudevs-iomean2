import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productos: any = [
    { id: 1, nombre: 'Televisor 1', precio: 10.50, cantidad: 10, feCreacion: new Date(), imagen: 'https://picsum.photos/286/180' },
  { id: 2, nombre: 'Televisor 2', precio: 10.50, cantidad: 10, feCreacion: new Date(), imagen: 'https://picsum.photos/286/180' },
  { id: 3, nombre: 'Televisor 3', precio: 10.50, cantidad: 10, feCreacion: new Date(), imagen: 'https://picsum.photos/286/180' }];

  constructor() { }

  get() {
    return this.productos;
  }
}
