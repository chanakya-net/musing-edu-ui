import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupDisplayComponent } from './setup-display.component';

describe('SetupDisplayComponent', () => {
  let component: SetupDisplayComponent;
  let fixture: ComponentFixture<SetupDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
