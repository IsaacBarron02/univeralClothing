import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  idProd: string;
  nombre: string;
  urlPhoto: string;
  descripcion: string;
  medidas: string;
  modelo: string;
  material: string;
  costo: number;

  productos : Producto[];
  producto = new Producto();

  constructor(
    private route:ActivatedRoute, private categoriaService: CategoriaService
  ) { 
    this.idProd=this.route.snapshot.paramMap.get('idProd');
     console.log(this.idProd);
  }

  getProduct(idProd: string){
    this.categoriaService.getProducto(idProd).subscribe((prod)=>{
      this.nombre = prod.payload.data()['name'];
      this.descripcion = prod.payload.data()['description'];
      this.urlPhoto = prod.payload.data()['urlPhoto'];
      this.material = prod.payload.data()['material'];
      this.medidas = prod.payload.data()['medidas'];
      this.modelo = prod.payload.data()['modelo'];
      this.costo = prod.payload.data()['costo'];
    })
  }

  ngOnInit(): void {
    this.getProduct(this.idProd);
  }

}
