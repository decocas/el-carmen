import { Injectable } from '@angular/core';
import {Compra}from '../compra';
import {Frito} from '../frito';


@Injectable({
  providedIn: 'root'
})
export class InsumoService {

lista=[
{ cantidad:20, frito:'flauta hawaina'},
{ cantidad:20, frito:'flauta de pollo'},
{ cantidad:20, frito:'buñuelo'}
];


  constructor() { }
getInsumos(){
	return this.lista;
}

revisar(f:Frito):void{
for(let i=0;i<this.lista.length;i++){
if(f.nombre==this.lista[i].frito && this.lista[i].cantidad ==  0){
	f.estado=false;
alert("se agoto el producto");
}
}

}
 

 recargar(f:Frito):void{
for(let i=0;i<this.lista.length;i++){
if(this.lista[i].cantidad==0 && f.nombre==this.lista[i].frito){
 this.lista[i].cantidad=20;
 f.estado=true;
}

}

 }

quitar(f:Frito, n:number):void{
  
for(let i=0;i<this.lista.length;i++){
	if(f.nombre==this.lista[i].frito && this.lista[i].cantidad !=  0 && f.estado ==true){
	this.lista[i].cantidad=this.lista[i].cantidad-n;
		alert("quedan "+this.lista[i].cantidad+" unidad/es del producto" );
		}
	 

	}

}

}
