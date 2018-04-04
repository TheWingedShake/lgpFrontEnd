import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MessageService {

  private messageUrl = '/message';

  constructor(private http: HttpClient, @Inject('API_URL') private apiUrl: string) { }

  sendMessageByOrder(orderId: string, content: string): Observable<any> {
    const body = {orderId, content};
    return this.sendMessage(body);
  }

  sendMessageByThread(threadId: string, content: string): Observable<any> {
    const body = {threadId, content};
    return this.sendMessage(body);
  }

  sendMessage(body: any): Observable<any> {
    return this.http.post(`${this.apiUrl}${this.messageUrl}`, body, {withCredentials: true});
  }

  getUnreadMessageCount(): Observable<any> {
    return this.http.get(`${this.apiUrl}${this.messageUrl}/recent`, {withCredentials: true});
  }

}
