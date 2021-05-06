import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakerFormComponent } from './maker-form.component';

describe('MakerFormComponent', () => {
  let component: MakerFormComponent;
  let fixture: ComponentFixture<MakerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakerFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
