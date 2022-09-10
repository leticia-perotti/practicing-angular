import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pratice-component',
  template: `
    <h3>Olá, sou um componente de pratica</h3>
    <p>Utilizado para praticar o HTML e CSS direto no componente</p>
  `,
  styles: [`
      h3 {
        color: pink;
        padding-bottom: 15px;
      }
  `]
})
export class PraticeComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
