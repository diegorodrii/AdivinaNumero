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

  constructor() { }


  comprobacionNumero() {
    if (this.num) {
      if (this.numeroSecreto < this.num) {
        this.menorMayor = 'menor que';
      }
      else if (this.numeroSecreto > this.num) {
        this.menorMayor = 'mayor que';
      }
      else {
        this.menorMayor = '';
      }
    }
  }
  reinicia(){
    // reiniciamos las variables
    this.num = null;
    this.menorMayor= '...';
    this.numeroSecreto = this.numAleatorio(0,100);
  }
}
