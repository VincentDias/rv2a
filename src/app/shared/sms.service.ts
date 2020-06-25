import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SmsService {

  constructor(private http: HttpClient ) { }

  private url = 'http://localhost:8082/';

  getAllSms(){
    return this.http.get(this.url + 'sms');
  }

  postSms(message){
    return this.http.post(this.url + 'sms', message);
  }
}
