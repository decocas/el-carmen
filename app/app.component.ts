import { Component } from '@angular/core';
 import { LoginService } from './login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor(private l:LoginService){

 }
 
accept:boolean=false;
  title = 'el-carmen';

analitic():void{
	this.accept=true;

}
analitic2():void{
	this.accept=false;

}

  
}
