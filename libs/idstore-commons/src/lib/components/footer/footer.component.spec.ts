import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsFooterComponent } from './footer.component';

describe('IdsFooterComponent', () => {
  let component: IdsFooterComponent;
  let fixture: ComponentFixture<IdsFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
