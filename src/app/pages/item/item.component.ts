import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  producto: ProductoDescripcion;
  id: String;

  constructor(private route: ActivatedRoute, public productoService: ProductosService) {
    this.route.params.subscribe(parametros => {
      // console.log(parametros['id']);
      this.productoService.getProducto(parametros['id'])
          .subscribe((producto: ProductoDescripcion) => {
            // console.log(producto);
            this.id = parametros['id'];
            this.producto = producto;
          });
    });
  }

  ngOnInit() {
  }

}
