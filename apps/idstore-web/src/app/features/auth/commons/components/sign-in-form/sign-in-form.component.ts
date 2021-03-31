import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ISignInFormData } from '../../../interfaces/sign-in-form-data';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {

  @Output() signIn: EventEmitter<ISignInFormData> = new EventEmitter<ISignInFormData>();
  formGroup: FormGroup;
  show = false;

  get emailField(): FormControl {
    return this.formGroup.get('email') as FormControl;
  }

  get passwordField(): FormControl {
    return this.formGroup.get('password') as FormControl;
  }

  get emailError(): string | null {
    if (this.emailField.hasError('required')) {
      return 'El email es requerido';
    } else if (this.emailField.hasError('email')) {
      return 'El email no tiene el formato correcto';
    }
    return null;
  }

  get passwordError(): string  | null{
    if (this.passwordField.hasError('required')) {
      return 'El password es requerido';
    }
    return null;
  }

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      email: [ '', [Validators.required, Validators.email] ],
      password: [ '', Validators.required ]
    });
  }

  ngOnInit(): void {

  }

  send() {
    if (this.formGroup.valid) { this.signIn.emit(this.formGroup.value); }
  }

}
