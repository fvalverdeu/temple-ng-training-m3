import { Product } from '../../../../../../../../../libs/idstore-commons/src/lib/models/product.model';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit, OnChanges {

  @Input() productList: Product[] = [];
  dataSource: Product[] = [];
  displayedColumns: string[];

  constructor() {
        // this.dataSource = this.productList;
        this.displayedColumns = ['Nombre', 'Codigo', 'Precio', 'Acciones'];
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.productList.currentValue) {
      console.log(changes.productList)
      this.dataSource = this.productList;
    }
  }

  detail(sku: string): void {
    console.log('detail', sku);
  }
  update(sku: string): void {
    console.log('update', sku);
  }
  delete(sku: string): void {
    console.log('delete', sku);
  }

}
