import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/app';

export interface User{
  uid: string;
  email: string;
  displayName: string;
  photoUrl:string;
  emailVerified: boolean;

}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userState: any;

  constructor(
    public firestore: AngularFirestore,
    public fireAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.fireAuth.authState.subscribe(user => {
      if(user){
        this.userState = user;
        localStorage.setItem('user', JSON.stringify(this.userState));
        JSON.parse(localStorage.getItem('user'));
      }else{
        localStorage.setItem('user',null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
   }

   //metodo para logearse con usuario y contraseña
   login(email,password){
    return this.fireAuth.signInWithEmailAndPassword(email,password)
    .then((result) => {
      this.ngZone.run(() => {
        this.router.navigate(['dashboard']);
      });
      this.setUserData(result.user);
    }).catch((error) => {
      window.alert(error.message)
    })
  }

  //Mrtodo para registrar un nuevo usuairo con mail, ando password
  registrar(email, password){
    return this.fireAuth.createUserWithEmailAndPassword(email,password)
    .then((result) => {
      this.sendVerificationMail();
      this.setUserData(result.user);
    }).catch((error) => {
      window.alert(error.message)
    })
  }

  //metodo para enviar correo de verificacion
  sendVerificationMail(){
    return this.fireAuth.currentUser.then(u => u.sendEmailVerification())
    .then(() => {
      this.router.navigate(['verificar-email']);
    })
  
  }


  //metodo para cuando el usr olvido su pass
  forgotPassword(passwordResetMail){
    return this.fireAuth.sendPasswordResetEmail(passwordResetMail)
    .then(() => {
    window.alert("se envio un email para restablecer su contraseña");
    }).catch((error) => {
      window.alert(error)
    })
  }

  //getter para verificar cuando el user esta logeado
  get isLoggedIn(): boolean{
    const user = JSON.parse(localStorage.getItem('user'));
    return (user != null && user.emailVerified != false) ? true : false;
  }

  //metodo para autenticarse con Google
  googleAuth(){
    return this.authLogin(new firebase.auth.GoogleAuthProvider());
  }

  //metodo para logearse con proveedores
  authLogin(provider){
    return this.fireAuth.signInWithPopup(provider)
    .then((result) => {
      this.ngZone.run(() =>{
        this.router.navigate(['home']);
      })
      this.setUserData(result.user);
    }).catch((error) => {
      window.alert(error)
    })
  }

  setUserData(user){
    const userRef: AngularFirestoreDocument<any>=this.firestore.doc(`users/${user.uid}`);
    const userState: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoUrl: user.photoUrl,
      emailVerified: user.emailVerified
    }
    return userRef.set(userState,{merge: true});
  }

  //metodo pra cerrar sesion
  cerrarSesion(){
    return this.fireAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/home']);

    })
  }


}
