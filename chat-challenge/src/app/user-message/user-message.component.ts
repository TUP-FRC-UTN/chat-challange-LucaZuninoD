import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-user-message',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-message.component.html',
  styleUrl: './user-message.component.css'
})
export class UserMessageComponent {
  @Input() userName: string = '';
  @Output() onSendMessage = new EventEmitter<{user: string, text: string}>();

  message: string = '';

  sendMessage() {
    if (this.message.trim()) {
      this.onSendMessage.emit({user: this.userName, text: this.message});
      this.message = '';
    }
  }
}
