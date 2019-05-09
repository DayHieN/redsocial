import { TestBed } from '@angular/core/testing';

import { EventAssistanceService } from './event-assistance.service';

describe('EventAssistanceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventAssistanceService = TestBed.get(EventAssistanceService);
    expect(service).toBeTruthy();
  });
});
