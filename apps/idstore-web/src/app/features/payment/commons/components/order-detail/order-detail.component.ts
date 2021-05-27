import { ICartItem } from './../../../../../../../../../libs/idstore-commons/src/lib/interfaces/cart.interface';
import { IOrder, IOrderAmount, IOrderDetail } from './../../../interfaces/order.interface';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  formGroup: FormGroup;
  @Output() formData: EventEmitter<IOrderDetail> = new EventEmitter<IOrderDetail>();
  @Input() addressList = [
    {id: 1, value: 'Dirección 1'},
    {id: 2, value: 'Dirección 2'}
  ];

  constructor(private fb: FormBuilder) {

    this.formGroup = this.fb.group({
      documentType: '',
      document: '',
      fullName: '',
      email: '',
      phone: '',
      addressType: '',
      address: '',
      reference: '',
      contactName: '',
      contactPhone: '',
      deliveryDate: ''
    });
  }

  ngOnInit(): void {
  }

  send(): void {
    if (this.formGroup.value) {
      this.formData.emit(this.formGroup.value);
    }
  }

  // getOrder(): IOrder {
  //   const detail: IOrderDetail = this.formGroup.value;
  //   const amount: IOrderAmount =
  // }

}
