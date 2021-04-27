import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsImgPreviewComponent } from './img-preview.component';

describe('IdsImgPreviewComponent', () => {
  let component: IdsImgPreviewComponent;
  let fixture: ComponentFixture<IdsImgPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsImgPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdsImgPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
