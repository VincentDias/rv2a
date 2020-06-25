import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Sms } from '../models/sms';

@Injectable({
  providedIn: 'root'
})

export class SmsService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:8080/sms';

  getAllSms() {
    return this.http.get(this.url + 'sms');
  }

  postSms(sms: Sms) {
    return this.http.post(this.url + 'sms', message);
  }
}
