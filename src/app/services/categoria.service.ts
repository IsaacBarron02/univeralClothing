import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Categoria } from '../models/categoria';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {


  constructor(private firestore: AngularFirestore) { }

  
  getCategorias(){
    return this.firestore.collection('categorias').snapshotChanges();
  }

  getProdCat(){
    return this.firestore.collection('quirurgicos').snapshotChanges();
  }

  getProducto(idProd: string){
    return this.firestore.collection('quirurgicos').doc(idProd).snapshotChanges();
  }

  getProductos(){
    return this.firestore.collection('quirurgicos').snapshotChanges();
  }

  createProducto(producto: Producto){
    return this.firestore.collection('quirurgicos').add(Object.assign({}, producto));
  }
  updateProducto(producto:Producto){
    this.firestore.doc('quirurgicos/'+producto.id).update(producto);
  }
  deleteProducto(productoId:string){
    this.firestore.doc('quirurgicos/'+productoId).delete();
  }



  createCategoria(categoria: Categoria){
    return this.firestore.collection('quirurgicos').add(Object.assign({}, categoria));
  }
  updateCategoria(categoria: Categoria){
    this.firestore.doc('quirurgicos/'+categoria.id).update(categoria);
  }
  deleteCategoria(idCat:string){
    this.firestore.doc('quirurgicos/'+idCat).delete();
  }







  

}
