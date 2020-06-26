import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PraticianService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:8081/';

  getPraticians() {
    return this.http.get(this.url + 'praticians');
  }

}
