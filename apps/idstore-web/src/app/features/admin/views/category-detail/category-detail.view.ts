import { CategoryDetailPresenter } from './category-detail.presenter';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.view.html',
  styleUrls: ['./category-detail.view.scss'],
  providers: [CategoryDetailPresenter]
})
export class CategoryDetailView implements OnInit {

  id: string;

  constructor(
    public presenter: CategoryDetailPresenter,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {
    this.id = this.activatedRouter.snapshot.params.id;
  }

  ngOnInit(): void {
    this.presenter.getCategory(this.id);
  }

  goToEdit(): void {
    this.router.navigateByUrl(`/admin/category-update/${this.presenter.category.id}`);
  }

  goToTable(): void {
    this.router.navigateByUrl('/admin/categories');
  }

}
