import { TestBed } from '@angular/core/testing';

import { HistoryDepotRetraitService } from './history-depot-retrait.service';

describe('HistoryDepotRetraitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HistoryDepotRetraitService = TestBed.get(HistoryDepotRetraitService);
    expect(service).toBeTruthy();
  });
});
