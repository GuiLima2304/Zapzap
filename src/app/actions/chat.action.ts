import { Action } from '@ngrx/store';
import { Response } from '../models/Response';

export enum ChatTypes {
    NewMessage = '[Message Component] New Message',
    LoadMessage = '[Message Component] Load Message',
    FetchMessage = '[Message Component] Fetch Message',
    SaveIndex = '[Message Component] Save Index',
    SendMessage = '[Message Component] Send Message',
    EditMessage = '[Message Component] Edit Message',
    CreateUser = '[Message Component] Create User'
}

export class NewMessage implements Action {
    readonly type = ChatTypes.NewMessage;

    constructor(public payload: string) { }
}

export class LoadMessage implements Action {
    readonly type = ChatTypes.LoadMessage;

    constructor(public payload: { response: Response }) { }
}

export class FetchMessage implements Action {
    readonly type = ChatTypes.FetchMessage;

    constructor() {}
}

export class SaveIndex implements Action {
    readonly type = ChatTypes.SaveIndex;

    constructor(public payload: number ) {}
}

export class SendMessage implements Action{
    readonly type = ChatTypes.SendMessage;
    
    constructor(public payload: string) {}

}

export class EditMessage implements Action{
    readonly type = ChatTypes.EditMessage;

    constructor(public payload: { text: string, index: number }) {}
}

export class CreateUser implements Action {
    readonly type = ChatTypes.CreateUser;
  
    constructor(public payload: { nome:string, foto: string}) {}
  }

export type ChatActions = NewMessage | LoadMessage | FetchMessage | SaveIndex | SendMessage | EditMessage | CreateUser;
