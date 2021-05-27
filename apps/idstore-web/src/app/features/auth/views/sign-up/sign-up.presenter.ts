import { ISignUpFormData } from './../../interfaces/sign-up-form-data';
import { Injectable } from '@angular/core';
import { ISignInFormData } from '../../interfaces/sign-in-form-data';
import { AuthHttp } from '../../commons/http/auth.http';
import { Router } from '@angular/router';
import { IdsSessionService } from '@idstore/commons/services/session/session.service';

@Injectable()
export class SignUpPresenter {

  constructor(
    private authHttp: AuthHttp,
    private router: Router,
    private sessionService: IdsSessionService
  ) { }

  signUp(data: ISignUpFormData) {
    console.log(data);
    // this.authHttp.signIn(data)
    //   .subscribe(
    //     ({ token }) => {
    //       console.log(token);
    //       this.sessionService.token = token;
    //       this.router.navigateByUrl('/');
    //     }
    //   );
  }
}
