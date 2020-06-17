import { TestBed } from '@angular/core/testing';

import { InstituteHttpService } from './institute-http.service';

describe('InstituteHttpService', () => {
  let service: InstituteHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstituteHttpService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
