import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalState } from 'src/app/reducers/global.reducer';
import { Store, select } from '@ngrx/store';
import { selectChangeStatus } from 'src/app/selectors/global.selector';
import { ChangeStatusGlobals } from 'src/app/actions/global.actions';
import { ChatState } from 'src/app/reducers/chat.reducer';
import { CreateUser } from 'src/app/actions/chat.action';

@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
  styleUrls: ['./modal-user.component.css']
})
export class ModalUserComponent implements OnInit {
  
  constructor(private storeGlobal: Store<GlobalState>, private store: Store<ChatState>) { }
  
  public changeStatus = this.storeGlobal.pipe(select(selectChangeStatus));
  
  
  ngOnInit() {
  }

  Save(nome, foto) {
    this.store.dispatch(new CreateUser({ nome:nome, foto:foto }));
    this.closed();
  }

  closed() {
    this.storeGlobal.dispatch(new ChangeStatusGlobals());
  }

}
