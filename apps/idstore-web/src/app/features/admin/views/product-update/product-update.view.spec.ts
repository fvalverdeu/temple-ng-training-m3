import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductUpdateView } from './product-update.view';

describe('ProductUpdateView', () => {
  let component: ProductUpdateView;
  let fixture: ComponentFixture<ProductUpdateView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductUpdateView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductUpdateView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
