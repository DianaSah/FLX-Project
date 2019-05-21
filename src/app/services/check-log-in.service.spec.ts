import { TestBed } from '@angular/core/testing';

import { CheckLogInService } from './check-log-in.service';

describe('CheckLogInService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckLogInService = TestBed.get(CheckLogInService);
    expect(service).toBeTruthy();
  });
});
