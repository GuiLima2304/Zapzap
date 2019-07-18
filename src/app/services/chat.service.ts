import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '../models/Response';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }

  public getMsg() {
    return this.http.get<Response>('https://api.myjson.com/bins/j5c0q');
  }
}
