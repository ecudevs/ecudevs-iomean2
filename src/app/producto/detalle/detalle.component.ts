import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  model: any = {};

  constructor(private productoService: ProductoService,
    private route: ActivatedRoute) {
    // Vamos a capturar el parametro que llega en nuestra

    // Con snapshot capturamos el valor de nuestra ruta solo una vez
    // this.getById(this.route.snapshot.params.idProducto);

    // Con paramMap.subscribe vamos a quedar a la escucha de los cambios que se den en los parametros de la ruta
    this.route.paramMap.subscribe(params => {
      this.getById(params.get('idProducto'));
    });
  }

  ngOnInit() {
  }

  getById(id) {
    // Llamamos al metodo de nuestro service y filtramos por id y lo asignamos al modelo
    this.model = this.productoService.get().find(x => x.id === Number(id));
  }

}
