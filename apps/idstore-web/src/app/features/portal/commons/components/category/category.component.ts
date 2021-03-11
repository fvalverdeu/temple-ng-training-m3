import { Category } from './../../../models/category.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {

  @Input()category: Category;

  constructor() {
    this.category = new Category();
  }
}
