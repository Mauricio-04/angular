import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregarnuevo',
  templateUrl: './agregarnuevo.component.html',
  styleUrls: ['./agregarnuevo.component.css']
})
export class AgregarnuevoComponent {
//  @Input() personajes:Personaje[] =[];
  @Input() nuevo :Personaje= {
    nombre:'',
    poder:0
  }
  constructor(private dbzService:DbzService){}
  // @Output() onNuevoPersonaje:EventEmitter<Personaje> = new EventEmitter();
  agregar(){
   console.log(this.nuevo) ;
  //  this.onNuevoPersonaje.emit(this.nuevo);
   this.dbzService.agregarPersonaje(this.nuevo);
  //  this.personajes.push(this.nuevo);
   this.nuevo ={
    nombre:'',
    poder:0
   }
   
  }
}
