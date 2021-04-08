import { Product } from '../../../../../../../../../libs/idstore-commons/src/lib/models/product.model';
import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit, OnChanges, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator | null;
  @Input() productList: Product[] = [];
  // dataSource: Product[] = [];
  dataSource: MatTableDataSource<Product>;
  displayedColumns: string[];

  constructor() {
        this.paginator = null;
        // this.dataSource = this.productList;
        this.dataSource = new MatTableDataSource<Product>(this.productList);
        this.displayedColumns = ['Nombre', 'Codigo', 'Precio', 'Acciones'];
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.productList.currentValue) {
      console.log(changes.productList)
      this.dataSource = new MatTableDataSource<Product>(this.productList);
      this.dataSource.paginator = this.paginator;
    }
  }

  ngAfterViewInit(): void {
    console.log(this.paginator)
    console.log(this.dataSource)
    // this.dataSource.paginator = this.paginator;
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
