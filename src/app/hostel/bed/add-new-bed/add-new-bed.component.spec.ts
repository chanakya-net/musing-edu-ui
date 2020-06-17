import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewBedComponent } from './add-new-bed.component';

describe('AddNewBedComponent', () => {
  let component: AddNewBedComponent;
  let fixture: ComponentFixture<AddNewBedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewBedComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewBedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
