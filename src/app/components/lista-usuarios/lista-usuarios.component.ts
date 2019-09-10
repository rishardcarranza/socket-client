import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usuariosActivos: Observable<any>;

  constructor(public charService: ChatService) { }

  ngOnInit() {
    this.usuariosActivos = this.charService.getUsuariosActivos();

    // Emitir Obtener Usuarios
    this.charService.emitirUsuariosActivos();
  }


}
