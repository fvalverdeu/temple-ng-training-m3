import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMakerFormData } from '../../interfaces/maker-form-data';
import { MakerUpdatePresenter } from './maker-update.presenter';

@Component({
  selector: 'app-maker-update',
  templateUrl: './maker-update.view.html',
  styleUrls: ['./maker-update.view.scss'],
  providers: [MakerUpdatePresenter]
})
export class MakerUpdateView implements OnInit {

  id: string;
  constructor(
    public presenter: MakerUpdatePresenter,
    private activatedRouter: ActivatedRoute
  ) {
    this.id = this.activatedRouter.snapshot.params.id;
  }

  ngOnInit(): void {
    this.presenter.getMaker(this.id);
  }

  update(data: IMakerFormData): void {
    this.presenter.update(this.id, data);
  }

}
