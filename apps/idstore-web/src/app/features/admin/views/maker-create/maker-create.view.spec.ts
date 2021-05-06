import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakerCreateView } from './maker-create.view';

describe('MakerCreateView', () => {
  let component: MakerCreateView;
  let fixture: ComponentFixture<MakerCreateView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakerCreateView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakerCreateView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
