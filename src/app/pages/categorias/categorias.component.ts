import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../models/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categorias:Categoria[];
  categoria = new Categoria();

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.categoriaService.getCategorias().subscribe(data => {
      this.categorias = data.map(e => {
        return{
          id:e.payload.doc.id,
          ...e.payload.doc.data() as Categoria
        }
      })
    })
  }
  

}
