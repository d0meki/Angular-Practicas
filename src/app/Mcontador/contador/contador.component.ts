import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html'
})
export class ContadorComponent {
  title: string = 'Contador app';
  numero: number = 10;

  base: number = 5;


  sumar() {
    this.numero++;
  }
  restar() {
    this.numero--;
  }

  acumular(valor: number) {
    this.numero += valor;
  }
}