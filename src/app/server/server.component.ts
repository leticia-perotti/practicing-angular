import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-server]',
  //selector: '.app-server',
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {

  serverId: number = 10;
  serverStatus: string = 'offline';

  allowNewServer: boolean = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
   }

  ngOnInit(): void {
  }

  getServerStatus(){
    return this.serverStatus
  }

}
