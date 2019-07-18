import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { Store } from '@ngrx/store';
import { ChatState } from 'src/app/reducers/chat.reducer';
import { FetchMessage } from 'src/app/actions/chat.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private store: Store<ChatState>) { }

  ngOnInit() {
    this.store.dispatch(new FetchMessage());
  }

}
