import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ChatState } from 'src/app/reducers/chat.reducer';
import { selectUser } from 'src/app/selectors/chat.selector';
import { SendMessage } from 'src/app/actions/chat.action';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public message;

  public user$ = this.store.pipe(select(selectUser));
  constructor(private store: Store<ChatState>) { }

  ngOnInit() {
  }

  sendMessage(){
    this.store.dispatch(new SendMessage(this.message));
    this.message = '';
    
  }

}
