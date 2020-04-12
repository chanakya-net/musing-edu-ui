import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsertInstituteComponent } from './upsert-institute.component';

describe('UpsertInstituteComponent', () => {
  let component: UpsertInstituteComponent;
  let fixture: ComponentFixture<UpsertInstituteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpsertInstituteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpsertInstituteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
