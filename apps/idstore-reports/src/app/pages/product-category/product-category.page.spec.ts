import { ProductService } from './../../services/product.service';
import { Observable, of } from 'rxjs';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IProduct } from '@idstore/commons/interfaces/product.interface';

import { ProductCategoryPage } from './product-category.page';

class MockProductService {
  public getProductByCategory(): Observable<IProduct[]>{
    return of([
      {
        _id: 'id1',
        images: [''],
        name: 'producto 1',
        description: 'description 1',
        sku: '',
        unit:        'string',
        expiration:  'string',
        model:       'string',
        quantity:    'string',
        price:       0,
        category:    'string',
        maker:       'string',
        status:      'string'
      },
      {
        _id: 'id2',
        images: [''],
        name: 'producto 2',
        description: 'description 2',
        sku: '',
        unit:        'string',
        expiration:  'string',
        model:       'string',
        quantity:    'string',
        price:       0,
        category:    'string',
        maker:       'string',
        status:      'string'
      }
    ])
  }
}

describe('ProductCategoryPage', () => {
  let component: ProductCategoryPage;
  let fixture: ComponentFixture<ProductCategoryPage>;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(async () => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    await TestBed.configureTestingModule({
      declarations: [ ProductCategoryPage ],
      providers: [{provide: ProductService, useClass: MockProductService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('El componente debe tener una variable title con el título del reporte',
  () => {
    const title = component.title;
    expect(title).toContain('Reporte');
  });

  it('El componente debe mostrar el título en el HTML',
  () => {
    const page = new Page();
    expect(page.title).toContain('Reporte');
  });

  it('El componente debe mostrar el nombre: producto 1',
  () => {
    const page = new Page();
    expect(page.name).toContain('producto 1');
  });


  class Page {
    public title: HTMLElement;
    public name: HTMLElement;
    public description: HTMLElement;

    constructor() {
      const elementTitle = fixture.nativeElement.querySelector('h1');
      this.title = elementTitle.textContent;

      const elementName = fixture.nativeElement.querySelector('p.name');
      this.name = elementName.textContent;

      const elementDescription = fixture.nativeElement.querySelector('p.description');
      this.description = elementDescription.textContent;
    }
  }
});


