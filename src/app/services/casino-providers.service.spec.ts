import { TestBed } from '@angular/core/testing';

import { CasinoProvidersService } from './casino-providers.service';

describe('CasinoProvidersService', () => {
  let service: CasinoProvidersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CasinoProvidersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
