import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IMakerRequest } from '@idstore/commons/interfaces/maker.interface';

@Component({
  selector: 'app-maker-filter',
  templateUrl: './maker-filter.component.html',
  styleUrls: ['./maker-filter.component.scss']
})
export class MakerFilterComponent implements OnInit {

  @Output() filterData: EventEmitter<IMakerRequest> = new EventEmitter<IMakerRequest>();
  formGroup: FormGroup;
  constructor(
    private fb: FormBuilder
  ) {
    this.formGroup = this.fb.group({
      name: '',
      document: '',
      status: ''
    });
  }

  ngOnInit(): void {
  }

  filter(): void {
    console.log('Emitiendo filterData', this.formGroup.value);
    this.filterData.emit(this.formGroup.value);
  }

}
