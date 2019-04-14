import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { UsuarioComponent } from './usuario/usuario.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import {ServicioCompraService} from './servicio-compra.service';
 import { InventarioComponent } from './usuario/inventario/inventario.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuarioComponent,
    InventarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.configFire),
    AngularFireAuthModule,
    AngularFireDatabaseModule 
  ],
  providers: [ AngularFireAuthModule,ServicioCompraService],
  bootstrap: [AppComponent]
})
export class AppModule { }
