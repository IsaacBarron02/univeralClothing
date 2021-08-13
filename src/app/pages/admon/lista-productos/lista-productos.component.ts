import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Producto } from '../../../models/producto';
import { Categoria } from '../../../models/categoria';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  productos:Producto[];
  producto = new Producto();
  categorias : Categoria[];
  categoria = new Categoria();


  constructor(
    private categoriaService: CategoriaService,
    public authService: AuthService
    ) { }

  getCategorias(){
    this.categoriaService.getCategorias().subscribe(data => {
      this.categorias = data.map(e => {
        return{
          id:e.payload.doc.id,
          ...e.payload.doc.data() as Categoria
        }
      })
    });
  }

  ngOnInit(): void {
    this.categoriaService.getProductos().subscribe(data => {
      this.productos = data.map(e => {
        return{
          id:e.payload.doc.id,
          ...e.payload.doc.data() as Producto
        }
      })
      this.getCategorias();
    });
  }

  
  //método para dar de alta un libro desde el formulario
  create(){
    this.categoriaService.createProducto(this.producto);
    this.producto = new Producto();
  }

  //metodo para seleccionar libro
  selectProducto(producto){
    this.producto = producto;
  }

  //metodo para actualizar un registro
  update(){
    this.categoriaService.updateProducto(this.producto);
    this.producto = new Producto();
  }

  //método para eliminar una laptop
  delete(id:string){
    this.categoriaService.deleteProducto(id);
    this.producto = new Producto();
  }

  limpiar(){
    this.producto = new Producto
  }

  

  }
