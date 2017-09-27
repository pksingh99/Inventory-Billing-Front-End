import { TestBed, inject } from '@angular/core/testing';

import { UsernewService } from './usernew.service';

describe('UsernewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsernewService]
    });
  });

  it('should be created', inject([UsernewService], (service: UsernewService) => {
    expect(service).toBeTruthy();
  }));
});
