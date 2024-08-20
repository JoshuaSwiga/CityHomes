import { TestBed } from '@angular/core/testing';

import { ServiceForAPIService } from './service-for-api.service';

describe('ServiceForAPIService', () => {
  let service: ServiceForAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceForAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
