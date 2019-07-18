import { ChatTypes, ChatActions } from '../actions/chat.action';
import { User } from '../models/User';
import { Message } from '../models/Message';
import { selectUser } from '../selectors/chat.selector';

export interface ChatState {
    userList: User[];
    selectedUser: number;
    message: string;
}

export const initialState: ChatState = {
    userList: [],
    selectedUser: 0,
    message: ''
};

export function reducer(state = initialState, action: ChatActions): ChatState {
    switch (action.type) {
        case ChatTypes.NewMessage:
            return state;
        case ChatTypes.LoadMessage:
            return { ...state, userList: action.payload.response.users };
        case ChatTypes.SaveIndex:
            return { ...state, selectedUser: action.payload };
        case ChatTypes.SendMessage:
            var newMessage: Message = {
                texto: action.payload,
                me: true
            }
            state.userList[state.selectedUser].mensagens.push(newMessage)
            return state;
        case ChatTypes.CreateUser:
            var newUser: User = {
                nome: action.payload.nome,
                foto: action.payload.foto,
                mensagens: []
            }
            // state.userList.push(newUser);
            return { ...state, userList: [...state.userList, newUser] };
        case ChatTypes.EditMessage:
            state.userList[state.selectedUser].mensagens[action.payload.index].texto = action.payload.text;
            return state;
        default:
            return state;
    }
}
