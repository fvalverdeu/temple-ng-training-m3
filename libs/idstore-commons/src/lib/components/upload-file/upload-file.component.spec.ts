import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsUploadFileComponent } from './upload-file.component';

describe('IdsUploadFileComponent', () => {
  let component: IdsUploadFileComponent;
  let fixture: ComponentFixture<IdsUploadFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsUploadFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdsUploadFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
