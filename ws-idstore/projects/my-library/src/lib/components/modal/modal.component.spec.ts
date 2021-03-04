import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlModalComponent } from './modal.component';

describe('MlModalComponent', () => {
  let component: MlModalComponent;
  let fixture: ComponentFixture<MlModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MlModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
