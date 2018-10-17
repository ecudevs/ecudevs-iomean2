import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-producto-card',
  templateUrl: './producto-card.component.html',
  styleUrls: ['./producto-card.component.css']
})
export class ProductoCardComponent implements OnInit {

  // Definimos que producto va a llegar como un parametro de entrada
  @Input() producto;

  constructor() { }

  ngOnInit() {
  }

}
