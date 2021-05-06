import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryDetailView } from './category-detail.view';

describe('CategoryDetailView', () => {
  let component: CategoryDetailView;
  let fixture: ComponentFixture<CategoryDetailView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryDetailView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryDetailView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
