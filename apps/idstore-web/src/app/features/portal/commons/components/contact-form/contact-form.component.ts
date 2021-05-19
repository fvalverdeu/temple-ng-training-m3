import { IContact, IDataContact } from './../../../interfaces/contact.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  formGroup: FormGroup;
  @Output() dataForm: EventEmitter<IContact> = new EventEmitter<IContact>();
  @Input() dataContact: IDataContact;

  constructor(
    private fb: FormBuilder
  ) {
    this.formGroup = this.fb.group({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  }

  ngOnInit(): void {
  }

  send(): void {
    if (this.formGroup.valid) {
      this.dataForm.emit(this.formGroup.value)
    }
  }

}
