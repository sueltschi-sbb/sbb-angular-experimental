import { TestBed } from '@angular/core/testing';

import { AngularExperimentalService } from './angular-experimental.service';

describe('AngularExperimentalService', () => {
  let service: AngularExperimentalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularExperimentalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
