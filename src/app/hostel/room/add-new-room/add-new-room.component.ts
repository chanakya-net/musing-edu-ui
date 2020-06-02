import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-new-room',
  templateUrl: './add-new-room.component.html',
  styleUrls: ['./add-new-room.component.scss'],
})
export class AddNewRoomComponent implements OnInit {
  addRoomFormGroup: FormGroup;
  @Output() addRoomFormOutput: EventEmitter<FormGroup> = new EventEmitter<
    FormGroup
  >();
  constructor(private fromBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createAddRoomForm();
    this.addRoomFormOutput.emit(this.addRoomFormGroup);
  }

  createAddRoomForm() {
    this.addRoomFormGroup = this.fromBuilder.group({});
  }
}
