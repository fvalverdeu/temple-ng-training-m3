import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-product-confirm',
  templateUrl: './product-confirm.component.html',
  styleUrls: ['./product-confirm.component.scss']
})
export class ProductConfirmComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ProductConfirmComponent>) { }

  ngOnInit(): void {
  }

  delete(): void {
    this.dialogRef.close(false);
  }

  close(execute = false) {
    this.dialogRef.close(true);
  }

}
