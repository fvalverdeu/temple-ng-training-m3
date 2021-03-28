import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
<<<<<<< HEAD
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

=======
        AppComponent
    }).compileComponents();
  });
>>>>>>> 5bb3d3b829a731f26bfb8e88082c853d2f7c8575
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

<<<<<<< HEAD
<<<<<<< HEAD:apps/idstore-reports/src/app/app.component.spec.ts
=======
>>>>>>> 5bb3d3b829a731f26bfb8e88082c853d2f7c8575
  it(`should have as title 'idstore-reports'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('idstore-reports');
<<<<<<< HEAD
=======
  it(`should have as title 'idstore-web'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('idstore-web');
>>>>>>> 5bb3d3b829a731f26bfb8e88082c853d2f7c8575:apps/idstore-web/src/app/app.component.spec.ts
=======
>>>>>>> 5bb3d3b829a731f26bfb8e88082c853d2f7c8575
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
<<<<<<< HEAD
<<<<<<< HEAD:apps/idstore-reports/src/app/app.component.spec.ts
    expect(compiled.querySelector('.content span').textContent).toContain('idstore-reports app is running!');
=======
    expect(compiled.querySelector('.content span').textContent).toContain('idstore-web app is running!');
>>>>>>> 5bb3d3b829a731f26bfb8e88082c853d2f7c8575:apps/idstore-web/src/app/app.component.spec.ts
=======
    expect(compiled.querySelector('.content span').textContent).toContain('idstore-reports app is running!');
>>>>>>> 5bb3d3b829a731f26bfb8e88082c853d2f7c8575
  });
});
