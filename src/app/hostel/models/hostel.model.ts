import { ChargeType, AcceptedGender } from 'src/app/app-common/models/app.common.models';

export interface Bed {
  id: number;
  roomId: number;
  bedName: string;
  charge: number;
  isOccupied: boolean;
  isOccupantStaff: boolean;
  chargeOccurrencePeriodType: ChargeType;
  chargeOccurrencePeriod: number;
}

export interface Room {
  id: number;
  floorId: number;
  roomName: string;
  numberOfBeds: number;
  hasEmptyBeds: boolean;
  bedCollection: Bed[];
}

export interface Floor {
  id: number;
  buildingId: number;
  floorName: string;
  hasEmptyRooms: boolean;
  roomCollection: Room[];
}

export interface Building {
  id: number;
  hostelSetupId: number;
  buildingName: string;
  floorCollection: Floor[];
}

export interface HostelSetup {
  id: number;
  allowedGender: AcceptedGender;
  name: string;
  address: string;
  city: string;
  pin: string;
  state: string;
  country: string;
  contactNumber: string;
  mailId: string;
  buildingCollection: Building[];
  hostelAndWarden: HostelAndWardenRelations[];
}

export interface Warden {
  id: number;
  name: string;
  address: string;
  city: string;
  pin: string;
  contactNumber: string;
  mailId: string;
  startDate: string;
  endDate: string;
  currentStatus: boolean;
  wardenAndHostelRelations: HostelAndWardenRelations[];
}

export interface HostelAndWardenRelations {
  id: number;
  hostelSetupId: number;
  wardenId: number;
  wardenAssignedStartDate: string;
  wardenAssignedEndDate: string;
}
