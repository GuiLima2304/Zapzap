import { Message } from './Message';

export interface User {
    nome: string;
    foto: string;
    mensagens: Message[];
}
