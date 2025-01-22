import { TestBed } from '@angular/core/testing';

import { InfoGrabService } from './info-grab.service';

describe('InfoGrabService', () => {
  let service: InfoGrabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoGrabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
