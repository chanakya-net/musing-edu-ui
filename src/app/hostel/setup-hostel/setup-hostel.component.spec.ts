import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupHostelComponent } from './setup-hostel.component';

describe('SetupHostelComponent', () => {
  let component: SetupHostelComponent;
  let fixture: ComponentFixture<SetupHostelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupHostelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupHostelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
