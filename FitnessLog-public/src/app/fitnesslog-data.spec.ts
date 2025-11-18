import { TestBed } from '@angular/core/testing';

import { FitnesslogData } from './fitnesslog-data';

describe('FitnesslogData', () => {
  let service: FitnesslogData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FitnesslogData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
