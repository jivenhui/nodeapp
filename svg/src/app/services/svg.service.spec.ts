import { TestBed } from '@angular/core/testing';

import { SvgService } from './svg.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SvgService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: SvgService = TestBed.get(SvgService);
    expect(service).toBeTruthy();
  });
});
