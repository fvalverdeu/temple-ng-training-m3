import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsView } from './products.view';

describe('ProductsView', () => {
  let component: ProductsView;
  let fixture: ComponentFixture<ProductsView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
