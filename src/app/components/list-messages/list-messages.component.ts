import { Component, OnInit, Input } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectUserList } from 'src/app/selectors/chat.selector';
import { ChatState } from 'src/app/reducers/chat.reducer';
import { Message } from 'src/app/models/Message';


@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
  styleUrls: ['./list-messages.component.css']
})
export class ListMessagesComponent implements OnInit {
  @Input() public listMessages: Message[] = [];

  constructor(private store: Store<ChatState>) { }

  ngOnInit() {
  }

}
