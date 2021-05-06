import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IAction } from '../../../interfaces/action.interface';
import { EAction } from '../../../interfaces/constants/action.enum';
import { Category } from '../../../models/category.model';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.scss']
})
export class CategoryTableComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator | null;
  @Input() categoryList: Category[] = [];
  @Output() action: EventEmitter<IAction> = new EventEmitter<IAction>();
  // dataSource: Category[] = [];
  dataSource: MatTableDataSource<Category>;
  displayedColumns: string[];

  constructor() {
        this.paginator = null;
        // this.dataSource = this.categoryList;
        this.dataSource = new MatTableDataSource<Category>(this.categoryList);
        this.displayedColumns = ['Titulo', 'Imagen', 'Categoría Padre', 'Acciones'];
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.categoryList.currentValue) {
      console.log(changes.categoryList)
      this.dataSource = new MatTableDataSource<Category>(this.categoryList);
      this.dataSource.paginator = this.paginator;
    }
  }

  ngAfterViewInit(): void {
    console.log(this.paginator)
    console.log(this.dataSource)
    // this.dataSource.paginator = this.paginator;
  }

  detail(id: string): void {
    console.log('detail', id);
    this.action.emit({name: EAction.FIND, id: id});
  }
  update(id: string): void {
    console.log('update', id);
    this.action.emit({name: EAction.UPDATE, id: id});
  }
  delete(id: string): void {
    console.log('delete', id);
    this.action.emit({name: EAction.DELETE, id: id});
  }

}
