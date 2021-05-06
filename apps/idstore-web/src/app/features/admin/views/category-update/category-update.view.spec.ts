import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryUpdateView } from './category-update.view';

describe('CategoryUpdateView', () => {
  let component: CategoryUpdateView;
  let fixture: ComponentFixture<CategoryUpdateView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryUpdateView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryUpdateView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
