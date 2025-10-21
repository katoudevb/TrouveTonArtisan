import { TestBed } from '@angular/core/testing';

import { ArtisansService } from './artisan.service';

describe('ArtisanService', () => {
  let service: ArtisansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtisansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
