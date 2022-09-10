import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
    <div class="warning">
      <span>This is a warning alert</span>

      </div>
  `,
  styles: [`
    .warning{
      font-size: bold;
      color: #9b111e;
      height: 50px;
      width: 300px;
      background-color: #F08080ea;
      border-radius: 30px;
    }
  `]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
