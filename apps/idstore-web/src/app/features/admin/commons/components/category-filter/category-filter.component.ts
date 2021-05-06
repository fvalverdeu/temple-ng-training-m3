import { ICategoryRequest } from './../../../../../../../../../libs/idstore-commons/src/lib/interfaces/category.interface';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ICategoryFormData } from '../../../interfaces/category-form-data.interface';
import { Category } from '../../../models/category.model';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss']
})
export class CategoryFilterComponent implements OnInit {

  @Output() filterData: EventEmitter<ICategoryRequest> = new EventEmitter<ICategoryRequest>();
  formGroup: FormGroup;
  constructor(
    private fb: FormBuilder
  ) {
    this.formGroup = this.fb.group({
      title: '',
      parent: '',
      status: ''
    });
  }

  ngOnInit(): void {
  }

  filter(): void {
    console.log('Emitiendo filterData', this.formGroup.value);
    this.filterData.emit(this.formGroup.value);
  }
}
