import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ICategory } from '@idstore/commons/interfaces/category.interface';
import { ICategoryFormData } from '../../../interfaces/category-form-data.interface';
import { Category } from '../../../models/category.model';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {

  @Input() category: Category = new Category();
  @Input() mainCategories: ICategory[] = [];
  @Output() data: EventEmitter<ICategoryFormData> = new EventEmitter<ICategoryFormData>();

  formGroup: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.formGroup = this.fb.group({
      title: '',
      parent: '',
      path: '',
      status: 'ACTIVE'
    });
  }
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes.category)
    if (changes.category?.currentValue) {
      this.formGroup = this.fb.group({
        title: this.category.title,
        parent: this.category.parent,
        status: this.category.status
      });
    }
  }

  send(): void {
    console.log('emit')
    if(this.formGroup.valid) {
      this.data.emit(this.formGroup.value);
    }
  }

}
