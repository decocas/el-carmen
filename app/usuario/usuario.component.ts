import { Component, OnInit } from '@angular/core';
import { Router}  from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
 import { auth } from 'firebase/app';
import {Frito} from '../frito';
import {Compra} from '../compra'; 
import {ServicioCompraService} from '../servicio-compra.service';
import { InsumoService} from './insumo.service';
@Component({ 
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
c:Compra=new Compra();
frito:Frito;
aux:any={};
f: Frito[]=[
{id:'01',nombre:'flauta hawaina',precio:1000,estado:true},
{id:'02',nombre:'flauta de pollo',precio:1200,estado:true},
{id:'03',nombre:'buñuelo',precio:1000,estado:true}
];
t:boolean=false;
 n:number;
total:number=0;
msj:string="";
  constructor(private r:Router,
            public afAuth: AngularFireAuth,
            private servicio: ServicioCompraService,
            private insumo:InsumoService) { }


logout() {
    this.afAuth.auth.signOut();
  }
back():void{
     this.logout();
	this.r.navigate(['/login']);
}

graph():void{
  this.r.navigate(['/inventario']);
}

refrescar():void{
  this.t=false;
  this.n=0;
}

abrir(a:Frito){
  this.frito=a;
 this.insumo.revisar(this.frito) ; 

   }
calcular(a:Frito,b:number) {

  if(!(isNaN(b)) && a.estado==true){
  this.n=(a.precio*b);
    this.t= true;
 }
   else{
   this.aux==null;
   this.n=0;
   this.t=false;
   }
}

 
 
 agregar(f:Frito,n:number):void{
  if(f.estado==true && this.aux!=null && confirm("confirmar compra") &&  !(isNaN(this.n))&& confirm("---- Factura ---- \n Nombre de frito: "+f.nombre+"\n Precio del frito: "+f.precio+"\n Cantidad: "+n+"\n Fecha: 07/03/2019 "+"\n TOTAL: $"+this.n) ){
  this.total+=this.n;
   this.insumo.quitar(f,n)
   this.msj="pedido procesado, cierre la notificación";
   
  }else{
this.msj="pedido no procesado, cierre la notificación";
 this.total+=0;
  }
}
cerrar():void{
  this.t=false;
  this.msj="";
  this.n=0;
}


  ngOnInit() {
  }

}
