import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakerTableComponent } from './maker-table.component';

describe('MakerTableComponent', () => {
  let component: MakerTableComponent;
  let fixture: ComponentFixture<MakerTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakerTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
