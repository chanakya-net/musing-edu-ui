import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-new-building',
  templateUrl: './add-new-building.component.html',
  styleUrls: ['./add-new-building.component.scss'],
})
export class AddNewBuildingComponent implements OnInit {
  buildingFromGroup: FormGroup;
  @Output() buildingFromOutPut: EventEmitter<FormGroup> = new EventEmitter<
    FormGroup
  >();

  constructor(private fromBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createBuildingForm();
    this.buildingFromOutPut.emit(this.buildingFromGroup);
  }

  createBuildingForm() {
    this.buildingFromGroup = this.fromBuilder.group({
      hostelName: [null],
      name: [null, Validators.required],
      address: [null, Validators.required],
      city: [null, Validators.required],
      pin: [null, Validators.required],
      state: [null, Validators.required],
      country: [null, Validators.required],
      contactNumber: [null, Validators.required],
      email: [null, Validators.required],
      genderAllowed: [null],
    });
  }
}
