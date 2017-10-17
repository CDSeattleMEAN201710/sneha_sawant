import { TestBed, inject } from '@angular/core/testing';

import { DojoweatherService } from './dojoweather.service';

describe('DojoweatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DojoweatherService]
    });
  });

  it('should be created', inject([DojoweatherService], (service: DojoweatherService) => {
    expect(service).toBeTruthy();
  }));
});
