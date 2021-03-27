import { Component, OnInit } from '@angular/core';
import { HomePresenter } from './home.presenter';

@Component({
  selector: 'app-home',
  templateUrl: './home.view.html',
  styleUrls: ['./home.view.scss'],
  providers: [ HomePresenter ]
})
export class HomeView implements OnInit {

  constructor(public presenter: HomePresenter) { }

  ngOnInit(): void {
    this.presenter.getMainCategories();
  }

}
