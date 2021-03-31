import { Injectable } from '@angular/core';
import { ISignInFormData } from '../../interfaces/sign-in-form-data';
import { AuthHttp } from '../../commons/http/auth.http';
import { Router } from '@angular/router';

@Injectable()
export class SignInPresenter {

  constructor(
    private authHttp: AuthHttp,
    private router: Router
  ) { }

  signIn(data: ISignInFormData) {
    console.log(data);
    this.authHttp.signIn(data)
      .subscribe(
        ({ token }) => {
          console.log(token);
          // this.router.navigateByUrl('/admin');
        }
      );
  }
}
