import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sms } from 'src/app/model/sms';

@Injectable({
  providedIn: 'root'
})

export class SmsService {

  constructor(private http: HttpClient) { }

  private static BASE_URL = 'http://localhost:8080/sms';

  public getAllSms() {
    return this.http.get<Sms>(SmsService.BASE_URL);
  }

  public create(sms: Sms): Observable<Sms> {
    return this.http.post<Sms>(SmsService.BASE_URL, sms);
  }
}
