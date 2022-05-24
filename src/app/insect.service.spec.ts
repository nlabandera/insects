import { TestBed } from '@angular/core/testing';

import { InsectService } from './insect.service';

describe('InsectService', () => {
  let service: InsectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
