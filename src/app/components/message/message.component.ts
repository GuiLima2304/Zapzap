import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'src/app/models/Message';
import { SendMessage, EditMessage } from 'src/app/actions/chat.action';
import { Store } from '@ngrx/store';
import { ChatState } from 'src/app/reducers/chat.reducer';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() public message: Message;
  @Input() public index: number;

  public editField: boolean;
  public newText: string;

  constructor(private store: Store<ChatState>) { }

  ngOnInit() {
    this.editField = false;
  }

  teste(message){
    this.editField = true;
    message = '';
    this.newText = message;
  }

  editar(index){
    this.store.dispatch(new EditMessage({ text:this.newText, index: index }));
    this.editField = false;
  }
}
