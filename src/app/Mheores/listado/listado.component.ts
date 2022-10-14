import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {
  heroes: string[] = ['Spidermna','Iroman','Dr Strange','Hook','Hulk'];
  heroBorrado:string | undefined;
  constructor() { }
  ngOnInit(): void {
  }
  borrarHeroe(){
    this.heroBorrado = this.heroes.pop() || '';
  }

}
