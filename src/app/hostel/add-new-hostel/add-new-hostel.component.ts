import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-new-hostel',
  templateUrl: './add-new-hostel.component.html',
  styleUrls: ['./add-new-hostel.component.scss'],
})
export class AddNewHostelComponent implements OnInit, OnChanges {
  addHostelForm: FormGroup;
  @Output() addHostelFormOutput: EventEmitter<FormGroup> = new EventEmitter<
    FormGroup
  >();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createInputForm();
    this.addHostelFormOutput.emit(this.addHostelForm);
  }

  createInputForm() {
    console.log('creating form institute');
    this.addHostelForm = this.formBuilder.group({
      name: [null, Validators.required],
      address: [null, Validators.required],
      city: [null, Validators.required],
      pin: [null, Validators.required],
      state: [null, Validators.required],
      country: [null, Validators.required],
      contactNumber: [null, Validators.required],
      email: [null],
    });
  }

  ngOnChanges() {
    this.addHostelFormOutput.emit(this.addHostelForm);
  }
}
