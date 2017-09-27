import { TestBed, async, inject } from '@angular/core/testing';

import { AuthnewGuard } from './authnew.guard';

describe('AuthnewGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthnewGuard]
    });
  });

  it('should ...', inject([AuthnewGuard], (guard: AuthnewGuard) => {
    expect(guard).toBeTruthy();
  }));
});
