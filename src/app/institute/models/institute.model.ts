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
  isCoEd: boolean;
  allowedGender: AcceptedGender;
}
