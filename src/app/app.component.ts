import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'session-27';

  resultado!:number;
  numero1!:number;
  numero2!:number;

  elemento = false;

  calcular(operacion:string){

    if(operacion==='1'){
      this.resultado = this.numero1 + this.numero2;
    }else if(operacion === '2'){
      this.resultado = this.numero1 - this.numero2;
    }else if(operacion === '3'){
      this.resultado = this.numero1 * this.numero2;
    }else{
      this.resultado = this.numero1 / this.numero2;
    }

    this.elemento = true;
    

  }


}
