import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {
  heroes:string[]= ['Spiderman','Ironman','Hulk','Thor'];
  hborrado:string ='';

  Borrar():void{
    this.hborrado = this.heroes.shift() || '';
  }
}
