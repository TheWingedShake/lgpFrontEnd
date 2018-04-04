import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { ThreadModel } from '../../components/threads/thread.model';

@Injectable()
export class ThreadService {

  private threadUrl = '/thread';

  constructor(
    private http: HttpClient,
    @Inject('API_URL') private apiUrl: string
  ) { }

  getThreads(params = []): Observable<ThreadModel[]> {
    return this.http.get<ThreadModel[]>(`${this.apiUrl}${this.threadUrl}`, {withCredentials: true})
    .pipe(
      map(data => data.map(item => new ThreadModel(item)))
    );
  }

  getThread(id): Observable<ThreadModel> {
    return this.http.get<ThreadModel>(`${this.apiUrl}${this.threadUrl}/${id}`, {withCredentials: true});
  }

}
