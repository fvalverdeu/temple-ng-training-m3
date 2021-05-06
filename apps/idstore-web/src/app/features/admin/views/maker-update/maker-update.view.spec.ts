import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakerUpdateView } from './maker-update.view';

describe('MakerUpdateView', () => {
  let component: MakerUpdateView;
  let fixture: ComponentFixture<MakerUpdateView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakerUpdateView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakerUpdateView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
