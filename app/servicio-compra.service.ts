import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import {Frito} from './frito';
import {Compra} from './compra';
import {Cliente} from './usuario/cliente';
@Injectable({
  providedIn: 'root'
})
export class ServicioCompraService {
list:AngularFireList<any>;
  

  constructor(private firebase: AngularFireDatabase) { }


insertCompra(f:String ,c:number)
  {
     this.list.push({
frito:f,
cantidad:c

    });
  }



}
     