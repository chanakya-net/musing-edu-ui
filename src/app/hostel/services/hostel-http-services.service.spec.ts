import { TestBed } from '@angular/core/testing';

import { HostelHttpServicesService } from './hostel-http-services.service';

describe('HostelHttpServicesService', () => {
  let service: HostelHttpServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HostelHttpServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
