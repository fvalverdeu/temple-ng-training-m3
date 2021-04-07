import { ISignInFormData } from './../../interfaces/sign-in-form-data';
import { Component, OnInit } from '@angular/core';
import { SignInPresenter } from './sign-in.presenter';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.view.html',
  styleUrls: ['./sign-in.view.scss'],
  providers: [SignInPresenter]
})
export class SignInView implements OnInit {

  constructor(public presenter: SignInPresenter) { }

  ngOnInit(): void {
  }

  signIn(data: ISignInFormData): void {
    this.presenter.signIn(data);
  }

}
