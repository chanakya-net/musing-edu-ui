import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-new-hostel',
  templateUrl: './add-new-hostel.component.html',
  styleUrls: ['./add-new-hostel.component.scss'],
})
export class AddNewHostelComponent implements OnInit {
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
      address: [null],
      city: [null],
      pin: [null],
    });
  }
}
