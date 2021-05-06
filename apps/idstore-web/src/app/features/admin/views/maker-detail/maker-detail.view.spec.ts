import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakerDetailView } from './maker-detail.view';

describe('MakerDetailView', () => {
  let component: MakerDetailView;
  let fixture: ComponentFixture<MakerDetailView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakerDetailView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakerDetailView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
