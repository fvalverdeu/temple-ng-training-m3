import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IMaker } from '@idstore/commons/interfaces/maker.interface';
import { IMakerFormData } from '../../../interfaces/maker-form-data';
import { Maker } from '../../../models/maker.model';

@Component({
  selector: 'app-maker-form',
  templateUrl: './maker-form.component.html',
  styleUrls: ['./maker-form.component.scss']
})
export class MakerFormComponent implements OnInit {

  @Input() maker: Maker = new Maker();
  @Output() data: EventEmitter<IMakerFormData> = new EventEmitter<IMakerFormData>();

  formGroup: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.formGroup = this.fb.group({
      id: '',
      name: '',
      document: '',
      status: 'ACTIVE'
    });
  }
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes.maker)
    if (changes.maker?.currentValue) {
      this.formGroup = this.fb.group({
        name: this.maker.name,
        document: this.maker.document,
        status: this.maker.status
      });
    }
  }

  send(): void {
    console.log('emit')
    if(this.formGroup.valid) {
      this.data.emit(this.formGroup.value);
    }
  }

}
