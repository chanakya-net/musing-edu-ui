import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-new-bed',
  templateUrl: './add-new-bed.component.html',
  styleUrls: ['./add-new-bed.component.scss'],
})
export class AddNewBedComponent implements OnInit {
  addBedFormGroup: FormGroup;
  @Output() addBedFromOutput: EventEmitter<FormGroup> = new EventEmitter<
    FormGroup
  >();
  constructor(private fromBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createAddBedForm();
    this.addBedFromOutput.emit(this.addBedFormGroup);
  }

  createAddBedForm() {
    this.addBedFormGroup = this.fromBuilder.group({
      hostelName: [null, Validators.required],
      buildingName: [null, Validators.required],
      roomName: [null, Validators.required],
      bedName: [null, Validators.required],
    });
  }
}
