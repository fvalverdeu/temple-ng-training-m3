import { ISignUpFormData } from './../../../interfaces/sign-up-form-data';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {

  @Output() signUp: EventEmitter<ISignUpFormData> = new EventEmitter<ISignUpFormData>();
  formGroup: FormGroup;
  show = false;

  get nameField(): FormControl {
    return this.formGroup.get('name') as FormControl;
  }

  get emailField(): FormControl {
    return this.formGroup.get('email') as FormControl;
  }

  get passwordField(): FormControl {
    return this.formGroup.get('password') as FormControl;
  }

  get verifyPasswordField(): FormControl {
    return this.formGroup.get('verifyPassword') as FormControl;
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

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.formGroup = this.fb.group({
      name: [ '', [Validators.required] ],
      email: [ '', [Validators.required, Validators.email] ],
      password: [ '', Validators.required ],
      verifyPassword: [ '', [Validators.required] ],
    });
  }

  ngOnInit(): void {

  }

  send() {
    if (this.formGroup.valid) { this.signUp.emit(this.formGroup.value); }
  }


}
