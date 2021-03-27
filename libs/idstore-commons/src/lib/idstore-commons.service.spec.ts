import { TestBed } from '@angular/core/testing';

import { IdstoreCommonsService } from './idstore-commons.service';

describe('IdstoreCommonsService', () => {
  let service: IdstoreCommonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdstoreCommonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
