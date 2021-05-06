import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakerFilterComponent } from './maker-filter.component';

describe('MakerFilterComponent', () => {
  let component: MakerFilterComponent;
  let fixture: ComponentFixture<MakerFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakerFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakerFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
