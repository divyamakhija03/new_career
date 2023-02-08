import { TestBed } from '@angular/core/testing';

import { EasyServiceService } from './easy-service.service';

describe('EasyServiceService', () => {
  let service: EasyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EasyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
