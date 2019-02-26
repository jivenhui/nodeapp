import { TestBed } from '@angular/core/testing';

import { EventParserService } from './event-parser.service';

describe('EventParserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventParserService = TestBed.get(EventParserService);
    expect(service).toBeTruthy();
  });
});
