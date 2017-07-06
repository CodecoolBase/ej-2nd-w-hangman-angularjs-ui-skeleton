import { TestBed, inject } from '@angular/core/testing';

import { HangmanRestService } from './hangman-rest.service';

describe('HangmanRestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HangmanRestService]
    });
  });

  it('should be created', inject([HangmanRestService], (service: HangmanRestService) => {
    expect(service).toBeTruthy();
  }));
});
