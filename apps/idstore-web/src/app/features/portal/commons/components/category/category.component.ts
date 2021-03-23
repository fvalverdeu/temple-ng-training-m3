import { Category } from './../../../models/category.model';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {

  @Input()category: Category;

  constructor(
    private router: Router
  ) {
    this.category = new Category();
  }

  goToProducts(): void {
    this.router.navigateByUrl(`/product/${this.category.id}`);
  }
}
