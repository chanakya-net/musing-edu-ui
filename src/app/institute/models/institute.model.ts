import { AcceptedGender } from 'src/app/app-common/models/app.common.models';

export class Institute {
  id: number = null;
  name: string = null;
  address: string = null;
  city: string = null;
  pin: string = null;
  website: string = null;
  contactNumbers: string = null;
  mailId: string = null;
  establishedOn: string = null;
  allowedGender: AcceptedGender = null;
}

export interface Service {
  id: number;
  serviceName: string;
}

export interface Vendor {
  id: number;
  name: string;
  address: string;
  city: string;
  pin: string;
  contactNumbers: string;
  mailId: string;
  providedServices: Service[];
}
