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

  calcular(operacion:string, numero1:string, numero2:string):number{

    if(operacion=='+') this.resultado=Number(numero1)+Number(numero2)
    else if(operacion=='-') this.resultado=Number(numero1)-Number(numero2)
    else if(operacion=='*') this.resultado=Number(numero1)*Number(numero2)
    else if(operacion=='/') this.resultado=Number(numero1)/Number(numero2)

    this.elemento = true;
    return this.resultado
  }


}
