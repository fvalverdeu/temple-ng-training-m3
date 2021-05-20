import { ContactPresenter } from './contact.presenter';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.view.html',
  styleUrls: ['./contact.view.scss'],
  providers: [ContactPresenter]

})
export class ContactView implements OnInit {

  options: google.maps.MapOptions;
  position = {
    lat: Number.parseFloat('-12.0901118'),
    lng: Number.parseFloat('-77.0700161')
  };
  title: string = 'ID STORE';

  constructor(public presenter: ContactPresenter) {

  }

  ngOnInit(): void {
    this.presenter.getDataContact();
    // this.position = {
    //   lat: Number.parseFloat(this.presenter.dataContact.address.lat),
    //   lng: Number.parseFloat(this.presenter.dataContact.address.lng)
    // };
    // this.title = 'ID STORE';
    this.options = {
      center: {
        lat: Number.parseFloat(this.presenter.dataContact.address.lat),
        lng: Number.parseFloat(this.presenter.dataContact.address.lng)
      },
      zoom: 18
    }
  }

}
