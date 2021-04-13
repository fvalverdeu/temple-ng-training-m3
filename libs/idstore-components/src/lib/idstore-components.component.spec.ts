import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdstoreComponentsComponent } from './idstore-components.component';

describe('IdstoreComponentsComponent', () => {
  let component: IdstoreComponentsComponent;
  let fixture: ComponentFixture<IdstoreComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdstoreComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdstoreComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
