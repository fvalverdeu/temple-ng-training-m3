import { IProductFormData } from './../../../interfaces/product-form-data.interface';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ICategory } from '@idstore/commons/interfaces/category.interface';
import { IMaker } from '@idstore/commons/interfaces/maker.interface';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit, OnChanges {

  @Input() product: Product = new Product();
  @Input() categories: ICategory[] = [];
  @Input() makers: IMaker[] = [];
  @Output() data: EventEmitter<IProductFormData> = new EventEmitter<IProductFormData>();

  formGroup: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.formGroup = this.fb.group({
      sku: '',
      name: '',
      description: '',
      unit: '',
      expiration: '',
      model: '',
      quantity: '',
      price: '',
      category: '',
      maker: '',
      status: 'ACTIVE'
    });
  }
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes.product)
    if (changes.product?.currentValue) {
      this.formGroup = this.fb.group({
        sku: this.product.sku,
        name: this.product.name,
        description: this.product.description,
        unit: this.product.unit,
        expiration: this.product.expiration,
        model: this.product.model,
        quantity: this.product.quantity,
        price: this.product.price,
        category: this.product.category,
        maker: this.product.maker,
        status: this.product.status
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
