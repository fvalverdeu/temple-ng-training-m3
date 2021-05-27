import { ISignUpFormData } from './../../interfaces/sign-up-form-data';
import { SignUpPresenter } from './sign-up.presenter';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.view.html',
  styleUrls: ['./sign-up.view.scss'],
  providers: [SignUpPresenter]
})
export class SignUpView implements OnInit {

  constructor(public presenter: SignUpPresenter) { }

  ngOnInit(): void {
  }

  signUp(data: ISignUpFormData): void {
    this.presenter.signUp(data);
  }

}
