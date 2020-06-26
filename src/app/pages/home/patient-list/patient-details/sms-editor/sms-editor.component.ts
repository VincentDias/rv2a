import { Component, OnInit } from '@angular/core';
import { SmsService } from 'src/app/shared/sms.service';
import { Sms } from 'src/app/model/sms';

@Component({
  selector: 'app-sms-editor',
  templateUrl: './sms-editor.component.html',
  styleUrls: ['./sms-editor.component.scss']
})
export class SmsEditorComponent implements OnInit {

  constructor(private smsService: SmsService) { }

  smss: Sms[] = [];
  sms: Sms = new Sms();

  ngOnInit(): void {
  }

  create() {
    this.smsService.create(this.sms).subscribe(data => {
      this.sms = data;
      this.smss.push(data);
    });
  }
}
