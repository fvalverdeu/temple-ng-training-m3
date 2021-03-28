import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:libs/idstore-commons/src/lib/idstore-commons.component.spec.ts
import { IdstoreCommonsComponent } from './idstore-commons.component';

describe('IdstoreCommonsComponent', () => {
  let component: IdstoreCommonsComponent;
  let fixture: ComponentFixture<IdstoreCommonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdstoreCommonsComponent ]
=======
import { AdminComponent } from './admin.component';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminComponent ]
>>>>>>> 5bb3d3b829a731f26bfb8e88082c853d2f7c8575:apps/idstore-web/src/app/features/admin/admin.component.spec.ts
    })
    .compileComponents();
  });

  beforeEach(() => {
<<<<<<< HEAD:libs/idstore-commons/src/lib/idstore-commons.component.spec.ts
    fixture = TestBed.createComponent(IdstoreCommonsComponent);
=======
    fixture = TestBed.createComponent(AdminComponent);
>>>>>>> 5bb3d3b829a731f26bfb8e88082c853d2f7c8575:apps/idstore-web/src/app/features/admin/admin.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
