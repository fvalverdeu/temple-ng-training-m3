import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MakerDetailPresenter } from './maker-detail.presenter';

@Component({
  selector: 'app-maker-detail',
  templateUrl: './maker-detail.view.html',
  styleUrls: ['./maker-detail.view.scss'],
  providers: [MakerDetailPresenter]
})
export class MakerDetailView implements OnInit {

  id: string;

  constructor(
    public presenter: MakerDetailPresenter,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {
    this.id = this.activatedRouter.snapshot.params.id;
  }

  ngOnInit(): void {
    this.presenter.getMaker(this.id);
  }

  goToEdit(): void {
    this.router.navigateByUrl(`/admin/maker-update/${this.presenter.maker.id}`);
  }

  goToTable(): void {
    this.router.navigateByUrl('/admin/makers');
  }

}
