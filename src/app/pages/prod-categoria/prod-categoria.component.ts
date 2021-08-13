import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Producto } from '../../models/producto';


@Component({
  selector: 'app-prod-categoria',
  templateUrl: './prod-categoria.component.html',
  styleUrls: ['./prod-categoria.component.css']
})
export class ProdCategoriaComponent implements OnInit {

  idCat: String;
  prouctos:Producto[];
  categoria = new Producto();

  constructor(
    private route:ActivatedRoute, private categoriaService:CategoriaService,
  ) {
    
     this.idCat=this.route.snapshot.paramMap.get('idCat');
     console.log(this.idCat);
   }



  ngOnInit(): void {
    this.categoriaService.getProdCat().subscribe(data => {
      this.prouctos = data.map(e => {
        return{
          id:e.payload.doc.id,
          ...e.payload.doc.data() as Producto
        }
      })
    })
    
  }

}
