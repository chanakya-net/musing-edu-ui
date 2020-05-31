import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-setup-hostel',
  templateUrl: './setup-hostel.component.html',
  styleUrls: ['./setup-hostel.component.scss']
})
export class SetupHostelComponent implements OnInit {
  addHostelFormGroup: FormGroup;
  addBuildingFromGroup: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }


  onNotifyAddHotelForm(hostelFormGroup: FormGroup) {
    this.addHostelFormGroup = hostelFormGroup;
  }

  onNotifyAddBuildingForm(BuildingFromGroup: FormGroup) {
    this.addBuildingFromGroup = BuildingFromGroup;
  }

}
