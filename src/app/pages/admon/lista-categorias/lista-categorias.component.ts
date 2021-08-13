import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Categoria } from '../../../models/categoria';

@Component({
  selector: 'app-lista-categorias',
  templateUrl: './lista-categorias.component.html',
  styleUrls: ['./lista-categorias.component.css']
})
export class ListaCategoriasComponent implements OnInit {

  categorias : Categoria[];
  categoria = new Categoria();

  constructor(
    private categoriaService: CategoriaService,
    public authService: AuthService
    ) { }

  ngOnInit(): void {
    this.categoriaService.getCategorias().subscribe(data => {
      this.categorias = data.map(e => {
        return{
          id:e.payload.doc.id,
          ...e.payload.doc.data() as Categoria
        };
      })
    });
  }

    //método para dar de alta un libro desde el formulario
    create(){
      this.categoriaService.createCategoria(this.categoria);
      this.categoria = new Categoria();
    }
  
    //metodo para seleccionar libro
    selectCategoria(categoria){
      this.categoria = categoria;
    }
  
    //metodo para actualizar un registro
    update(){
      this.categoriaService.updateCategoria(this.categoria);
      this.categoria = new Categoria();
    }
  
    //método para eliminar una laptop
    delete(id:string){
      this.categoriaService.deleteCategoria(id);
      this.categoria = new Categoria();
    }

    limpiar(){
      this.categoria = new Categoria();
    }
  

}
