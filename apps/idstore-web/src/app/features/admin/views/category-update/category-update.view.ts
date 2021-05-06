import { CategoryUpdatePresenter } from './category-update.presenter';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICategoryFormData } from '../../interfaces/category-form-data.interface';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.view.html',
  styleUrls: ['./category-update.view.scss'],
  providers: [CategoryUpdatePresenter]
})
export class CategoryUpdateView implements OnInit {

  id: string;
  constructor(
    public presenter: CategoryUpdatePresenter,
    private activatedRouter: ActivatedRoute
  ) {
    this.id = this.activatedRouter.snapshot.params.id;
  }

  ngOnInit(): void {
    this.presenter.getMainCategories();
    this.presenter.getCategory(this.id);
  }

  update(data: ICategoryFormData): void {
    this.presenter.update(this.id, data);
  }

}
