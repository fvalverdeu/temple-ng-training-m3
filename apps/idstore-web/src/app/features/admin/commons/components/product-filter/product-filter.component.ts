import { IFilterProduct } from './../../../interfaces/filter.interface';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {

  @Output() filterData: EventEmitter<IFilterProduct> = new EventEmitter<IFilterProduct>();
  formGroup: FormGroup;
  constructor(
    private fb: FormBuilder
  ) {
    this.formGroup = this.fb.group({
      name: '',
      sku: '',
      state: ''
    });
  }

  ngOnInit(): void {
  }

  filter(): void {
    console.log('Emitiendo filterData', this.formGroup.value);
    this.filterData.emit(this.formGroup.value);
  }

}
