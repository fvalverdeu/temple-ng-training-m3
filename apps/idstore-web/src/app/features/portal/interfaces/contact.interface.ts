export interface IContact {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface IDataContact {
  name: string;
  email: string;
  phone: string;
  position: string;
  schedule: string;
  address: IAddress;
}

export interface IAddress {
  description: string;
  lat: string;
  lng: string;
}
