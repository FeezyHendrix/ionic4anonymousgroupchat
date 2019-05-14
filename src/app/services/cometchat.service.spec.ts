import { TestBed } from '@angular/core/testing';

import { CometchatService } from './cometchat.service';

describe('CometchatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CometchatService = TestBed.get(CometchatService);
    expect(service).toBeTruthy();
  });
});
