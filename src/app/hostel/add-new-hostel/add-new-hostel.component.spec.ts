import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewHostelComponent } from './add-new-hostel.component';

describe('AddNewHostelComponent', () => {
  let component: AddNewHostelComponent;
  let fixture: ComponentFixture<AddNewHostelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewHostelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewHostelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
