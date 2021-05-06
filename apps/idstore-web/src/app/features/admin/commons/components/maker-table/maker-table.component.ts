import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IAction } from '../../../interfaces/action.interface';
import { EAction } from '../../../interfaces/constants/action.enum';
import { Maker } from '../../../models/maker.model';

@Component({
  selector: 'app-maker-table',
  templateUrl: './maker-table.component.html',
  styleUrls: ['./maker-table.component.scss']
})
export class MakerTableComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator | null;
  @Input() makerList: Maker[] = [];
  @Output() action: EventEmitter<IAction> = new EventEmitter<IAction>();
  // dataSource: Maker[] = [];
  dataSource: MatTableDataSource<Maker>;
  displayedColumns: string[];

  constructor() {
        this.paginator = null;
        // this.dataSource = this.makerList;
        this.dataSource = new MatTableDataSource<Maker>(this.makerList);
        this.displayedColumns = ['Nombre', 'Documento', 'Estado', 'Acciones'];
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.makerList.currentValue) {
      console.log(changes.makerList)
      this.dataSource = new MatTableDataSource<Maker>(this.makerList);
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
