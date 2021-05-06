import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesView } from './categories.view';

describe('CategoriesView', () => {
  let component: CategoriesView;
  let fixture: ComponentFixture<CategoriesView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
