import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { ListContactComponent } from './components/list-contact/list-contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ChatComponent } from './components/chat/chat.component';
import { MessageComponent } from './components/message/message.component';
import { ListMessagesComponent } from './components/list-messages/list-messages.component';
import { HttpClientModule } from '@angular/common/http';
import { reducer } from './reducers/chat.reducer';
import { ChatEffects } from './effects/chat.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { ModalUserComponent } from './components/modal-user/modal-user.component';
import { Globalreducer } from './reducers/global.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ListContactComponent,
    HomeComponent,
    ChatComponent,
    MessageComponent,
    ListMessagesComponent,
    ModalUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ chat: reducer, global: Globalreducer }),
    EffectsModule.forRoot([ChatEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
