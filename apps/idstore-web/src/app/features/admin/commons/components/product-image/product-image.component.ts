import { FormControl, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IdsUploadFileComponent } from '@idstore/commons/components/upload-file/upload-file.component';

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.scss']
})
export class ProductImageComponent implements OnInit {

  fileControl: FormControl;
  @Output() upload: EventEmitter<File> = new EventEmitter<File>();
  @Input() productImage: string = '';
  // @ViewChild('upload') item: IdsUploadFileComponent;

  constructor() {
    this.fileControl = new FormControl(null, Validators.required);
    this.fileControl.valueChanges.subscribe(response => console.log(response));
  }

  ngOnInit(): void {
  }

  send(): void {
    if (this.fileControl.valid) {
      this.upload.emit(this.fileControl.value);
    }
  }

}
