import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  numAleatorio(a, b): number {
    return Math.round(Math.random() * (b - a));
  }
  num: number;
  numeroSecreto: number = this.numAleatorio(0, 100);
  menorMayor= "...";
  intentos: number = 0;
  constructor() { }
  arrayIntentos:number[]=[];
  arrayNum:number[]=[];

  comprobacionNumero() {
 
      if (this.numeroSecreto < this.num) {
        this.menorMayor = 'menor que';
      }
      else if (this.numeroSecreto > this.num) {
        this.menorMayor = 'mayor que';
      }
      else {
        this.menorMayor = '';
      }
      this.intentos++;
      this.arrayNum[this.intentos]=this.num;
      this.arrayIntentos[this.intentos]=this.intentos;
    }
  
  reinicia(){
    // reiniciamos las variables
    this.num = null;
    this.menorMayor= '...';
    this.numeroSecreto = this.numAleatorio(0,100);
    this.intentos = 0;
    this.arrayNum = null;
  }
}
