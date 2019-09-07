import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

  texto = '';
  subcription: Subscription;
  mensajes: any[] = [];
  htmlElement: HTMLElement;

  constructor(public chatService: ChatService) { }

  ngOnInit() {

    this.htmlElement = document.getElementById('chat-mensajes');

    this.subcription = this.chatService.getMessages().subscribe(msg => {
      this.mensajes.push(msg);

      setTimeout(() => {
        this.htmlElement.scrollTop = this.htmlElement.scrollHeight;
      }, 50);

    });
  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
  }

  enviar() {

    if (this.texto.trim().length > 0) {
      this.chatService.sendMessage(this.texto);
      this.texto = '';
    }
  }
}
