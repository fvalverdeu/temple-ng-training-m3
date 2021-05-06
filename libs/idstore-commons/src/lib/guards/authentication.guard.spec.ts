import { TestBed } from '@angular/core/testing';

import { IdsAuthenticationGuard } from './authentication.guard';

describe('IdsAuthenticationGuard', () => {
  let guard: IdsAuthenticationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IdsAuthenticationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
