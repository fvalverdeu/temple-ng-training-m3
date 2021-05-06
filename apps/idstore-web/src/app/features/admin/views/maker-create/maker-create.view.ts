import { Component, OnInit } from '@angular/core';
import { MakerCreatePresenter } from './maker-create.presenter';

@Component({
  selector: 'app-maker-create',
  templateUrl: './maker-create.view.html',
  styleUrls: ['./maker-create.view.scss'],
  providers: [MakerCreatePresenter]
})
export class MakerCreateView implements OnInit {

  constructor(public presenter: MakerCreatePresenter) { }

  ngOnInit(): void {
    this.presenter.getMakers();
  }

  ngOnDestroy(): void {
    this.presenter.subscription.unsubscribe();
  }

}
