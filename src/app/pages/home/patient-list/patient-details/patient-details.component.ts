import { SmsService } from './../../../../shared/sms.service';
import { PatientService } from './../../../../shared/patient.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent implements OnInit {

  constructor(
    private patientService: PatientService,
    private smsService: SmsService,
    private route: ActivatedRoute
  ) { }


  patients;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.getPatient(id);
    });
  }

  getPatient(patientId) {
    this.patients = this.patientService.getPatient(patientId).subscribe(data => {
      this.patients = data;
    });
  }
}
