import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '@idstore/commons/models/product.model';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.page.html',
  styleUrls: ['./product-category.page.scss']
})
export class ProductCategoryPage implements OnInit {

  products: Product[];
  title: string = 'Reporte de Productos por Categoría';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProductByCategory('')
    .subscribe(response => {
      this.products = response.map(item => new Product(item));
    });
  }

}
