import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsHeaderComponent } from './header.component';

describe('IdsHeaderComponent', () => {
  let component: IdsHeaderComponent;
  let fixture: ComponentFixture<IdsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
