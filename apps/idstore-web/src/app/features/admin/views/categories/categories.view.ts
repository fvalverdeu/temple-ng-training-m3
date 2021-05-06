import { CategoriesPresenter } from './categories.presenter';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAction } from '../../interfaces/action.interface';
import { EAction } from '../../interfaces/constants/action.enum';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.view.html',
  styleUrls: ['./categories.view.scss'],
  providers: [CategoriesPresenter]
})
export class CategoriesView implements OnInit {

  actionCreate: IAction = {name: EAction.CREATE, id: ''};

  constructor(
    public presenter: CategoriesPresenter,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.presenter.getCategories();
    this.presenter.getCategoryFilter();
  }

  action(event: IAction): void {
    switch (event.name) {
      case EAction.FIND:
        this.router.navigateByUrl(`/admin/category-detail/${event.id}`);
        break;
      case EAction.UPDATE:
        this.router.navigateByUrl(`/admin/category-update/${event.id}`);
        break;
      case EAction.CREATE:
        this.router.navigateByUrl('/admin/category-create');
        break;
      case EAction.DELETE:
        this.presenter.confirm(event.id);
        break;
      default:
        break;
    }
  }

}
