import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IscLoaderComponent } from './loader.component';

describe('IscLoaderComponent', () => {
  let component: IscLoaderComponent;
  let fixture: ComponentFixture<IscLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IscLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IscLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
