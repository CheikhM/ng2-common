import { TestBed } from '@angular/core/testing';

import { Ng2CommnonService } from './ng2-common.service';

describe('Ng2CommnonService', () => {
  let service: Ng2CommnonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ng2CommnonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
