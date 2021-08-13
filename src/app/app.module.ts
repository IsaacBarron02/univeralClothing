import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//IMPORRTS MDB CSS
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // If You need animations

//IMPORTS ANGULAR-FIREBASE
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';



import { NavbarComponent } from './pages/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { ProdCategoriaComponent } from './pages/prod-categoria/prod-categoria.component';
import { DetailProductComponent } from './pages/detail-product/detail-product.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { DashboardComponent } from './pages/admon/dashboard/dashboard.component';
import { NavdashComponent } from './pages/admon/navdash/navdash.component';
import { ListaProductosComponent } from './pages/admon/lista-productos/lista-productos.component';
import { ListaCategoriasComponent } from './pages/admon/lista-categorias/lista-categorias.component';
import { LoginComponent } from './account/login/login.component';
import { RegistroComponent } from './account/registro/registro.component';
import { ForgotPasswordComponent } from './account/forgot-password/forgot-password.component';
import { VerificarEmailComponent } from './account/verificar-email/verificar-email.component';
import { AuthService } from './services/auth.service';
import { CategoriaService } from './services/categoria.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CategoriasComponent,
    ProdCategoriaComponent,
    DetailProductComponent,
    DashboardComponent,
    NavdashComponent,
    ListaProductosComponent,
    ListaCategoriasComponent,
    LoginComponent,
    RegistroComponent,
    ForgotPasswordComponent,
    VerificarEmailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    NgxImageZoomModule,
    AngularFireAuthModule,
    AngularFirestoreModule
    
  ],
  providers: [
    AuthService,
    CategoriaService
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
