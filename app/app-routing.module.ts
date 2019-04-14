import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsuarioComponent} from './usuario/usuario.component';
import {LoginComponent} from './login/login.component';
 import { InventarioComponent } from './usuario/inventario/inventario.component';
const routes: Routes = [{path:'usuario',component:UsuarioComponent},
						{path:'login',component:LoginComponent},
						{path:'inventario',component:InventarioComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
