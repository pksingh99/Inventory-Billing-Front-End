import { TestBed, inject } from '@angular/core/testing';

import { LolService } from './lol.service';

describe('LolService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LolService]
    });
  });

  it('should be created', inject([LolService], (service: LolService) => {
    expect(service).toBeTruthy();
  }));
});
