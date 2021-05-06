import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakersView } from './makers.view';

describe('MakersView', () => {
  let component: MakersView;
  let fixture: ComponentFixture<MakersView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakersView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakersView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
