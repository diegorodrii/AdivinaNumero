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
  numSecret: number = this.numAleatorio(0, 100);
  mayorMenor= "...";

  constructor() { }


  comprobacionNumero() {
    if (this.num) {
      if (this.numSecret < this.num) {
        this.mayorMenor = 'menor que';
      }
      else if (this.numSecret > this.num) {
        this.mayorMenor = 'mayor que';
      }
      else {
        this.mayorMenor = '';
      }
    }
  }
  reinicia(){
    // reiniciamos las variables
    this.num = null;
    this.mayorMenor = '...';
    this.numSecret = this.numAleatorio(0,100);
  }
}
