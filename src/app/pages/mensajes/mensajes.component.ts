import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {

  usuario: Usuario;

  constructor(public wsService: WebsocketService) { }

  ngOnInit() {
    this.usuario = this.wsService.usuario;
  }

}
