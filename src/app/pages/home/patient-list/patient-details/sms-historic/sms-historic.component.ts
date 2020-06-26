import { SmsService } from './../../../../../shared/sms.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sms-historic',
  templateUrl: './sms-historic.component.html',
  styleUrls: ['./sms-historic.component.scss']
})
export class SmsHistoricComponent implements OnInit {

  constructor(private smsService: SmsService) { }

  ngOnInit(): void {
  }

}
