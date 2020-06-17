import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelDashBoardComponent } from './hostel-dash-board.component';

describe('HostelDashBoardComponent', () => {
  let component: HostelDashBoardComponent;
  let fixture: ComponentFixture<HostelDashBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HostelDashBoardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostelDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
