import { TestBed } from '@angular/core/testing';

import { PraticianService } from './pratician.service';

describe('PraticianService', () => {
  let service: PraticianService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PraticianService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
