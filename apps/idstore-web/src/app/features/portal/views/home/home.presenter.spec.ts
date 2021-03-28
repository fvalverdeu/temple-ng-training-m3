import { TestBed } from '@angular/core/testing';

import { HomePresenter } from './home.presenter';

describe('HomePresenter', () => {
  let service: HomePresenter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomePresenter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
