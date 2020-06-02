import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-setup-hostel',
  templateUrl: './setup-hostel.component.html',
  styleUrls: ['./setup-hostel.component.scss'],
})
export class SetupHostelComponent implements OnInit {
  addHostelFromGroup: FormGroup;
  addBuildingFromGroup: FormGroup;
  addRoomFromGroup: FormGroup;
  addBedFromGroup: FormGroup;
  constructor() {}

  ngOnInit(): void {}

  onNotifyAddHotelForm(hostelFormGroup: FormGroup) {
    this.addHostelFromGroup = hostelFormGroup;
  }

  onNotifyAddBuildingForm(buildingFromGroup: FormGroup) {
    this.addBuildingFromGroup = buildingFromGroup;
  }

  onNotifyAddRoom(roomFormGroup: FormGroup) {
    this.addRoomFromGroup = roomFormGroup;
  }

  onNotifyAddBed(bedFromGroup: FormGroup) {
    this.addBedFromGroup = bedFromGroup;
  }
}
