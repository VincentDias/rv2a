import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PatientService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:8080/';

  getPatients() {
    return this.http.get(this.url + 'patients');
  }

  getPatient(id) {
    return this.http.get(this.url + 'patients/' + id);
  }
}
