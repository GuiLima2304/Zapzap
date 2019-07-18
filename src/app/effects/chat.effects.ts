import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { FetchMessage, ChatTypes, LoadMessage } from '../actions/chat.action';
import { ChatService } from '../services/chat.service';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Response } from '../models/Response';


@Injectable()
export class ChatEffects {

  constructor(private actions$: Actions, private chatService: ChatService) {}

  @Effect()

    requestUser$ = this.actions$.pipe(
      ofType<FetchMessage>(ChatTypes.FetchMessage),
      switchMap(() => this.chatService.getMsg()),
      map((response: Response) => new LoadMessage({response}))

    );
}
