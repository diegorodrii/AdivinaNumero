import { Component } from '@angular/core';

interface Number{
  num:number;
}

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

  array:Number []= [];
  constructor() { }
  
  history(_num){
    this.array.push(_num);
  }
  

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

    }
  
  reinicia(){
    this.num = null;
    this.menorMayor= '...';
    this.numeroSecreto = this.numAleatorio(0,100);
    this.intentos = 0;


  }
}
