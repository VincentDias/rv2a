import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DiscussionService {
  private url = 'http://localhost:8082/';

  constructor(private http: HttpClient ) { }



  putDiscussion(message : []) {
    return this.http.put(this.url + 'chat', message);
  }
}
