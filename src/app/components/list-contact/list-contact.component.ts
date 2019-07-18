import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ChatState } from 'src/app/reducers/chat.reducer';
import { selectUserList } from 'src/app/selectors/chat.selector';
import { SaveIndex } from 'src/app/actions/chat.action';
import { GlobalState, Globalreducer } from 'src/app/reducers/global.reducer';
import { selectChangeStatus } from 'src/app/selectors/global.selector';
import { ChangeStatusGlobals } from 'src/app/actions/global.actions';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent implements OnInit {
  public userList$ = this.store.pipe(select(selectUserList));
  constructor(private store: Store<ChatState>, private storeGlobal: Store<GlobalState>) { }

  public changeStatus$ = this.storeGlobal.pipe(select(selectChangeStatus));

  ngOnInit() {
  }

  openModal(): void{
    this.storeGlobal.dispatch(new ChangeStatusGlobals());
    console.log(this.changeStatus$);
  }


  selectUser(index): void{
    this.store.dispatch(new SaveIndex(index));
  }
}
