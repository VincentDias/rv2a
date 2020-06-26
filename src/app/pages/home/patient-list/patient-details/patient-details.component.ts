import { SmsService } from './../../../../shared/sms.service';
import { PatientService } from './../../../../shared/patient.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent implements OnInit {

  constructor(
    private patientService: PatientService,
    private smsService: SmsService
  ) { }


  patients;

  ngOnInit(): void {
    const patientId = window.history.state;
    this.getPatient(patientId.id);
  }

  getPatient(patientId) {
    this.patients = this.patientService.getPatient(patientId).subscribe(data => {
      this.patients = data;
    });
  }
}
