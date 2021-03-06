import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdstoreCommonsComponent } from './idstore-commons.component';

describe('IdstoreCommonsComponent', () => {
  let component: IdstoreCommonsComponent;
  let fixture: ComponentFixture<IdstoreCommonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdstoreCommonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdstoreCommonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
