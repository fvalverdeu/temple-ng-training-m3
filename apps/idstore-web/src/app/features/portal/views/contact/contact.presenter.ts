import { IContact, IDataContact } from './../../interfaces/contact.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class ContactPresenter {

  dataContact: IDataContact;
  sendData(event: IContact): void {
    console.log(event);
  }

  getDataContact(): void {
    this.dataContact = {
      name: 'Curtis Herzog',
      email: 'Eldora66@yahoo.com',
      phone: '1-384-668-7323 x89491',
      position: 'Lead Security Representative',
      address: {
        description: 'Anastasia Rapid 369 Senger Valleys',
        lat: '-12.0901118',
        lng: '-77.0700161'
      },
      schedule: '9:00 - 18:00'
    }
  }
}
