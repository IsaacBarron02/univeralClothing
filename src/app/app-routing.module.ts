import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './account/forgot-password/forgot-password.component';
import { LoginComponent } from './account/login/login.component';
import { RegistroComponent } from './account/registro/registro.component';
import { VerificarEmailComponent } from './account/verificar-email/verificar-email.component';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './pages/admon/dashboard/dashboard.component';
import { ListaCategoriasComponent } from './pages/admon/lista-categorias/lista-categorias.component';
import { ListaProductosComponent } from './pages/admon/lista-productos/lista-productos.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { DetailProductComponent } from './pages/detail-product/detail-product.component';
import { ProdCategoriaComponent } from './pages/prod-categoria/prod-categoria.component';


const routes: Routes = [
  
  {path: '', redirectTo: '/categorias', pathMatch: 'full'},
  {path: 'categorias', component:CategoriasComponent},
  {path: 'home', component:CategoriasComponent},
  {path: 'prodCategoria/:idCat', component:ProdCategoriaComponent},
  {path: 'detailProduct/:idProd', component:DetailProductComponent},
  {path: 'dashboard', component:DashboardComponent, canActivate: [AuthGuard]},
  {path: 'listaProductos', component:ListaProductosComponent, canActivate: [AuthGuard]},
  {path: 'listaCategorias', component:ListaCategoriasComponent, canActivate: [AuthGuard]},
  { path: 'registro', component: RegistroComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verificar-email', component: VerificarEmailComponent },
  { path: 'login', component: LoginComponent },
  {path:'**', redirectTo:'/categorias'}

  //{path: 'prodCategoria:/idCat', component:ProdCategoriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
