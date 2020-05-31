import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-new-building',
  templateUrl: './add-new-building.component.html',
  styleUrls: ['./add-new-building.component.scss'],
})
export class AddNewBuildingComponent implements OnInit {
  buildingFromGroup: FormGroup;
  @Output() buildingFromOutPut: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  constructor(private fromBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createBuildingForm();
    this.buildingFromOutPut.emit(this.buildingFromGroup);
  }

  createBuildingForm() {
    this.buildingFromGroup = this.fromBuilder.group({
      address: [null],
      city: [null],
      pin: [null],
      contactNumbers: [null],
      mailId: [null],
      website: [null],
      allowedGender: [null],
    });
  }
}
