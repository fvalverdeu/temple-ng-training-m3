import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ids-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => IdsUploadFileComponent),
      multi: true
    }
  ]
})
export class IdsUploadFileComponent implements OnInit {

  // value: File = new File([], '');
  value: File = null;
  @Input() accept = '';
  isDisabled: boolean;
  onChange = (_: any) => {};
  onTouch = () => { };


  get name() {
    return this.value ? this.value.name : 'No se ha seleccionado ningún archivo.';
  }

  constructor() { }

  ngOnInit(): void {
  }

  uploadFile(event: any): void {
    console.log('upload file', event);
    if (event.target.files.length) {
      this.onInput(event.target.files[0]);
    }
  }

  onInput(value: File) {
    this.value = value;
    this.onTouch();
    this.onChange(this.value);
   }

   writeValue(value: File): void {
    this.value = value;
   }

   registerOnChange(fn: any): void {
    this.onChange = fn;
   }

   registerOnTouched(fn: any): void {
    this.onTouch = fn;
   }

   setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
   }

}
