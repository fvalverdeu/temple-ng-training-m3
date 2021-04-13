import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductConfirmComponent } from './product-confirm.component';

describe('ProductConfirmComponent', () => {
  let component: ProductConfirmComponent;
  let fixture: ComponentFixture<ProductConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
