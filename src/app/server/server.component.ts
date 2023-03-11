import { Component } from '@angular/core';

@Component({
  selector: '.app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {

  //interpolation databinding
  serverId : number = 10 ;
  ServerState:string='Online';


}
