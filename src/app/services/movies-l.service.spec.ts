import { TestBed } from '@angular/core/testing';

import { MoviesLService } from './movies-l.service';

describe('MoviesLService', () => {
  let service: MoviesLService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesLService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
