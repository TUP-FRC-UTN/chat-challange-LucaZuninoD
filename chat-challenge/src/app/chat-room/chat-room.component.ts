import { Component } from '@angular/core';
import {UserMessageComponent} from "../user-message/user-message.component";
import {ConversationComponent} from "../conversation/conversation.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-chat-room',
  standalone: true,
  imports: [CommonModule, ConversationComponent, UserMessageComponent],
  templateUrl: './chat-room.component.html',
  styleUrl: './chat-room.component.css'
})
export class ChatRoomComponent {
  messages: {user: string, text: string, time: string}[] = [];

  addMessage(message: {user: string, text: string}) {
    const now = new Date();
    const time = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
    this.messages.push({...message, time});
  }
}
