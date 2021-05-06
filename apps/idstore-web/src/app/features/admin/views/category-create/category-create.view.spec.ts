import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCreateView } from './category-create.view';

describe('CategoryCreateView', () => {
  let component: CategoryCreateView;
  let fixture: ComponentFixture<CategoryCreateView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryCreateView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryCreateView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
