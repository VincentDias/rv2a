import { Component, NgModule } from '@angular/core';
import { ChatService } from 'src/app/shared/chat.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  title = 'websocket-frontend';
  input;
  constructor(public chatService: ChatService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    const patient = window.history.state;

    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
    });

  }
  sendMessage() {
    if (this.input) {
      this.chatService.sendMessage(this.input);
      this.input = '';
    }
  }
}
