import { AcceptedGender } from 'src/app/app-common/models/app.common.models';

export interface Institute {
  id: number;
  name: string;
  address: string;
  city: string;
  pin: string;
  website: string;
  contactNumbers: string;
  mailId: string;
  establishedOn: string;
  allowedGender: AcceptedGender;
}

export interface Service {
  id: number;
  serviceName: string;
}
