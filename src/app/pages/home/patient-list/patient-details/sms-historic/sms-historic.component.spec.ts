import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsHistoricComponent } from './sms-historic.component';

describe('SmsHistoricComponent', () => {
  let component: SmsHistoricComponent;
  let fixture: ComponentFixture<SmsHistoricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsHistoricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsHistoricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
