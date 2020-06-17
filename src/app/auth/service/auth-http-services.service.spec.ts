import { TestBed } from '@angular/core/testing';

import { AuthHttpServicesService } from './auth-http-services.service';

describe('AuthHttpServicesService', () => {
  let service: AuthHttpServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthHttpServicesService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
