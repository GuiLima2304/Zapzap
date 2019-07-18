import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalState } from 'src/app/reducers/global.reducer';
import { Store, select } from '@ngrx/store';
import { selectChangeStatus } from 'src/app/selectors/global.selector';
import { ChangeStatusGlobals } from 'src/app/actions/global.actions';

@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
  styleUrls: ['./modal-user.component.css']
})
export class ModalUserComponent implements OnInit {
  
  constructor(private storeGlobal: Store<GlobalState>) { }
  
  public changeStatus = this.storeGlobal.pipe(select(selectChangeStatus));
  
  ngOnInit() {
  }

  closed(){
    this.storeGlobal.dispatch(new ChangeStatusGlobals());
  }

}
