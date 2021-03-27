import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:libs/idstore-components/src/lib/idstore-components.component.spec.ts
import { IdstoreComponentsComponent } from './idstore-components.component';

describe('IdstoreComponentsComponent', () => {
  let component: IdstoreComponentsComponent;
  let fixture: ComponentFixture<IdstoreComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdstoreComponentsComponent ]
=======
import { AuthComponent } from './auth.component';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthComponent ]
>>>>>>> 5bb3d3b829a731f26bfb8e88082c853d2f7c8575:apps/idstore-web/src/app/features/auth/auth.component.spec.ts
    })
    .compileComponents();
  });

  beforeEach(() => {
<<<<<<< HEAD:libs/idstore-components/src/lib/idstore-components.component.spec.ts
    fixture = TestBed.createComponent(IdstoreComponentsComponent);
=======
    fixture = TestBed.createComponent(AuthComponent);
>>>>>>> 5bb3d3b829a731f26bfb8e88082c853d2f7c8575:apps/idstore-web/src/app/features/auth/auth.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
