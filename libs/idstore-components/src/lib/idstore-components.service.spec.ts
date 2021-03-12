import { TestBed } from '@angular/core/testing';

import { IdstoreComponentsService } from './idstore-components.service';

describe('IdstoreComponentsService', () => {
  let service: IdstoreComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdstoreComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
