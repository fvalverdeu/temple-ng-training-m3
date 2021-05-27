import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderView } from './order.view';

describe('OrderView', () => {
  let component: OrderView;
  let fixture: ComponentFixture<OrderView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
