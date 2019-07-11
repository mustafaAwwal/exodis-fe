import { TestBed } from '@angular/core/testing';

import { LoginSignUpService } from './login-sign-up.service';

describe('LoginSignUpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginSignUpService = TestBed.get(LoginSignUpService);
    expect(service).toBeTruthy();
  });
});
