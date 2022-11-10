import { TestBed } from '@angular/core/testing';

import { BevService } from './bev.service';

describe('BevService', () => {
  let service: BevService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BevService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
