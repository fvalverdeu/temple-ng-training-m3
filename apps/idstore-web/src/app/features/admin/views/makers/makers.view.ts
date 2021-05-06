import { MakersPresenter } from './makers.presenter';
import { Component, OnInit } from '@angular/core';
import { IAction } from '../../interfaces/action.interface';
import { EAction } from '../../interfaces/constants/action.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-makers',
  templateUrl: './makers.view.html',
  styleUrls: ['./makers.view.scss'],
  providers: [MakersPresenter]
})
export class MakersView implements OnInit {

  actionCreate: IAction = {name: EAction.CREATE, id: ''};

  constructor(
    public presenter: MakersPresenter,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.presenter.getMakers();
    this.presenter.getMakerFilter();
  }

  action(event: IAction): void {
    switch (event.name) {
      case EAction.FIND:
        this.router.navigateByUrl(`/admin/maker-detail/${event.id}`);
        break;
      case EAction.UPDATE:
        this.router.navigateByUrl(`/admin/maker-update/${event.id}`);
        break;
      case EAction.CREATE:
        this.router.navigateByUrl('/admin/maker-create');
        break;
      case EAction.DELETE:
        this.presenter.confirm(event.id);
        break;
      default:
        break;
    }
  }

}
