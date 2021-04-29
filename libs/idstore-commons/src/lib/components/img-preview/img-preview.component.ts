import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ids-img-preview',
  templateUrl: './img-preview.component.html',
  styleUrls: ['./img-preview.component.scss']
})
export class IdsImgPreviewComponent implements OnInit, OnChanges {

  @Input() src: string | ArrayBuffer = '/assets/img/img-not-found.png';
  @Input() alt: '';
  @Input() file: File;

  constructor() { }

  ngOnInit(): void {
  }

  fileToBase64(file: File) {
    if (file.type.includes('image')) {
      const reader = new FileReader();
      reader.onload = (e) => { this.src = e.target.result; };
      reader.readAsDataURL(this.file);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.file?.currentValue) {
      this.fileToBase64(changes.file.currentValue);
    }
  }

}
